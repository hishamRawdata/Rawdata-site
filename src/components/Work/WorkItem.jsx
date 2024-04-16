import React from "react";
import PropTypes from "prop-types";

const WorkItem = ({ portfolio }) => {
  return (
    <div className="single-portfolio">
      <div className="thumbnail">
        <img
          style={{
            width: "120px",
            background: `${
              portfolio.title === "CTRL ALT EXPERIENCE"
                ? "rgba(0, 0, 0, 0.8)"
                : ""
            } `,
            padding: "4px",
            borderRadius: "5px",
            // boxShadow: "2px 4px rgb(251, 255, 0)",
          }}
          className="img-fluid"
          src={portfolio.homeImage}
          alt="Portfolio-01"
        />
      </div>
      <div className="content">
        <h5 className="title">
          <a
            href={portfolio.link ? portfolio.link : "#"}
            target="_blank"
            rel="noreferrer"
          >
            {`${portfolio.title.slice(0, 22)}...`}
            <img
              src={process.env.PUBLIC_URL + "/images/icons/arrow-up-right.svg"}
              alt=""
            />
          </a>
        </h5>
        {/* <h5 className="title"><Link to={process.env.PUBLIC_URL + `/work-details/${portfolio.id}`}>{`${portfolio.title.slice(0, 22)}...`} <img src={process.env.PUBLIC_URL + "/images/icons/arrow-up-right.svg"} alt=""/></Link></h5> */}
      </div>
    </div>
  );
};

WorkItem.propTypes = {
  portfolio: PropTypes.object,
};

export default WorkItem;
