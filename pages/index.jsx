import dynamic from "next/dynamic";
import { Swiper, SwiperSlide } from "swiper/react";
import Resume from "../src/components/Resume";
import Layout from "../src/layouts/Layout";
import { servicesSliderProps } from "../src/sliderProps";
import { useState } from "react";
import { addItem } from "../src/HELPERS/ApiCalls";

const PortfolioIsotope = dynamic(
  () => import("../src/components/PortfolioIsotope"),
  {
    ssr: false,
  }
);
const Index = () => {
  const endpoint = "contact";

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    msg: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, msg } = formData;

    try {
      await addItem(endpoint, {
        username,
        email,
        msg,
      });
      setFormData({
        username: "",
        email: "",
        msg: "",
      });
      alert("🚀 🎉 Message sent successfully 🥳✨🚀");
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again later.", error);
    }
  };
  return (
    <Layout pageClassName={"home"}>
      {/* Section - Hero Started */}
      <section
        className="lui-section lui-section-hero lui-gradient-top"
        id="started-section"
      >
        <div className="container">
          {/* Hero Started */}
          <div className="lui-started v-line v-line-left">
            <div className="section hero-started">
              <div
                className="content scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="titles">
                  <div className="lui-subtitle">
                    <span>
                      {" "}
                      Hello, <b>my name is</b>
                    </span>
                  </div>
                  <h1
                    className="title splitting-text-anim-1 scroll-animate"
                    data-splitting="chars"
                    data-animate="active"
                  >
                    <span>
                      <b>Elisaul</b> Batista{" "}
                    </span>
                  </h1>
                  <div className="label lui-subtitle">
                    {" "}
                    I am <strong>Full Stack Developer</strong>
                  </div>
                </div>
                <div className="description">
                  <div>
                    <p>
                      Based in New York, I am an experienced full-stack
                      developer with a passion for creating dynamic and
                      user-friendly web applications. Let's connect and bring
                      your ideas to life.
                    </p>
                  </div>
                </div>
                <div className="bts">
                  <a
                    target="_blank"
                    href="https://docs.google.com/document/d/1UazOLTLVmy54HM3MpewZl7cbA6mziKwnavy2L0lP8hk/edit?usp=sharing"
                    className="btn"
                  >
                    <span>Download CV</span>
                  </a>
                  <a href="#skills-section" className="btn-lnk">
                    {" "}
                    My Skills{" "}
                  </a>
                </div>
              </div>
              <div
                className="slide scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >

                <img
                  decoding="async"
                  src="assets/images/IMG_0896.PNG"
                  alt="<b>Zoé</b> Miller"
                />
                <span className="circle circle-1" />
                <span
                  className="circle img-1"
                  style={{
                    backgroundImage: "url(assets/images/pat-1.png)",
                  }}
                />
                <span
                  className="circle img-1"
                  style={{
                    backgroundImage: "url(assets/images/pat-1.png)",
                  }}
                />
                <span
                  className="circle img-2"
                  style={{
                    backgroundImage: "url(assets/images/pat-2.png)",
                  }}
                />
                <span
                  className="circle img-3"
                  style={{
                    backgroundImage: "url(assets/images/pat-2.png)",
                  }}
                />
              </div>
            </div>
            <div className="lui-bgtitle">
              <span> Web Developer </span>
            </div>
          </div>
        </div>
      </section>
      {/* Section - Services */}
      <section
        className="lui-section lui-gradient-bottom"
        id="services-section"
      >
        {/* Heading */}
        <div className="lui-heading">
          <div className="container">
            <div className="m-titles align-center">
              <h2
                className="m-title splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span> What I Do </span>
              </h2>
              <div
                className="m-subtitle splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span>
                  {" "}
                  my <b>Services</b>{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Services */}
        <div className="v-line v-line-right">
          <div className="container">
            <Swiper
              {...servicesSliderProps}
              className="swiper-container js-services scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <SwiperSlide className="swiper-slide">
                <div className="services-item">
                  <div className="lui-subtitle">
                    <span> Web Development </span>
                  </div>
                  <div className="icon" />
                  <h5 className="lui-title">
                    <span> Web Design &amp; Logo </span>
                  </h5>
                  <div className="lui-text">
                    <div>
                      Web designer crafting captivating website layouts and
                      specializing in professional logo development for
                      businesses, companies, and personal brands.
                    </div>
                  </div>

                  <div
                    className="image"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="services-item">
                  <div className="lui-subtitle">
                    <span>JavaScript</span>
                  </div>
                  <div className="icon"></div>
                  <h5 className="lui-title">
                    <span>Frontend Development</span>
                  </h5>
                  <div className="lui-text">
                    <div>
                      <p>
                        Creating dynamic and interactive user interfaces with
                        JavaScript, enhancing user experiences and functionality
                        across web applications.
                      </p>
                    </div>
                  </div>
                  <div
                    className="image"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="services-item">
                  <div className="lui-subtitle">
                    <span>Node.js</span>
                  </div>
                  <div className="icon"></div>
                  <h5 className="lui-title">
                    <span>Backend Development</span>
                  </h5>
                  <div className="lui-text">
                    <div>
                      <p>
                        Building scalable backend solutions with Node.js for
                        efficient data processing and real-time communication in
                        web applications.
                      </p>
                    </div>
                  </div>
                  <div
                    className="image"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="services-item">
                  <div className="lui-subtitle">
                    <span>React</span>
                  </div>
                  <div className="icon"></div>
                  <h5 className="lui-title">
                    <span>UI/UX Design</span>
                  </h5>
                  <div className="lui-text">
                    <div>
                      <p>
                        Utilizing React's component-based architecture to design
                        responsive and intuitive user interfaces, ensuring
                        exceptional user experience and engagement.
                      </p>
                    </div>
                  </div>
                  <div
                    className="image"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="services-item">
                  <div className="lui-subtitle">
                    <span>PostgreSQL</span>
                  </div>
                  <div className="icon"></div>
                  <h5 className="lui-title">
                    <span>Database Management</span>
                  </h5>
                  <div className="lui-text">
                    <div>
                      <p>
                        Implementing PostgreSQL for robust database management,
                        ensuring data integrity and scalability for reliable
                        performance in web applications.
                      </p>
                    </div>
                  </div>
                  <div
                    className="image"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}
                  />
                </div>
              </SwiperSlide>
              <div className="swiper-pagination" />
            </Swiper>
            <div className="lui-bgtitle">
              <span> Services </span>
            </div>
          </div>
        </div>
      </section>
      {/* Section - Skills */}
      <section className="lui-section lui-gradient-center" id="skills-section">
        {/* Heading */}
        <div className="lui-heading">
          <div className="container">
            <div className="m-titles align-center">
              <h2
                className="m-title splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span> Professional Skills </span>
              </h2>
              <div
                className="m-subtitle splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span>
                  {" "}
                  my <b>Talent</b>{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Skills */}
        <div className="v-line v-line-left">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <div className="skills-items">
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> HTML </span>
                    </h6>
                    <div className="text">
                      <div>
                        <p>
                          HTML stands for Hypertext Markup Language, a standard
                          markup language for creating web pages. It provides
                          structure and meaning to content using tags and
                          attributes.
                        </p>
                      </div>
                    </div>
                    <div className="dots">
                      <div className="dot" style={{ width: "85%" }}>
                        <span />
                      </div>
                    </div>
                    <div className="value">
                    
                    </div>
                  </div>
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> CSS </span>
                    </h6>
                    <div className="text">
                      <div>
                        <p>
                          Cascading Style Sheets (CSS) is a stylesheet language
                          used to describe the presentation of a document
                          written in HTML or XML. It controls the layout,
                          formatting, and appearance of web pages, allowing
                          designers to customize the look and feel of a website.
                        </p>
                      </div>
                    </div>
                    <div className="dots">
                      <div className="dot" style={{ width: "75%" }}>
                        <span />
                      </div>
                    </div>
                  
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <div className="skills-items">
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> JavaScript </span>
                    </h6>
                    <div className="text">
                      <div>
                        <p>
                          JavaScript is a versatile language for creating
                          interactive effects in web browsers, enabling dynamic
                          content manipulation, event handling, and animations.
                          Essential for modern web development, it enhances user
                          experiences and supports responsive web applications.
                        </p>
                      </div>
                    </div>
                    <div className="dots">
                      <div className="dot" style={{ width: "75%" }}>
                        <span />
                      </div>
                    </div>
                   
                  </div>
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> React </span>
                    </h6>
                    <div className="text">
                      <div>
                        <p>
                          React is a JavaScript library for building user
                          interfaces, known for its component-based architecture
                          and efficient rendering. It simplifies UI development
                          by enabling reusable components that manage their own
                          state, making it ideal for building interactive web
                          applications.
                        </p>
                      </div>
                    </div>
                    <div className="dots">
                      <div className="dot" style={{ width: "70%" }}>
                        <span />
                      </div>
                    </div>
                  
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <div className="skills-items">
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> PostgreSQL </span>
                    </h6>
                    <div className="text">
                      <div>
                        <p>
                          PostgreSQL is a powerful open-source relational
                          database known for its reliability and advanced
                          features.
                        </p>
                      </div>
                    </div>
                    <div className="dots">
                      <div className="dot" style={{ width: "90%" }}>
                        <span />
                      </div>
                    </div>
                  
                  </div>
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> Express.js </span>
                    </h6>
                    <div className="text">
                      <div>
                        <p>
                          Express.js is a fast and minimalist Node.js web
                          framework that simplifies the development of web
                          applications and APIs. It provides a robust set of
                          features for handling HTTP requests, routing, and
                          integrating with databases, making it popular for
                          building scalable server-side applications.
                        </p>
                      </div>
                    </div>
                    <div className="dots">
                      <div className="dot" style={{ width: "80%" }}>
                        <span />
                      </div>
                    </div>
                 
                  </div>
                  <div
                    className="skills-item scrolla-element-anim-2 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span>Others Skills/Tools</span>
                    </h6>
                    <div className="text">
                      <div>
                        <p>
                          Bootstrap, Firebase, RESTful API, npm, and Git are
                          essential tools in modern web development. Bootstrap
                          provides responsive design capabilities, Firebase
                          offers real-time database and authentication services,
                          RESTful API enables efficient data exchange, npm
                          manages package dependencies, and Git facilitates
                          version control and collaboration.
                        </p>
                      </div>
                    </div>
                    <div className="dots">
                      <div className="dot" style={{ width: "85%" }}>
                        <span></span>
                      </div>
                    </div>
                   
                  </div>
                </div>
              </div>
            </div>
            <div className="lui-bgtitle">
              <span> Skills </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section - Works */}
      <section className="lui-section lui-gradient-top" id="works-section">
        {/* Heading */}
        <div className="lui-heading">
          <div className="container">
            <div className="m-titles align-center">
              <h2
                className="m-title splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span>Showcase of Premier Projects</span>
              </h2>
              <div
                className="m-subtitle splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span>
                  {" "}
                  my <b>Cases</b>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Works */}
        <div className="v-line v-line-right">
          <div className="container">
            <PortfolioIsotope />
            <div className="lui-bgtitle">
              <span> Portfolio </span>
            </div>
          </div>
        </div>
      </section>

      <Resume />
      <section className="lui-section lui-gradient-bottom" id="contact-section">
        <div className="lui-heading">
          <div className="container">
            <div className="m-titles align-center">
              <h2
                className="m-title splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span> Contact Me </span>
              </h2>
              <div
                className="m-subtitle splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span>
                  {" "}
                  Let’s <b>Talk About Ideas</b>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Contact */}
        <div className="lui-contacts v-line v-line-left">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5">
                <div className="numbers-items">
                  <div
                    className="numbers-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="icon">
                      <i aria-hidden="true" className="far fa-map" />
                    </div>
                    <div className="title">
                      <span> Location </span>
                    </div>
                    <div className="lui-text">
                      <span> Queens, NY </span>
                    </div>
                  </div>
                  <div
                    className="numbers-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="icon">
                      <i aria-hidden="true" className="far fa-user" />
                    </div>
                    <div className="title">
                      <span> Open to Work </span>
                    </div>
                    <div className="lui-text">
                      <span> Available Right Now </span>
                    </div>
                  </div>
                  <div
                    className="numbers-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="icon">
                      <i aria-hidden="true" className="far fa-envelope" />
                    </div>
                    <div className="title">
                      <span> Email </span>
                    </div>
                    <div className="lui-text">
                      <span> elisaulbatista@pursuit.org </span>
                    </div>
                  </div>
                  <div
                    className="numbers-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="icon">
                      <i aria-hidden="true" className="far fa-address-book" />
                    </div>
                    <div className="title">
                      <span> Phone </span>
                    </div>
                    <div className="lui-text">
                      <span> 929-733-1600 </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7">
                <div
                  className="contacts-form scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div
                    className="bg-img"
                    style={{
                      backgroundImage: "url(assets/images/pat-1.png)",
                    }}
                  />
                  <div className="contacts-form">
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                          <div className="group">
                            <label>
                              Your Full Name <b>*</b>
                              <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                required
                              />
                            </label>
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                          <div className="group">
                            <label>
                              Your Email Address <b>*</b>
                              <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                              />
                            </label>
                          </div>
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <div className="group">
                            Your Message <b>*</b>
                            <textarea
                              name="msg"
                              value={formData.msg}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 align-right">
                          <input className="btn" type="submit" value="Send" />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="lui-bgtitle">
              <span> Contact Me </span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Index;
