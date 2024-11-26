import React from "react";
import styled from "styled-components";
import Menu from "./header/Menu";
import { useSelector } from "react-redux";

const BodyContainer = styled.div`
  grid-column: 1/13;
  height: 50vh;
`;

function Body() {
  const data = useSelector((state) => state.menu.value);
  return <BodyContainer>{data}</BodyContainer>;
}

export default Body;
