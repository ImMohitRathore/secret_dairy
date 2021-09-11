import React, { useState, useContext } from "react";
import logo from "./images/undraw_secure_login_pdn4.svg";
import { useHistory, Link } from "react-router-dom";
import { UserContext } from "../App";
import {axoisIN} from "../config"

const Login = () => {
  const { state, dispatch } = useContext(UserContext);
  const history = useHistory();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch("/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (res.status === 400 || !data) {
      window.alert("please filled properly");
      console.log("plz filled");
    } else {
      dispatch({ type: "USER", payload: true });
      window.alert("login sucessfull");
      console.log("hogya");

      history.push("/");
    }
  };
  return (
    <>
      <div className="main">
        <div className="card">
          <div className="left">
            <img className="rslogo" src={logo} alt="" />
            <Link className="Login" to="/register">
              Creat an account
            </Link>
          </div>
          <div className="right">
            <div className="head">
              <h3>Sign In</h3>
            </div>
            <form method="POST">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Enter your Email"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                />
                <br />

                <input
                  type="password"
                  placeholder="Your Password"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                />
                <button onClick={loginUser} className="btn">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
