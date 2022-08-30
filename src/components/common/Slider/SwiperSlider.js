import { SwiperSlide } from "swiper/react";
import { MdClose } from "react-icons/md";
import { SliderWrapper, Icon } from "../Slider/Slider.styled";
import { Slider } from "../Slider/Slider";
import { BigItem } from "../List/BigImg";

export const SwiperSlider = ({ items, onClick }) => {
  return (
    <>
      <div className='swiper-container'>
        <SliderWrapper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}>
          <Icon>
            <MdClose onClick={onClick} />
          </Icon>
          <Slider isNavigation isPagination>
            {items.map((item, index) => (
              <SwiperSlide key={item.id}>
                <BigItem url={item.url} alt={item.alt} width='240' />
              </SwiperSlide>
            ))}
          </Slider>
        </SliderWrapper>
      </div>
    </>
  );
};
