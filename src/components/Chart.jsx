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

const Chart = ({ wasmTime }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Runtime",
      },
    },
  };

  const labels = ["Milliseconds"];

  const data = {
    labels,
    datasets: [
      {
        label: "WebAssembly",
        data: [wasmTime],
        backgroundColor: "rgba(101, 78, 240, 0.7)",
      }
    ],
  };

  return (
    <div className="chart">
      <Bar options={options} data={data} />
    </div>
  );
};

export default Chart;
