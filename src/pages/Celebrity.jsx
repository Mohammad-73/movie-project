import React from "react";
import { useParams } from "react-router-dom";
import useMovieDB from "../hooks/useMovieDB";
import Container from "../components/layout/Container";
import Seo from "../components/seo/Seo";

export default function Celebrity() {
  const { id } = useParams();
  const { data = {}, loading } = useMovieDB(`person/${id}`);

  return (
    <Container>
      <Seo title={data.name} />
      <p>{data.name}</p>
    </Container>
  );
}
