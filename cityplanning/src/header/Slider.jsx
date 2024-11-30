import React from "react";
import styled from "styled-components";

const SliderWrapper = styled.div`
  height: 250px;
  position: relative;
  z-index: 0;
`;

const SliderImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

function Slider() {
  // Dynamically import all .jpg and .png images from a directory
  const images = import.meta.glob("../images/sliders/*.{jpg,png,jpeg,svg}", {
    eager: true,
  });

  // images will be an object where keys are the paths and values are modules
  const imagePaths = Object.values(images).map((module) => module.default); // Access the default export URL

  return (
    <SliderWrapper>
      {imagePaths.length > 0 ? (
        imagePaths.map((image, index) => (
          <SliderImage key={index} src={image} alt={`Image ${index}`} />
        ))
      ) : (
        <p>No images found</p>
      )}
    </SliderWrapper>
  );
}

export default Slider;
