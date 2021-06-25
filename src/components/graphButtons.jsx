import React from "react";
import "../css/dietCard.css";
import "../css/graph.css";
const GraphButtons = (props) => {
  return (
    <>
      <div className="changeGraphButtons">
        <div className="graphButtonSet">
          <span id="selectADate">Select a date!!!</span>
          {
            <input
              type="date"
              id="graphDate"
              onChange={props.handleDateChange}
            />
          }
          <button className="draw meet" id="day" onClick={props.onTypeChange}>
            day
          </button>
          <button className="draw meet" id="week" onClick={props.onTypeChange}>
            week
          </button>
          <button className="draw meet" id="month" onClick={props.onTypeChange}>
            month
          </button>
          {/* </div>
        <div className="graphButtonSet"> */}
          <button
            className="draw meet"
            id="dailyAvg"
            onClick={props.onTypeChange}
          >
            daily avg
          </button>
          <button
            className="draw meet"
            id="weeklyAvg"
            onClick={props.onTypeChange}
          >
            weekly avg
          </button>
          <button
            className="draw meet"
            id="monthlyAvg"
            onClick={props.onTypeChange}
          >
            monthly avg
          </button>
        </div>
      </div>
    </>
  );
};

export default GraphButtons;
