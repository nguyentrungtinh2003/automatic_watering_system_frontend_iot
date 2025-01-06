import React from "react";
import { turnPumpOn, turnPumpOff } from "../services/api";

const PumpControl = () => {
  return (
    <div>
      <h2>Điều Khiển Máy Bơm</h2>
      <button className="btn btn-success" onClick={turnPumpOn}>
        Bật Máy Bơm
      </button>
      <button className="btn btn-danger" onClick={turnPumpOff}>
        Tắt Máy Bơm
      </button>
    </div>
  );
};

export default PumpControl;
