import React, { useState } from "react";
import "../index.css";
import { menus } from "../utils/menus";
import styled from "styled-components";

const MenuContainer = styled.div`
  display: grid;
  height: 50px;
  /* place-content: center; */
  grid-template-columns: repeat(${menus.length}, 1fr);
  font-size: 14px;
`;

const MenuItem = styled.li`
  list-style-type: none;
  place-content: center;
  height: 100%;
  font-weight: 500;

  border: solid 1px black;
  position: relative;

  &:hover {
    cursor: pointer;
    background-color: var(--four-hundred);
  }
`;

const Span = styled.span`
  position: relative;
`;

const SubItemContainer = styled.div`
  height: auto;
`;

const SubItem = styled.div`
  text-align: center;
  position: absolute;
  font-size: 14px;
  width: 170px;
  height: 25px;
  background-color: var(--two-hundred);
  border: solid 1px black;
  top: 0px;
  left: 0px;
`;

function handleMouseOver(menuId) {
  const subMenuItem = [];
  const hoveredMenu = menus.filter((el) => el.id === menuId);
  subMenuItem.push(hoveredMenu);

  return "zaf";
}

function Menu() {
  return (
    // <MenuContainer>
    //   {menus.map((el, i) => (
    //     <>
    //       <MenuItem key={i} onMouseOver={() => handleMouseOver(el.id)}>
    //         <Span>{el.value}</Span>
    //       </MenuItem>
    //     </>
    //   ))}
    // </MenuContainer>
    <ul>
      <MenuContainer>
        {menus.map((el) => (
          <MenuItem>{el.value}</MenuItem>
        ))}
      </MenuContainer>
    </ul>
  );
}

export default Menu;
