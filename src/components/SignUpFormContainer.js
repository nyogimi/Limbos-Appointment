import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUpFormContainer.css";

const SignUpFormContainer = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

 const onLoginButtonContainerClick = useCallback(() => {
    // Handle sign-up logic with form values
    navigate("/");
  }, [navigate, firstName, lastName, gender, email, age, address, password, confirmPassword]);
  return (
    <div className="light-theme">
      <div className="frame9">
        <div className="frame10">
          <img
            className="n-removebg-preview-1-icon"
            alt=""
            src="/21317736-166466953903791-3719905096119854242-nremovebgpreview-1@2x.png"
          />
        </div>
        <img className="h3-icon" alt="" src="/h3.svg" />
      </div>
      <div className="frame11">
        <div className="frame12">
          <div className="frame13">
            <div className="frame14">
              <div className="password-letter">First Name</div>
              <div className="password-letter1">Last Name</div>
            </div>
          </div>
          <div className="frame15">
            <div className="frame16">
              <div className="email-input-form" />
              <div className="email-input-form1" />
            </div>
          </div>
        </div>
        <div className="frame17">
          <div className="frame18">
            <div className="frame19">
              <div className="frame20">
                <div className="frame21">
                  <div className="email-letter">Gender</div>
                  <div className="email-input-form2" />
                </div>
                <div className="frame22">
                  <div className="password-letter">Email</div>
                  <div className="email-input-form3" />
                </div>
              </div>
            </div>
            <div className="frame23">
              <div className="frame24">
                <div className="password-letter">Age</div>
                <div className="password-letter1">Address</div>
              </div>
            </div>
          </div>
          <div className="frame25">
            <div className="frame26">
              <div
                className="login-button"
                onClick={onLoginButtonContainerClick}
              >
                <div className="buttonbtnprimary-color2">
                  <b className="btn-text2">Sign Up</b>
                </div>
              </div>
            </div>
            <div className="frame27">
              <div className="frame28">
                <div className="frame16">
                  <div className="email-input-form" />
                  <div className="email-input-form1" />
                </div>
              </div>
              <div className="frame30">
                <div className="frame31">
                  <div className="frame32">
                    <div className="password-letter">{`Password `}</div>
                    <div className="email-input-form6" />
                  </div>
                  <div className="frame33">
                    <div className="password-letter">{`Confirm Password `}</div>
                    <div className="email-input-form7" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpFormContainer;
