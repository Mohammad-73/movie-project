import React, { useContext } from "react";
import { HeroHeaderContext } from "../../context/HeroHeaderContext";
import image from "../../helper/image";
import useMovieDB from "../../hooks/useMovieDB";
import SimpleSwiper from "../simpleSwiper/SimpleSwiper";

export default function PopularMovieSwiper() {
  const { data = { results: [] } } = useMovieDB("movie/popular");
  const [, setBg] = useContext(HeroHeaderContext);
  console.log(data.results);
  function changeHeaderBackground(slide) {
    setBg(image(slide.backdrop_path, "w780"));
  }

  return (
    <SimpleSwiper slides={data.results} onHoverSlide={changeHeaderBackground} />
  );
}
