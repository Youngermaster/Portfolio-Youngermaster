import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
import { LogoHeroImg } from "../Projects/ProjectsStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <LogoHeroImg src="/images/Logo-1000x1000.png" height={1} width={1} />
        <SectionTitle main center>
          Youngermaster's
          <br />
          Personal Portfolio
        </SectionTitle>
        <SectionText>
          My name is <strong>Juan Manuel Young Hoyos</strong>, and I'm a{" "}
          <strong>Problem Solver</strong>,
        </SectionText>
        {/* <Button onClick={props.handleClick}>Learn More</Button> */}
      </LeftSection>
    </Section>
  </>
);

export default Hero;
