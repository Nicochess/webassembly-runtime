import React, { useCallback, useState } from "react";
import { Button, Grid, TextField } from "@mui/material";

const InputData = ({ prime, wasmPrimes }) => {
  const [data, setData] = useState({
    start: null,
    end: null,
  });

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
    <Grid container spacing={2} className="container">
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
      <Grid container justifyContent="center">
        <p className="result">Total Primes: {prime}</p>
      </Grid>
    </Grid>
  );
};

export default InputData;
