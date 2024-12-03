import React from "react";
import styled from "styled-components";
import Menu from "./header/Menu";
import { useSelector } from "react-redux";
import PageNavigation from "./PageNavigation";
import Slider from "./header/Slider";
import Footer from "./Footer";
import { Heading } from "./styled-components/elements";

// const BodyContainer = styled.div`
//   grid-column: 1/13;
//   height: 50vh;
// `;

const Testing = styled.div`
  width: 100%;
  height: auto;
  /* background-color: orange; */
  color: "black";
`;

function Body() {
  const data = useSelector((state) => state.menu.value);

  return (
    <Testing>
      <PageNavigation />
    </Testing>
  );
}

export default Body;
