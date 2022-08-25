import { Nav, Contact } from "./Navigation.styled";
import { useTranslation } from "react-i18next";
export const Navigation = () => {
  const { t } = useTranslation();

  return (
    <Nav>
      <Contact ><a href="tel:688348052"> {t("tel")}</a></Contact>
      <Contact><a
                  href="https://instagram.com/_nataliia_beauty?igshid=YmMyMTA2M2Y="
                  target="_blank"
                  rel="noreferrer"
                >Instagram</a></Contact>
      {/* <Contact><a
                  href="https://instagram.com/_nataliia_beauty?igshid=YmMyMTA2M2Y="
                  target="_blank"
                  rel="noreferrer"
                >Facebook</a></Contact> */}
    </Nav>
  );
};
