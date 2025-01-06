import axios from "axios";

const API_URL = "http://localhost:8080/api";

export const fetchSensorData = () => axios.get(`${API_URL}/sensors/fetch`);
export const turnPumpOn = () => axios.post(`${API_URL}/pump/on`);
export const turnPumpOff = () => axios.post(`${API_URL}/pump/off`);
export const getPumpStatus = () => axios.get(`${API_URL}/pump/status`);
