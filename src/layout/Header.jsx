import { Avatar } from "@mui/material";
import logo from "../assets/webassembly-icon.png"
import React, { memo } from "react";

const HeaderComponent = () => {
  return (
    <header>
      <Avatar
        alt="Remy Sharp"
        src={logo}
        variant="square"
        sx={{ width: 80, height: 80 }}
      />
      <h1>You are running WebAssembly!</h1>
      <p>Find how many prime numbers there are among the numbers below</p>
    </header>
  );
};

const Header = memo(HeaderComponent)

export default Header;
