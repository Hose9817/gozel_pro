import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import AuthControls from "../../authControls/AuthControls";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import "./burgerMenu.scss";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="burger">
      <MenuRoundedIcon
        fontSize="large"
        sx={{ color: "white" }}
        onClick={toggleMenu}
      />
      {isOpen && (
        <div className="burger_menu" onClick={toggleMenu}>
          <AuthControls className="app__login" />
          <div className="burger_menu_wrapper">
            <div className="burger_menu_item">
              <NavLink
                to="/courses"
                style={({ isActive }) => ({
                  color: isActive ? "#c08888" : "inherit",
                })}
              >
                Courses
              </NavLink>
            </div>
            <div className="burger_menu_item">
              <NavLink
                to="/teachers"
                style={({ isActive }) => ({
                  color: isActive ? "#c08888" : "inherit",
                })}
              >
                Teachers
              </NavLink>
            </div>
            <div className="burger_menu_item">
              <NavLink
                to="/other"
                style={({ isActive }) => ({
                  color: isActive ? "#c08888" : "inherit",
                })}
              >
                Other
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
