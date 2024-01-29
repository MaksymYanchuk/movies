import PropTypes from "prop-types";
import { Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import { CustomArrow } from "../style/Button";


import "swiper/css";
import "swiper/css/navigation";

const Slider = ({ children }) => {
  return (
    <Swiper
      modules={[Navigation]}
      loop={true}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      breakpoints={{
        0: { slidesPerView: 2, spaceBetween: 10, centeredSlides: true},
        568: { slidesPerView: 3, spaceBetween: 10, centeredSlides: true},
        768: { slidesPerView: 3, spaceBetween: 10 },
        992: { slidesPerView: 4, spaceBetween: 12 },
        1280: { slidesPerView: 4.5, spaceBetween: 14 },
      }}
    >
      {children}

      <CustomArrow
        position={"relative"}
        width={"20px"}
        height={"20px"}
        className="swiper-button-next"
        border={"5px"}
      />
      <CustomArrow
        position={"relative"}
        width={"20px"}
        height={"20px"}
        transform={"rotate(-225deg)"}
        className="swiper-button-prev"
        border={"5px"}
      />
    </Swiper>
  );
};

Slider.propTypes = {
  children: PropTypes.array.isRequired,
};

export default Slider;
