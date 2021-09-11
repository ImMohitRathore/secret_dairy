import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { UserContext } from "../App";

const img =
  "https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/08/fiverr-logo-1.png";
const Nav = () => {
  const { state, dispatch } = useContext(UserContext);

  const Render = () => {
    if (state) {
      return (
        <>
         <div className="navlink">
         <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/about">
            About
          </Link>
          <Link className="link" to="/contact">
            Contact
          </Link>
          <Link className="link" to="/diary">
            Diary
          </Link>

          <Link className="link" to="/Logout">
            Logout
          </Link>
         </div>
        </>
      );
    } else {
      return (
        <>
          <Link className="link" to="/">
            Home
          </Link>

          <Link className="link" to="/register">
            Register
          </Link>
          <Link className="link" to="/Login">
            Login
          </Link>
        </>
      );
    }
  };
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src={img} alt="logo" />
        </div>
        <div className="menu">
          <Render />
        </div>
      </div>
    </>
  );
};

export default Nav;
