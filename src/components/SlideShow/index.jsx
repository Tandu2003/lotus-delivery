import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./SlideShow.scss";
import { Link } from "react-router-dom";

const Slideshow = ({ slideImages }) => {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      speed={1000}
    >
      {slideImages.map((slideImage, index) => (
        <SwiperSlide key={index}>
          <img src={slideImage.image} alt={slideImage.alt} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slideshow;
