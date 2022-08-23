import styled from "styled-components";
import { theme } from "../../../constants/Theme";

const {
  // colors: { primaryColor, accentColor, secondaryColor },

  spacing,
} = theme;

export const SliderWrapper = styled.div`
  height: 100%;
  padding: 0 28px 5px;

  @media screen and (min-width: 400px) and (max-width: 500px) {
    padding: 0 34px;
  }

  @media screen and (min-width: 501px) and (max-width: 767px) {
    padding: 0 40px;
  }
`;

export const ImageList = styled.div`
  height: 100%;
  padding: 16px;

  margin: 0 auto;
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(240px, 4fr));
  grid-gap: 16px;
`;
export const Image = styled.img`
  display: inline-block;
  /* max-width: 189px; */
  /* margin: 0; */
  /* width: 250px; */
  border-radius: 8px;
  box-shadow: 2px -2px 4px rgba(212, 175, 55, 0.1), -4px 4px 4px #8f6b29;
  width: 100%;
  max-width: 80vw;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;

export const BigImage = styled.img`
  margin-bottom: ${spacing(3)};
  width: 100vw;
`;
