import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useMovieDB from "../hooks/useMovieDB";
import Container from "../components/layout/Container";
import Seo from "../components/seo/Seo";
import CelebrityInfo from "../components/celebrityInfo/CelebrityInfo";

export default function Celebrity() {
  const { id } = useParams();
  const { data = {}, loading, reFetch } = useMovieDB(`person/${id}`);
  const personCredit = useMovieDB(`person/${id}/movie_credits`);

  console.log("celebrity", data);
  console.log("person Credit", personCredit);

  useEffect(() => {
    reFetch();
    personCredit.reFetch();
  }, [id]);

  return (
    <>
      <Seo title={data.name} />
      <CelebrityInfo data={data} personCredit={personCredit} />
    </>
  );
}
