import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ServiceSection from "../components/ServiceSection";
import ContainerCard from "../components/ContainerCard";
import ClientSection from "../components/ClientSection";
import FormContainer from "../components/FormContainer";
import Header from "../components/Header";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = React.useState(null);

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
    console.log("Selected Date:", selectedDate); // Use the selected date as needed
    navigate("/summary-page");
  }, [selectedDate, navigate]);

  const locations = [
    "Quezon City Clinic", 
    "Manila Clinic", 
    "St. Lukes Medical Center"
  ];
  const services = [
    "TMJ (Temporomandibular Joint) Orthodontics",
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
    const timeOptions = [];

    for (let hour = startHour; hour <= endHour; hour++) {
      const formattedHour = hour % 12 || 12; // Convert 24-hour format to 12-hour format
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
                  <FormContainer inputLabel="Location" options={locations} />
                  <FormContainer inputLabel="Service" options={services} />
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
                  <FormContainer inputLabel="Time" options={times} />
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
