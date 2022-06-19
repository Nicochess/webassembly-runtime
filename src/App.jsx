import React, { useState, useCallback } from "react";
import { useWasm } from "./useWasm";
import { Button, Grid, TextField } from "@mui/material";
import Chart from "./components/Chart";

const App = () => {
  const [factorial, setFactorial] = useState(0);
  const [wasmTime, setWasmTime] = useState(null);
  const [prime, setPrime] = useState(0);
  const [data, setData] = useState({
    start: null,
    end: null,
    factorial: null
  });

  const instance = useWasm("wasm-api.wasm");

  const wasmPrimes = async (start, end) => {
    let timeStart = performance.now();
    const res = instance.exports.countPrimes(start, end);
    let timeEnd = performance.now();

    setPrime(res);
    setWasmTime(timeEnd - timeStart);
  };

  const wasmFactorial = (value) => {
    const res = instance.exports.factorial(value);
    setFactorial(res);
  };

  const handleChange = useCallback(({ target }) => {
    setData((prevData) => ({
      ...prevData,
      [target.name]: target.value,
    }));
  }, [setData]);

  const handleSend = ({ target }) => {
    if (target.name === "factorial") {
      wasmFactorial(data.factorial);
      return;
    }

    wasmPrimes(data.start, data.end);
  };

  return (
    <div className="app">
      <header>
        <h1>You are running WebAssembly!</h1>
        <p>Find how many prime numbers there are among the numbers below</p>
      </header>

      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <TextField
            id="outlined-basic"
            label="Start Number"
            variant="outlined"
            name="start"
            onChange={handleChange}
          />
        </Grid>
        <Grid item>
          <TextField
            id="outlined-basic"
            label="End Number"
            variant="outlined"
            name="end"
            onChange={handleChange}
          />
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={handleSend}>
            Run
          </Button>
        </Grid>
      </Grid>

      <p>Total Primes: {prime}</p>

      <Chart wasmTime={wasmTime} />
    </div>
  );
};

export default App;
