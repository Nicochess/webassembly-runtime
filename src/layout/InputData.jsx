import React, { useCallback, useRef, useState } from "react";
import { Button, Grid, TextField } from "@mui/material";

const InputData = ({ prime, wasmPrimes }) => {
  const startRef = useRef()
  const endRef = useRef()

  const handleChange = useCallback(({ target }) => {
    setData((prevData) => ({
      ...prevData,
      [target.name]: target.value,
    }));
  }, []);

  const handleSend = () => {
    wasmPrimes(startRef.current.value, endRef.current.value);
  };

  return (
    <Grid container spacing={2} className="container">
      <Grid item>
        <TextField
          id="outlined-basic"
          label="Start Number"
          variant="outlined"
          name="start"
          inputRef={startRef}
        />
      </Grid>
      <Grid item>
        <TextField
          id="outlined-basic"
          label="End Number"
          variant="outlined"
          name="end"
          inputRef={endRef}
        />
      </Grid>
      <Grid item>
        <Button variant="contained" onClick={handleSend}>
          Run
        </Button>
      </Grid>
      <Grid container justifyContent="center">
        <p className="result">Total Primes: {prime}</p>
      </Grid>
    </Grid>
  );
};

export default InputData;
