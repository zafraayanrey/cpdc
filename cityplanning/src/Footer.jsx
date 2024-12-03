import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  width: 100%;
  height: 200px;
  background-color: var(--two-hundred);
  place-content: center;
  margin-top: 20px;
`;

function Footer() {
  return <FooterContainer>Zaf</FooterContainer>;
}

export default Footer;
