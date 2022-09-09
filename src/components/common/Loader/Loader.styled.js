import styled from "styled-components";

import { theme } from "../../../constants/Theme";

const {
  colors: { overlayColor },
} = theme;
export const Container = styled.div`
  /* margin: -8px; */
  width: 100vw;
  height: 100vh;
  background-color: ${overlayColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;
