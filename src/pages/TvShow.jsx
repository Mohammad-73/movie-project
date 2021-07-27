import React from "react";
import { useParams } from "react-router-dom";
import useMovieDB from "../hooks/useMovieDB";
import Container from "../components/layout/Container";
export default function TvShow() {
  const { id } = useParams();
  const { data = {}, loading } = useMovieDB(`tv/${id}`);

  return (
    <Container>
      <p>{data.name}</p>
    </Container>
  );
}
