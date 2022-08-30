// import { useState } from "react";
// import { SwiperSlide } from "swiper/react";
import { Item } from "./Item";
import { ImageList } from "./List.styled";
// import { Slider } from "../Slider/Slider";
// import { BigItem } from "./BigImg";

export const List = ({ items }) => {
  // const [swiper, setSwiper] = useState(false);
  // const toggleSwiper = (e) => {
  //   e.preventDefault();
  //   setSwiper((swiper) => !swiper);
  // };
  return (
    <>
      {/* <SliderWrapper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
      > */}
      <ImageList>
        {/* <Slider isNavigation isPagination> */}
        {items.map((item) => (
          // <SwiperSlide key={item.id}>
          <Item url={item.min} alt={item.alt} />
          // </SwiperSlide>
        ))}
        {/* </Slider> */}
      </ImageList>
      {/* </SliderWrapper> */}
    </>
  );
};
