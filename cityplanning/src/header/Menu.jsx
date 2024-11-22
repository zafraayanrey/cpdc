import React from "react";
import styled from "styled-components";
import "../index.css";

const MenuContainer = styled.div`
  margin-top: 20px;
  grid-column: 1/13;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  text-align: center;
  background-color: var(--one-hundred);
`;

const SubContainer = styled.div`
  grid-column: 1/13;
  display: grid;
  /* width: 70vw; */
  grid-template-columns: repeat(6, 1fr);
  margin: auto;
`;

const MenuItem = styled.div`
  width: auto;
  height: auto;
  padding: 15px;
  background-color: var(--one-hundred);
  font-weight: 400;

  &:hover {
    background-color: var(--two-hundred);
    cursor: pointer;
  }
`;

function Menu() {
  return (
    <MenuContainer>
      <SubContainer>
        <MenuItem>Home</MenuItem>
        <MenuItem>About Us</MenuItem>
        <MenuItem>Plans and Reports</MenuItem>
        <MenuItem>Projects</MenuItem>
        <MenuItem>Services</MenuItem>
        <MenuItem>Contact Us</MenuItem>
      </SubContainer>
    </MenuContainer>
  );
}

export default Menu;
