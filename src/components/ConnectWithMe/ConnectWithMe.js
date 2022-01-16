import React from "react";
import { GoGlobe } from "react-icons/go";
import {
  SiGithub,
  SiGitlab,
  SiHackthebox,
  SiStackoverflow,
  SiYoutube,
  SiPlatzi,
  SiSteam,
  SiLinkedin,
  SiInstagram,
  SiReddit,
  SiTwitter,
  SiDiscord,
  SiSpotify,
} from "react-icons/si";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListTitle,
} from "../Technologies/TechnologiesStyles";

const ConnectWithMe = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Connect with me</SectionTitle>
    <SectionText>
      These are some of my Social Networks, or at least you can know more of me.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <SiGithub size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>
            <a href="https://github.com/Youngermaster">GitHub</a>
          </ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiGitlab size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>
            <a href="https://gitlab.com/Youngermaster">GitLab</a>
          </ListTitle>
        </ListContainer>
      </ListItem>
      {/* https://platzi.com/p/Youngermaster/ */}
      <ListItem>
        <picture>
          <SiHackthebox size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>
            <a href="https://app.hackthebox.com/profile/643960">Hack The Box</a>
          </ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <GoGlobe size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>
            <a href="https://www.wechall.net/profile/Youngermaster">We Chall</a>
          </ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiStackoverflow size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>
            <a href="https://stackoverflow.com/users/9752901/youngermaster">
              StackOverflow
            </a>
          </ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiYoutube size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>
            <a href="https://www.youtube.com/channel/UCyuYHymUH4Adj2YytTdtD4g">
              YouTube
            </a>
          </ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiPlatzi size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>
            <a href="https://platzi.com/p/Youngermaster/">Platzi</a>
          </ListTitle>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <SiLinkedin size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>
            <a href="https://www.linkedin.com/in/juan-manuel-young-hoyos/">
              LinkedIn
            </a>
          </ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiInstagram size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>
            <a href="https://www.instagram.com/jmyounghoyos/">Instagram</a>
          </ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiReddit size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>
            <a href="https://www.reddit.com/user/TheYoungermaster">Reddit</a>
          </ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiTwitter size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>
            <a href="https://twitter.com/jmyounghoyos">Twitter</a>
          </ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiDiscord size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>
            <a href="https://discords.com/bio/p/youngermaster">Discord</a>
          </ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiSteam size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>
            <a href="https://steamcommunity.com/id/youngermaster">Steam</a>
          </ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiSpotify size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>
            <a href="https://open.spotify.com/user/juanmanuelyoung">Spotify</a>
          </ListTitle>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default ConnectWithMe;
