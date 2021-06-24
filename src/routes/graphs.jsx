import React from "react";
import _ from "lodash";
import NavBar from "../components/navbar";
import { useState, useEffect } from "react";
import GraphButtons from "./graphButtons";
import VerticalBar from "../components/graphn";
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
Date.prototype.getWeek = function () {
  var onejan = new Date(this.getFullYear(), 0, 1);
  var today = new Date(this.getFullYear(), this.getMonth(), this.getDate());
  var dayOfYear = (today - onejan + 86400000) / 86400000;
  return Math.ceil(dayOfYear / 7);
};
const Graphs = (props) => {
  const [type, setType] = useState("day");
  const [date, setDate] = useState(new Date());
  const [xaxis, setXaxis] = useState([]);
  const [yaxis, setYaxis] = useState([]);
  const [graphExists, setGraphExists] = useState(false);
  const monthArray = _.range(1, daysInMonth(date) + 1 || 32);
  useEffect(() => {
    setXaxis(calcXaxis());
    setYaxis(calcYaxis());
  }, []);
  useEffect(() => {
    setXaxis(calcXaxis());
    setYaxis(calcYaxis());
    console.log(xaxis, yaxis);
  }, [date, type]);
  const calcXaxis = () => {
    if (["day", "dailyAvg"].includes(type)) return dayArray;
    if (type === ("week" || "weeklyAvg")) return weekArray;
    if (type === ("month" || "monthlyAvg")) return monthArray;
    return [];
  };
  const calcYaxis = () => {
    const dietArray = props.data && props.data.diet;
    if (!dietArray) return [];
    switch (type) {
      case "day":
        var foundDiet = dietArray.find(
          (diet) =>
            new Date(diet.date).toISOString().substr(0, 10) ==
            new Date(date).toISOString().substr(0, 10)
        );
        if (!foundDiet) {
          return [];
        }
        var foundyvalues = [];
        for (var key in foundDiet.diet) {
          //   console.log(key);
          foundyvalues.push(
            foundDiet.diet &&
              foundDiet.diet[key] &&
              foundDiet.diet[key].calories
          );
        }
        // console.log(foundDiet, foundyvalues);
        return foundyvalues;
        break;
      case "dailyAvg":
        foundDiet = dietArray;
        if (!foundDiet) {
          return [];
        }
        var len = xaxis.length;
        foundyvalues = new Array(len);
        foundyvalues.fill(0, 0, len);
        // console.log(foundyvalues);
        foundDiet = foundDiet.map((diet) => diet.diet);
        for (var diet in foundDiet) {
          for (var key = 0; key < len; key++) {
            foundyvalues[key] +=
              foundDiet[diet][xaxis[key]].calories / foundDiet.length;
            // console.log(foundyvalues[key]);
          }
        }
        // console.log(foundDiet, foundyvalues);

        return foundyvalues;
        break;
      case "week":
        const foundDiets = dietArray.filter(
          (diet) => new Date(date).getWeek() === new Date(diet.date).getWeek()
        );
        const currentWeek = new Date(date).getWeek();
        console.log(foundDiets);
        foundyvalues = new Array(7);
        foundyvalues.fill(0);
        for (diet in foundDiets) {
          console.log(diet);
          var day = new Date(foundDiets[diet].date).getDay();
          for (var meal in foundDiets[diet].diet) {
            console.log(meal);
            foundyvalues[day] += foundDiets[diet].diet[meal].calories;
          }
        }
        return foundyvalues;
        break;
      default:
        break;
    }
  };
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
      <VerticalBar xaxis={xaxis} yaxis={yaxis} />
    </>
  );
};

export default Graphs;
