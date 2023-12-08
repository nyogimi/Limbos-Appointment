import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SummaryPage.css";

const SummaryPage = () => {
  const navigate = useNavigate();

  const onButtonbtnprimaryColorContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onSignUpTextClick = useCallback(() => {
    navigate("/sign-up-page");
  }, [navigate]);

  const onFrameContainer2Click = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

  return (
    <div className="summary-page">
      <img className="ellipse-icon2" alt="" src="/ellipse2.svg" />
      <div className="ellipse-wrapper1">
        <img className="ellipse-icon3" alt="" src="/ellipse3.svg" />
      </div>
      <div className="summary">SUMMARY</div>
      <div className="location-quezon-city-clinic-d-wrapper">
        <div className="location-quezon-city-container">
          <p className="location-quezon-city">LOCATION: Quezon City Clinic</p>
          <p className="location-quezon-city">DATE: 11/6/2023</p>
          <p className="location-quezon-city">TIME: 9:00 am</p>
          <p className="location-quezon-city">PRICE: P3600</p>
          <p className="location-quezon-city">
            SERVICE TYPE: Implant Dentistry
          </p>
        </div>
      </div>
      <div
        className="buttonbtnprimary-color1"
        onClick={onButtonbtnprimaryColorContainerClick}
      >
        <b className="btn-text1">Continue</b>
      </div>
      <div className="top-bar">
        <div className="top-bar-child" />
        <img
          className="n-removebg-preview-2-icon"
          alt=""
          src="/21317736-166466953903791-3719905096119854242-nremovebgpreview-2@2x.png"
        />
        <div className="sign-up" onClick={onSignUpTextClick}>
          sign up
        </div>
        <div className="log-in-wrapper" onClick={onFrameContainer2Click}>
          <b className="log-in">log in</b>
        </div>
      </div>
    </div>
  );
};

export default SummaryPage;
