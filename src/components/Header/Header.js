import Link from "next/link";
import React from "react";
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <Link href="/">
          <NavLink>Youngermaster</NavLink>
        </Link>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="/#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="/#languages">
          <NavLink>Languages</NavLink>
        </Link>
      </li>
      <li>
        <Link href="/#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="/#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="/#connect">
          <NavLink>Connect</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/Youngermaster">
        <SiGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/juan-manuel-young-hoyos/">
        <SiLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/jmyounghoyos/">
        <SiInstagram size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
