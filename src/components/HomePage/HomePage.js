import { Container, Title, Pretitle, Box, Links, Img } from "./HomePage.styled";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import cutie from "../../images/sad-frog-feels-bad-man-meme.png";
export const HomePage = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Pretitle>{t("pretitle")}</Pretitle>
      <Title>Natalia Timofeeva</Title>
      <Links>
        <Box>
          <NavLink to={"color"}>{t("linkHaircuts")}</NavLink>
        </Box>
        <Box>
          <NavLink to={"color"}> {t("linkColor")} </NavLink>
        </Box>
        <Box>
          <NavLink to={"color"}>{t("linkHairstyles")}</NavLink>
        </Box>
      </Links>
      <Img src={cutie} />
    </Container>
  );
};
