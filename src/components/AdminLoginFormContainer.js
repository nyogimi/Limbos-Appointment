import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminLoginFormContainer.css";

const AdminLoginFormContainer = () => {
  const navigate = useNavigate();

  const onButtonbtnprimaryColorContainerClick = useCallback(() => {
    navigate("/dashboard-doctor");
  }, [navigate]);

  return (
    <div className="light-theme1">
      <img
        className="n-removebg-preview-1-icon1"
        alt=""
        src="/21317736-166466953903791-3719905096119854242-nremovebgpreview-1@2x.png"
      />
      <b className="h32">Admin Login</b>
      <div className="email-letter2">Email</div>
      <div className="password-letter6">{`Password `}</div>
      <div className="login-button1">
        <div
          className="buttonbtnprimary-color3"
          onClick={onButtonbtnprimaryColorContainerClick}
        >
          <b className="btn-text3">Login</b>
        </div>
      </div>
      <div className="email-input-form8" />
      <div className="email-input-form9" />
    </div>
  );
};

export default AdminLoginFormContainer;
