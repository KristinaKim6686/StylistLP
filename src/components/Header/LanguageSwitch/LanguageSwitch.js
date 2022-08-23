import { useTranslation } from "react-i18next";
import { Switch, Button } from "./Switch.styled";

const langs = {
  es: { nativeName: "ES" },
  uk: { nativeName: "UA" },
};

export const LanguageSwitch = () => {
  const { i18n } = useTranslation();
  return (
    <Switch>
      {Object.keys(langs).map((lang) => (
        <Button
          type="submit"
          key={lang}
          onClick={() => i18n.changeLanguage(lang)}
          disabled={i18n.resolvedLanguage === lang}
        >
          {langs[lang].nativeName}
        </Button>
      ))}
    </Switch>
  );
};
