import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../../store/AuthContext";
import "./Navigator.css";

export const Navigator = () => {
  const isAuth = useContext(AuthContext);

  const { isLoggedIn, logout } = isAuth;

  const handleLogout = () => {
      logout();
  }

  return (
    <nav className="nav justify-content-center">
      <ul className="nav justify-content-end">
        <li className="nav-item active">
          <NavLink className="nav-link active" to="/">
            Home
          </NavLink>
        </li>
        {isLoggedIn && <li className="nav-item active">
          <NavLink className="nav-link active" to="/get-started">
            Get Started
          </NavLink>
        </li>}
        <li className="nav-item">
          {!isLoggedIn ? (
            <NavLink className="nav-link" to="/login">
              Log in
            </NavLink>
          ) : (
            <NavLink className="nav-link" to="/" onClick={handleLogout}>
              Log out
            </NavLink>
          )}
        </li>
      </ul>
    </nav>
  );
};
