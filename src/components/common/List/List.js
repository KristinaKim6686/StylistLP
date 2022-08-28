import { useState } from "react";
import { SwiperSlide } from "swiper/react";
import { MdClose } from "react-icons/md";
import { Item } from "./Item";
import { ImageList } from "./List.styled";
import { SliderWrapper,Icon} from "../Slider/Slider.styled";
import { Slider } from "../Slider/Slider";
import { BigItem } from "./BigImg";

export const List = ({ items }) => {
  const [swiper, setSwiper] = useState(false);
  
  const toggleSwiper = (e) => {
    e.preventDefault();
    setSwiper((swiper) => !swiper);
  };

  return (
    <>
      <ImageList>
        {items.map((item) => (
          <Item url={item.min} alt={item.alt} id={item.id} onClick={toggleSwiper} />
        ))}
      </ImageList>
      

      {swiper &&
      <div className="swiper-container"  >
       <SliderWrapper
       style={{
           "--swiper-navigation-color": "#fff",
           "--swiper-pagination-color": "#fff",
         }}
       >
       
       <Icon>
              <MdClose onClick={toggleSwiper} />
            </Icon>
        <Slider isNavigation isPagination sliderClass={swiper}>
          
           
            {items.map((item) => (
              <SwiperSlide key={item.id}>
                <BigItem url={item.url} alt={item.alt}  width="240"/>
            </SwiperSlide>          
            ))}                       
          </Slider>            
         </SliderWrapper>
        </div>
      }
    </>
  );
};
