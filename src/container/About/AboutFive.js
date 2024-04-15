import { useState, useEffect, useRef } from "react";
import SectionTitleTwo from '../../components/SectionTitles/SectionTitleTwo';
import { Link } from "react-router-dom";
import Tilt from 'react-parallax-tilt';
import Parallax from 'parallax-js';

const AboutFive = () => {
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
        <div className="section section-padding-top section-padding-bottom-180">
            <div className="container">

                <div className="row">

                    <div className="col-xl-7 col-lg-6 col-12" data-aos="fade-up">
                        <div className="about-image-area">
                            <div className="about-image">
                                <Tilt scale={scale} transitionSpeed={4000}>
                                    <img src={process.env.PUBLIC_URL + "images/about/about-3.jpg"} alt="" />
                                </Tilt>
                            </div>
                            <div className="about-image">
                                <Tilt scale={scale} transitionSpeed={4000}>
                                    <img src={process.env.PUBLIC_URL + "images/about/about-4.jpg"} alt="" />
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
                                subTitle="Our solutions begin with brand research"
                                title="Inspiring and enabling growth"
                            />

                            <p>Growth, in some form or other, is the most desired change across geographies and cultures. We all want a better tomorrow than today.<br /><br />

                                This universal idea and our own progress from a small garage-like office to a 100-member team have served as inspiration for everyone at Rawdata. <br /><br />

                                That is why Rawdata respects and works towards growth – of our team members, customers, business partners and countless lives connected with these people.</p>

                            {/* <Link className="btn btn-primary btn-hover-secondary mt-xl-12 mt-lg-8 mt-md-6 mt-4" to={process.env.PUBLIC_URL + "/"}>Get Started</Link> */}
                        </div>
                    </div>
                    <div>
                        <h1>Our History</h1>
                        <h5>Growth has been the only constant for us over the years.</h5>
                        <h4>Our Birth</h4>
                        <p>We were 2 people in 2013. Our focus was to grow and help people around us grow.</p>
                        <h4>Childhood</h4>
                        <p>We were 30 people in 2015, working with customers from the US, the UK and the Middle-East. It was also when we became friends with some interesting companies who are still our close business partners.</p>
                        <h4>Adolescence</h4>
                        <p>In 2018, we became a family of 75 members. We had set up processes around new technologies, diversified into products and continued to grow our services business.</p>
                        <h4>The bold and young leader</h4>
                        <p>It is 2021. We are adding value to more small businesses across the world. We have welcomed new partners from Australia and Canada. And (the most exciting part) we are soon launching our flagship product – inTEUtion – for streamlining the container shipping business.</p>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default AboutFive;
