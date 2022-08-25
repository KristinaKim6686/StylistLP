import styled from "styled-components";
import { theme } from "../../../constants/Theme";

const {
  colors: { accentColor, primaryColor, disabled },
  spacing,
} = theme;

export const Switch = styled.div`
  display: flex;
`;

export const Button = styled.button`
  text-align: center;
  font-weight: 500;
  font-size: ${spacing(3)};
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: ${primaryColor};
  transition: color 400ms ease-in;

  &:hover,
  &:focus {
    color: ${accentColor};
  }
  &:disabled {
    color: ${disabled};
  }

  &:not(:last-child) {
    border-right: 1px solid ${accentColor};
  }
`;
