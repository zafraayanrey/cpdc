import React from "react";
import styled from "styled-components";
import Menu from "./header/Menu";
import { useSelector } from "react-redux";
import PageNavigation from "./PageNavigation";
import Slider from "./header/Slider";

// const BodyContainer = styled.div`
//   grid-column: 1/13;
//   height: 50vh;
// `;

const Testing = styled.div`
  width: 150px;
  height: 150px;
  background-color: orange;
  color: "black";
`;

function Body() {
  const data = useSelector((state) => state.menu.value);

  return (
    <>
      <PageNavigation />
    </>
  );
}

export default Body;
