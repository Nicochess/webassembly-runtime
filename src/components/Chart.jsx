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

const Chart = ({ jsTime, wasmTime }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Runtime comparison",
      },
    },
  };

  const labels = ["Performance"];

  const data = {
    labels,
    datasets: [
      {
        label: "JavaScript",
        data: [jsTime],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "WebAssembly",
        data: [wasmTime],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <div className="chart">
      <Bar options={options} data={data} />
    </div>
  );
};

export default Chart;
