import React from "react";
import "../css/dietCard.css";
const DietCard = (props) => {
  return (
    <>
      <div className="row w-100 m-0" style={{ justifyContent: "space-around" }}>
        <button className="draw meet" id="prevDiet" onClick={props.dietChange}>
          Prev Diet
        </button>
        <button className="draw meet" id="nextDiet" onClick={props.dietChange}>
          Next Diet
        </button>
        <button
          type="button"
          class="draw meet"
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
            <div class="b-diet-data">
              <div class="b-diet-data__title">Diet Information</div>
              <div class="b-diet-data__body">
                <div class="b-diet-data-panel b-diet-data__panel">
                  <div class="b-diet-data-panel__title">Overview</div>
                  <div class="b-diet-data-panel__body">
                    <table class="b-diet-data-panel__table b-dashed-line-table">
                      <tr class="b-dashed-line-table__row">
                        <td class="b-dashed-line-table__key">Date</td>
                        <td class="b-dashed-line-table__val">
                          {props.diet.date}
                        </td>
                      </tr>
                      <tr class="b-dashed-line-table__row">
                        <td class="b-dashed-line-table__key">Total Meals</td>
                        <td class="b-dashed-line-table__val">
                          {
                            props.dietTimings.filter(
                              (timing) =>
                                props.diet &&
                                props.diet.diet &&
                                props.diet.diet[timing] &&
                                props.diet.diet[timing].name !== ""
                            ).length
                          }
                        </td>
                      </tr>
                      <tr class="b-dashed-line-table__row">
                        <td class="b-dashed-line-table__key">Total Calories</td>
                        <td class="b-dashed-line-table__val">
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
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
              <div class="b-diet-data__body">
                <div class="b-diet-data-panel b-diet-data__panel">
                  <div class="b-diet-data-panel__title">Meals</div>

                  <div class="b-diet-data-panel__body">
                    <table class="b-diet-data-panel__table b-dashed-line-table">
                      <tr class="b-dashed-line-table__row">
                        <td class="b-dashed-line-table__val">Time</td>
                        <td class="b-dashed-line-table__val">Name</td>
                        <td class="b-dashed-line-table__val">Calories</td>
                      </tr>
                      {props.dietTimings.map((item) => (
                        <tr class="b-dashed-line-table__row">
                          <td class="b-dashed-line-table__key">{item}</td>
                          <td class="b-dashed-line-table__val">
                            {(props.diet &&
                              props.diet.diet &&
                              props.diet.diet[item].name) ||
                              "N/A"}
                          </td>
                          <td class="b-dashed-line-table__val">
                            {(props.diet &&
                              props.diet.diet &&
                              props.diet.diet[item].calories) ||
                              0}
                          </td>
                        </tr>
                      ))}
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                width: "50%",
                display: "grid",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              {props.graph}
            </div>
          </div>
        </>
      )}
      {!props.graphExists && props.graphExists == false && (
        <div class="b-diet-data w-100">
          <div class="b-diet-data__title">Create a graph for today!!!</div>
        </div>
      )}
    </>
  );
};

export default DietCard;
