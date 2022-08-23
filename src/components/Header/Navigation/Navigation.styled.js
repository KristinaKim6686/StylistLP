import styled from "styled-components";
import { theme } from "../../../constants/Theme";

const {
  colors: { accentColor },
  spacing,
} = theme;
export const Nav = styled.nav`
  display: flex;
`;

export const Contact = styled.a`
  padding: ${spacing(1)} ${spacing(3)};
  transition: color 400ms ease-in;
  transition: box-shadow 400ms ease-in;
  &:hover,
  &:focus {
    box-shadow: 2px 2px 3px ${accentColor};
    color: ${accentColor};
    cursor: pointer;
  }
`;
