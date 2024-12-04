import React from "react";
import styled from "styled-components";

const SectionContainer = styled.div`
  h1 {
    font-size: 14px;
    padding-bottom: 5px;
    text-transform: capitalize;
  }

  li {
    font-size: 14px;
    list-style-type: none;
    text-indent: 10px;
  }

  p {
    font-weight: 300;
    text-indent: 10px;
  }

  a p:hover,
  li:hover {
    font-weight: 600;
    cursor: pointer;
  }
`;

function FooterResuableComponent({ children }) {
  return <SectionContainer>{children}</SectionContainer>;
}

export default FooterResuableComponent;
