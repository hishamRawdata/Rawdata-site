import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const FooterLinkItem = ({ data }) => {
  return (
    <div className="footer-widget">
      <h4 className="footer-widget-title">{data.title}</h4>
      <div className="footer-widget-content">
        <ul>
          {data.list.map((single, key) => (
            <li key={key}>
              <a to={single.url} href={single.url} style={{ whiteSpace: "nowrap" }}>
                {single.text}
                {single?.badge && (
                  <span className="ft-badge">{single.badge}</span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

FooterLinkItem.propTypes = {
  data: PropTypes.object,
};

export default FooterLinkItem;
