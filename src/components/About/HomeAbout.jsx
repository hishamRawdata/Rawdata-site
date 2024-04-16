import { useState, useEffect, useRef } from "react";
import SectionTitle from "../SectionTitles/SectionTitle";
import SectionTitleTwo from "../SectionTitles/SectionTitleTwo";
import Tilt from "react-parallax-tilt";
import Parallax from "parallax-js";
import { Link } from "react-router-dom";

const HomeAbout = () => {
  const [scale] = useState(1.04);
  const sceneEl = useRef(null);

  useEffect(() => {
    const parallaxInstance = new Parallax(sceneEl.current, {
      relativeInput: true,
    });

    parallaxInstance.enable();

    return () => parallaxInstance.disable();
  }, []);
  return (
    <div className="section section-padding-t90 section-padding-bottom-200">
      <div className="container">
        <SectionTitle
          title="We are a trusted growth partner for global companies transforming digitally."
          // subTitle="We are a trusted growth partner for global companies transforming digitally."
        />

        <div className="row">
          <div className="col-xl-7 col-lg-6 col-12" data-aos="fade-up">
            <div className="about-image-area">
              <div className="about-image">
                <Tilt scale={scale} transitionSpeed={4000}>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "images/about/home-one-about/home_agency_about_1.jpg"
                    }
                    alt=""
                  />
                </Tilt>
              </div>

              <div className="about-image">
                <Tilt scale={scale} transitionSpeed={4000}>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "images/about/home-one-about/home_agency_about_2.jpg"
                    }
                    alt=""
                  />
                </Tilt>
              </div>
              <div className="shape shape-1" id="scene" ref={sceneEl}>
                <span data-depth="1">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "images/shape-animation/about-shape-1.png"
                    }
                    alt=""
                  />
                </span>
              </div>
            </div>
          </div>

          <div
            className="col-xl-5 col-lg-6 col-12"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="about-content-area">
              <SectionTitleTwo
                subTitle="Every day brings new challenges"
                title="Innovative Software Solutions Provider"
              />

              <p>
                At our core, we&apos;re a software development powerhouse dedicated
                to envisioning, crafting, and empowering. Like a creative
                agency, we center our focus on vision, product excellence, and
                people-centric solutions. Our approach is characterized by bold
                individuality, unwavering originality, and a refreshingly
                easy-going demeanor. We bring together visionary ideas with
                laser-focused expertise, ensuring that every software solution
                we deliver is executed with unmatched precision, passion, and
                flair.
              </p>

              <Link
                className="btn btn-primary btn-hover-secondary mt-xl-8 mt-lg-8 mt-md-6 mt-4"
                to={process.env.PUBLIC_URL + "/about"}
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
