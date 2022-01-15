import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import { FaFigma, FaPython } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
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
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a wide range a technologies, in my{" "}
      <strong>
        <b>
          <a href="https://github.com/Youngermaster">GitHub README.md page</a>{" "}
        </b>
      </strong>
      there is more info.
      <br />
      But for now I will list the technologies that I use the most:
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <FaPython size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Python 3</ListTitle>
          <ListParagraph>
            Experience scripting, computer <br />
            vision (OpenCV) and AI models
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiNextdotjs size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <FaFigma size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with Figma <br />
            for the interface and logo design.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
