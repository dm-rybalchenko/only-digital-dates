import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";


export default function SliderDescriptions({ categories }: { categories: ICategory[] }) {

  return (
    <div className="slider__buttons">
      <div className="slider-wrapper">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".slider__button.left",
            prevEl: ".slider__button.right",
          }}
          spaceBetween={30}
          slidesPerView={2}
		  breakpoints={{850: {slidesPerView: 3}}}
        >
          {categories.map((item) => (
            <SwiperSlide key={item.description}>
              <div className="slider__item-title">{item.title}</div>
              <div className="slider__item-text">{item.description}</div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <button className="slider__button left"></button>
      <button className="slider__button right"></button>
    </div>
  );
}
