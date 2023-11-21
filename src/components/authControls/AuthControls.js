import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import "./authControls.scss";

const AuthControls = () => {
  const { isAuth, email } = useAuth();

  return (
    <div className="login">
      {isAuth ? (
        <Button
          variant="contained"
          style={{ borderRadius: 10 }}
          color="error"
          size="large"
        >
          <NavLink to="/login">Log out</NavLink>
        </Button>
      ) : (
        <>
          <Button
            variant="outlined"
            style={{ color: "white", border: "1px solid", borderRadius: 10 }}
            size="large"
          >
            <NavLink to="/login">Login</NavLink>
          </Button>

          <Button
            variant="contained"
            style={{ borderRadius: 10 }}
            color="success"
            size="large"
          >
            <NavLink to="/registration">Sign Up</NavLink>
          </Button>
        </>
      )}
    </div>
  );
};

export default AuthControls;
