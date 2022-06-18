import React, { useState } from "react";
import wasmApi from "./wasm-api";
import { Button, Grid, TextField } from "@mui/material";
import Chart from "./components/Chart";
import { countPrimes } from "./Prime";


const App = () => {
  const [jsTime, setJsTime] = useState(null);
  const [wasmTime, setWasmTime] = useState(null);

  const primeWasm = async (a, b) => {
    const data = await wasmApi;
    return data.instance.exports.countPrime(a, b);
  };

  const runtimeComparison = () => {
    const jsStart = performance.now()
    countPrimes(5, 100000)
    const jsEnd = performance.now()

    const wasmStart = performance.now()
    primeWasm(5, 1000000)
    const wasmEnd = performance.now()

    setJsTime(jsEnd - jsStart)
    setWasmTime(wasmEnd - wasmStart)
  }

  return (
    <div className="app">
      <header>
        <h1>WebAssembly vs JavaScript</h1>
        <p>Find how many prime numbers there are among the numbers below</p>
      </header>

      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <TextField
            id="outlined-basic"
            label="Start Number"
            variant="outlined"
          />
        </Grid>
        <Grid item>
          <TextField
            id="outlined-basic"
            label="End Number"
            variant="outlined"
          />
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={runtimeComparison}>Run</Button>
        </Grid>
      </Grid>

      <p>Total Primes: {0}</p>

      <Chart wasmTime={wasmTime} jsTime={jsTime} />
    </div>
  );
};

export default App;
