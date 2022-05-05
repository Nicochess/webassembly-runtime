import "./App.css";
import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  name: "Nicolas",
  id: 0,
};

const TESTE = "teste";

const reducer = (state = initialState, action) => {
  if (action.type === TESTE) {
    return {
      ...state,
      teste: action.payload,
    };
  }

  return state;
};

const store = configureStore({
  reducer: reducer,
});

store.dispatch({ type: TESTE, payload: "Olá redux" });

console.log(store.getState());

function App() {
  return <div className="App"></div>;
}

export default App;
