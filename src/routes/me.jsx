import React from "react";
import { useState } from "react";
import { useParams } from "react-router";
import NavBar from "../components/navbar";
import ProfileSettings from "../components/profileSettings";
import { saveProfile } from "../services/profileSevices";

const Me = (props) => {
  const profileFormState = {
    name: "",
    newEmail: "",
    newPassword: "",
    oldPassword: "",
  };
  const [profileForm, setProfileForm] = useState(profileFormState);
  const onSubmit = async (e) => {
    e.preventDefault();
    await doSubmit();
    await props.loadData();
    //closing modal
    document.getElementById("profileSettingsForm").click();
    //clearing form
    setProfileForm(profileFormState);
  };
  const doSubmit = async () => {
    console.log("submitting");
    let finalObject = { ...profileForm };
    // if()
    try {
      await saveProfile(finalObject);
    } catch (ex) {
      console.log(ex.message);
    }
  };
  const handleChange = ({ currentTarget: { value, id } }) => {
    let profile = { ...profileForm };
    profile[id.slice(0, -4)] = value;
    setProfileForm(profile);
  };
  return (
    <>
      <NavBar
        onChange={props.changeTheme}
        theme={props.theme}
        data={props.data}
      />

      <div className="row w-100 m-0">
        <div className="col col-sm-0 col-md-3 p-0"></div>
        <div className="col col-sm-0 col-md-5 p-0">
          <div className="user-details">
            <div>{props.data.name}</div>
            <div>{props.data.email}</div>
            <div>{props.data.theme}</div>
          </div>
          <button
            type="button"
            class="btn active"
            data-toggle="modal"
            data-target="#profileSettingsForm"
            style={{
              backgroundColor: props.theme.secondary,
              borderRadius: 0,
              color: props.theme.text,
              flexGrow: 1,
            }}
          >
            Profile
          </button>
        </div>
        <div className="col col-sm-0 col-md-4 p-0"></div>
      </div>
      <ProfileSettings
        theme={props.theme}
        data={props.data}
        onSubmit={onSubmit}
        handleChange={handleChange}
      />
    </>
  );
};

export default Me;
