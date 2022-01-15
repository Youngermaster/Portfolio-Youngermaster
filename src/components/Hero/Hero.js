import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { LeftSection } from "./HeroStyles";
import { LogoHeroImg } from "../Projects/ProjectsStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <LogoHeroImg src="/images/Logo-1000x1000.png" alt="Youngermaster's Logo" />
        <SectionTitle main center>
          Youngermaster's
          <br />
          Personal Portfolio
        </SectionTitle>
        <SectionText>
          My name is
          <b>
            <strong> Juan Manuel Young Hoyos</strong>
          </b>
          , and I'm a
          <b>
            <strong> Problem Solver</strong>
          </b>
          , although I focus mainly on tech related solutions.
          <br />
          <br />
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
