import styled from "styled-components";
import { theme } from "../../constants/Theme";

const {
  media: { tablet, desktop },
  spacing,
} = theme;

export const Container = styled.div`
  /* position: relative; */
  width: ${spacing(70)};
  max-height: 100vh;
  padding: 0 ${spacing(5)};
  margin-left: auto;
  margin-right: auto;

  @media (min-width: ${tablet}) {
    width: ${spacing(191)};
    padding: 0 ${spacing(8)};
  }
  @media (min-width: ${desktop}) {
    width: ${spacing(310)};
    padding: 0 ${spacing(5)};
  }
`;
