import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/contants";
import { Link } from "react-router-dom";
import PostList from "./PostList";
import Integrate from "./Integrate";
const Header = () => {
  const [btnLogin, setBtnLogin] = useState("Login");

  // const btnChange = btnLogin === "Login" ? "logout" : "Login";

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>

          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnLogin === "Login"
                ? setBtnLogin("Logout")
                : setBtnLogin("Login");
            }}
          >
            {btnLogin}
          </button>
        </ul>
        {/* <PostList /> */}
        <Integrate />
      </div>
    </div>
  );
};

export default Header;
