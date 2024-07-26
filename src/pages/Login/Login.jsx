import "./Login.css";
import logo from "../../assets/logo.svg";
import { useState } from "react";

const Login = () => {
  const [signState, setSignState] = useState("Sign In");
  return (
    <div className="login">
      <img src={logo} alt="logo" className="login-logo" />

      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState !== "Sign In" && (
            <input type="text" placeholder="Your name" />
          )}
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          {signState === "Sign In" ? (
            <button>Sign In</button>
          ) : (
            <button>Sign Up</button>
          )}
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember me</label>
            </div>
            <p>Need Help ?</p>
          </div>
        </form>

        <div className="form-switch">
          {signState === "Sign In" ? (
            <p>
              New to Netflix <span onClick={() => setSignState('Sign Up')}>Sign up Now</span>
            </p>
          ) : (
            <p>
              Already have an account?<span onClick={() => setSignState('Sign In')}>Sign In</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
