import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUpFormContainer.css";

const SignUpFormContainer = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onH3Text1Click = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

  const onButtonbtnprimaryColorContainerClick = useCallback(() => {
    // Handle login logic with email and password values
    navigate("/");
  }, [navigate, email, password]);

  return (
    <div className="light-theme2">
      <img
        className="n-removebg-preview-1-icon2"
        alt=""
        src="/21317736-166466953903791-3719905096119854242-nremovebgpreview-1@2x.png"
      />
      <b className="h33">Hello, Welcome</b>
      <div className="h34" onClick={onH3Text1Click}>
       Login
      </div>
      <div className="email-letter3">Email</div>
      <input
        type="text"
        className="email-input-form10"
        value={email}
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className="password-letter7">Password</div>
      <input
        type="password"
        className="email-input-form11"
        value={password}
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="login-button2">
        <div
          className="buttonbtnprimary-color4"
          onClick={onButtonbtnprimaryColorContainerClick}
        >
          <b className="btn-text4">Sign Up</b>
        </div>
      </div>
    </div>
  );
};

export default SignUpFormContainer;
