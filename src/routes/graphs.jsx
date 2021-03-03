import React from "react";
import _ from "lodash";
import Graph from "../components/graph";
import NavBar from "../components/navbar";
import { useState } from "react";
import { useEffect } from "react";
export function formData(xaxis, yaxis) {
  if (xaxis && yaxis)
    return _.range(0, xaxis.length).map((item) =>
      Object({ a: item, b: yaxis[item] || 0 })
    );
}
function daysInMonth(date) {
  date = new Date(date);
  return new Date(date.getFullYear(), date.getMonth(), 0).getDate();
}
const Graphs = (props) => {
  const [type, setType] = useState("day");
  const [date, setDate] = useState(new Date());
  const [xaxis, setXaxis] = useState([]);
  const [yaxis, setYaxis] = useState([]);
  useEffect(() => {
    setType("day");
    let xaxis = calcXaxis();
    let yaxis = calcYaxis();
    // console.log(xaxis, yaxis);
    setXaxis(xaxis);
    setYaxis(yaxis);
  }, []);
  useEffect(() => {
    let xaxis = calcXaxis();
    let yaxis = calcYaxis();
    // console.log(xaxis, yaxis);
    setXaxis(xaxis);
    setYaxis(yaxis);
  }, [date, type]);
  const calcXaxis = () => {
    if (type === "day" || "dailyAvg") return dayArray;
    if (type === "week" || "weeklyAvg") return weekArray;
    if (type === "month" || "monthlyAvg") return monthArray;
    return [];
  };
  const calcYaxis = () => {
    let xaxis = calcXaxis();
    const arrAvg = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length || 0;
    let dietArray = props.data && props.data.diet;
    console.log(("dietArray", dietArray));
    if (dietArray)
      return xaxis.map((item, index) => {
        if (type == "day") {
          let temp = dietArray.find(
            (diet) => new Date(diet.date).getTime() == new Date(date).getTime()
          );
          //   console.log(temp, date);
          return (
            temp &&
            temp.diet &&
            temp.diet[xaxis[index]] &&
            temp.diet[xaxis[index]].calories
          );
        }
        if (type == "dailyAvg") {
          let filter = dietArray;
          let sum = 0;
          filter = filter.forEach((temp) => {
            sum += temp.diet[item].calories;
          });
          return sum / dietArray.length;
        }
      });
    else return [];
  };
  const onTypeChange = ({ currentTarget: { id } }) => {
    setType(id);
    let xaxis = calcXaxis();
    let yaxis = calcYaxis();
    // console.log(xaxis, yaxis);
    setXaxis(xaxis);
    setYaxis(yaxis);
  };
  const handleDateChange = ({ currentTarget: { value } }) => {
    // console.log("hello");
    setDate(new Date(value));
    // console.log(date, value, new Date(value));
  };
  const weekArray = [
    "monday",
    "tuesday",
    "wednesdsay",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];
  const dayArray = [
    "earlyMorning",
    "midMorning",
    "breakfast",
    "lunch",
    "evening",
    "dinner",
    "postDinner",
  ];

  const monthArray = _.range(1, daysInMonth(date) + 1 || 32);
  const data = formData(xaxis, yaxis);

  console.log(data);
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
          <div>
            <button className="btn btn-priamry" id="day" onClick={onTypeChange}>
              day
            </button>
            {/* <button
              className="btn btn-priamry"
              id="week"
              onClick={onTypeChange}
            >
              week
            </button>
            <button
              className="btn btn-priamry"
              id="month"
              onClick={onTypeChange}
            >
              month
            </button> */}
          </div>
          <div>
            <button
              className="btn btn-priamry"
              id="dailyAvg"
              onClick={onTypeChange}
            >
              daily avg
            </button>
            {/* <button
              className="btn btn-priamry "
              id="weelyAvg"
              onClick={onTypeChange}
            >
              weekly avg
            </button>
            <button
              className="btn btn-priamry"
              id="monthlyAvg"
              onClick={onTypeChange}
            >
              monthly avg
            </button> */}
          </div>
          {type.slice(-3) !== "Avg" && (
            <input type="date" id="graphDate" onChange={handleDateChange} />
          )}
        </div>
        <div className="col col-sm-0 col-md-4 p-0"></div>
      </div>

      {document.getElementById("graphDate") &&
        document.getElementById("graphDate").value != "" && (
          <Graph array={calcXaxis()} data={data} />
        )}
    </>
  );
};

export default Graphs;
