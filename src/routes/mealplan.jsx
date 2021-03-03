import React from "react";
import NavBar from "../components/navbar";
import _ from "lodash";
import DietForm from "../modals/dietForm";
import { useState } from "react";
import { saveDiet } from "../services/profileSevices";
import DietCard from "../components/dietCard";
import { useEffect } from "react";

const MealPlan = (props) => {
  const initialStateTemplate = {
    date: "",
    earlyMorning: { name: "", calories: 0 },
    midMorning: { name: "", calories: 0 },
    breakfast: { name: "", calories: 0 },
    lunch: { name: "", calories: 0 },
    evening: { name: "", calories: 0 },
    dinner: { name: "", calories: 0 },
    postDinner: { name: "", calories: 0 },
  };
  const [dietForm, setDietForm] = useState(initialStateTemplate);

  const [dietNumber, setDietNumber] = useState(0);
  const [dietArray, setDietArray] = useState([]);
  useEffect(() => {
    const getDietArray = () => {
      setDietNumber(
        (props.data &&
          props.data.diet &&
          props.data.diet.indexOf(
            props.data.diet.find(
              (item) => new Date(item.date).getTime() >= new Date().getTime()
            )
          )) ||
          0
      );
      setDietArray(props.data && props.data.diet);
    };
    getDietArray();
  }, [props]);
  const dietTimings = [
    "earlyMorning",
    "midMorning",
    "breakfast",
    "lunch",
    "evening",
    "dinner",
    "postDinner",
  ];
  const handleChange = (e) => {
    let { id, value } = e.currentTarget;
    let diet = { ...dietForm };
    let temp = id.slice(0, -4);
    if (temp !== "date") {
      if (temp.slice(-9) === "-calories") {
        diet[temp.slice(0, -9)].calories = parseInt(value);
      } else diet[temp].name = value;
    } else diet[temp] = value;
    setDietForm(diet);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    await doSubmit();
    await props.loadData();
    //closing modal
    document.getElementById("dietFormButton").click();
    //updating State
    setDietArray(props.diet && props.data.diet);
    //clearing form
    setDietForm(initialStateTemplate);
  };
  const doSubmit = async () => {
    console.log("submitting");
    let finalObject = {
      date: dietForm.date,
      diet: _.pick(dietForm, dietTimings),
    };
    try {
      await saveDiet(finalObject);
    } catch (ex) {
      console.log(ex.message);
    }
  };
  const dietChange = (e) => {
    let { id } = e.currentTarget;
    let length = (props.data && props.data.diet && props.data.diet.length) || 1;

    setDietNumber(
      (dietNumber + (id === "nextDiet") - (id === "prevDiet") + length) % length
    );
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
          <DietCard
            dietNumber={dietNumber}
            dietChange={dietChange}
            theme={props.theme}
            diet={
              (props.data && props.data.diet && props.data.diet[dietNumber]) ||
              {}
            }
            dietTimings={dietTimings}
          />
        </div>
        <div className="col col-sm-0 col-md-4 p-0"></div>
      </div>

      <DietForm handleChange={handleChange} onSubmit={onSubmit} />
    </>
  );
};

export default MealPlan;
