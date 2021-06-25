import React from "react";
import { Bar } from "react-chartjs-2";
import "../css/chart.css";
const VerticalBar = (props) => {
  const data = {
    labels: props.xaxis,
    datasets: [
      {
        label: "calories",
        data: props.yaxis,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 180, 24, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
      {
        type: "line",
        data: props.yaxis,
        lineColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 180, 24, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: false,
            // suggestedMax: 500,
          },
        },
      ],
    },
    maintainAspectRatio: false,
  };
  return (
    <div
      style={{
        maxHeight: "600px",
        maxWidth: "600px",
        width: "600px",
        height: "450px",
        border: "2px #222 solid",
      }}
    >
      <Bar id="chart" data={data} options={options} />
    </div>
  );
};

VerticalBar.defaultProps = {
  yaxis: [12, 19, 3, 5, 2, 3, 5],
  label: "Calories",
};
export default VerticalBar;
