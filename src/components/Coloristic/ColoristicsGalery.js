import { TiArrowBackOutline } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { List } from "../common/List/List";
import coloristics from "./Coloristics.json";
import { Button } from "../common/Button/Button.styled";
import { SwiperSlider } from "../common/Slider/SwiperSlider";

export function ColoristicsGalery() {
  let navigate = useNavigate();

  function handleClick() {
    navigate("/color");
  }

  const [swiper, setSwiper] = useState(false);

  const toggleSwiper = (e) => {
    e.preventDefault();
    setSwiper((swiper) => !swiper);
  };

  return (
    <>
      <Button onClick={handleClick}>
        <TiArrowBackOutline />
      </Button>
      <List items={coloristics} onClick={toggleSwiper} />

      {swiper && <SwiperSlider items={coloristics} onClick={toggleSwiper} />}
    </>
  );
}
