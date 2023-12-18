import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUpFormContainer.css";

const SignUpFormContainer = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onH3Text1Click = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

  const onButtonbtnprimaryColorContainerClick = useCallback(() => {
    // Handle login logic with name, email, and password values
    navigate("/");
  }, [navigate, name, email, password]);

  return (
    <div className="signup-light-theme2">
      <img
        className="signup-new-icon-class"
        alt=""
        src="/21317736-166466953903791-3719905096119854242-nremovebgpreview-1@2x.png"
      />
      <b className="signup-h133">Hello, Welcome</b>
      <div className="signup-h34" onClick={onH3Text1Click}>
        Login
      </div>
      <div className="signup-name-letter">Name</div>
      <input
        type="text"
        className="signup-name-input-form"
        value={name}
        placeholder="Enter Name"
        onChange={(e) => setName(e.target.value)}
      />
      <div className="signup-email-letter3">Email</div>
      <input
        type="text"
        className="signup-email-input-form10"
        value={email}
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className="signup-password-letter7">Password</div>
      <input
        type="password"
        className="signup-email-input-form11"
        value={password}
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="signup-login-button2">
        <div
          className="signup-buttonbtnprimary-color4"
          onClick={onButtonbtnprimaryColorContainerClick}
        >
          <b className="signup-btn-text4">Sign Up</b>
        </div>
      </div>
    </div>
  );
};

export default SignUpFormContainer;
