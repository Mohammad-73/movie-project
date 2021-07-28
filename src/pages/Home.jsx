import React from "react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

import Container from "../components/layout/Container";
import UpcomingMovieSwiper from "../components/upcomingMovieSwiper/UpcomingMovieSwiper";
import TopRatedMovieSwiper from "../components/topRatedtopRated/TopRatedMovieSwiper";
import NowPlayingMovieSwiper from "../components/nowPlayingMovieSwiper/NowPlayingMovieSwiper";
import Seo from "../components/seo/Seo";

export default function Home() {
  return (
    <>
      <Seo title="Home" />
      <Container>
        <UpcomingMovieSwiper />
      </Container>
      <Container>
        <TopRatedMovieSwiper />
      </Container>
      <Container>
        <NowPlayingMovieSwiper />
      </Container>
    </>
  );
}
