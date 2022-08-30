import styled from "styled-components";
import { theme } from "../../constants/Theme";
import cutie from "../../images/sad-frog-feels-bad-man-meme.png";
const {
  colors: { primaryColor, accentColor, secondaryColor, borderColor },
  fonts: { titleFont },
  spacing,
} = theme;

export const Container = styled.div`
  padding-top: ${spacing(5)};
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 90vw;
  background-image: url(${cutie});
  background-position: right;
  background-size: 100px;
  background-repeat: no-repeat;
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
