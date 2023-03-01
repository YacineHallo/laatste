import {
  FooterBottom,
  Column,
  Footer,
  FooterSection,
  Link,
  ListItem,
  Paragraph,
  Row,
  List,
  FooterTop
} from "@amsterdam/asc-ui";
import React from "react";

const Footer1 = () => (
  <Footer className="container__footer">
    <FooterTop className="footer">
      <Row>
        <Column
          wrap
          span={{
            small: 1,
            medium: 2,
            big: 2,
            large: 4,
            xLarge: 4
          }}
        >
          <FooterSection title="Some page links">
            <List>
              <ListItem>
                <Link darkBackground href="/" inList>
                  Lorem ipsum.
                </Link>
              </ListItem>
              <ListItem>
                <Link darkBackground href="/" inList>
                  Lorem ipsum dolor.
                </Link>
              </ListItem>
              <ListItem>
                <Link darkBackground href="/" inList>
                  Lorem.
                </Link>
              </ListItem>
            </List>
          </FooterSection>
        </Column>
        <Column
          wrap
          span={{
            small: 1,
            medium: 2,
            big: 2,
            large: 4,
            xLarge: 4
          }}
        >
          <FooterSection title="Volg de gemeente">
            <List>
              <ListItem>
                <Link
                  darkBackground
                  href="https://www.amsterdam.nl/nieuws/volg-de-gemeente/nieuwsbrief-amsterdam/"
                  inList
                  target="_blank"
                >
                  Nieuwbrief Amsterdam
                </Link>
              </ListItem>

              <ListItem>
                <Link
                  darkBackground
                  href="https://twitter.com/AmsterdamNL"
                  inList
                  target="_blank"
                >
                  Twitter
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  darkBackground
                  href="https://www.facebook.com/gemeenteamsterdam"
                  target="_blank"
                  inList
                >
                  {" "}
                  Facebook
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  darkBackground
                  href="https://www.instagram.com/gemeenteamsterdam/"
                  target="_blank"
                  inList
                >
                  Instagram
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  darkBackground
                  href="https://www.linkedin.com/company/gemeente-amsterdam"
                  target="_blank"
                  inList
                >
                  LinkedIn
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  darkBackground
                  href="https://www.youtube.com/channel/UCEiYFPFR5jGhFakHhbswlig"
                  target="_blank"
                  inList
                >
                  YouTube
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  darkBackground
                  href="https://werkenbij.amsterdam.nl/"
                  target="_blank"
                  inList
                >
                  Werkenbij
                </Link>
              </ListItem>
            </List>
          </FooterSection>
        </Column>
        <Column
          wrap
          span={{
            small: 1,
            medium: 2,
            big: 2,
            large: 4,
            xLarge: 4
          }}
        >
          <FooterSection title="Achtergrond">
            <Paragraph gutterBottom={8}>
              <p>
                Deze site is gemaakt als:{" "}
                <address>Eindopdracht Front-end Developer Leertraject</address>
              </p>
              <p>
                <small>&copy; 2023 Yacine Hesseling</small>
              </p>
              <p>
                Mijn mailadres:{" "}
                <a href="mailto:y.hesseling@amsterdam.nl">email</a>
              </p>
            </Paragraph>
          </FooterSection>
        </Column>
      </Row>
    </FooterTop>
    <FooterBottom>
      <Link href="https://www.amsterdam.nl/privacy/" inList target="_blank">
        Privacy
      </Link>
      <Link
        href="https://www.amsterdam.nl/privacy/cookies-site/"
        inList
        target="_blank"
      >
        Cookies
      </Link>
    </FooterBottom>
  </Footer>
);

export default Footer1;
