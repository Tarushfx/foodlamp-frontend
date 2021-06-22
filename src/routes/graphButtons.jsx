import React from "react";
const GraphButtons = (props) => {
  return (
    <div className="row w-100 m-0">
      <div className="col col-sm-0 col-md-3 p-0"></div>
      <div className="col col-sm-0 col-md-5 p-0">
        <div>
          <button
            className="btn btn-priamry"
            id="day"
            onClick={props.onTypeChange}
          >
            day
          </button>
          <button
            className="btn btn-priamry"
            id="week"
            onClick={props.onTypeChange}
          >
            week
          </button>
          <button
            className="btn btn-priamry"
            id="month"
            onClick={props.onTypeChange}
          >
            month
          </button>
        </div>
        <div>
          <button
            className="btn btn-priamry"
            id="dailyAvg"
            onClick={props.onTypeChange}
          >
            daily avg
          </button>
          <button
            className="btn btn-priamry "
            id="weelyAvg"
            onClick={props.onTypeChange}
          >
            weekly avg
          </button>
          <button
            className="btn btn-priamry"
            id="monthlyAvg"
            onClick={props.onTypeChange}
          >
            monthly avg
          </button>
        </div>
        {props.type.slice(-3) !== "Avg" && (
          <input type="date" id="graphDate" onChange={props.handleDateChange} />
        )}
      </div>
      <div className="col col-sm-0 col-md-4 p-0"></div>
    </div>
  );
};

export default GraphButtons;
