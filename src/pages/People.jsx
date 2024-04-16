import React from "react";
import SEO from "../components/SEO";
import Header from "../partials/header/Header";
import Breadcrumb from "../container/Breadcrumb/Breadcrumb";
import PeoplOne from "../container/People/PeopleOne";
import Footer from "../container/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop";

const People = () => {
  return (
    <React.Fragment>
      <SEO title="Rawdata || People" />
      <Header />
      <Breadcrumb
        image="images/bg/breadcrumb-bg.jpg"
        title="We are a trusted growth partner for global companies transforming digitally."
        content="Home"
        contentTwo="People"
      />
      <PeoplOne />
      <Footer />
      <ScrollToTop />
    </React.Fragment>
  );
};

export default People;
