import React from "react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import { Tabs } from "antd";
import Container from "../components/layout/Container";
import UpcomingMovieSwiper from "../components/upcomingMovieSwiper/UpcomingMovieSwiper";
import TopRatedMovieSwiper from "../components/topRatedtopRated/TopRatedMovieSwiper";
import NowPlayingMovieSwiper from "../components/nowPlayingMovieSwiper/NowPlayingMovieSwiper";
import Seo from "../components/seo/Seo";
import ContainerFullWidth from "../components/layout/ContainerFullWidth";
import classes from "./Home.module.scss";
import swiperBg from "../../public/images/swiper-bg.png";
import trilogyBg from "../../public/images/trilogy-bg.jpg";
import franchiseBg from "../../public/images/franchise-bg.jpg";
const { TabPane } = Tabs;

export default function Home() {
  return (
    <div className={classes.root}>
      <Seo title="Home" />
      <ContainerFullWidth backgroundImage={swiperBg}>
        <Container>
          <div className={classes.title}>
            <p style={{ fontFamily: "Zen Tokyo Zoo , cursive" }}>POPULAR</p>
          </div>
          <Tabs defaultActiveKey="1">
            <TabPane tab="MOVIE" key="1">
              <UpcomingMovieSwiper />
            </TabPane>
            <TabPane tab="TV SHOW" key="2">
              Content of Tab Pane 2
            </TabPane>
          </Tabs>
        </Container>
      </ContainerFullWidth>
      <ContainerFullWidth>
        <div
          className={classes.bg}
          style={{
            backgroundImage: `linear-gradient(rgb(00 00 00/100%),rgb(43 45 66/50%),rgb(217 4 41/50%),rgb(217 4 41/50%),rgb(217 4 41/50%),rgb(43 45 66/50%),rgb(00 00 00/100%)), url(${trilogyBg})`,
          }}
        >
          <p>Best Trilogy Movies </p>
        </div>
      </ContainerFullWidth>
      <ContainerFullWidth backgroundImage={swiperBg}>
        <Container>
          <div className={classes.title}>
            <p style={{ fontFamily: "Zen Tokyo Zoo , cursive" }}>TOP RATED</p>
          </div>
          <Tabs defaultActiveKey="1">
            <TabPane tab="MOVIE" key="1">
              <TopRatedMovieSwiper />
            </TabPane>
            <TabPane tab="TV SHOW" key="2">
              Content of Tab Pane 2
            </TabPane>
          </Tabs>
        </Container>
      </ContainerFullWidth>
      <ContainerFullWidth>
        <div
          className={classes.bg}
          style={{
            backgroundImage: `linear-gradient(rgb(00 00 00/100%),rgb(43 45 66/50%),rgb(217 4 41/50%),rgb(217 4 41/50%),rgb(217 4 41/50%),rgb(43 45 66/50%),rgb(00 00 00/100%)), url(${franchiseBg})`,
          }}
        >
          <p>Best Franchise Movies </p>
        </div>
      </ContainerFullWidth>
      <ContainerFullWidth backgroundImage={swiperBg}>
        <Container>
          <div className={classes.title}>
            <p style={{ fontFamily: "Zen Tokyo Zoo , cursive" }}>NOW PLAYING</p>
          </div>
          <Tabs defaultActiveKey="1">
            <TabPane tab="MOVIE" key="1">
              <NowPlayingMovieSwiper />
            </TabPane>
            <TabPane tab="TV SHOW" key="2">
              Content of Tab Pane 2
            </TabPane>
          </Tabs>
        </Container>
      </ContainerFullWidth>
    </div>
  );
}
