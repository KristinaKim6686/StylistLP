import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper";

export const Slider = ({
  children,
  isNavigation = true,
  isPagination = true,
  isReviewSlides = false,
  sliderClass,
  virtual = true,
}) => {
  const modulesArray = () => {
    let result = [];
    if (isNavigation) {
      result.push(Navigation);
    }
    if (isPagination) {
      result.push(Pagination);
    }
    return result;
  };

  return (
    <>
      {isReviewSlides ? (
        <Swiper
          slidesPerView={1}
          spaceBetween={32}
          navigation={isNavigation}
          pagination={
            isPagination
              ? {
                  clickable: true,
                }
              : false
          }
          modules={modulesArray()}
          className={sliderClass}>
          {children}
        </Swiper>
      ) : (
        <Swiper
          navigation={isNavigation}
          pagination={{ clickable: true }}
          modules={modulesArray()}
          className={sliderClass}>
          {children}
        </Swiper>
      )}
    </>
  );
};
