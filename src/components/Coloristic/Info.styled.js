import styled from "styled-components";
import { theme } from "../../constants/Theme";

const {
  colors: { accentColor, borderColor },
  fontSizing: { headingFontSize, titleFontSize },
  fonts: { titleFont },
  media: { tablet },
  spacing,
} = theme;

export const List = styled.ul`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${tablet}) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
  } ;
`;
export const Item = styled.li`
  width: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: ${tablet}) {
    width: 320px;
  }
`;

export const Title = styled.h2`
  color: ${accentColor};
  margin: ${spacing(3)} auto ${spacing(4)} auto;
  display: flex;
  justify-content: center;
  font-size: ${headingFontSize};
  font-weight: 300;
  text-shadow: -1px 2px 3px ${borderColor};
  font-family: ${titleFont};
`;

export const PreTitle = styled.h3`
  padding: ${spacing(3)} ${spacing(3)};
  font-weight: 200;
  font-size: ${titleFontSize};
  color: ${borderColor};
`;
export const Blondie = styled.div`
  width: 160px;
  height: 200px;
  justify-self: flex-start;
  overflow: hidden;
  border: double 4px transparent;
  border-radius: 1px 120px 1px 1px;
  background-image: linear-gradient(white, white),
    radial-gradient(circle at top left, ${borderColor}, ${accentColor});
  background-origin: border-box;
  background-clip: content-box, border-box;
  @media screen and (min-width: ${tablet}) {
    width: 220px;
  }
`;
export const Wrapper = styled.div`
  width: 160px;
  height: 200px;
  overflow: hidden;
  border: double 4px transparent;
  border-radius: 120px 1px 1px 1px;
  background-image: linear-gradient(white, white),
    radial-gradient(circle at top left, ${borderColor}, ${accentColor});
  background-origin: border-box;
  background-clip: content-box, border-box;
  @media screen and (min-width: ${tablet}) {
    width: 220px;
  }
`;
export const LinkWrapper = styled.div`
  box-sizing: border-box;
  text-shadow: -4px 30px 0 ${borderColor}, 4px -30px 0 ${accentColor};
  margin: ${spacing(3)} auto;
  padding: ${spacing(3)} ${spacing(3)};
  transition: color 400ms ease-in;
  transition: text-shadow 400ms ease-in;
  &:hover,
  &:focus {
    text-shadow: -2px 3px 2px ${borderColor};
    color: ${accentColor};
    cursor: pointer;
  }
`;
