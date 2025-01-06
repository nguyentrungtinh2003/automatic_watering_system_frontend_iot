import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement, // Đăng ký LineElement để vẽ biểu đồ dạng Line
  PointElement, // Đăng ký PointElement để hiển thị các điểm
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Đăng ký tất cả các thành phần cần thiết
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const SensorDataChart = ({ data }) => {
  const chartData = {
    labels: data.map((d) => d.timestamp),
    datasets: [
      {
        label: "Temperature (°C)",
        data: data.map((d) => d.temperature),
        borderColor: "red",
        fill: false,
      },
      {
        label: "Humidity (%)",
        data: data.map((d) => d.humidity),
        borderColor: "blue",
        fill: false,
      },
    ],
  };

  return (
    <div>
      <h2>Temperature & Humidity Chart</h2>
      {/* Thêm key để tránh lỗi canvas reuse */}
      <Line data={chartData} key={JSON.stringify(data)} />
    </div>
  );
};

export default SensorDataChart;
