import React from "react";
import bg from "../../Assets/bg.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { imgArr } from "./arr";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styleSlider from "./Slider.module.scss";

const Slider = ({ width }) => {
  return (
    <div className={styleSlider.sliderBlock}>
      <div className={styleSlider.slider}>
        <Swiper
          slidesPerView={width <= 1200 ? 1 : 4}
          spaceBetween={width <= 1200 ? 100 : 30}
          centeredSlides={true}
          pagination={{
            clickable: true,
            type: "fraction",
          }}
          modules={[Pagination, Navigation]}
          navigation
          className={styleSlider.swiper}
        >
          {imgArr.map((item) => (
            <SwiperSlide
              key={item.id + item.name.toString()}
              className={styleSlider.slide}
            >
              {({ isActive }) => (
                <div>
                  {isActive ? (
                    <div className={styleSlider.activePhoto}>
                      <img
                        src={bg}
                        className={styleSlider.bg}
                        alt="background"
                      />
                      <img
                        src={item.img}
                        className={styleSlider.mainPhoto}
                        alt={item.alt}
                      />
                      <h2 className={styleSlider.mainText}>{item.name}</h2>
                      <p className={styleSlider.mainDescription}>{item.text}</p>
                    </div>
                  ) : (
                    <div>
                      <img
                        src={item.img}
                        className={styleSlider.notActivePhoto}
                        alt={item.alt}
                      />
                      <h2 className={styleSlider.notActiveText}>{item.name}</h2>
                    </div>
                  )}
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
