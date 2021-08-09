import React from "react";
import useMovieDB from "../../hooks/useMovieDB";
import SimpleSwiper from "../simpleSwiper/SimpleSwiper";

export default function PopularTvSwiper() {
  const { data = { results: [] } } = useMovieDB("tv/popular");
  return <SimpleSwiper slides={data.results} />;
}
