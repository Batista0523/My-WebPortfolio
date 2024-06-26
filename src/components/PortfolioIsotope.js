import Isotope from "isotope-layout";
import Link from "next/link";
import { getAllItems } from "../HELPERS/ApiCalls";
import { Fragment, useEffect, useRef, useState } from "react";
const PortfolioIsotope = ({ noViewMore }) => {
  const [items, setItems] = useState([]);
  const endpoint = "project";

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await getAllItems(endpoint);
        setItems(response.data.payload);
      } catch (error) {
        console.error("Error fetching items", error);
      }
    };
    fetchItem();
  }, []);
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    isotope.current = new Isotope(".works-items", {
      itemSelector: ".works-col",
      //    layoutMode: "fitRows",
      percentPosition: true,
      masonry: {
        columnWidth: ".works-col",
      },
      animationOptions: {
        duration: 750,
        easing: "linear",
        queue: false,
      },
    });
    return () => isotope.current.destroy();
  });
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);

  
  return (
    <Fragment>
      <div className="works-box">
        <div className="works-items works-masonry-items row">
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding sorting-photo ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <a
                    href="https://courtiq.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      decoding="async"
                      src="assets/images/courtiq.png"
                      alt="Zorro"
                    />
                    <span className="overlay" />
                  </a>
                </div>
              </div>
              <div className="desc">
                <span className="category"> Full Stack </span>
                <h5 className="name">
                  <Link legacyBehavior href="/work-single">
                    <a>CourtIQ</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                    CourtIQ uses JavaScript, React, Firebase, Express,
                    PostgreSQL, and APIs to provide NBA fans with data-driven
                    insights for informed betting decisions. Leading
                    development, I collaborated with colleagues to revolutionize
                    the fan experience, implementing real-time updates and a
                    bespoke GPT model. Overcoming technical challenges, we
                    ensure high code standards and continually innovate to
                    exceed user expectations in NBA fandom.
                  </p>
                </div>
                <a
                  legacyBehavior
                  target="_blank"
                  href="https://courtiq.netlify.app"
                >
                  <p className="lnk">See project</p>
                </a>
              </div>
              <a
                target="_blank"
                href="https://github.com/Batista0523/Capstone-front-end"
                className="lnk"
              >
                GitHub
              </a>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding sorting-ui-ux-design ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <a
                    target="_blank"
                    legacyBehavior
                    href="https://batistack.com"
                  >
                    <a>
                      <img
                        decoding="async"
                        src="assets/images/batistack.png"
                        alt="Gooir"
                      />
                      <span className="overlay" />
                    </a>
                  </a>
                </div>
              </div>
              <div className="desc">
                <span className="category"> Front End </span>
                <h5 className="name">
                  <Link legacyBehavior href="/work-single">
                    <a>Batistack</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                    Batistack is a dynamic website crafted with React, Next.js,
                    JavaScript, Bootstrap, and CSS, showcasing the expertise of
                    a premier web development company. Integrated with an API
                    for seamless contact form functionality, Batistack presents
                    a polished and informative platform. It highlights my
                    commitment to excellence in web development, offering a
                    comprehensive view of my services and capabilities.
                  </p>
                </div>
                <a target="_blank" legacyBehavior href="https://batistack.com">
                  <a className="lnk">See project</a>
                </a>
              </div>
              <a
                target="_blank"
                legacyBehavior
                href="https://github.com/Batista0523/batistack-front-pro"
              >
                <a className="lnk">GitHub</a>
              </a>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>

          {/* <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-development sorting-photo ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="/work-single">
                    <a>
                      <img
                        decoding="async"
                        src="assets/images/single6.jpg"
                        alt="Kana"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> Development, Photography </span>
                <h5 className="name">
                  <Link legacyBehavior href="/work-single">
                    <a>Kana</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                </div>
                <Link legacyBehavior href="/work-single">
                  <a className="lnk">See project</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div> */}
        </div>
      </div>
    </Fragment>
  );
};
export default PortfolioIsotope;
