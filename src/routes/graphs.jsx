import React from "react";
import _ from "lodash";
// import Graph from "../components/graph";
import NavBar from "../components/navbar";
import { useState, useEffect } from "react";
import GraphButtons from "./graphButtons";
import { VerticalAlignBottom } from "@material-ui/icons";
import VerticalBar from "../components/graphn";
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
const Graphs = (props) => {
  const [type, setType] = useState("day");
  const [date, setDate] = useState(new Date());
  const [xaxis, setXaxis] = useState([]);
  const [yaxis, setYaxis] = useState([]);
  const [graphExists, setGraphExists] = useState(false);
  const monthArray = _.range(1, daysInMonth(date) + 1 || 32);
  useEffect(() => {
    let xaxis = calcXaxis();
    let yaxis = calcYaxis();
    setXaxis(xaxis);
    setYaxis(yaxis);
  }, []);
  useEffect(() => {
    let xaxis = calcXaxis();
    let yaxis = calcYaxis();
    setXaxis(xaxis);
    setYaxis(yaxis);
  }, [date, type]);
  const calcXaxis = () => {
    if (type === ("day" || "dailyAvg")) return dayArray;
    if (type === ("week" || "weeklyAvg")) return weekArray;
    if (type === ("month" || "monthlyAvg")) return monthArray;
    return [];
  };
  const calcYaxis = () => {};
  const onTypeChange = ({ currentTarget: { id } }) => {
    setType(id);
    let xaxis = calcXaxis();
    let yaxis = calcYaxis();
    setXaxis(xaxis);
    setYaxis(yaxis);
  };
  const handleDateChange = ({ currentTarget: { value } }) =>
    setDate(new Date(value));

  return (
    <>
      <NavBar
        onChange={props.changeTheme}
        theme={props.theme}
        data={props.data}
      />
      <GraphButtons
        type={type}
        onTypeChange={onTypeChange}
        handleDateChange={handleDateChange}
      />
      <VerticalBar />
      {/* {<Graph array={calcXaxis()} data={formData(xaxis, yaxis)} />} */}
    </>
  );
};

export default Graphs;
