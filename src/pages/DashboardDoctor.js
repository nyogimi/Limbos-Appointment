import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./DashboardDoctor.css";

const DashboardDoctor = () => {
  const navigate = useNavigate();

  const [selectedDate, setSelectedDate] = useState(new Date());

  const [today, setToday] = useState("");

  const onSideBarClick = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

  useEffect(() => {
    const todayFormatted = new Intl.DateTimeFormat("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    }).format(new Date());

    setToday(todayFormatted);
  }, []);

  return (
    <div className="dashboard-doctor">
      <div className="dashbaord-doctor">
        <div className="dashboard-doctor1" />
        <img
          className="side-bar-icon"
          alt=""
          src="/side-bar.svg"
          onClick={onSideBarClick}
        />
        <div className="dashboard-content">
          <img
            className="dashboard-content-child"
            alt=""
            src="/rectangle-1.svg"
          />
          <div className="content">
            <div className="patients">
              <div className="patients-child" />
              <div className="patient-list">
                <div className="patient-list-parent">
                  <div className="patient-list1">Patient List</div>
                  <div className="today-parent">
                    <div className="today">Today</div>
                    <img className="frame-child" alt="" src="/vector-3.svg" />
                  </div>
                </div>
                <div className="frame-parent">
                  <div className="group-parent">
                    <img
                      className="frame-item"
                      alt=""
                      src="/group-48095504.svg"
                    />
                    <div className="juan-dela-cruz">Juan Dela Cruz</div>
                    <div className="weekly-visit">Weekly Visit</div>
                    <div className="rectangle-parent">
                      <div className="frame-inner" />
                      <div className="am">9 : 15 AM</div>
                    </div>
                    <div className="jd">JD</div>
                  </div>
                  <div className="frame-group">
                    <div className="ellipse-parent">
                      <div className="ellipse-div" />
                      <div className="frame-child1" />
                      <div className="tr">TR</div>
                    </div>
                    <div className="teresita-ruiz">Teresita Ruiz</div>
                    <div className="routine-checkup">Routine Checkup</div>
                    <div className="rectangle-group">
                      <div className="rectangle-div" />
                      <div className="am1">9 : 30 AM</div>
                    </div>
                  </div>
                  <div className="frame-container">
                    <div className="ellipse-parent">
                      <div className="frame-child2" />
                      <div className="frame-child3" />
                      <div className="mv">MV</div>
                    </div>
                    <div className="maritess-villaverde">{`Maritess Villaverde `}</div>
                    <div className="report">Report</div>
                    <div className="rectangle-container">
                      <div className="frame-child4" />
                      <div className="am1">9 : 50 AM</div>
                    </div>
                  </div>
                  <div className="group-container">
                    <img
                      className="frame-item"
                      alt=""
                      src="/group-48095504.svg"
                    />
                    <div className="shane-madrigal">Shane Madrigal</div>
                    <div className="weekly-visit">Weekly Visit</div>
                    <div className="rectangle-parent">
                      <div className="frame-inner" />
                      <div className="am3">10 : 15 AM</div>
                    </div>
                    <div className="sm">SM</div>
                  </div>
                </div>
              </div>
              <div className="consultation">
                <div className="consultation1">Consultation</div>
                <div className="rectangle-parent1">
                  <div className="frame-child6" />
                  <div className="vector-parent">
                    <img className="frame-child7" alt="" src="/vector-4.svg" />
                    <div className="frame-parent1">
                      <div className="ellipse-container">
                        <div className="frame-child8" />
                        <div className="frame-child9" />
                        <div className="dw">DW</div>
                      </div>
                      <div className="dennis-walter">Dennis Walter</div>
                      <div className="female-28">
                        Female - 28 Years 3 Months
                      </div>
                    </div>
                    <div className="frame-parent2">
                      <div className="last-checked-parent">
                        <div className="last-checked">Last Checked</div>
                        <div className="dr-limbos-on-container">
                          <span className="dr-limbos-on-container1">
                            <span className="dr-limbos">Dr Limbos</span>
                            <span className="on-21-april">
                              {" "}
                              on 21 April 2023
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className="tooth-ache-parent">
                        <div className="tooth-ache">Tooth Ache</div>
                        <div className="observation">Observation</div>
                      </div>
                      <div className="none-parent">
                        <div className="none">None</div>
                        <div className="prescription">Prescription</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
   
            <div className="calendar">
              <Calendar
                onChange={(date) => setSelectedDate(date)}
                value={selectedDate}
                showNavigation
              />

            <div className="today-info">
              <p>Today is: {today}</p>
            </div>
            
            </div>
            <div className="hello-dr-kim">
              <div className="rectangle-parent3">
                <div className="frame-child13" />
                <div className="unsplash7bmdiiqz-j4" />
                <div className="frame-parent5">
                  <div className="visits-for-today-parent">
                    <div className="visits-for-today">Visits for Today</div>
                    <div className="div32">104</div>
                  </div>
                  <div className="oldnew-patients">
                    <img className="vector-icon2" alt="" src="/vector1.svg" />
                    <div className="rectangle-parent4">
                      <div className="frame-child14" />
                      <div className="old-patients">Old Patients</div>
                      <div className="div33">64</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="good-morning-dr-container">
                <span className="dr-limbos-on-container1">
                  <span>Good Morning</span>
                  <b className="dr-limbos1">
                    <span className="span">{` `}</span>
                    <span>Dr. Limbos!</span>
                  </b>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="profile">
          <div className="profile-child" />
          <div className="heading-heading-left-group">
            <div className="heading-heading2">Dr. Limbos</div>
            <div className="ellipse-frame">
              <img className="frame-child15" alt="" src="/ellipse-38@2x.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardDoctor;