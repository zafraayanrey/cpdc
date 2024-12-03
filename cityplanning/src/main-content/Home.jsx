import React from "react";
import Slider from "../header/Slider";
import { Heading } from "../styled-components/elements";
import styled from "styled-components";
import { cpdcPermits } from "../utils/cpdcPermits";

const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  width: 70%;
  height: 50%;
  /* background-color: var(--fifty); */
  margin: auto;
  padding-top: 30px;
  gap: 10px;
`;

const Cards = styled.div`
  width: 220px;
  height: 200px;
  background-color: var(--two-hundred);
  border-radius: 10px;
  place-content: center;
  padding: 10px;
  font-size: large;
  color: var(--nine-hundred-fifty);
  font-weight: 400;

  &:hover {
    background-color: var(--fifty);
    cursor: pointer;
    color: var(--eight-hundred);
  }
`;

function Home() {
  return (
    <>
      <Slider />
      <Heading>Start Here!</Heading>
      <HomeContainer>
        {cpdcPermits.map((el) => (
          <Cards>{el.title}</Cards>
        ))}
      </HomeContainer>
    </>
  );
}

export default Home;
