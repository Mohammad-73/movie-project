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
const { TabPane } = Tabs;

export default function Home() {
  return (
    <div className={classes.root}>
      <Seo title="Home" />
      <ContainerFullWidth>
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
