import React from "react";

import "./Login.css";
import womanimg from "../images/women.png";
import gogimg from "../images/google.svg";
import facimg from "../images/facebook.svg";
import bolt from "../images/thunderbolt.svg";

const Login = () => {
  return (
    <div className="containerr">
      <div className="login-containerr">
        <div className="login-containerr-text form">
          <h2>LOGIN</h2>
          <p>How to get started lorem ipsum dolor at?</p>
          <input
            className="user-input"
            name="userName"
            type="text"
            placeholder="Username"
          />
          <input
            className="password-input"
            name="userPassword"
            type="password"
            placeholder="Password"
          />
          <br />
          <button  className="login-btn">Login Now</button>
          <br /> <br />
          <p><strong>Login</strong> with others</p>
          <button className="google-login"><img src={gogimg} alt="icon" /> Login with <strong>Google</strong></button>
          <button className="facebook-login"> <img src={facimg} alt="icon" /> Login with <strong>Facebook</strong>   </button>
        </div>
      </div>
     
      <div className="image-containerr">
        <div className="circle">
      <div className="thunder-image">
            <img src={bolt} alt="thunderimage"></img>
          </div>
          </div>
        <div className="image-containerr-text">
         
          <p>
            Very good <br /> works are <br /> waiting for
            <br /> you login <br /> Now!!!
          </p>
          <div className="image-containerr-img">
            <img src={womanimg} alt="Woman with tablet" />
          </div>
          </div>
        </div>
      </div>
    
  );
};
export default Login;
