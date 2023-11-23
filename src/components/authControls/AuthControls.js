import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useDispatch } from "react-redux";
import { removeUser } from "../../redux/reducers/userReducer";
import "./authControls.scss";

const AuthControls = () => {
  const { isAuth } = useAuth();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(removeUser());
  };

  return (
    <div className="login">
      {isAuth ? (
        <Button
          variant="contained"
          style={{ borderRadius: 10 }}
          color="error"
          size="large"
          onClick={logoutHandler}
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
