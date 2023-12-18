import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ServiceSection from "../components/ServiceSection";
import ContainerCard from "../components/ContainerCard";
import ClientSection from "../components/ClientSection";
import Header from "../components/Header";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = React.useState(null);
  const [selectedTime, setSelectedTime] = React.useState(null);

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
    console.log("Selected Date:", selectedDate);
    console.log("Selected Time:", selectedTime);
    navigate("/summary-page");
  }, [selectedDate, selectedTime, navigate]);

  const services = [
    "TMJ (Temporomandibular Joint)",
    "Functional Jaw Orthopedics",
    "Prosthodontics",
    "Dental Cosmetics",
    "Dental Surgery",
    "Implant Dentistry",
  ];

  // Generate time options with a 1-hour interval from 2:00 PM to 9:00 PM
  const generateTimeOptions = () => {
    const startHour = 14; // 2:00 PM
    const endHour = 21; // 9:00 PM
    const timeOptions = ["Please select time"]; // Initial placeholder option

    for (let hour = startHour; hour <= endHour; hour++) {
      const formattedHour = hour % 12 || 12;
      const amPm = hour < 12 ? 'AM' : 'PM';
      const timeString = `${formattedHour}:00 ${amPm}`;
      timeOptions.push(timeString);
    }

    return timeOptions;
  };

  const times = generateTimeOptions();

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
                  <div className="form-container">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="form-container">
                    <label className="form-label">Service</label>
                    <div className="form-input">
                      {services.map((service, index) => (
                        <div key={index} className="service-option">
                          <input type="radio" name="service" value={service} />
                          <label>{service}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="form-container">
                    <label className="form-label">Date</label>
                    <DatePicker
                      selected={selectedDate}
                      onChange={(date) => setSelectedDate(date)}
                      dateFormat="MMMM d, yyyy"
                      isClearable
                      placeholderText="Select a date"
                    />
                    {selectedDate && (
                      <p className="selected-date">
                        Selected Date: {selectedDate.toLocaleDateString()}
                      </p>
                    )}
                  </div>
                  <div className="form-container">
                    <label className="form-label">Time</label>
                    <select
                      className="form-input"
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                    >
                      {times.map((time, index) => (
                        <option key={index} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
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
