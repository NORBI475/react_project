import React, { useState } from 'react';
import './Slaider.css';
import Section1 from '../Section1/Section1';
import Section2 from '../Section2/Section2';

const slides = [
  { id: 1, content: <Section1/> },
  { id: 2, content: <Section2/> },
  { id: 3, content: <Section1/> },
];

const Slaider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleButtonClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="slider">
      <div className="slide">
        {slides[currentSlide].content}
      </div>
      <div className="buttons">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            className={`circle-button ${currentSlide === index ? 'active' : ''}`}
            onClick={() => handleButtonClick(index)}
          >
            <div className='nomera'>
              {index + 1} 
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Slaider;

