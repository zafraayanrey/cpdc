import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import styled from "styled-components";
import "../index.css";
import Slider from "./Slider";

const HeaderContainer = styled.div`
  grid-column: 1/13;
  grid-template-columns: repeat(12, 1fr);
  /* grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr; */
  /* height: 220px; */
  display: grid;
`;
function Header() {
  return (
    <>
      <HeaderContainer>
        <Logo />
        <Menu />
        <Slider />
      </HeaderContainer>
    </>
  );
}

export default Header;
