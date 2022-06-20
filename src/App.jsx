import React, { useState } from "react";
import { useWasm } from "./hooks/useWasm";
import Chart from "./layout/Chart";
import Header from "./layout/Header";
import InputData from "./layout/InputData";

const App = () => {
  const [wasmTime, setWasmTime] = useState(null);
  const [prime, setPrime] = useState(0);

  const instance = useWasm("wasm-api.wasm");

  const wasmPrimes = async (start, end) => {
    let timeStart = performance.now();
    const res = instance.exports.countPrimes(start, end);
    let timeEnd = performance.now();

    setPrime(res);
    setWasmTime(timeEnd - timeStart);
  };

  return (
    <div className="app">
      <Header />

      <InputData
        prime={prime}
        wasmPrimes={wasmPrimes}
      />

      <Chart wasmTime={wasmTime} />
    </div>
  );
};

export default App;
