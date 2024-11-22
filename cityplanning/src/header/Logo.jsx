import React from "react";
import styled from "styled-components";
import talisayLogo from "../images/talisayLogo.png";
import cdpcLogo from "../images/cpdcLogo.png";

const LogoContainer = styled.div`
  grid-column: 1/7;
  text-align: right;
`;

const CpdcLogo = styled(LogoContainer)`
  grid-column: 7/13;
  text-align: left;
`;

const Image = styled.img`
  width: 100px;
`;

const Fullwidth = styled.div`
  grid-column: 1/13;
`;

function Logo() {
  return (
    <>
      <LogoContainer>
        <Image src={talisayLogo}></Image>
      </LogoContainer>
      <CpdcLogo>
        <Image src={cdpcLogo}></Image>
      </CpdcLogo>
      <Fullwidth>Republic of the Philippines</Fullwidth>
      <Fullwidth>Province of Cebu</Fullwidth>
      <Fullwidth>City of Talisay</Fullwidth>
      <Fullwidth>CITY PLANNING AND DEVELOPMENT COORDINATOR</Fullwidth>
    </>
  );
}

export default Logo;
