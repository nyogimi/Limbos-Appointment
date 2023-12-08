import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Property1DayIndonesian from "../components/Property1DayIndonesian";
import VariantOn from "../components/VariantOn";
import "./DashboardDoctor.css";

const DashboardDoctor = () => {
  const navigate = useNavigate();

  const onSideBarClick = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

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
              <div className="calendar-child" />
              <div className="december-2023-parent">
                <div className="december-2023">December 2023</div>
                <div className="icons-parent">
                  <img className="icons" alt="" src="/icons.svg" />
                  <img className="icons" alt="" src="/icons1.svg" />
                </div>
                <div className="line-div" />
                <Property1DayIndonesian
                  sen="Sun"
                  property1DayIndonesianWidth="45.1px"
                  property1DayIndonesianPosition="absolute"
                  property1DayIndonesianTop="103.8px"
                  property1DayIndonesianLeft="4.8px"
                  property1DayIndonesianHeight="25.1px"
                  senFontWeight="unset"
                  senFontFamily="Poppins"
                  senColor="#2b2b36"
                />
                <Property1DayIndonesian
                  sen="Mon"
                  property1DayIndonesianWidth="45.1px"
                  property1DayIndonesianPosition="absolute"
                  property1DayIndonesianTop="103.8px"
                  property1DayIndonesianLeft="58.3px"
                  property1DayIndonesianHeight="25.1px"
                  senFontWeight="unset"
                  senFontFamily="Poppins"
                  senColor="#2b2b36"
                />
                <Property1DayIndonesian
                  sen="Tue"
                  property1DayIndonesianWidth="45.1px"
                  property1DayIndonesianPosition="absolute"
                  property1DayIndonesianTop="103.8px"
                  property1DayIndonesianLeft="111.9px"
                  property1DayIndonesianHeight="25.1px"
                  senFontWeight="unset"
                  senFontFamily="Poppins"
                  senColor="#2b2b36"
                />
                <Property1DayIndonesian
                  sen="Wed"
                  property1DayIndonesianWidth="45.1px"
                  property1DayIndonesianPosition="absolute"
                  property1DayIndonesianTop="103.8px"
                  property1DayIndonesianLeft="165.4px"
                  property1DayIndonesianHeight="25.1px"
                  senFontWeight="unset"
                  senFontFamily="Poppins"
                  senColor="#2b2b36"
                />
                <Property1DayIndonesian
                  sen="Thu"
                  property1DayIndonesianWidth="45.1px"
                  property1DayIndonesianPosition="absolute"
                  property1DayIndonesianTop="103.8px"
                  property1DayIndonesianLeft="218.9px"
                  property1DayIndonesianHeight="25.1px"
                  senFontWeight="unset"
                  senFontFamily="Poppins"
                  senColor="#2b2b36"
                />
                <Property1DayIndonesian
                  sen="FrI"
                  property1DayIndonesianWidth="45.1px"
                  property1DayIndonesianPosition="absolute"
                  property1DayIndonesianTop="103.8px"
                  property1DayIndonesianLeft="272.4px"
                  property1DayIndonesianHeight="25.1px"
                  senFontWeight="unset"
                  senFontFamily="Poppins"
                  senColor="#2b2b36"
                />
                <Property1DayIndonesian
                  sen="SAT"
                  property1DayIndonesianWidth="45.1px"
                  property1DayIndonesianPosition="absolute"
                  property1DayIndonesianTop="103.8px"
                  property1DayIndonesianLeft="326px"
                  property1DayIndonesianHeight="25.1px"
                  senFontWeight="unset"
                  senFontFamily="Poppins"
                  senColor="#2b2b36"
                />
                <VariantOn
                  prop="4"
                  variantOnWidth="33.8px"
                  variantOnPosition="absolute"
                  variantOnTop="143.1px"
                  variantOnLeft="4.8px"
                  variantOnOpacity="0"
                  divHeight="108.4%"
                  divWidth="111.24%"
                  divColor="#2b2b36"
                />
                <VariantOn
                  prop="5"
                  variantOnWidth="33.8px"
                  variantOnPosition="absolute"
                  variantOnTop="143.1px"
                  variantOnLeft="60.2px"
                  variantOnOpacity="0"
                  divHeight="108.4%"
                  divWidth="111.24%"
                  divColor="#2b2b36"
                />
                <VariantOn
                  prop="6"
                  variantOnWidth="33.8px"
                  variantOnPosition="absolute"
                  variantOnTop="143.1px"
                  variantOnLeft="115.6px"
                  variantOnOpacity="0"
                  divHeight="108.4%"
                  divWidth="111.24%"
                  divColor="#2b2b36"
                />
                <VariantOn
                  prop="7"
                  variantOnWidth="33.8px"
                  variantOnPosition="absolute"
                  variantOnTop="143.1px"
                  variantOnLeft="171px"
                  variantOnOpacity="0"
                  divHeight="108.4%"
                  divWidth="111.24%"
                  divColor="#2b2b36"
                />
                <div className="days">
                  <div className="div2">1</div>
                </div>
                <div className="days1">
                  <div className="div2">2</div>
                </div>
                <div className="days2">
                  <div className="div2">3</div>
                </div>
                <div className="days3">
                  <div className="div2">4</div>
                </div>
                <div className="days4">
                  <div className="div2">5</div>
                </div>
                <div className="days5">
                  <div className="div2">6</div>
                </div>
                <div className="days6">
                  <div className="div2">7</div>
                </div>
                <div className="days7">
                  <div className="div2">8</div>
                </div>
                <div className="days8">
                  <div className="div2">9</div>
                </div>
                <div className="days9">
                  <div className="div2">10</div>
                </div>
                <div className="days10">
                  <div className="div2">11</div>
                </div>
                <div className="days11">
                  <div className="div2">12</div>
                </div>
                <div className="days12">
                  <div className="div2">13</div>
                </div>
                <div className="days13">
                  <div className="div15">14</div>
                  <div className="days-child" />
                  <div className="days-item" />
                </div>
                <div className="days14">
                  <div className="div2">15</div>
                </div>
                <div className="days15">
                  <div className="div2">16</div>
                </div>
                <div className="days16">
                  <div className="div18">17</div>
                </div>
                <div className="days17">
                  <div className="div2">18</div>
                </div>
                <div className="days18">
                  <div className="div2">19</div>
                </div>
                <div className="days19">
                  <div className="div2">20</div>
                </div>
                <div className="days20">
                  <div className="div2">21</div>
                </div>
                <div className="days21">
                  <div className="div2">22</div>
                </div>
                <div className="days22">
                  <div className="div2">23</div>
                </div>
                <div className="days23">
                  <div className="div2">24</div>
                </div>
                <div className="days24">
                  <div className="div2">25</div>
                </div>
                <div className="days25">
                  <div className="div2">26</div>
                </div>
                <div className="days26">
                  <div className="div2">27</div>
                </div>
                <div className="days27">
                  <div className="div2">28</div>
                </div>
                <div className="days28">
                  <div className="div2">29</div>
                </div>
                <div className="days29">
                  <div className="div2">30</div>
                </div>
                <div className="calendar-parent">
                  <div className="calendar1">Calendar</div>
                  <img className="icons" alt="" src="/icons2.svg" />
                </div>
              </div>
              <div className="frame-parent3">
                <div className="upcoming-parent">
                  <b className="upcoming">Upcoming</b>
                  <div className="view-all">View All</div>
                </div>
                <div className="frame-child10" />
                <div className="rectangle-parent2">
                  <div className="frame-child11" />
                  <div className="frame-parent4">
                    <div className="heading-heading-left-parent">
                      <div className="heading-heading">
                        Montly doctor’s meet
                      </div>
                      <div className="heading-heading1">
                        8 April, 2021 | 04:00 PM
                      </div>
                    </div>
                    <div className="frame-child12" />
                    <b className="m">M</b>
                  </div>
                </div>
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
