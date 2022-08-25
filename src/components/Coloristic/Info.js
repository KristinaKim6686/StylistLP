import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
// import blond from "../../images/png-clipart-hair-model-makeup-model-europe-female-models.png";
import {
  List,
  Item,
  Blondie,
  Wrapper,
  LinkWrapper,
  Title,
  PreTitle,
  Text,
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
          <>
            <Blondie>
              <Item className="blond">
                <PreTitle>{t("perfectRuby")}</PreTitle>
                {/* <img src={blond} alt="blondie" width={160} /> */}
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                  totam similique nihil labore modi at mollitia quasi earum odit
                  blanditiis, cum aliquid repellat quia vitae sequi porro ullam
                  impedit cumque.
                </Text>
              </Item>
            </Blondie>
          </>

          <LinkWrapper>
            <NavLink to={`/color/galery`}>Galeria</NavLink>
          </LinkWrapper>
        </div>
       
        <div>
            <Item>
            <>
              <PreTitle>Brillo espectacular</PreTitle>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                totam similique nihil labore modi at mollitia quasi earum odit
                blanditiis.
              </Text>
            </>
            {/* <Wrapper> */}
            {/* <img src={dark} alt="dark" width={180} /> */}
            {/* </Wrapper> */}
          </Item>
          <Wrapper>
            <Item>
              <>
                <PreTitle>Color radianre</PreTitle>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                  totam similique nihil labore.
                </Text>
              </>

              {/* <img src={ruby} alt="ruby" width={160} /> */}
            </Item>
          </Wrapper>

         
        </div>
      </List>
    </>
  );
};
