import "./App.css";
import { configureStore } from "@reduxjs/toolkit";

const reducer = () => {
  return {
    nome: "Nicolas",
    id: 1,
  };
};

const store = configureStore(reducer);

function App() {
  return <div className="App"></div>;
}

export default App;
