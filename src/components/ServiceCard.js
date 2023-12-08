import "./ServiceCard.css";

const ServiceCard = () => {
  return (
    <div className="wrapper">
      <div className="heading1" data-scroll-to="headingText">
        What are the services we offer?
      </div>
      <div className="card">
        <b className="card-heading">
          TMJ (Temporomandibular Joints) Orthodontics
        </b>
        <div className="paragraph">
          Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
          dalaracc lacus vel facilisis volutpat est velitolm.
        </div>
        <img className="container-icon" alt="" src="/container@2x.png" />
      </div>
      <div className="card1">
        <b className="card-heading">Dental Cosmetics</b>
        <div className="paragraph1">
          Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
          dalaracc lacus vel facilisis volutpat est velitolm.
        </div>
        <img
          className="image-placeholder-icon"
          alt=""
          src="/image-placeholder.svg"
        />
      </div>
      <div className="card2">
        <b className="card-heading">Dental Surgery</b>
        <div className="paragraph1">
          Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
          dalaracc lacus vel facilisis volutpat est velitolm.
        </div>
        <img className="container-icon1" alt="" src="/container1@2x.png" />
      </div>
      <div className="card3">
        <b className="card-heading">Implant Dentistry</b>
        <div className="paragraph1">
          Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
          dalaracc lacus vel facilisis volutpat est velitolm.
        </div>
        <div className="link" />
        <img className="container-icon2" alt="" src="/container2@2x.png" />
      </div>
      <div className="card4">
        <b className="card-heading">Functional Jaw Orthopedics</b>
        <div className="paragraph4">
          Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
          dalaracc lacus vel facilisis volutpat est velitolm.
        </div>
        <img className="container-icon3" alt="" src="/container3@2x.png" />
      </div>
      <div className="card5">
        <b className="card-heading">Prosthodontics</b>
        <div className="paragraph5">
          Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
          dalaracc lacus vel facilisis volutpat est velitolm.
        </div>
        <img className="container-icon4" alt="" src="/container4@2x.png" />
      </div>
    </div>
  );
};

export default ServiceCard;
