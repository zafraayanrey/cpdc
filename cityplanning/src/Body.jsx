import React from "react";
import styled from "styled-components";

const BodyContainer = styled.div`
  grid-column: 1/13;
  height: 50vh;
`;

function Body() {
  return <BodyContainer>Body</BodyContainer>;
}

export default Body;
