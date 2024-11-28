import React, { useState } from "react";
// import Logo from "./Logo";
import Menu from "./Menu";
import styled from "styled-components";
import "../index.css";
import Slider from "./Slider";
import talisayLogo from "../images/talisayLogo.png";
import cdpcLogo from "../images/cpdcLogo.png";
import { navMenu } from "../utils/navMenu.jsx";

const HeaderContainer = styled.div`
  background-color: var(--two-hundred);
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr 2.5fr 1fr 8fr;
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
`;

function Header() {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo src={talisayLogo} />
        <Logo src={cdpcLogo} />
      </LogoContainer>
      <HeaderText>City of Talisay | Province of Cebu</HeaderText>
      <Menu />
    </HeaderContainer>
  );
}

export default Header;
