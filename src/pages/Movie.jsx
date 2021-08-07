import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useMovieDB from "../hooks/useMovieDB";
import Seo from "../components/seo/Seo";
import MovieInfo from "../components/movieInfo/MovieInfo";
import SimpleSwiper from "../components/simpleSwiper/SimpleSwiper";
import Container from "../components/layout/Container";
import PersonSwiper from "../components/personSwiper/PersonSwiper";
import { Tabs, Divider } from "antd";
import ContainerFullWidth from "../components/layout/ContainerFullWidth";
import swiperBg from "../../public/images/swiper-bg.png";
const { TabPane } = Tabs;

export default function Movie() {
  const { id } = useParams();
  const { data = {}, loading, reFetch } = useMovieDB(`movie/${id}`);
  const similarMovie = useMovieDB(`movie/${id}/similar`);
  const credits = useMovieDB(`movie/${id}/credits`);

  useEffect(() => {
    reFetch();
    similarMovie.reFetch();
    credits.reFetch();
  }, [id]);

  return (
    <>
      <Seo title={data.title} />
      <MovieInfo data={data} />
      <ContainerFullWidth backgroundImage={swiperBg}>
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
      </ContainerFullWidth>
      <ContainerFullWidth backgroundImage={swiperBg}>
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
              SIMILAR MOVIES
            </p>
          </div>
          <SimpleSwiper slides={similarMovie?.data?.results} />
        </Container>
      </ContainerFullWidth>
    </>
  );
}
