import "./Login.css";
import logo from "../../assets/logo.svg";
import { useState } from "react";
import { login, signup } from "../../firebase";
import netflixLoading from '../../assets/netflx-loading.gif';

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signState, setSignState] = useState("Sign In");
  const [loading, setLoading] = useState(false);

  const handleUserAuth = async (e) => {
    e.preventDefault();
    if(!email) return;
    setLoading(true);
    if (signState === "Sign In") {
      await login(email, password);
      setLoading(false);
    } else {
      await signup(name, email, password);
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <div className="loading">
          <img src={netflixLoading} alt="loading" />
        </div>
      ) : (
        <div className="login">
          <img src={logo} alt="logo" className="login-logo" />
          <div className="login-form">
            <h1>{signState}</h1>
            <form>
              {signState !== "Sign In" && (
                <input
                  type="text"
                  value={name}
                  placeholder="Your name"
                  onChange={(e) => setName(e.target.value)}
                />
              )}
              <input
                type="email"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={handleUserAuth}>{signState}</button>
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
                  New to Netflix{" "}
                  <span onClick={() => setSignState("Sign Up")}>
                    Sign up Now
                  </span>
                </p>
              ) : (
                <p>
                  Already have an account?
                  <span onClick={() => setSignState("Sign In")}>Sign In</span>
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
