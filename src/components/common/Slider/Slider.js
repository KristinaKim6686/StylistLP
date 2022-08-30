import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Zoom } from "swiper";

export const Slider = ({
  children,
  isNavigation = false,
  isPagination = false,
  isReviewSlides = false,
  sliderClass,
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
          slidesPerView={3}
          spaceBetween={32}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
          navigation={isNavigation}
          pagination={
            isPagination
              ? {
                  clickable: true,
                }
              : false
          }
          modules={modulesArray()}
          className={sliderClass}
        >
          {children}
        </Swiper>
      ) : (
        <Swiper
          navigation={isNavigation}
          pagination={{ clickable: true }}
          modules={modulesArray()}
          className={sliderClass}
        >
          {children}
        </Swiper>
      )}
    </>
  );
};
