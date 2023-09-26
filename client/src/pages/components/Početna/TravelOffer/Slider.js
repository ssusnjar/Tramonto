import React, { useState } from "react";
import "./Slider.css";
import TravelOffer from "./TravelOffer";
import Lijeva from "../../../Img/Lijeva.svg";
import Desna from "../../../Img/desna.svg";
import Amsterdam from "../../../Img/Amsterdam.png";
import London from "../../../Img/London.png";
import Prag from "../../../Img/Prag.png";
const travelOffers = [
  {
    imageSrc: Amsterdam,
    title: "Amsterdam",
    description: "Opis ponude 1",
  },
  {
    imageSrc: London,
    title: "London",
    description: "Opis ponude 2",
  },
  {
    imageSrc: Prag,
    title: "Prag",
    description: "Opis ponude 1",
  },
  {
    imageSrc: London,
    title: "London",
    description: "Opis ponude 2",
  },
  {
    imageSrc: Amsterdam,
    title: "Amsterdam",
    description: "Opis ponude 1",
  },
  {
    imageSrc: Prag,
    title: "Prag",
    description: "Opis ponude 2",
  },
];

const TravelSlider = () => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 4;

  const goToNext = () => {
    setStartIndex((startIndex + 1) % travelOffers.length);
  };

  const goToPrevious = () => {
    setStartIndex((startIndex - 1 + travelOffers.length) % travelOffers.length);
  };

  const visibleOffers = travelOffers.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="travel-slider">
      <div className="slider-content">
        <div className="slider-arrows">
          <img
            src={Lijeva}
            alt="Lijeva strelica"
            className="arrow left-arrow"
            onClick={goToPrevious}
          />
          <div className="offers-container">
            {visibleOffers.map((offer, index) => (
              <TravelOffer key={index} {...offer} />
            ))}
          </div>
          <img
            src={Desna}
            alt="Desna strelica"
            className="arrow right-arrow"
            onClick={goToNext}
          />
        </div>
      </div>
    </div>
  );
};

export default TravelSlider;
