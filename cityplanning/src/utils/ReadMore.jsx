import React from "react";
import styled from "styled-components";

const Rmore = styled.div`
  position: relative;
  top: 10px;
  background-color: var(--six-hundred);
  color: var(--fifty);
  font-weight: 400;
  padding: 10px;
  font-size: 14px;
  text-align: center;
  margin: auto;

  &:hover {
    background-color: var(--seven-hundred);
    cursor: pointer;
  }
`;

function ReadMore({ children }) {
  return <Rmore>{children}</Rmore>;
}

export default ReadMore;
