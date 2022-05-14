import React, { useState, useRef, useContext } from "react";
import AuthContext from "../../store/AuthContext";

const LogIn = (props) => {
  const [invalid, setInvalid] = useState(false);
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const { setrole, login } = useContext(AuthContext); 
  const { history } = props; 

  const handleSubmit = (e) => {
    e.preventDefault();
    let username = usernameRef.current.value;
    let password = passwordRef.current.value;
    if (username === "admin" && password === "admin") {
      setrole(username);
      login();
      setInvalid(false);
      history.push("/get-started");
    } else if (username === "user" && password === "user") {
      setrole(username);
      login();
      history.push("/get-started");
    } else {
      setInvalid(true);
    }
  };

  return (
    <div id="login">
      {invalid && (
        <div className="alert alert-danger" role="alert">
          Sign on was unsuccessful. Please try again
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="title">
          <h1>Log In</h1>
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            ref={usernameRef}
            type="text"
            className="form-control"
            id="username"
            aria-describedby="username-help"
            placeholder="Enter username"
          />
          <small id="username-help" className="form-text text-muted">
            We'll never share your username with anyone else.
          </small>
        </div>
        <div className="form-group" style={{ marginBottom: "20px" }}>
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            ref={passwordRef}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Log In
        </button>
      </form>
    </div>
  );
};

export default LogIn;
