import React, { useState } from "react";
// import Logo from "./Logo";
import Menu from "./Menu";
import styled from "styled-components";
import "../index.css";
import Slider from "./Slider";
import talisayLogo from "../images/talisayLogo.png";
import cdpcLogo from "../images/cpdcLogo.png";
import { menus } from "../utils/menus.jsx";

const HeaderContainer = styled.div`
  grid-column: 1/13;
  display: grid;
  grid-template-columns: 1.5fr 2fr 8.5fr;
  /* grid-template-rows: 1fr 1fr; */
  height: auto;
  width: 100%;
  padding: 10px;
  /* position: fixed; */
`;

const LogoContainer = styled.div`
  text-align: right;
`;

const Logo = styled.img`
  width: 75px;
  place-content: center;
`;

const HeaderText = styled.div`
  display: grid;
  padding: 10px 0px 10px 5px;
  text-align: left;
  font-weight: 400;
`;

const DropDownContainer = styled.div`
  height: auto;
  display: grid;
  width: auto;
  grid-template-rows: repeat(1fr, 3);
  position: absolute;
  top: 40px;
  left: 0px;
  visibility: ${(props) => props.visibility};
  z-index: 1;
`;

const DropDown = styled.div`
  background-color: var(--two-hundred);
  color: var(--nine-hundred-fifty);
  width: 250px;
  height: auto;
  padding: 10px;

  &:hover {
    background-color: var(--four-hundred);
    cursor: pointer;
    color: var(--seven-hundred);
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo src={talisayLogo}></Logo>
        <Logo src={cdpcLogo}></Logo>
      </LogoContainer>
      <HeaderText>
        <span>Republic of the Philippines</span>
        <span>Province of Cebu</span>
        <span>City of Talisay</span>
      </HeaderText>
      <Menu />
    </HeaderContainer>
  );
}

export default Header;
