import React from "react";
import { useState, useEffect } from "react";
import { imageData } from "../constant/imageData";
const Carausal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  function handlePrev() {
    setCurrentIndex(
      currentIndex === 0 ? imageData.length - 1 : currentIndex - 1
    );
  }
  function handleNext() {
    setCurrentIndex(
      currentIndex === imageData.length - 1 ? 0 : currentIndex + 1
    );
  }
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);
  return (
    <div>
      <button onClick={handlePrev}>Previous</button>
      {imageData.map((image, index) => {
        return (
          <img
            key={image}  // Use image URL as key for simplicity, but in a real app, use a unique ID
            src={image}
            alt="Carausal-Image"
            style={{
              width: "200px",
              height: "auto",
              display: index === currentIndex ? "block" : "none",
            }}
          />
        );
      })}
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Carausal;
