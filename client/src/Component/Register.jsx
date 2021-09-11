import React, { useState } from "react";
import logo from "./images/undraw_Hello_re_3evm.svg";
import "./style.css";
import { useHistory, Link } from "react-router-dom";
import {axoisIN} from "../config"


const Register = () => {
  const history = useHistory();

  const [user, setuser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  let name, value;

  const inputhandle = (e) => {
    name = e.target.name;
    value = e.target.value;
    setuser({ ...user, [name]: value });
  };

  const postdata = async (e) => {
    e.preventDefault();
    const { name, email, phone, work, password, cpassword } = user;

    const res = await fetch("/register", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      }),
    });

    const data = await res.json();

    if (res.status === 422 || !data) {
     window.alert("please fill data properly")
      console.log("invalid Registration");
    } else if (res.status === 421) {
      window.alert("Email is already registered");
    } else if (res.status === 423) {
      window.alert("enter corrent numder");
    } else if (res.status === 424) {
      window.alert("password does not match");
    } else if (res.status === 425) {
      window.alert("password should be above 6 digit");
    } else {
      window.alert(" Registration Successful");
      console.log(" Registration Successful");

      history.push("./Login");
    }
  };
  
  return (
    <>
      <div className="main">
        <div className="card">
          <div className="left">
            <div className="head">

              <h3>Sign up</h3>
            </div>
            <form method="post">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={user.name}
                  onChange={inputhandle}
                />
                <br />
                <input
                  type="text"
                  name="email"
                  placeholder="Your Email"
                  value={user.email}
                  onChange={inputhandle}
                />
                <br />
                <input
                  type="text"
                  name="phone"
                  placeholder="phone"
                  value={user.phone}
                  onChange={inputhandle}
                />
                <br />
                <input
                  type="text"
                  name="work"
                  placeholder="Your profession"
                  value={user.work}
                  onChange={inputhandle}
                />
                <br />
                <input
                  type="password"
                  name="password"
                  placeholder="Your password"
                  value={user.password}
                  onChange={inputhandle}
                />
                <br />
                <input
                  type="password"
                  name="cpassword"
                  placeholder="Conform password"
                  value={user.cpassword}
                  onChange={inputhandle}
                />
              </div>
              <button className="btn" onClick={postdata}>
                Register
              </button>
            </form>
          </div>
          <div className="right">
            <img className="rslogo" src={logo} alt="" />
            <br />

            <Link className="Login" to="/login">
              I am already register
            </Link>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default Register;
