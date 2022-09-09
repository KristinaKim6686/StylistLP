import styled from "styled-components";
import { theme } from "../../constants/Theme";

const {
  colors: { primaryColor, accentColor, borderColor },
  fonts: { titleFont },
  media: { tablet, desktop },
  spacing,
} = theme;

export const Container = styled.div`
  padding-top: ${spacing(5)};
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  margin-top: ${spacing(6)};
  padding: ${spacing(6)};
  font-family: ${titleFont};
  font-weight: 300;
  border-width: 4px;
  border-style: solid;

  border-image: linear-gradient(
      to right,
      ${borderColor},
      #fde08d,
      ${accentColor}
    )
    1;
`;
export const Pretitle = styled.h2`
  font-weight: 400;
`;

export const Box = styled.div`
  padding: ${spacing(1)} ${spacing(3)};
  margin: 0 ${spacing(3)};
  border-width: 1px;
  border-style: solid;
  border-image: linear-gradient(
      to right,
      ${borderColor},
      #fde08d,
      ${accentColor}
    )
    1;
  transition: border-image 400ms ease-in;
  transition: color 400ms ease-in;

  &:hover {
    color: ${accentColor};
    border-image: linear-gradient(to right, ${accentColor}, ${primaryColor}) 1;
  }
`;

export const Links = styled.div`
  display: flex;
  justify-content: space-around;
  margin: ${spacing(4)};
`;

export const Img = styled.img`
  position: absolute;
  left: 0;
  bottom: 0;
  width: ${spacing(45)};
  /* &: hover {

  } */
  @media screen and (min-width: ${tablet}) {
    width: ${spacing(65)};
  }
  @media screen and (min-width: ${desktop}) {
    width: ${spacing(85)};
  } ;
`;
