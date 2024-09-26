import React, { useState, useEffect } from "react";
import "./slider.css";
import prevImage from "../../assets/left-arrow.svg";
import nextImage from "../../assets/right-arrow.svg";
import sliderData from "../../data/sliderData";

export default function Slider() {
  const [index, setIndex] = useState(0); // index of the current element in the array
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(false); // trigger fade-out
    const id = toggleImage(); // trigger image auto-toggle
  
    return () => {
     
      clearTimeout(id); // cleanup both timeouts
    };
  }, [index]); // only run the effect when index changes

  const next = () => {
    const newIndex = index + 1;
    if (newIndex < sliderData.length) {
      setIndex(newIndex);
      //setFade(true)
    }
  };

  const previous = () => {
    const newIndex = index - 1;
    if (newIndex >= 0) {
      setIndex(newIndex);
    }
  };

  const toggleImage = () => {
    // auto-change images after 10 seconds
    let id = setTimeout(() => {
      setIndex((prevIndex) =>
        prevIndex === sliderData.length - 1 ? 0 : prevIndex + 1
      );
    }, 20000);
    return id;
  };

  return (
    <>
      <div className="slider-container">
        {index > 0 && (
          <button className="prevImg" onClick={previous}>
            <img src={prevImage} alt="Previous" width={50} />
          </button>
        )}

        <div>
          <p className="pagination">
            {index + 1}/{sliderData.length}
          </p>
          <p className="image-info">{sliderData[index].description}</p>

          <img
            src={sliderData[index].url}
            alt={sliderData[index].description}
            className={`slideImage ${fade ? "shwo" : ""}`}
          />
        </div>

        {index < sliderData.length - 1 && (
          <button className="nextImg" onClick={next}>
            <img src={nextImage} alt="Next" width={50} />
          </button>
        )}
      </div>
    </>
  );
}
