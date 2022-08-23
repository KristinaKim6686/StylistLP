import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import blond from "../../images/png-clipart-hair-model-makeup-model-europe-female-models.png";
import {
  List,
  Item,
  Blondie,
  Wrapper,
  LinkWrapper,
  Title,
  PreTitle,
} from "./Info.styled";
import ruby from "../../images/png-transparent-red-hair-desktop-fantasy-woman-people-woman-desktop-wallpaper.png";
import dark from "../../images/png-transparent-hair-model-makeup-model-europe-female-models-make-up.png";

export const Info = () => {
  const { t } = useTranslation();
  return (
    <>
      <Title>{t("colorTitle")}</Title>

      <List>
        <div>
          {" "}
          <Item>
            <>
              <PreTitle>{t("perfectRuby")}</PreTitle>
              <Blondie>
                <img src={blond} alt="blondie" />
              </Blondie>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                totam similique nihil labore modi at mollitia quasi earum odit
                blanditiis, cum aliquid repellat quia vitae sequi porro ullam
                impedit cumque.
              </p>
            </>
          </Item>
          <LinkWrapper>
            <NavLink to={`/color/galery`}>Galeria</NavLink>
          </LinkWrapper>
        </div>
        <div>
          <Item>
            <>
              <PreTitle>Color radianre</PreTitle>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                totam similique nihil labore.
              </p>
            </>
            <Wrapper>
              <img src={ruby} alt="ruby" />
            </Wrapper>
          </Item>
          <Item>
            <>
              <PreTitle>Brillo espectacular</PreTitle>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                totam similique nihil labore modi at mollitia quasi earum odit
                blanditiis.
              </p>
            </>
            {/* <Wrapper> */}
            <img src={dark} alt="dark" width={180} />
            {/* </Wrapper> */}
          </Item>
        </div>
      </List>
    </>
  );
};
