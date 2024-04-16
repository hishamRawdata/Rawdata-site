import { useState, useEffect, useRef } from "react";
import SectionTitleTwo from "../../components/SectionTitles/SectionTitleTwo";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import Parallax from "parallax-js";

const PeoplOne = () => {
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
    <div className="section section-padding-top technology-section-padding-bottom-180">
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-6 col-12" data-aos="fade-up">
            <div className="about-image-area">
              <div className="about-image">
                <Tilt scale={scale} transitionSpeed={4000}>
                  <img
                    src={process.env.PUBLIC_URL + "images/about/about-5.jpg"}
                    alt=""
                  />
                </Tilt>
              </div>
              <div className="about-image">
                <Tilt scale={scale} transitionSpeed={4000}>
                  <img
                    src={process.env.PUBLIC_URL + "images/about/about-6.jpg"}
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
                subTitle="Only people growth powers an organization’s growth"
                title="Our belief"
              />
              <h5>Experiment. Fail. Learn. Grow.</h5>
              <p className="mb-2">
                At Rawdata, we don’t have employees, we only have team members.
                Every person is recognized for their individuality. Every
                aspiration is respected and supported. For this reason, we don’t
                follow template JDs. Instead, we have conversations with our
                team members to learn how they wish to grow.
              </p>
              <p className="mb-2">
                Accordingly, we make sure everyone gets the right opportunities
                to continuously progress in their career.
              </p>
              <p>
                In fact, no team member works on a project forever. Everyone
                gets a variety of services and products exposures.
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-20">
          <div
            className="col-xl-5 col-lg-6 col-12"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="about-content-area">
              <SectionTitleTwo
                subTitle="In some ways, we are all one"
                title="Our values"
              />
              <p className="mb-2">
                Not computers, nor the workplace. Rawdata is made up of people
                who respect and live by certain values.
              </p>
              <h5>Empathy</h5>
              <p className="mb-2">We listen. We trust. We cooperate.</p>
              <h5>Learning</h5>
              <p className="mb-2">We question. We challenge. We seek.</p>
              <h5>Commitment</h5>
              <p className="mb-5">
                We are ambitious. We stand accountable. We are (annoyingly)
                persistent.
              </p>
              <h4>Tell us what you’re good at. We’ll find a desk and chair.</h4>
              <Link
                className="btn btn-primary btn-hover-secondary mt-xl-2 mt-lg-2 mt-md-2 mt-2"
                to={process.env.PUBLIC_URL + "/contact"}
              >
                Get Started
              </Link>
            </div>
          </div>

          <div className="col-xl-7 col-lg-6 col-12" data-aos="fade-up">
            <div className="about-image-area mt-2">
              <div className="about-image">
                <Tilt scale={scale} transitionSpeed={4000}>
                  <img
                    src={process.env.PUBLIC_URL + "/images/faq/faq-1.jpg"}
                    // src={process.env.PUBLIC_URL + "/images/faq/faq-2.jpg"}
                    alt=""
                  />
                </Tilt>
              </div>
              <div className="about-image">
                <Tilt scale={scale} transitionSpeed={4000}>
                  <img
                    src={process.env.PUBLIC_URL + "/images/faq/faq-2.jpg"}
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
        </div>
      </div>
    </div>
  );
};

export default PeoplOne;
