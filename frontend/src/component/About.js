import React from "react";
import "./About.css";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
// import "./Homepage.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
function About() {
  const barChartData = {
    labels: [
      "Electronics",
      "Fashion",
      " Kitchen",
      " Personal Care",
      "Sports",
      "Others",
    ],
    datasets: [
      {
        label: "Pageviews by Browsers",
        data: [9, 19, 13, 25, 5, 13],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="about-us-page">
      <header className="hero">
        <p>Learn more about our company and its mission</p>
      </header>
      <div className="chart">
        <Bar data={barChartData} />
      </div>
    </div>
  );
}

export default About;
