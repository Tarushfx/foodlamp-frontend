import React from "react";
import Input from "../components/input.jsx";
const DietForm = (props) => {
  const dietTimings = [
    "earlyMorning",
    "midMorning",
    "breakfast",
    "lunch",
    "evening",
    "dinner",
    "postDinner",
  ];
  return (
    <div class="modal fade" id="dietForm" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Diet Form</h5>
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
              <Input
                name="date"
                type="date"
                label="Date"
                onChange={props.handleChange}
              />
              {dietTimings.map((time) => (
                <>
                  <Input
                    name={time}
                    type={time}
                    label={time}
                    onChange={props.handleChange}
                    placeholder="Dish Name"
                  />
                  <Input
                    name={`${time}-calories`}
                    type={`${time}-calories`}
                    label={`${time}-calories`}
                    onChange={props.handleChange}
                    placeholder="Calories"
                  />
                </>
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
  );
};

export default DietForm;
