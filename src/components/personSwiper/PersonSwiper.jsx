import React from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Pagination, Autoplay } from "swiper/core";
import image from "../../helper/image";
import slugigy from "../../helper/slugify";
import { message } from "antd";
import PersonCard from "../personCard/PersonCard";

SwiperCore.use([Pagination, Autoplay]);

export default function PersonSwiper({ slides }) {
  return (
    <Swiper
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
        <SwiperSlide key={slide.id}>
          <PersonCard
            poster={image(slide.profile_path, "w185")}
            name={slide.name}
            linkPath={`/celebrities/${slide.id}/${slugigy(slide?.name)}`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

PersonSwiper.propTypes = {
  slides: PropTypes.array.isRequired,
};
