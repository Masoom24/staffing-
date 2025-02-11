import React from "react";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: [
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
  ],
  datasets: [
    {
      label: "Total Job Posts",
      data: [2, 3, 4, 6, 8, 7, 10, 11, 3, 4, 5, 6],
      backgroundColor: "rgba(75, 192, 192, 0.6)",
    },
    {
      label: "Total Jobs Applied",
      data: [1, 2, 3, 4, 6, 5, 8, 9, 2, 3, 4, 5],
      backgroundColor: "rgba(255, 99, 132, 0.6)",
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: { position: "top" },
    title: { display: true, text: "Monthly Data" },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const Analytics = () => {
  return (
    <div className="flex justify-center items-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full ">
        <div className="w-full">
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
