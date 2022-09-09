import styled from "styled-components";
import { theme } from "../../../constants/Theme";

const {
  // colors: { accentColor, borderColor, backgroundColor },
  // fontSizing: { headingFontSize, titleFontSize },
  // fonts: { titleFont },
  // media: { tablet },
  spacing,
} = theme;

export const Button = styled.button`
  padding: ${spacing(1.5)} ${spacing(2.5)};
  margin: ${spacing(3)};
  border-radius: 12px;
  background-color: transparent;
  outline: none;
  border: none;
  font-size: inherit;
  color: inherit;
`;
