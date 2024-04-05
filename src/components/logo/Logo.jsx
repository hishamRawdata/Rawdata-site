import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ image, style = {} }) => {
  return (
    <div className="header-logo">
      <Link to={process.env.PUBLIC_URL + "/"}>
        <img
          style={style}
          className="dark-logo"
          src={process.env.PUBLIC_URL + image}
          alt="Agency Logo"
        />
      </Link>
    </div>
  );
};

Logo.propTypes = {
  image: PropTypes.string,
  style: PropTypes.object,
};

export default Logo;
