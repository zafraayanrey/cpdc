import React from "react";
import styled from "styled-components";

function Menu() {
  const MenuItem = styled.div`
    width: 50%;
    margin: auto;
    grid-column: 1/13;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    background-color: orange;
  `;

  return (
    <MenuItem>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
    </MenuItem>
  );
}

export default Menu;
