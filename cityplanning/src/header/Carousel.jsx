import React, { useState } from "react";
import "./Carousel.css"; // For the CSS styles

const Carousel = () => {
  // Array of images for the carousel
  const images = [
    "https://via.placeholder.com/600x300/FF5733/fff?text=Image+1",
    "https://via.placeholder.com/600x300/33FF57/fff?text=Image+2",
    "https://via.placeholder.com/600x300/3357FF/fff?text=Image+3",
    "https://via.placeholder.com/600x300/FF33A1/fff?text=Image+4",
  ];

  // State to track the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to move to the next image
  const nextImage = () => {
    // setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    // const zaf = 3 % 4;
    console.log(currentIndex);
    // console.log(zaf);
  };

  // Function to move to the previous image
  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="carousel-container">
      <h2>Sliding React Carousel</h2>

      {/* Carousel Wrapper */}
      <div className="carousel-wrapper">
        {/* Carousel Images */}
        <div
          className="carousel-images"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="carousel-item">
              <img src={image} alt={`carousel ${index}`} />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="carousel-controls">
        <button onClick={prevImage} className="carousel-btn">
          Previous
        </button>
        <button onClick={nextImage} className="carousel-btn">
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
