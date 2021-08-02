import React from "react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

import Container from "../components/layout/Container";
import UpcomingMovieSwiper from "../components/upcomingMovieSwiper/UpcomingMovieSwiper";
import TopRatedMovieSwiper from "../components/topRatedtopRated/TopRatedMovieSwiper";
import NowPlayingMovieSwiper from "../components/nowPlayingMovieSwiper/NowPlayingMovieSwiper";
import Seo from "../components/seo/Seo";
import ContainerFullWidth from "../components/layout/ContainerFullWidth";

export default function Home() {
  return (
    <>
      <Seo title="Home" />
      <ContainerFullWidth>
        <Container>
          <UpcomingMovieSwiper />
        </Container>
      </ContainerFullWidth>
      <ContainerFullWidth>
        <Container>
          <TopRatedMovieSwiper />
        </Container>
      </ContainerFullWidth>
      <ContainerFullWidth>
        <Container>
          <NowPlayingMovieSwiper />
        </Container>
      </ContainerFullWidth>
    </>
  );
}
