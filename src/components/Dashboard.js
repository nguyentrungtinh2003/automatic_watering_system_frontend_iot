import React, { useState, useEffect } from "react";
import { fetchSensorData } from "../services/api";
import SensorDataChart from "./SensorDataChart";

const Dashboard = () => {
  const [sensorData, setSensorData] = useState([]);

  useEffect(() => {
    fetchSensorData().then((response) => {
      setSensorData(response.data);
    });
  }, []);

  return (
    <div className="container">
      <h1>Smart Garden Dashboard</h1>
      <SensorDataChart data={sensorData} />
    </div>
  );
};

export default Dashboard;
