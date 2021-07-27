import React from "react";
import useMovieDB from "../../hooks/useMovieDB";
import SimpleSwiper from "../simpleSwiper/SimpleSwiper";

export default function UpcomingMovieSwiper() {
  const { data = { results: [] } } = useMovieDB("movie/upcoming");
  return <SimpleSwiper slides={data.results} />;
}
