import { useState } from "react";

const educationData = [
  {
    id: 1,
    title: "Computer Science",
    academy: "LaGuardia Community College",
    dec: "Coursework in General Studies, Computer Science Foundations, and Mathematics. Developed problem-solving and analytical thinking skills.",
    startYear: "2012",
    endYear: false,
  },
  {
    id: 2,
    title: "Full Stack Development",
    academy: "Pursuit Fellowship",
    dec: "An intensive fellowship specializing in JavaScript, HTML, CSS, React, Node.js, SQL, Test-Driven Development. First Place Hackathon Winner for 'BIKE THE BIG APPLE' and innovative Capstone Leader for CourtIQ project at BlackRock.",
    startYear: "2023",
    endYear: "2024",
  },
  {
    id: 3,
    title: "Node, SQL & PostgreSQL - Mastering Backend Web Development",
    academy: "Udemy",
    dec: "Developed advanced backend skills specializing in Node.js, SQL, and PostgreSQL. Proficient in building robust backend systems and implementing RESTful APIs.",
    startYear: "2023",
    endYear: "2023",
  },
  {
    id: 4,
    title: "Full Stack Web Developer",
    academy: "Udemy",
    dec: "Gained comprehensive expertise in both front-end and back-end technologies. Built responsive web applications, implemented RESTful APIs, and deployed projects using cloud services.",
    startYear: "2023",
    endYear: "2023",
  }
];

const experienceData = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Winter Wolf Tech",
    dec: "Designed and implemented Winter Wolf-Quote-Master, reducing quote generation time from hours to minutes, resulting in an estimated $600K to $1.2M in regained revenue annually. Led project management, coordinated team tasks, and optimized the company’s website based on requirements from the CEO.",
    startYear: "2023",
    endYear: false,
  },
  {
    id: 2,
    title: "Professional Chauffeur",
    company: "Crestwood Limousine",
    dec: "Consistently maintained a 5-star customer satisfaction rating across 200+ high-profile client rides. Delivered a premium client experience ensuring comfort, safety, and professionalism.",
    startYear: "2018",
    endYear: "2023",
  }
];



const Resume = () => {
  const [educationToggle, setEducationToggle] = useState(1);
  const [experienceToggle, setExperienceToggle] = useState(1);
  return (
    <section className="lui-section lui-gradient-bottom" id="resume-section">
      {/* Heading */}
      <div className="lui-heading">
        <div className="container">
          <div className="m-titles align-center">
            <h2
              className="m-title splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span> Resume </span>
            </h2>
            <div
              className="m-subtitle splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span>
                {" "}
                my <b>Story</b>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* History */}
      <div className="v-line v-line-left">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <h5
                className="history-title scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span> Education </span>
              </h5>
              <div className="history-items">
                {educationData.map((education, i) => (
                  <div
                    key={education.id}
                    className={`history-item lui-collapse-item scroll-animate ${
                      educationToggle === education.id ? "opened" : ""
                    }`}
                    data-animate="active"
                  >
                    <h6
                      className={`name lui-collapse-btn ${
                        educationToggle == education.id ? "active" : ""
                      }`}
                      onClick={() =>
                        setEducationToggle(
                          educationToggle == education.id ? null : education.id
                        )
                      }
                    >
                      <span> {education.academy} </span>
                    </h6>
                    <div className="history-content">
                      <div className="subname">
                        <span> {education.title} </span>
                      </div>
                      <div className="date lui-subtitle">
                        <span>
                          {" "}
                          {education.startYear} - {education.endYear}{" "}
                        </span>
                      </div>
                      <div className="text">
                        <div>
                          <p>{education.dec}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <h5
                className="history-title scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span> Experience </span>
              </h5>
              <div className="history-items">
                {experienceData.map((experience) => (
                  <div
                    className={`history-item lui-collapse-item scroll-animate ${
                      experience.id == experienceToggle ? "opened" : ""
                    }`}
                    data-animate="active"
                    key={experience.id}
                  >
                    <h6
                      className={`name lui-collapse-btn ${
                        experienceToggle == experience.id ? " active" : ""
                      }`}
                      onClick={() => setExperienceToggle(experience.id)}
                    >
                      <span> {experience.title} </span>
                    </h6>
                    <div className="history-content">
                      <div className="subname">
                        <span> {experience.company} </span>
                      </div>
                      <div className="date lui-subtitle">
                        <span>
                          {" "}
                          {experience.startYear} -{" "}
                          {experience.endYear ? (
                            experience.endYear
                          ) : (
                            <b>Present</b>
                          )}
                        </span>
                      </div>
                      <div className="text">
                        <div>
                          <p>{experience.dec}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="lui-bgtitle">
            <span> History </span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Resume;
