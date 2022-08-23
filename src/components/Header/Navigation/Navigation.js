import { Nav, Contact } from "./Navigation.styled";
import { useTranslation } from "react-i18next";
export const Navigation = () => {
  const { t } = useTranslation();

  return (
    <Nav>
      <Contact> {t("tel")}</Contact>
      <Contact>Instagram</Contact>
      <Contact>Facebook</Contact>
    </Nav>
  );
};
