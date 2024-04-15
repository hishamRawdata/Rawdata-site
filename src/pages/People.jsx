import React from "react";
import SEO from "../components/SEO";
import Header from "../partials/header/Header";
import Breadcrumb from "../container/Breadcrumb/Breadcrumb";

const People = () => {
  return (
    <React.Fragment>
      <SEO title="Rawdata || People"  />
      <Header />
      <Breadcrumb
        image="images/bg/breadcrumb-bg.jpg"
        title="We are a trusted growth partner for global companies transforming digitally."
        content="Home"
        contentTwo="People"
      />
    </React.Fragment>
  );
};

export default People;
