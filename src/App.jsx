import React, { useState } from "react";
import wasmApi from "./wasm-api";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = ["Performance"];

export const data = {
  labels,
  datasets: [
    {
      label: "JavaScript",
      data: [20],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "WebAssembly",
      data: [10],
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const App = () => {
  const [res, setRes] = useState(null);

  const addWasm = async (a, b) => {
    const data = await wasmApi;
    return data.instance.exports.add(a, b);
  };

  return (
    <div className="app">
      <h1>WebAssembly vs JavaScript</h1>
      <p>Find how many prime numbers there are among the numbers below</p>

      <div>
        <label htmlFor="startNumber">Start Number:</label>
        <input type="number" name="startNumber" />
        <label htmlFor="endNumber">End Number:</label>
        <input type="number" name="endNumber" />
      </div>
      <div className="chart">
        <Bar options={options} data={data} />
      </div>
    </div>
  );
};

export default App;
