import React from "react";
import PropTypes from "prop-types";
import classes from "./MovieCard.module.scss";
import { Progress } from "antd";
import { Link } from "react-router-dom";
function MovieCard({ poster, title, rate, linkPath }) {
  return (
    <div className={classes.root}>
      <span className={classes.overlay} />
      <Link to={linkPath}>
        <h3>{title?.toUpperCase()}</h3>
        <img src={poster} />

        <Progress
          style={{
            position: "absolute",
            bottom: 100,
            left: 20,
            zIndex: 2,
          }}
          type="circle"
          strokeColor={{
            "0%": "#ef233c",
            "100%": "#d90429",
          }}
          percent={rate * 10}
          width={60}
        />
      </Link>
    </div>
  );
}

MovieCard.propTypes = {
  poster: PropTypes.string,
  title: PropTypes.string,
  rate: PropTypes.number,
};

export default MovieCard;
