import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useMovieDB from "../hooks/useMovieDB";
import Container from "../components/layout/Container";
import Seo from "../components/seo/Seo";
import TvShowInfo from "../components/tvShowInfo/TvShowInfo";
import SimpleSwiper from "../components/simpleSwiper/SimpleSwiper";
import PersonSwiper from "../components/personSwiper/PersonSwiper";
import { Tabs, Divider } from "antd";
const { TabPane } = Tabs;

export default function TvShow() {
  const { id } = useParams();
  const { data = {}, loading, reFetch } = useMovieDB(`tv/${id}`);
  const similarTvShows = useMovieDB(`tv/${id}/similar`);
  const credits = useMovieDB(`tv/${id}/credits`);

  useEffect(() => {
    reFetch();
    similarTvShows.reFetch();
    credits.reFetch();
  }, [id]);

  return (
    <>
      <Seo title={data.name} />
      <TvShowInfo data={data} />
      <Container>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Cast" key="1">
            <PersonSwiper slides={credits?.data?.cast} />
          </TabPane>
          <TabPane tab="Trailers" key="2">
            Content of Tab Pane 2
          </TabPane>
        </Tabs>
      </Container>

      <Container>
        <div>
          <p
            style={{
              fontFamily: "Zen Tokyo Zoo , cursive",
              fontSize: 20,
              letterSpacing: 2,
              color: "#ef233c",
            }}
          >
            SIMILAR TV SHOWS
          </p>
        </div>
        <SimpleSwiper slides={similarTvShows?.data?.results} />
      </Container>
    </>
  );
}
