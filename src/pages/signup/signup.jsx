import "./signup.css";
import { Link } from "react-router-dom";
function Signup() {
  return (
    <div className="login-container">
      <div className="login-board">
        <h1 className="tittle">Signup</h1>
        <form className="login-form">
        <input
            type="text"
            className="form-control"
            id="exampleInputText"
            aria-describedby="emailHelp"
            placeholder="userName"
          />
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail"
            aria-describedby="emailHelp"
            placeholder="Email"
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
          already have an account? 
          <Link to="/login">
            <span>login</span>
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

export default Signup;
