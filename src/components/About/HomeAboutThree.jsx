import { useState, useEffect, useRef } from "react";
import SectionTitle from "../SectionTitles/SectionTitle";
import SectionTitleTwo from "../SectionTitles/SectionTitleTwo";
import Tilt from "react-parallax-tilt";
import Parallax from "parallax-js";
import { Link } from "react-router-dom";

const HomeAboutThree = () => {
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
        {/* <SectionTitle
          title="We are a trusted growth partner for global companies transforming digitally."
          // subTitle="We are a trusted growth partner for global companies transforming digitally."
        /> */}

        <div className="row">
          <div className="col-xl-7 col-lg-6 col-12" data-aos="fade-up">
            <div className="about-image-area">
              <div className="about-image">
                <Tilt scale={scale} transitionSpeed={4000}>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "images/banner/blog-banner.jpg"
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
                subTitle="See How We Helped Some Interesting Companies Grow"
                title="Our Team"
              />
              <ul>
                <li>
                  Enabling Personal, Professional And Financial Growth For All
                  Team Members. <br />
                  It’s the people’s growth that drives the organization’s
                  growth. At RawData we ensure every team member is given the
                  freedom to learn, explore and grow.
                </li>
                <li>
                  We have no JDs – We believe in matching individual’s strength
                  with the right opportunity
                </li>
                <li>
                  Your opinion matters – We encourage continuous feedback from
                  our team to make everyone’s experience better
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAboutThree;
