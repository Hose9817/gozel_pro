import { NavLink, useMatch } from "react-router-dom";
import AuthControls from "../authControls/AuthControls";
import "./appHeader.scss";

const AppHeader = () => {
  const isHome = useMatch("/");

  return (
    <header
      className="app__header"
      style={{
        backgroundColor: isHome ? "transparent" : "black",
      }}
    >
      <h1 className="app__logo">
        <NavLink to="/">T-Education</NavLink>
      </h1>
      <div className="app__menu">
        <nav className="app__nav">
          <ul>
            <li>
              <NavLink
                to="/courses"
                style={({ isActive }) => ({
                  color: isActive ? "#c08888" : "inherit",
                })}
              >
                Courses
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/teachers"
                style={({ isActive }) => ({
                  color: isActive ? "#c08888" : "inherit",
                })}
              >
                Teachers
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/other"
                style={({ isActive }) => ({
                  color: isActive ? "#c08888" : "inherit",
                })}
              >
                Other
              </NavLink>
            </li>
          </ul>
        </nav>
        <AuthControls className="app__login" />
      </div>
    </header>
  );
};

export default AppHeader;
