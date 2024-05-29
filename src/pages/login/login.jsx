import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="login-container">
      <div className="login-board">
        <h1 className="tittle">Login</h1>
        <form className="login-form">
       
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
          <button type="submit" className="btn btn-primary">
            <Link to="/">continue</Link>
          </button>
        </form>
        <p className="text">
          Create an account?
          <Link to="/signup">
            <span>sign up</span>
          </Link>
        </p>
        <div className="checking">
          <input type="checkbox" name="check" id="check" />
          <p> By counting i agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
