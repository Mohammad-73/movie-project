import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

export default function Seo({ title, discription }) {
  return (
    <Helmet>
      <title>{title} | Anduril Movie</title>
      <meta content={discription} name="discription" />
    </Helmet>
  );
}

Seo.defaultProps = {
  title: "Fill Title",
  discription: "Anduril Movie Database",
};

Seo.propTypes = {
  title: PropTypes.string,
  discription: PropTypes.string,
};
