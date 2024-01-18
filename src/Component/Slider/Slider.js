import React, { useState, useEffect } from 'react';
import './Slider.css'; // Import the CSS file
import { sliderItem } from '../../Data';

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  const autoSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex < 2 ? prevIndex + 1 : 0));
  };

  useEffect(() => {
    const interval = setInterval(autoSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container-slider">
      <div className="arrow left" onClick={() => handleClick('left')}>
        &lt;&lt;
      </div>
      <div className="wrapper" style={{ transform: `translateX(${slideIndex * -100}vw)` }}>
        {sliderItem.map((item) => (
          <div className="slide" key={item.id} style={{ backgroundColor: `#${item.bg}` }}>
            <div className="img-container">
              <img src={item.img} alt={item.title} />
            </div>
            <div className="info-container">
              <h1 className="title">{item.title}</h1>
              <p className="desc">{item.desc}</p>
              <button className="shop-now-btn">SHOP NOW</button>
            </div>
          </div>
        ))}
      </div>
      <div className="arrow right" onClick={() => handleClick('right')}>
        &gt;&gt;
      </div>
    </div>
  );
};

export default Slider;
