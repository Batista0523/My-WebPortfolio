import { useState } from "react";

const educationData = [
  {
    id: 1,
    title: "Computer Science",
    academy: "LaGuardia Community College",
    dec: " Calculus I, Computer Programming I, General Chemistry I, Mathematical Structures for Computer Science, Computer Programming II, Data Structures and Algorithms, Research Methods in Computers and Society",
    startYear: "2012",
    endYear: "2013",
  },
  {
    id: 4,
    title: "The Web Developer Bootcamp 2024",
    academy: "Udemy",
    dec: "Completed the comprehensive Web Developer Bootcamp 2024 course on Udemy, covering modern web development technologies and practices. Mastered front-end development with HTML5, CSS3, and JavaScript, including frameworks like React.js. Acquired proficiency in server-side scripting using Node.js and Express.js, and database management with MongoDB. Hands-on experience in building responsive web applications, implementing RESTful APIs, and deploying projects using cloud services. Developed a strong foundation in full-stack web development, emphasizing code quality, performance optimization, and responsive design principles.",
    startYear: "2022",
    endYear: "2023",
    
  },
  {
    id: 2,
    title: "Full Stack Developer",
    academy: "Pursuit Fellowship",
    dec: "Frontend Development: JavaScript, React, Next.js, HTML, CSS, Vite, Backend Development: Node.js, Express, RESTful APIs, Database Management: PostgreSQL, Version Control: Git, GitHub, Testing & Debugging: Unit Testing, Integration Testing, Collaboration Tools: Slack, Trello",
    startYear: "2022",
    endYear: "2024",
  },
  {
    id: 3,
    title: "Node,SQL & PostrgreSQL - mastering Backend Web Development",
    academy: "Udemy",
    dec: "Completed Mastering Backend Web Development certification on Udemy, specializing in Node.js, SQL, and PostgreSQL. Proficient in building robust backend systems with Node.js, and skilled in SQL and PostgreSQL for database management. Experienced in deploying scalable web applications and implementing RESTful APIs for enhanced functionality.",
    startYear: "2022",
    endYear: "2023",
    
  },
  {
    id: 5,
    title: "High School",
    academy: "FDR Hight School",
    dec: "Completed courses in Mathematics, Sciences, Humanities, and Electives. Developed skills in time management, collaboration, and problem-solving.",
    startYear: "2007",
    endYear: "2011",
  },
];

const experienceData = [
  {
    id: 1,
    title: "Professional Chauffeur",
    company: "Crestwood Limousine",
    dec: "Experienced professional chauffeur known for delivering exceptional customer service in the transportation industry. Dedicated to providing a safe, comfortable, and punctual driving experience for clients. Skilled in navigating diverse routes with precision while maintaining a focus on passenger comfort and satisfaction. Proven track record of building strong client relationships through attentive service and professionalism. Possesses a thorough knowledge of local traffic regulations and routes to ensure efficient travel. Committed to upholding the highest standards of service excellence in every journey",
    startYear: "2016",
    endYear: false,
  },
  {
    id: 2,
    title: "Project Manager",
    company: "Winter Wolf Tech",
    dec: "Served as a Project Manager at Winter Wolf Tech, overseeing the successful planning, execution, and delivery of multiple projects within scope, budget, and timeline constraints. Led cross-functional teams in Agile methodologies, facilitating sprint planning, daily stand-ups, and retrospectives to ensure efficient project progress. Managed stakeholder communications and expectations, providing regular updates and addressing project risks and issues proactively. Utilized project management tools to track milestones, deliverables, and resource allocation effectively. Demonstrated strong leadership and organizational skills to drive project completion and client satisfaction.",
    startYear: "2019",
    endYear: "2020",
  
  },
  {
    id: 3,
    title: "Software Developer",
    company: "UpWork",
    dec: "Led the development and deployment of custom plugins, enhancing functionality and user experience on the Fiverr platform. Collaborated closely with cross-functional teams to design and implement scalable solutions, leveraging technologies such as JavaScript, Node.js, and PostgreSQL. Contributed to improving platform performance and reliability, ensuring seamless integration of new features. Managed project timelines and deliverables, consistently meeting or exceeding client expectations.",
    startYear: "2014",
    endYear: "2016",
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
