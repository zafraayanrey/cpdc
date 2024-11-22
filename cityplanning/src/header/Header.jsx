import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import styled from "styled-components";
import "../index.css";

function Header() {
  const HeaderContainer = styled.div`
    grid-column: 1/13;

    display: grid;
  `;

  return (
    <HeaderContainer>
      <Logo />
      <Menu />
    </HeaderContainer>
  );
}

export default Header;
