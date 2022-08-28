import styled from "styled-components";
import { theme } from "../../../constants/Theme";

const {
  colors: { boxShadow, overlayColor, borderColor, accentColor },
  spacing,
} = theme;

export const DropDownContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
`;
export const DropDownHeader = styled.div`
  background: transparent;
`;
export const DropDownListContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 9;
  backdrop-filter: blur(3px);
  box-shadow: inset ${boxShadow};
  background-color: ${overlayColor};
  /* padding: ${spacing(5)} 0; */
  transform: translateY(0%);
  overflow-y: auto;
`;
export const DropDownList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;
export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 240px;
  padding-top: ${spacing(5)};
  padding-bottom: ${spacing(5)};
  border-bottom: 1px solid ${borderColor};
  justify-content: space-around;
  transition: color 400ms ease-in;

  &:hover,
  &:focus {
    color: ${accentColor};
    border-bottom: 1px solid ${accentColor};
    cursor: pointer;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.div`
  padding: ${spacing(5)} ;
`;
