import React from "react";
import { Heading } from "../styled-components/elements";
import styled from "styled-components";
import citizenCharter from "../images/citizen-charter/citizenCharter.png";
import { CitizenItems } from "../utils/cpdcCitizenCharter";
import cityhall from "../images/cityhall.jpg";

const CitizenWrapper = styled.div`
  width: 100%;
  height: 100%;

  margin: auto;
  display: grid;
  /* padding: 0px 50px 0px 50px; */
  grid-template-rows: 0.1fr 1fr 1fr;
`;

const CitizenContent = styled.div`
  padding-top: 20px;
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 2fr 4fr 1fr;
  width: 80%;
  margin: auto;
  /* background-color: var(--fifty); */

  img {
    width: 100%;
    margin: auto;
  }
`;

const ImageContainer = styled.div`
  grid-column: 2/3;
  padding: 5px;
`;

const CitizenDescription = styled.div`
  background-color: var(--two-hundred);
  text-align: justify;
  padding: 30px;
  height: auto;
`;

const CItemContainer = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  width: 80%;
  margin: auto;
`;

const CItems = styled.div`
  font-weight: 400;
  width: 100%;
  height: auto;
  padding: 20px;
  background-color: var(--two-hundred);
  margin: auto;
  place-content: center;
  transition: background-color ease-in 0.5s, border ease-in 0.5s;

  &:hover {
    background-color: var(--four-hundred);
    /* border: solid 10px green; */
    /* border: 2px solid var(--eight-hundred); */
    cursor: pointer;
  }
`;

const CityHall = styled.img`
  width: 100%;
  height: 100%;
`;

function CitizenCharter() {
  return (
    <CitizenWrapper>
      <Heading>Citizen's Charter</Heading>
      <CitizenContent>
        <ImageContainer>
          <img src={citizenCharter}></img>
        </ImageContainer>
        <CitizenDescription>
          The Citizen’s Charter is a document that outlines the procedures,
          requirements, fees, and processing times for government services in
          the Philippines. Its goal is to ensure efficiency, transparency, and
          accountability in public service delivery, making it easier for
          citizens to access government services. The Citizen’s Charter was
          established under the Anti-Red Tape Act of 2007 (Republic Act No.
          9485), which mandates all government agencies and local government
          units (LGUs) to create their own charters. These charters provide
          step-by-step instructions for availing services, specify the maximum
          time for processing requests, and list the necessary documents and
          fees involved. Key features of the Citizen’s Charter include: Clear
          Service Guidelines: It describes available services and the necessary
          requirements. Step-by-Step Process: Citizens know exactly what to do
          and expect at each stage. Processing Time: Sets a timeline for how
          long services should take. Fees and Charges: Lists any associated
          costs, ensuring transparency. Complaints Mechanism: Citizens can
          report delays or poor service. Contact Information: Provides ways to
          reach the agency for assistance. The Citizen’s Charter benefits both
          citizens and government agencies by improving efficiency, reducing
          corruption, and fostering trust in government services. It empowers
          citizens with knowledge about their rights, helps avoid unnecessary
          delays, and promotes accountability within government operations.
        </CitizenDescription>
      </CitizenContent>
      <div>
        <Heading>CPDO - CITIZEN’S CHARTER</Heading>
        <CItemContainer>
          {CitizenItems.map((el, i) => (
            <CItems key={i}>{el.title}</CItems>
          ))}
        </CItemContainer>
      </div>
      <div style={{ padding: "0" }}>
        <CityHall src={cityhall}></CityHall>
      </div>
    </CitizenWrapper>
  );
}

export default CitizenCharter;
