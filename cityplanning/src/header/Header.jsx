import React, { useState } from "react";
// import Logo from "./Logo";
import Menu from "./Menu";
import styled from "styled-components";
import "../index.css";
import Slider from "./Slider";
import talisayLogo from "../images/talisayLogo.png";
import cdpcLogo from "../images/cpdcLogo.png";
import { navMenu } from "../utils/navMenu.jsx";
import { Link, NavLink } from "react-router";

const HeaderContainer = styled.div`
  background-color: var(--two-hundred);
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 8fr 0.5fr;
`;

const LogoContainer = styled.div`
  height: auto;
  text-align: right;
  place-content: center;
`;

const Logo = styled.img`
  width: 40px;
  place-content: center;
`;

const HeaderText = styled.div`
  grid-column: 2/4;
  text-align: left !important;
  display: grid;
  font-weight: 400;
  align-items: center; //vertical alignment
  padding-left: 10px;

  a {
    text-decoration: none;
    color: var(--nine-hundred-fifty);
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <LogoContainer>
          <Logo src={talisayLogo} />
          <Logo src={cdpcLogo} />
        </LogoContainer>
      </NavLink>
      <HeaderText>
        <NavLink to="/">City of Talisay | Province of Cebu</NavLink>
      </HeaderText>
      <Menu />
    </HeaderContainer>
  );
}

export default Header;
