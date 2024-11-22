import React from "react";
import styled from "styled-components";
import talisayLogo from "../images/talisayLogo.png";
import cdpcLogo from "../images/cpdcLogo.png";

function Logo() {
  const Logo = styled.div`
    grid-column: 1/7;
    text-align: right;
  `;

  const PlanningLogo = styled(Logo)`
    grid-column: 7/13;
    text-align: left;
  `;

  const Fullwidth = styled.div`
    grid-column: 1/13;
  `;

  const Image = styled.img`
    width: 100px;
  `;

  return (
    <>
      <Logo>
        <Image src={talisayLogo}></Image>
      </Logo>
      <PlanningLogo>
        <Image src={cdpcLogo}></Image>
      </PlanningLogo>
      <Fullwidth>REPUBLIC OF THE PHILIPPINES</Fullwidth>
      <Fullwidth>Province of Cebu</Fullwidth>
      <Fullwidth>City of Talisay</Fullwidth>
      <Fullwidth>City Planning and Development Coordinator</Fullwidth>
    </>
  );
}

export default Logo;
