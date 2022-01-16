import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
  SectionText,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

import { AcomplishmentsData } from "../../constants/constants";

const Acomplishments = () => (
  <Section>
    <SectionDivider divider />
    <SectionTitle>Personal Achievements</SectionTitle>
    <SectionText>
      Right now may seem small achievements, but later on I will add more, some
      of these metrics will grow up and some others will blow up.
    </SectionText>
    <Boxes>
      {AcomplishmentsData.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}+`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
      <Box>
        <BoxNum>1</BoxNum>
        <BoxText>
          <p>Full Scolarship for "outstanding" score</p>
        </BoxText>
      </Box>
    </Boxes>
  </Section>
);

export default Acomplishments;
