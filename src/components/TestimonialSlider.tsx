/**import testimonial data */
import { testimonialsData } from "../data";

// /**import swipper */
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../Slider.css";

import { Pagination } from "swiper";

export function TestimonialSlider() {
  return (
    <Swiper
      slidesPerView={"auto"}
      centeredSlides={true}
      spaceBetween={20}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {testimonialsData.map((slide, index) => {
        // destructure slide
        const { image, message, name, web, delay } = slide;
        return (
          // slide
          <SwiperSlide
            key={index}
            className=" bg-white rounded-[20px] border border-accent-primary xl:max-w-[645px] max-h-[340px] pt-[20px] px-[18px] xl:px-[50px] pb-[50px] flex items-start gap-x-[20px] shadow-xl overflow-hidden break-all "
          >
            {/* avatar image */}
            <img src={image} alt="" className="my-2" />
            {/* text */}
            <div>
              <div className="text-lg text-primary font-bold">{name}</div>
              <div className="mb-4 font-semibold text-accent-primary">
                {web}
              </div>
              <blockquote className="text-gray-600 max-w-[380px] text-sm sm:text-xs font-bold overflow-y-auto h-48">
                {message}
              </blockquote>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
