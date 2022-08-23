import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import {
  DropDownContainer,
  DropDownHeader,
  DropDownListContainer,
  DropDownList,
  ListItem,
  Container,
  Icon,
} from "./Select.styled";
export const Select = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggling = () =>
    setTimeout(() => {
      setIsOpen(!isOpen);
    }, 700);

  return (
    <Container>
      <DropDownContainer>
        <DropDownHeader onClick={toggling}>
          <BiMenu />
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <Icon>
              <MdClose onClick={toggling} />
            </Icon>
            <DropDownList>
              <ListItem onClick={toggling}>
                <a href="tel:688348052">Telefono</a>
              </ListItem>
              <ListItem onClick={toggling}>
                <a
                  href="https://www.booking.com/hotel/es/el-molino-de-curro.uk.html?aid=304142"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </ListItem>
              <ListItem onClick={toggling}>
                <a
                  href="https://www.booking.com/hotel/es/el-molino-de-curro.uk.html?aid=304142"
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>
              </ListItem>
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </Container>
  );
};
