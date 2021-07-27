import React from "react";
import useMovieDB from "../../hooks/useMovieDB";
import SimpleSwiper from "../simpleSwiper/SimpleSwiper";

export default function NowPlayingMovieSwiper() {
  const { data = { results: [] } } = useMovieDB("movie/now_playing");
  return <SimpleSwiper slides={data.results} />;
}
