import React from "react";
import PropTypes from "prop-types";
import classes from "./PersonCard.module.scss";
import { Link } from "react-router-dom";

function PersonCard({ poster, name, linkPath }) {
  return (
    <div className={classes.root}>
      <span className={classes.overlay} />
      <Link to={linkPath}>
        <h3>{name?.toUpperCase()}</h3>
        <img src={poster} />
      </Link>
    </div>
  );
}

PersonCard.propTypes = {
  poster: PropTypes.string,
  title: PropTypes.string,
  rate: PropTypes.number,
};

export default PersonCard;
