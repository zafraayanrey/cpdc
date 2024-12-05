import React from "react";
import { Heading } from "../styled-components/elements";
import styled from "styled-components";
import citizenCharter from "../images/citizen-charter/citizenCharter.png";

const CitizenWrapper = styled.div`
  width: 80%;
  height: 100%;

  margin: auto;
  display: grid;
  padding: 0px 50px 0px 50px;
  grid-template-rows: 0.1fr 1fr 1fr;
`;

const CitizenContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: var(--fifty);

  img {
    width: 60%;
    margin: auto;
    margin-left: 150px;
  }
`;

const CitizenDescription = styled.div`
  /* background-color: orange; */
  padding: 30px 30px 30px 0px;
  text-align: justify;
`;

function CitizenCharter() {
  return (
    <CitizenWrapper>
      <Heading>Citizen's Charter</Heading>
      <CitizenContent>
        <img src={citizenCharter}></img>
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
    </CitizenWrapper>
  );
}

export default CitizenCharter;
