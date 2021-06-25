import React from "react";
import _ from "lodash";
import NavBar from "../components/navbar";
import { useState, useEffect } from "react";
import GraphButtons from "../components/graphButtons";
import VerticalBar from "../components/graphn";
import "../css/graph.css";
function daysInMonth(anyDateInMonth) {
  return new Date(
    anyDateInMonth.getFullYear(),
    anyDateInMonth.getMonth() + 1,
    0
  ).getDate();
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
const yearArray = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
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
  //   const monthArray = _.range(1, daysInMonth(date) + 1 || 32);
  const monthArray = Array.from({ length: daysInMonth(date) }, (_, i) => i + 1);

  useEffect(() => {
    setXaxis(calcXaxis());
    setYaxis(calcYaxis());
  }, []);
  useEffect(() => {
    console.log(type);
    setXaxis(calcXaxis());
    setYaxis(calcYaxis());
    console.log(xaxis, yaxis);
  }, [date, type]);
  const calcXaxis = () => {
    if (["day", "dailyAvg"].includes(type)) return dayArray;
    if (["week", "weeklyAvg"].includes(type)) return weekArray;
    if (["month"].includes(type)) return monthArray;
    if (["monthlyAvg"].includes(type)) return yearArray;
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
        var len = dayArray.length;
        foundyvalues = new Array(len);
        foundyvalues.fill(0);
        // console.log(foundyvalues);

        for (var diet in foundDiet) {
          for (var key = 0; key < len; key++) {
            foundyvalues[key] +=
              foundDiet[diet].diet[dayArray[key]].calories / foundDiet.length;
            // console.log(foundyvalues[key]);
          }
        }
        // console.log(foundDiet, foundyvalues);

        return foundyvalues;
        break;
      case "week":
        const foundDiets = dietArray.filter(
          (diet) =>
            new Date(date).getWeek() === new Date(diet.date).getWeek() &&
            new Date(diet.date).getFullYear() == new Date(date).getFullYear()
        );
        // const currentWeek = new Date(date).getWeek();
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
      case "weeklyAvg":
        foundDiet = dietArray;
        var len = xaxis.length;
        foundyvalues = new Array(7);
        foundyvalues.fill(0);
        // console.log(foundyvalues);
        // foundDiet = foundDiet.map((diet) => diet.diet);

        for (var diet in foundDiet) {
          var day = new Date(foundDiet[diet].date).getDay();
          for (var key in foundDiet[diet].diet) {
            foundyvalues[day] +=
              foundDiet[diet].diet[key].calories / foundDiet.length;
            // console.log(foundyvalues[key]);
          }
        }
        console.log(xaxis, foundDiet, foundyvalues);

        return foundyvalues;
        break;
      case "month":
        var foundDiet = dietArray.filter(
          (diet) =>
            new Date(diet.date).getMonth() == new Date(date).getMonth() &&
            new Date(diet.date).getFullYear() == new Date(date).getFullYear()
        );
        console.log(xaxis);
        var len = monthArray.length;
        var foundyvalues = new Array(len);
        foundyvalues.fill(0);
        for (var diet in foundDiet) {
          var day = new Date(foundDiet[diet].date).getDate();
          console.log(day);
          for (var key in foundDiet[diet].diet) {
            foundyvalues[day] += foundDiet[diet].diet[key].calories;
            console.log(foundyvalues[day]);
          }
        }
        // console.log(xaxis, foundDiet, foundyvalues);
        return foundyvalues;
        break;
      case "monthlyAvg":
        foundDiet = dietArray;
        var len = xaxis.length;
        foundyvalues = new Array(len);
        foundyvalues.fill(0);
        for (var diet in foundDiet) {
          var month = new Date(foundDiet[diet].date).getMonth();
          for (var key in foundDiet[diet].diet) {
            foundyvalues[month] +=
              foundDiet[diet].diet[key].calories / foundDiet.length;
            // console.log(foundyvalues[key]);
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
        loadData={props.loadData}
      />
      <div className="graphButtonContainer">
        <GraphButtons
          type={type}
          onTypeChange={onTypeChange}
          handleDateChange={handleDateChange}
        />
        <div
          style={{
            display: "grid",
            justifyContent: "center",
            alignContent: "center",
            width: "50%",
          }}
        >
          <VerticalBar xaxis={xaxis} yaxis={yaxis} />
        </div>
      </div>
    </>
  );
};

export default Graphs;
