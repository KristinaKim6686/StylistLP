import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

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

export const Info = () => {
  const { t } = useTranslation();
  return (
    <>
      <Title>{t("colorTitle")}</Title>

      <List>
        <div>
          <>
            <Blondie>
              <Item className='blond'>
                <PreTitle>{t("perfectRuby")}</PreTitle>
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
            <NavLink to={`/color/galery`}>{t("galery")}</NavLink>
          </LinkWrapper>
        </div>

        <div>
          <Item>
            <>
              <PreTitle>{t("hairHealth")}</PreTitle>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                totam similique nihil labore modi at mollitia quasi earum odit
                blanditiis.
              </Text>
            </>
          </Item>
          <Wrapper>
            <Item>
              <>
                <PreTitle>{t("liveColor")}</PreTitle>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                  totam similique nihil labore.
                </Text>
              </>
            </Item>
          </Wrapper>
        </div>
      </List>
    </>
  );
};
