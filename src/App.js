import "./App.css";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

const initialState = {
  name: "Nicolas",
  id: 0,
};

const TESTE = "teste";

const teste = (state = initialState, action) => {
  if (action.type === TESTE) {
    return action.payload;
  }
};

const contador = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENTAR":
      return state.tot + 1;
    default:
      break;
  }
};

const reducer = combineReducers({ contador, teste });

const store = configureStore({
  reducer: reducer,
});

store.dispatch({ type: TESTE, payload: "Olá redux" });

console.log(store.getState());

function App() {
  return <div className="App"></div>;
}

export default App;
