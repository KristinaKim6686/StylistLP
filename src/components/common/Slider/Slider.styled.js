import styled from "styled-components";
import { theme } from "../../../constants/Theme";

const {
  colors: { overlayColor },
  spacing,
} = theme;

export const SliderContainer = styled.div`
  width: 100%;
  height: 100%;
`;
export const SliderWrapper = styled.div`
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9;
  backdrop-filter: blur(3px);
  background-color: ${overlayColor};
`;
export const Icon = styled.div`
  padding: ${spacing(5)};
`;
