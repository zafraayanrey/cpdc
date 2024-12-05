import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { GrNext, GrPrevious } from "react-icons/gr";
import { Heading } from "../styled-components/elements";

const SliderWrapper = styled.div`
  height: 500px;
  width: 100%;
  margin: auto;
  position: relative;
  z-index: 0;
  overflow-x: hidden;
`;

const InnerWrapper = styled.div`
  height: 100%;
  display: flex;
  width: 100%;
  position: relative;
  transition: transform 1s ease-in-out; //put transfition effect in the slider
`;

const SliderImage = styled.img`
  width: 100%;
  height: 100%;
`;

const Previous = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 150px;
  height: 100%;
  background-color: var(--fifty);
  z-index: 105;
  text-align: center;
  place-content: center;
  opacity: 0.1;
  color: white;

  &:hover {
    opacity: 0.3;
    cursor: pointer;
    color: var(--nine-hundred-fifty);
  }
`;

const Next = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 150px;
  height: 100%;
  background-color: var(--fifty);
  z-index: 105;
  text-align: center;
  place-content: center;
  opacity: 0.1;
  color: white;

  &:hover {
    opacity: 0.3;
    cursor: pointer;
    color: var(--nine-hundred-fifty);
  }
`;
const InfographicsContainer = styled.div`
  position: absolute;
  position: relative;

  width: 100%;
  height: 100%;
  background-color: orange;
  /* padding: 100px; */
  opacity: 0.9;
  place-content: center;
`;

const Infographics = styled.div`
  display: grid;
  grid-template-rows: 1fr 5fr;
  position: absolute;
  top: 20%;
  left: 1200px;
  padding: 20px;
  width: 400px;
  height: 300px;
  font-weight: 400;
  border-radius: 10px;
  background-color: var(--fifty);
`;

function Slider() {
  // Dynamically import all .jpg and .png images from a directory
  const images = import.meta.glob("../images/sliders/*.{jpg,png,jpeg,svg}", {
    eager: true,
  });

  // images will be an object where keys are the paths and values are modules
  const imagePaths = Object.values(images).map((module) => module.default); // Access the default export URL

  const [moveSlider, setMoveSlider] = useState(0);

  function handlePrevious() {
    if (moveSlider < 1) return;
    setMoveSlider((prev) => (prev - 1) % imagePaths.length);
  }

  function handleNext() {
    if (moveSlider > imagePaths.length - 2) return;
    setMoveSlider((prev) => (prev + 1) % imagePaths.length);
  }

  // const [seconds, setSeconds] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setMoveSlider((prev) => (prev + 1) % imagePaths.length);
  //   }, 3000);

  //   return () => clearInterval(interval); // Cleanup the interval on component unmount
  // }, []);

  return (
    <SliderWrapper>
      <Previous onClick={handlePrevious}>
        <GrPrevious />
      </Previous>

      <>
        <InnerWrapper
          style={{ transform: `translateX(-${moveSlider * 100}%)` }}
        >
          {imagePaths.length > 0 ? (
            imagePaths.map((image, index) => (
              <>
                <InfographicsContainer>
                  <Infographics>
                    <div>{image}</div>
                    <div>zaf</div>
                  </Infographics>
                </InfographicsContainer>
                <SliderImage key={index} src={image} alt={`Image ${index}`} />
              </>
            ))
          ) : (
            <p>No images found</p>
          )}
        </InnerWrapper>
      </>

      <Next onClick={handleNext}>
        <GrNext />
      </Next>
    </SliderWrapper>
  );
}

export default Slider;
