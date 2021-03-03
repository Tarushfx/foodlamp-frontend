import React from "react";
import Input from "./input";

const ProfileSettings = (props) => {
  const fields = ["name", "newEmail", "oldPassword", "newPassword"];

  return (
    <>
      <div
        class="modal fade"
        id="profileSettingsForm"
        tabIndex="-1"
        role="dialog"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
                Profile
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form
                className="text-left"
                style={{ color: "#757575" }}
                onSubmit={props.onSubmit}
              >
                {fields.map((item) => (
                  <Input
                    name={item}
                    type={item}
                    label={item}
                    onChange={props.handleChange}
                    placeholderText={
                      (!(item in fields.slice(2)) && props.data[item]) || ""
                    }
                  />
                ))}

                <button
                  className="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileSettings;
