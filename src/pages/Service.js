import React from 'react';
import SEO from '../components/SEO';
import Header from "../partials/header/Header";
import Breadcrumb from '../container/Breadcrumb/Breadcrumb';
import ServiceIconBoxTwo from '../container/service/ServiceIconBoxTwo';
import ServiceSkill from '../container/service/ServiceSkill';
import AboutSix from '../container/About/AboutSix';
import FunfactTwo from '../container/Funfact/FunfactTwo';
import ContactInformationThree from '../container/ContactInformation/ContactInformationThree';
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop.jsx';
import BrandContainer from '../container/Brand/BrandContainer.js';


const Service = () => {
    return (
        <React.Fragment>
            <SEO title="Rawdata || Service" />
            <Header />
            <Breadcrumb
                image="images/bg/breadcrumb-bg-three.jpg"
                // title="We work with bold brands that we believe in"
                title="Technology Solutions For Your Growth Challenges"
                content="Home"
                contentTwo="Solutions"
            />
            <AboutSix />
            <ServiceIconBoxTwo />
            {/* <ServiceSkill /> */}
            <FunfactTwo />
            <BrandContainer classOption="section-padding-bottom" />
            <ContactInformationThree />
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    )
}

export default Service;



