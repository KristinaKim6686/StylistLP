import styled from "styled-components";
import { theme } from "../../../constants/Theme";

const {
  // colors: {  accentColor},

  spacing,
} = theme;

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
  border-radius: 8px;
  box-shadow: 1px -2px 3px rgba(212, 175, 55, 0.1), -4px 3px 4px #8f6b29;
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
  margin: ${spacing(5)} auto;
  border-radius: 8px;
  width: 65vh;
  max-width: 80vw;
  object-fit: cover;
`;
