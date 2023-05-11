import ApplogicaButton from "./components/ApplogicaButton/ApplogicaButton";
import Sidebar from "./components/Sidebar/Sidebar";
import CardContainer from "./components/CardContainer/CardContainer";

import { Button } from "poc-react";

import "./App.css";

function App() {
  return (
    <div className="App">
      <ApplogicaButton>Save</ApplogicaButton>
      <Sidebar />
      <CardContainer />
      <Button
        style={{ backgroundColor: "#eeee", border: "0", padding: "10px" }}
      >
        Hello from Local button package
      </Button>
    </div>
  );
}

export default App;
