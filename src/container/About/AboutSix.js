import { useState, useEffect, useRef } from "react";
import SectionTitleTwo from '../../components/SectionTitles/SectionTitleTwo';
import { Link } from "react-router-dom";
import Tilt from 'react-parallax-tilt';
import Parallax from 'parallax-js';


const AboutSix = () => {
    const [scale] = useState(1.04);
    const sceneEl = useRef(null);

    useEffect(() => {
        const parallaxInstance = new Parallax(sceneEl.current, {
            relativeInput: true,
        })

        parallaxInstance.enable();

        return () => parallaxInstance.disable();

    }, [])
    return (
        <div className="section section-padding-top technology-section-padding-bottom-180">
            <div className="container">

                <div className="row">

                    <div className="col-xl-7 col-lg-6 col-12" data-aos="fade-up">
                        <div className="about-image-area">
                            <div className="about-image">
                                <Tilt scale={scale} transitionSpeed={4000}>
                                    <img src={process.env.PUBLIC_URL + "images/about/about-5.jpg"} alt="" />
                                </Tilt>
                            </div>
                            <div className="about-image">
                                <Tilt scale={scale} transitionSpeed={4000}>
                                    <img src={process.env.PUBLIC_URL + "images/about/about-6.jpg"} alt="" />
                                </Tilt>
                            </div>
                            <div className="shape shape-1" id="scene" ref={sceneEl}>
                                <span data-depth="1"><img src={process.env.PUBLIC_URL + "images/shape-animation/about-shape-1.png"} alt="" /></span>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-5 col-lg-6 col-12" data-aos="fade-up" data-aos-delay="300">
                        <div className="about-content-area">
                            <SectionTitleTwo
                                subTitle="How we work"
                                title="Our SOP for growth"
                            />
                            <div style={{ marginBottom: "10px" }}>
                                <h6>Empathize</h6>
                                <p>We ask the right questions to understand your challenges.</p>
                            </div>
                            <div style={{ marginBottom: "10px" }}>
                                <h6>Solutionize</h6>
                                <p>We work closely with you to implement a solution that addresses your challenges and goes beyond</p>
                            </div>
                            <div style={{ marginBottom: "10px" }}>
                                <h6>Continued support</h6>
                                <p>We remain with you even after delivery to help you make the best of the solution.</p>
                            </div>

                            <Link className="btn btn-primary btn-hover-secondary mt-xl-12 mt-lg-8 mt-md-6 mt-4" to={process.env.PUBLIC_URL + "/"}>Get Started</Link>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default AboutSix;
