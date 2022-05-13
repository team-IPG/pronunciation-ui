import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../../store/AuthContext";

export const Card = (props) => {
  const { isLoggedIn } = useContext(AuthContext);
  const { item } = props;

  return (
    <div className="card-body">
      <h5 className="card-title">{item.name}</h5>
      <p className="card-text">{item.description}</p>
      {item.auth && !isLoggedIn && (
        <div className="btn-holder" style={{position:"absolute", bottom:"20px"}}>
          <NavLink to="/login" className="btn btn-primary">
            <strong>Log In</strong> <i> to get started</i>
          </NavLink>
        </div>
      )}
    </div>
  );
};
