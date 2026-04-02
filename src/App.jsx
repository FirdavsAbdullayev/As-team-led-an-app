import React from "react";
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

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Fully Rounded",
      data: [-80, -70, 5, -25, 90, 35, 40],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      borderRadius: 20, // 🔥 rounded effekt
    },
    {
      label: "Small Radius",
      data: [-90, 60, 2, 30, -45, -85, -75],
      backgroundColor: "rgba(54, 162, 235, 0.5)",
      borderRadius: 5,
    },
  ],
};

const options = {
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

const App = () => {
  return (
    <div style={{ width: "800px", margin: "auto" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default App;