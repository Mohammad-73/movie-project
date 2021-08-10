import React from "react";
import PersonSwiper from "../personSwiper/PersonSwiper";
import useMovieDB from "../../hooks/useMovieDB";

export default function PopularCelebrities() {
  const { data = { results: [] } } = useMovieDB("person/popular");
  return <PersonSwiper slides={data.results} />;
}
