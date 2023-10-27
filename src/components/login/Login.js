import { Button } from "@mui/material";
import React from "react";
import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <Button
        variant="outlined"
        style={{ color: "white", border: "1px solid", borderRadius: 10 }}
        size="large"
      >
        Login
      </Button>

      <Button
        variant="contained"
        style={{ borderRadius: 10 }}
        color="success"
        size="large"
      >
        Sign Up
      </Button>
    </div>
  );
};

export default Login;
