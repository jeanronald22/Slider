import React, { useState } from "react";
import "./slider.css";
import prevImage from "../../assets/left-arrow.svg";
import nextImage from "../../assets/right-arrow.svg";
import sliderData from "../../data/sliderData";

export default function Slider() {
  const [index, setIndex] = useState(1);

  const next = (e) => {
    const newIndex = index + 1;
    if (newIndex <= 4) {
      setIndex(newIndex);
    }
  };
  const previous = (e) => {
    const newIndex = index - 1;
    if (newIndex >= 0) {
      setIndex(newIndex);
    }
  };

  return (
    <>
      <div className="slider-container">
        {index > 0 && (
          <button className="prevImg" onClick={previous}>
            <img src={prevImage} alt="" width={50} />
          </button>
        )}

        <div>
          <>
            <p className="pagination">
              {index + 1}/{sliderData.length}
            </p>
            <p className="image-info">{sliderData[index].description}</p>

            <img
              src={sliderData[index].url}
              alt="dddd"
              className="sliderImage"
            />
          </>
        </div>
        {index < 4 && (
          <button className="nextImg" onClick={next}>
            <img src={nextImage} alt="" width={50} />
          </button>
        )}
      </div>
    </>
  );
}
