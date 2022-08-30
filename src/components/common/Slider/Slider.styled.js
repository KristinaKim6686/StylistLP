import styled from "styled-components";
import { theme } from "../../../constants/Theme";

const { spacing } = theme;

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
  height: 100vh;
  z-index: 9;
  backdrop-filter: blur(3px);
`;
export const Icon = styled.div`
  padding: ${spacing(5)};
`;
