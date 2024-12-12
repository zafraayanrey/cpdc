import React from "react";
import { Heading } from "../styled-components/elements";
import { sections } from "../utils/sections";
import styled from "styled-components";

const SectionContainer = styled.div`
  width: 70%;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  text-align: justify;
`;

const CardHeading = styled.div`
  padding: 20px;
  background-color: var(--six-hundred);
  height: auto;
  text-align: center;
  color: var(--fifty);
  font-weight: 400;
`;

const CardDescription = styled.div`
  padding: 20px;
  background-color: var(--three-hundred);
  height: 450px;
  text-align: justify;
  color: var(--nine-hundred-fifty);
  font-weight: 400;
`;

function Sections() {
  return (
    <>
      <Heading>Sections</Heading>
      <SectionContainer>
        {sections.map((el) => (
          <div>
            <CardHeading>{el.title}</CardHeading>
            <CardDescription>
              {el.description.substring(1, 500).concat("...")}
            </CardDescription>
          </div>
        ))}
      </SectionContainer>
    </>
  );
}

export default Sections;
