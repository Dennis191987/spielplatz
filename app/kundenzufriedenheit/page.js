'use client'
// import {
// Chart as ChartJS,
// CategoryScale,
// LinearScale, PointElement, LineElement,
// Title,
// Tooltip,
// Legend,
// } from "chart.js";
// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
import 'chart.js/auto';
import { Line } from "react-chartjs-2";
export default function Kunde() {
  const options = {
    responsive: true,
  };
  const chartData = {
    labels: ["2020", "2021", "2022", "2023", "2024"],
    datasets: [
      {
        label: "Kundenzufriedenheit in %",
        data: [45, 53, 66, 79, 82],
        backgroundColor: "rgba(167, 54, 65, 0.6)",
        borderColor: "rgba(167, 54, 65, 0.6)",
      },
    ],
  };

  return (
    <div>
      Kundenzufriedenheit
      <Line data={chartData} options={options} />
    </div>
  );
}
