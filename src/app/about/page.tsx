import type { NextPage } from "next";

const About: NextPage = () => {
  return (
    <main>
      <section className="about section" id="about">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="about-content padd-15">
              <div className="row">
                <div className="about-text padd-15">
                  <h2>
                    I am Kethaki;  <span>a student</span>
                  </h2>
                  <p>
                    Hi! My name is Kethaki Karunathilake. I am studying BSc.(Hons) in Information Technology in University of Sri Jayawardenepura. Also, I work as a volunteer in many associations and companies. In addition to this, I have also studied oriental music well and have completed degrees in that field.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="personal-info padd-15">
                  <div className="row">
                    <div className="info-item padd-15">
                      <p>
                        Facebook : <span>Kethaki Karunathilake</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Email : <span>kethakikarunathilake@gmail.com</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Degree : <span>BSc.(Hons) in IT</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Phone : <span>+94 710 111 628</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        City : <span>Gampaha</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Freelance : <span>Available</span>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="buttons padd-15">
                      <a
                        href="https://drive.google.com/file/d/1vM3MLIhqu7vOUDoL0oXDPm52iOHG3HT_/view?usp=sharing"
                        target="_target"
                        className="btn"
                      >
                        Download CV
                      </a>
                      <a
                        href="mailto: kethakikarunathilake@gmail.com"
                        target="_target"
                        data-section-index={0}
                        className="btn hire-me"
                      >
                        Hire Me
                      </a>
                    </div>
                  </div>
                </div>
                <div className="skills padd-15">
                  <div className="row">
                    <div className="skill-item padd-15">
                      <h5>Html/CSS</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "70%" }} />
                        <div className="skill-percent">70%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Java</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "60%" }} />
                        <div className="skill-percent">60%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Javascript</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "60%" }} />
                        <div className="skill-percent">60%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Python</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "70%" }} />
                        <div className="skill-percent">70%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="education padd-15">
                  <h3 className="title">Education</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2022 to Present
                          </h6>
                          <h4 className="timeline-title">
                            University of Sri Jayawardenepura
                          </h4>
                          <p className="timeline-text">
                            Since 2020 I am pursuing BSc.(Hons) in Information Technology degree programme in University of Sri Jayewardenepura.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2020
                          </h6>
                          <h4 className="timeline-title">
                          G.C.E. Advanced Level Examination
                          </h4>
                          <p className="timeline-text">
                            In 2020 I passed my G.C.E. Ordinary Level
                            Examination with 2 "A"s and 1 "B" passes.My z-score is 2.088
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2017 
                          </h6>
                          <h4 className="timeline-title">
                            G.C.E. Ordinary Level Examination
                          </h4>
                          <p className="timeline-text">
                            In 2017 I passed my G.C.E. Ordinary Level
                            Examination with 9 "A"s.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="experience padd-15">
                  <h3 className="title">Experience</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2023 to Present
                          </h6>
                          <h4 className="timeline-title">Teacher in ICT</h4>
                          <p className="timeline-text">
                            From 2023, I'm warking as an ICT teacher in "Sip Saviya" Institute in Gampaha.I teach for 6-11 grades
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2022-2023
                          </h6>
                          <h4 className="timeline-title">Teacher in ICT</h4>
                          <p className="timeline-text">
                           I worked as an ICT teacher in "Sarasavi Pihita" Online Institute from 2022-2023
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2021
                          </h6>
                          <h4 className="timeline-title">Counter Assistant</h4>
                          <p className="timeline-text">
                            I warked as a counter assistant in Peoples' Bank(Pugoda branch) in 2021
                          </p>
                        </div>
                        {/* Timeline Item end */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
