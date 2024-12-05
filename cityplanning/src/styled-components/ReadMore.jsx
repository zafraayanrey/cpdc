import React from "react";
import styled from "styled-components";

const Read = styled.div`
  width: 98%;
  height: 50px;
  background-color: var(--one-hundred);
  margin: auto;
  text-align: center;
  place-content: center;
  padding: 10px;
  font-size: large;
`;

function ReadMore({ children }) {
  return <Read>{children}</Read>;
}

export default ReadMore;
