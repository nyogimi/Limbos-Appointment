import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import "./Contact.css";

const Contact = () => {
  const navigate = useNavigate();

  const onServicesTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onContactTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='h1Headline5Text']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onAboutUsTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onSignUpTextClick = useCallback(() => {
    navigate("/sign-up-page");
  }, [navigate]);

  const onFrameContainer3Click = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

  return (
    <div className="contact">
      <div className="ellipse3" />
      <img className="ellipse-icon" alt="" src="/ellipse.svg" />
      <div className="ellipse4" />
      <div className="map1">
        <div className="container" />
        <div className="h1-headline52">
          <p className="manila-clinic">Manila Clinic</p>
          <p className="manila-clinic">
            Unit 102, BMC Bldg 3 #1146 Hermosa St., Abad Santos Ave., Manila
          </p>
          <p className="manila-clinic">&nbsp;</p>
          <p className="manila-clinic">
            Tues/Wed/Thurs/Sat/Sun: 7:00 AM - 2:00 PM
          </p>
          <p className="manila-clinic">&nbsp;</p>
          <p className="manila-clinic">Mobile No: +63 932 851 7356</p>
        </div>
      </div>
      <div className="map2">
        <div className="container" />
        <img className="image-15-icon" alt="" src="/image-15@2x.png" />
        <div className="quezon-city-clinic-container">
          <p className="manila-clinic">Quezon City Clinic</p>
          <p className="manila-clinic">2nd Floor, #120 St Maginhawa St.,</p>
          <p className="manila-clinic">Teachers Village. Quezon Cty</p>
          <p className="manila-clinic">&nbsp;</p>
          <p className="manila-clinic">Tue-Sun: 2:00 PM - 9:00 PM</p>
          <p className="manila-clinic">&nbsp;</p>
          <p className="manila-clinic">Mobile No: +63 9954471918</p>
        </div>
      </div>
      <div className="map3">
        <div className="container" />
        <div className="st-lukes-medical-container">
          <p className="manila-clinic">St. Luke’s Medical Center</p>
          <p className="manila-clinic">
            Room 1013 South Tower, CHBC E. Rodriguez Ave., Quezon City (By
            Appointment Only)
          </p>
          <p className="manila-clinic">&nbsp;</p>
          <p className="manila-clinic">Telephone No: (02) 723 0101 loc 2013</p>
          <p className="manila-clinic">Mobile No: +63 917 828 0047</p>
        </div>
        <img className="image-16-icon" alt="" src="/image-16@2x.png" />
      </div>
      <div className="footers-v6">
        <div className="footers-v6-child" />
        <div className="all-rights-reserved">© 2023, All Rights Reserved</div>
        <div className="frame1">
          <div className="limbos-dental-cosmetics-and-im-wrapper">
            <div className="limbos-dental-cosmetics">
              Limbos Dental Cosmetics and Implant Center
            </div>
          </div>
          <div className="main-clinic">Main Clinic</div>
        </div>
        <div className="frame2">
          <div className="we-are-commited">
            We are commited to give you the best smile you deserve! If you have
            been feeling less than happy with your smile and want to do
            something about it, look no further! LIMBOS DENTAL COSMETICS AND
            IMPLANT CENTER has the tools to give you your best smile!
          </div>
          <div className="hotline">Hotline</div>
          <div className="maginhawa-street-teachers">
            120 Maginhawa Street, Teachers Village, Diliman Quezon City Room
            1013 South, Tower, Cathedral Heights Bldg. Complex, E. Rodriguez
            Ave. Unit 201 BMCI Building 3, 1146 Hermosa Street Abad Santos,
            Manila., Quezon City, Philippines
          </div>
          <div className="div1">0917 828 0047</div>
        </div>
      </div>
      <img className="image-14-icon" alt="" src="/image-14@2x.png" />
      <div className="h1-headline53" data-scroll-to="h1Headline5Text">
        Contact and Clinic Locations
      </div>
      <div className="ellipse-wrapper">
        <img className="ellipse-icon1" alt="" src="/ellipse1.svg" />
      </div>
      <Header
        onServicesTextClick={onServicesTextClick}
        onContactTextClick={onContactTextClick}
        onAboutUsTextClick={onAboutUsTextClick}
        onSignUpTextClick={onSignUpTextClick}
        onFrameContainer3Click={onFrameContainer3Click}
      />
    </div>
  );
};

export default Contact;
