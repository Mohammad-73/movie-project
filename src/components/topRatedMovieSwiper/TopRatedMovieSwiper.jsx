import React from "react";
import useMovieDB from "../../hooks/useMovieDB";
import SimpleSwiper from "../simpleSwiper/SimpleSwiper";

export default function TopRatedMovieSwiper() {
  const { data = { results: [] } } = useMovieDB("movie/top_rated");
  return <SimpleSwiper slides={data.results} />;
}
