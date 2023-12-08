import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ServiceSection from "../components/ServiceSection";
import ContainerCard from "../components/ContainerCard";
import ClientSection from "../components/ClientSection";
import FormContainer from "../components/FormContainer";
import Header from "../components/Header";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();

  const onServicesTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='headingText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onContactTextClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  const onAboutUsTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onSignUpTextClick = useCallback(() => {
    navigate("/sign-up-page");
  }, [navigate]);

  const onFrameContainer2Click = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

  const onBtnTextClick = useCallback(() => {
    navigate("/summary-page");
  }, [navigate]);

  return (
    <div className="home-page">
      <div className="home">
        <div className="frame">
          <div className="ellipse" />
          <div className="ellipse1" />
          <div className="ellipse2" />
          <ServiceSection />
          <div className="about-us">
            <img className="h1-headline5-icon" alt="" src="/h1-headline5.svg" />
            <div className="heading-wrapper" data-scroll-to="frameContainer">
              <b className="heading">About Us</b>
            </div>
          </div>
          <ContainerCard />
          <ClientSection />
          <div className="row">
            <div className="col-md-8">
              <div className="h1-headline5">
                Limbos Dental Cosmetics and Implant Center
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-item">
                <b className="h3">Book Appointment</b>
                <div className="card-content">
                  <FormContainer
                    inputLabel="Location *"
                    showDiv
                    divVisible
                    divVisible1
                    divVisible2
                    divVisible3
                  />
                  <FormContainer
                    inputLabel="Service *"
                    showDiv={false}
                    divVisible={false}
                    divVisible1={false}
                    divVisible2={false}
                    divVisible3={false}
                  />
                  <div className="form-group-custom-select">
                    <div className="form-control">Date *</div>
                    <div className="select">
                      <div className="option">
                        <img className="vector-icon" alt="" src="/vector.svg" />
                        <div className="dropdown">Please Select</div>
                      </div>
                      <div className="option1">
                        <div className="list-entry">List Entry # 1</div>
                      </div>
                      <div className="option2">
                        <div className="list-entry1">List Entry # 2</div>
                      </div>
                      <div className="option3">
                        <div className="list-entry">List Entry # 3</div>
                      </div>
                      <div className="option4">
                        <div className="list-entry">List Entry # 4</div>
                      </div>
                      <div className="option5">
                        <div className="list-entry">List Entry # 5</div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group-custom-select1">
                    <div className="select1">
                      <div className="option">
                        <img className="vector-icon" alt="" src="/vector.svg" />
                        <div className="dropdown1">Please Select</div>
                      </div>
                      <div className="option1">
                        <div className="list-entry">List Entry # 1</div>
                      </div>
                      <div className="option2">
                        <div className="list-entry1">List Entry # 2</div>
                      </div>
                      <div className="option3">
                        <div className="list-entry">List Entry # 3</div>
                      </div>
                      <div className="option4">
                        <div className="list-entry">List Entry # 4</div>
                      </div>
                      <div className="option5">
                        <div className="list-entry">List Entry # 5</div>
                      </div>
                    </div>
                    <div className="form-control1"> Time *</div>
                  </div>
                </div>
                <div className="buttonbtnprimary-color">
                  <b className="btn-text" onClick={onBtnTextClick}>
                    Book Appointment
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Header
        propColor="#25b7c8"
        propColor1="#000"
        onServicesTextClick={onServicesTextClick}
        onContactTextClick={onContactTextClick}
        onAboutUsTextClick={onAboutUsTextClick}
        onSignUpTextClick={onSignUpTextClick}
        onFrameContainer3Click={onFrameContainer2Click}
      />
    </div>
  );
};

export default HomePage;
