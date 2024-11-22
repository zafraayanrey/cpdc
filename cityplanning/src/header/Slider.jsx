import React from "react";
import styled from "styled-components";
import slider1 from "../images/slider1.png";

const SliderContainer = styled.div`
  grid-column: 1/13;
  background-image: url({slider1});
  height: 300px;
`;
console.log(slider1);
function Slider() {
  return <SliderContainer>Slider</SliderContainer>;
}

export default Slider;
