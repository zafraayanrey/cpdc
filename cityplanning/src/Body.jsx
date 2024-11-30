import React from "react";
import styled from "styled-components";
import Menu from "./header/Menu";
import { useSelector } from "react-redux";

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
      <Testing
        style={{
          width: "150px",
          height: "150px",
          background: "orange",
          color: "black",
        }}
      >
        body
      </Testing>
    </>
  );
}

export default Body;
