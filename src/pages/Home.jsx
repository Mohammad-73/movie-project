import React from "react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

import Container from "../components/layout/Container";
import UpcomingMovieSwiper from "../components/upcomingMovieSwiper/UpcomingMovieSwiper";
import TopRatedMovieSwiper from "../components/topRatedtopRated/TopRatedMovieSwiper";
import NowPlayingMovieSwiper from "../components/nowPlayingMovieSwiper/NowPlayingMovieSwiper";

export default function Home() {
  return (
    <>
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
