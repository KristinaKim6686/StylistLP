import styled from "styled-components";
import { theme } from "../../constants/Theme";

const {
  colors: { boxShadow, accentColor },
  fonts: { titleFont },
  fontSizing: { titleFontSize },
  spacing,
} = theme;
export const Heading = styled.header`
  position: relative;
  display: flex;
  align-items: baseline;
  justify-content: space-around;
  height: ${spacing(6)};
  padding: ${spacing(5)} 0;
  box-shadow: ${boxShadow};
  transition: translate 800ms ease-in;
`;

export const Title = styled.h2`
  font-family: ${titleFont};
  font-weight: 300;
  font-size: ${titleFontSize};
  font-size: ${spacing(5)};
  &:hover {
    color: ${accentColor};
  }
`;
