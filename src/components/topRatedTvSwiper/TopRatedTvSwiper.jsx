import React from "react";
import useMovieDB from "../../hooks/useMovieDB";
import SimpleSwiper from "../simpleSwiper/SimpleSwiper";

export default function TopRatedTvSwiper() {
  const { data = { results: [] } } = useMovieDB("tv/top_rated");
  return <SimpleSwiper slides={data.results} />;
}
