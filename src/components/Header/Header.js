import { Heading, Title } from "./Header.styled";
import { Select } from "./Select/Select";
import { useMediaQuery } from "../../utils/useMediaQuerie";
import { Navigation } from "./Navigation/Navigation";
import { LanguageSwitch } from "./LanguageSwitch/LanguageSwitch";
import { NavLink } from "react-router-dom";
export const Header = () => {
  const isMatches = useMediaQuery("(min-width: 768px)");
  const mobileScreen = useMediaQuery("(max-width: 768px)");
  return (
    <>
      <Heading>
        <NavLink to={"/"}>
          <Title>Natalia Timofeeva</Title>
        </NavLink>

        {mobileScreen && <Select />}

        {isMatches && <Navigation />}
        <LanguageSwitch />
      </Heading>
    </>
  );
};
