import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./components/Dashboard";
import PumpControl from "./components/PumpControl";

function App() {
  return (
    <div className="App">
      <Dashboard />
      <PumpControl />
    </div>
  );
}

export default App;
