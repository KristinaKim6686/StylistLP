import styled from "styled-components";
import { theme } from "../../constants/Theme";
import blondie from '../../images/sad-frog-feels-bad-man-meme.png';
const {
  colors: { accentColor, borderColor ,backgroundColor},
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
padding:${spacing(4)};
height:420px;
background-image:url(${blondie});
 background-position: right;
  background-size: 100px;
  background-repeat: no-repeat;
  background-color:${backgroundColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:space-between;
  @media screen and (min-width: ${tablet}) {
    width: 320px;
  }
&.blond{
align-items: flex-start;
background-position:left 40px top 120px;
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
  padding: ${spacing(3)} ;
  font-weight: 200;
  font-size: ${titleFontSize};
  color: ${borderColor};
`;
export const Blondie = styled.div`
  overflow: hidden;
  border: double 4px transparent;
  border-radius: 1px 120px 1px 1px;
  background-image: linear-gradient(white, white),
    radial-gradient(circle at top left, ${borderColor}, ${accentColor});
  background-origin: border-box;
  
  background-clip: content-box, border-box;
  @media screen and (min-width: ${tablet}) {
    /* width: 220px; */
  }
`;
export const Wrapper = styled.div`
  text-align:end;
  overflow: hidden;
  border: double 4px transparent;
  border-radius: 120px 1px 1px 1px;
  background-image: linear-gradient(white, white),
    radial-gradient(circle at top left, ${borderColor}, ${accentColor});
  background-origin: border-box;
  background-clip: content-box, border-box;
  
`;
export const LinkWrapper = styled.div`
font-size:${titleFontSize};
  text-shadow: -4px 30px 0 ${borderColor}, 4px -30px 0 ${accentColor};
  margin: ${spacing(12)} ;
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
export const Text=styled.p`
margin: ${spacing(3)};
`
