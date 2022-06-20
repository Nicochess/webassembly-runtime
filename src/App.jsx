import React, { useState, useCallback } from "react";
import { useWasm } from "./useWasm";
import { Button, Grid, TextField } from "@mui/material";
import Chart from "./components/Chart";
import Header from "./components/Header";

const App = () => {
  const [wasmTime, setWasmTime] = useState(null);
  const [prime, setPrime] = useState(0);
  const [data, setData] = useState({
    start: null,
    end: null
  });

  const instance = useWasm("wasm-api.wasm");

  const wasmPrimes = async (start, end) => {
    let timeStart = performance.now();
    const res = instance.exports.countPrimes(start, end);
    let timeEnd = performance.now();

    setPrime(res);
    setWasmTime(timeEnd - timeStart);
  };

  const handleChange = useCallback(
    ({ target }) => {
      setData((prevData) => ({
        ...prevData,
        [target.name]: target.value,
      }));
    },
    [setData]
  );

  const handleSend = () => {
    wasmPrimes(data.start, data.end);
  };

  return (
    <div className="app">
      <Header />

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
