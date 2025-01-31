import React, { useState } from "react";
import "./carousel.css";
import BookButton from "../bookButton/bookButton";

function HomeCarousel({ slides, title, description, buttonTitle, buttonUrl }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <div className="carousel slide">
      <ol className="carousel-indicators">
        {slides.map((slide, index) => (
          <li
            key={index}
            className={index === activeIndex ? "active" : ""}
            onClick={() => setActiveIndex(index)}
          ></li>
        ))}
      </ol>
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-item ${index === activeIndex ? "active" : ""}`}
          >
            <img className="carousel-img d-block" src={slide.src} alt={slide.alt} />
          </div>
        ))}
      </div>
      <div className="carousel-control-prev" role="button" onClick={handlePrev}>
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </div>
      <div className="carousel-control-next" role="button" onClick={handleNext}>
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </div>
      {title && description && (
        <div className="overlay">
          <h>{title}</h>
          <p>{description}</p>

          {buttonTitle && buttonUrl && (
            <a className="btn btn-primary" href={buttonUrl}>
              {buttonTitle}
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export default HomeCarousel;
