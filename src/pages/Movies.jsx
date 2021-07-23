import React, { useEffect, useState } from "react";
// import antd
import { Row, Col, Card, Button } from "antd";
const { Meta } = Card;
// import swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

import SwiperCore, { Pagination } from "swiper/core";
import useMovieDB from "../hooks/useMovieDB";
import { Link } from "react-router-dom";

SwiperCore.use([Pagination]);

export default function Home() {
  const { data: upcomingMovieData = {} } = useMovieDB("movie/upcoming");
  const { data: PopularMovieData = {} } = useMovieDB("movie/popular");
  const { data: topRatedMovieData = {} } = useMovieDB("movie/top_rated");
  const { data: nowPlayingMovieData = {} } = useMovieDB("movie/now_playing");
  console.log(upcomingMovieData);
  return (
    <>
      {/* upcoming */}
      <Row gutter={[24, 24]}>
        <Link to="/upcoming">
          <Button
            style={{
              fontFamily: "Zen Tokyo Zoo , cursive",
              fontSize: 24,
              color: "#75391d",
            }}
            type="link"
          >
            Upcoming Movies
          </Button>
        </Link>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          centeredSlides={true}
          grabCursor={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          className="mySwiper"
        >
          {upcomingMovieData.results &&
            upcomingMovieData.results.map((movie) => (
              <SwiperSlide>
                <Link to={`/movies/${movie.id}`}>
                  <Card
                    type="inner"
                    bordered={false}
                    cover={
                      <img
                        alt={movie.original_title}
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      />
                    }
                  >
                    <Meta title={movie.original_title} />
                  </Card>
                </Link>
              </SwiperSlide>
            ))}
        </Swiper>
      </Row>
      {/* Popular */}
      <Row gutter={[24, 24]}>
        <Link to="/popular">
          <Button
            style={{
              fontFamily: "Zen Tokyo Zoo , cursive",
              fontSize: 24,
              color: "#75391d",
            }}
            type="link"
          >
            Popular Movies
          </Button>
        </Link>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          centeredSlides={true}
          grabCursor={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          className="mySwiper"
        >
          {PopularMovieData.results &&
            PopularMovieData.results.map((movie) => (
              <SwiperSlide>
                <Link to={`/movies/${movie.id}`}>
                  <Card
                    type="inner"
                    bordered={false}
                    cover={
                      <img
                        alt={movie.original_title}
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      />
                    }
                  >
                    <Meta title={movie.original_title} />
                  </Card>
                </Link>
              </SwiperSlide>
            ))}
        </Swiper>
      </Row>
      {/* top rated */}
      <Row gutter={[24, 24]}>
        <Link to="/toprated">
          <Button
            style={{
              fontFamily: "Zen Tokyo Zoo , cursive",
              fontSize: 24,
              color: "#75391d",
            }}
            type="link"
          >
            Top Rated Movies
          </Button>
        </Link>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          centeredSlides={true}
          grabCursor={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          className="mySwiper"
        >
          {topRatedMovieData.results &&
            topRatedMovieData.results.map((movie) => (
              <SwiperSlide>
                <Link to={`/movies/${movie.id}`}>
                  <Card
                    type="inner"
                    bordered={false}
                    cover={
                      <img
                        alt={movie.original_title}
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      />
                    }
                  >
                    <Meta title={movie.original_title} />
                  </Card>
                </Link>
              </SwiperSlide>
            ))}
        </Swiper>
      </Row>
      {/* now playing */}
      <Row gutter={[24, 24]}>
        <Link to="/nowplaying">
          <Button
            style={{
              fontFamily: "Zen Tokyo Zoo , cursive",
              fontSize: 24,
              color: "#75391d",
            }}
            type="link"
          >
            Now Playing Movies
          </Button>
        </Link>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          centeredSlides={true}
          grabCursor={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          className="mySwiper"
        >
          {nowPlayingMovieData.results &&
            nowPlayingMovieData.results.map((movie) => (
              <SwiperSlide>
                <Link to={`/movies/${movie.id}`}>
                  <Card
                    type="inner"
                    bordered={false}
                    cover={
                      <img
                        alt={movie.original_title}
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      />
                    }
                  >
                    <Meta title={movie.original_title} />
                  </Card>
                </Link>
              </SwiperSlide>
            ))}
        </Swiper>
      </Row>
    </>
  );
}
