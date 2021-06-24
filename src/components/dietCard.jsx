import React from "react";

const DietCard = (props) => {
  return (
    <>
      <div className="row w-100 m-0">
        <button
          className="btn btn-primary"
          id="prevDiet"
          onClick={props.dietChange}
        >
          Prev Diet
        </button>
        <button
          className="btn btn-primary"
          id="nextDiet"
          onClick={props.dietChange}
        >
          Next Diet
        </button>
        <button
          type="button"
          class="btn btn-primary"
          data-toggle="modal"
          data-target="#dietForm"
          id="dietFormButton"
        >
          Diet Form
        </button>
      </div>
      {props.graphExists && props.graphExists == true && (
        <>
          <div className="row w-100 m-0 diet-date">
            <span className="pl-2">{props.diet.date}</span>
          </div>
          <div className="row w-100 m-0">
            <div className="pl-2">
              Overview:
              <br />
              <div className="pl-2 row w-100 m-0">
                Total Meals:
                {
                  props.dietTimings.filter(
                    (timing) =>
                      props.diet &&
                      props.diet.diet &&
                      props.diet.diet[timing] &&
                      props.diet.diet[timing].name !== ""
                  ).length
                }
                <br />
                Total Calories:
                {props.dietTimings
                  .map((timing) => {
                    return parseInt(
                      props.diet &&
                        props.diet.diet &&
                        props.diet.diet[timing] &&
                        props.diet.diet[timing].calories
                    );
                  })
                  .reduce((a, b) => a + b, 0)}
                <br />
              </div>
            </div>
            <div className="pl-2 row w-100 m-0">
              Meals:
              {props.dietTimings.map((item) => (
                <div className="pl-2 row w-100 m-0">
                  {item}:
                  {(props.diet &&
                    props.diet.diet &&
                    props.diet.diet[item].name) ||
                    "N/A"}
                  :
                  {(props.diet &&
                    props.diet.diet &&
                    props.diet.diet[item].calories) ||
                    0}
                  <br />
                </div>
              ))}
            </div>
          </div>
          {props.graph}
        </>
      )}
      {!props.graphExists && props.graphExists == false && (
        <div>Create a graph for today!!!</div>
      )}
    </>
  );
};

export default DietCard;
