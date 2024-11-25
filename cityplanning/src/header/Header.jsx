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
  position: fixed;
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

const MenuContainer = styled.div`
  display: grid;
  place-content: center;
  grid-template-columns: repeat(6, 1fr);
`;

const MenuItem = styled.div`
  background-color: var(--one-hundred);
  padding: 10px;
  font-weight: bold;
  position: relative;

  &:hover {
    background-color: var(--four-hundred);
    cursor: pointer;
    color: var(--seven-hundred);
  }
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
  const [isHidden, setIsHidden] = useState("visible");
  const [subMenu, setSubMenu] = useState();

  function handleDropdown(data) {
    if (data > 0) {
      setSubMenu(data);
      return (
        <DropDownContainer>
          <DropDown>Hello, zaf</DropDown>
          <DropDown>Hello, zaf</DropDown>
        </DropDownContainer>
      );
    }
  }

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

      <MenuContainer>
        {menus.map((el, i) => (
          <MenuItem key={i} onMouseOver={() => handleDropdown(el.subMenu)}>
            <span>{el.menu}</span>
            {el.subMenu.length > 0 && handleDropdown()}
          </MenuItem>
        ))}

        {/* <MenuItem
          onMouseOver={() => setIsHidden("visible")}
          onMouseLeave={() => setIsHidden("hidden")}
        >
          <span>ABOUT</span>
          <DropDownContainer visibility={isHidden}>
            <DropDown>CITIZENS CHARTER</DropDown>
            <DropDown>SECTIONS</DropDown>
          </DropDownContainer>
        </MenuItem> */}
      </MenuContainer>
    </HeaderContainer>
  );
}

export default Header;
