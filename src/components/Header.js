import { useMemo, useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

  const Header = ({
    propColor,
    propColor1,
    propLeft,
    onServicesTextClick,
    onContactTextClick,
    onAboutUsTextClick,
    onSignUpTextClick,
    onFrameContainer3Click,
  }) => {
    const [activeButton, setActiveButton] = useState(null);

    const homeStyle = useMemo(() => {
      return {
        color: activeButton === "home" ? propColor : "inherit",
      };
    }, [activeButton, propColor]);

    const contactStyle = useMemo(() => {
      return {
        color: activeButton === "contact" ? propColor1 : "inherit",
      };
    }, [activeButton, propColor1]);

    const navigate = useNavigate();

    const handleButtonClick = useCallback((button) => {
      setActiveButton(button);
      switch (button) {
        case "home":
          navigate("/");
          break;
        case "services":
          onServicesTextClick();
          break;
        case "contact":
          onContactTextClick();
          break;
        case "aboutUs":
          onAboutUsTextClick();
          break;
        default:
          break;
      }
    }, [navigate, onServicesTextClick, onContactTextClick, onAboutUsTextClick]);

    return (
      <div className="top-bar-2">
        <img
          className="n-removebg-preview-2-icon1"
          alt=""
          src="/21317736-166466953903791-3719905096119854242-nremovebgpreview-2@2x.png"
        />

  <div className="frame7">
          <div className="frame8">
            <div className="frame-inner1">
              <div className="home-parent">
                <div
                  className="services"
                  onClick={() => handleButtonClick("home")}
                  onMouseEnter={() => setActiveButton("home")}
                  style={homeStyle}
                >
                  home
                </div>
                <div
                  className="services"
                  onClick={() => handleButtonClick("services")}
                  onMouseEnter={() => setActiveButton("services")}
                >
                  services
                </div>
                <div
                  className="contact1"
                  onClick={() => handleButtonClick("contact")}
                  onMouseEnter={() => setActiveButton("contact")}
                  style={contactStyle}
                >
                  Contact
                </div>
                <div
                  className="services"
                  onClick={() => handleButtonClick("aboutUs")}
                  onMouseEnter={() => setActiveButton("aboutUs")}
                >
                  About Us
                </div>
              </div>
            </div>
          </div>
          <div className="log-in-container" onClick={onFrameContainer3Click}>
            <b className="log-in1">log in</b>
          </div>
          <div className="sign-up1" onClick={onSignUpTextClick}>
            sign up
          </div>
        </div>
      </div>
    );
  };

  export default Header;