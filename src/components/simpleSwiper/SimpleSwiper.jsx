import React from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Pagination, Autoplay } from "swiper/core";
import MovieCard from "../movieCard/MovieCard";
import image from "../../helper/image";
import slugify from "../../helper/slugify";
import { message } from "antd";

SwiperCore.use([Pagination, Autoplay]);

export default function SimpleSwiper({
  slides,
  onHoverSlide,
  onHoverOutSlide,
}) {
  return (
    <Swiper
      style={{ marginBottom: 30 }}
      pagination={{
        clickable: true,
      }}
      className="mySwiper"
      autoplay={{ delay: 5000 }}
      pagination={{ dynamicBullets: true }}
      breakpoints={{
        320: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        480: {
          slidesPerView: 3,
          spaceBetween: 20,
        },

        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
      }}
    >
      {slides?.map((slide) => (
        <SwiperSlide
          key={slide.id}
          {...(onHoverOutSlide ? { onMouseLeave: onHoverOutSlide } : {})}
          {...(onHoverSlide ? { onMouseEnter: () => onHoverSlide(slide) } : {})}
        >
          <MovieCard
            poster={image(slide.poster_path, "w342")}
            title={slide.title}
            rate={slide.vote_average}
            linkPath={`/movies/${slide.id}/${slugify(slide?.title)}`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

SimpleSwiper.propTypes = {
  slides: PropTypes.array.isRequired,
};
