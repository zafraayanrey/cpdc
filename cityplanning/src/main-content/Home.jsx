import React from "react";
import Slider from "../header/Slider";
import { Heading } from "../styled-components/elements";
import styled from "styled-components";
import { cpdcPermits } from "../utils/cpdcPermits";
import { Link, NavLink } from "react-router";

const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  width: 70%;
  height: 50%;
  /* background-color: var(--fifty); */
  margin: auto;
  padding-top: 30px;
  gap: 10px;

  a {
    text-decoration: none;
  }
`;

const Cards = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: 20px;
  width: 220px;
  height: 200px;
  background-color: var(--six-hundred);
  border-radius: 10px;
  place-content: center;
  padding: 40px;
  font-size: small;
  color: var(--nine-hundred-fifty);
  font-weight: 600;
  transition: transform 1s;

  svg {
    align-self: center;
    margin: auto;
    font-size: 50px;
    color: var(--fifty);
  }

  &:hover {
    transition: transform 0.7s;
    background-color: var(--four-hundred);
    cursor: pointer;
    color: var(--nine-hundred-fifty);
    transform: scale(1.1);
  }
`;

function Home() {
  return (
    <>
      <Slider />
      <Heading>Start Here!</Heading>
      <HomeContainer>
        {cpdcPermits.map((el, i) => (
          <NavLink key={i} to={el.path}>
            <Cards>
              {el.icon}
              {el.title}
            </Cards>
          </NavLink>
        ))}
      </HomeContainer>
    </>
  );
}

export default Home;
