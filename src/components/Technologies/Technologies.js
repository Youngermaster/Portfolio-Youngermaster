import React from "react";
import { DiFirebase } from "react-icons/di";
import { FaFigma, FaPython, FaRust } from "react-icons/fa";
import {
  SiNextdotjs,
  SiFlutter,
  SiArchlinux,
  SiDotnet,
  SiUnity,
  SiRaspberrypi,
  SiKalilinux,
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
      there is more info. But for now I will list the technologies that{" "}
      <strong>
        <b>I use the most: </b>
      </strong>
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <FaPython size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Python 3</ListTitle>
          <ListParagraph>
            Experience doing scripting, computer vision (OpenCV) and AI models.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <FaRust size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Rust</ListTitle>
          <ListParagraph>
            Experience making utility scripts and backend development.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiArchlinux size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Linux</ListTitle>
          <ListParagraph>
            +2 years of experience using Linux, I have used Ubuntu, Fedora,
            Debian, Kali and Arch (of course, I use Arch btw).
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiKalilinux size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Cybersecurity</ListTitle>
          <ListParagraph>
            I've worked with the tools from Kali Linux and Parrot OS to scan,
            find and exploit vulnerabilities.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiFlutter size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Mobile development</ListTitle>
          <ListParagraph>
            Experience using Flutter for cross platform development.
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
            I've worked with the big 3 (Angular, Vue and React), but I'm focused
            right now with Next.js.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiDotnet size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            I've worked with the Go, Node.js and .Net Core, but I'm focused
            right now with .Net Core.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Databases</ListTitle>
          <ListParagraph>
            Experience with MySQL, PostgreSQL, MongoDB and Firestore.
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
            Experience with Figma for interface and logo design.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiUnity size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Game development</ListTitle>
          <ListParagraph>
            I've worked with the Unreal Engine 4, Unity 3D and OpenGL, but right
            now I'm focused on Unity 3D.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiRaspberrypi size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>IOT</ListTitle>
          <ListParagraph>
            I've worked with the Arduino (Uno, Leonardo and Mega) and Rasperry
            Pi (Zero B, 3, 4 and Pico).
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
