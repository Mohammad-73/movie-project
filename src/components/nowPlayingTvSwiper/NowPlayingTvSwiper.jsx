import React from "react";
import useMovieDB from "../../hooks/useMovieDB";
import SimpleSwiper from "../simpleSwiper/SimpleSwiper";

export default function NowPlayingTvSwiper() {
  const { data = { results: [] } } = useMovieDB("tv/on_the_air");
  return <SimpleSwiper slides={data.results} />;
}
