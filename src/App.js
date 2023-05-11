import ApplogicaButton from "./components/ApplogicaButton/ApplogicaButton";
import Sidebar from "./components/Sidebar/Sidebar";
import CardContainer from "./components/CardContainer/CardContainer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <ApplogicaButton>Save</ApplogicaButton>
      <Sidebar />
      <CardContainer />
    </div>
  );
}

export default App;
