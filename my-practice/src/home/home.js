import React, { useState} from 'react';
import './home.css';
import homeimage from './homeimage.png';

export default function Home() {
  const images = [homeimage, homeimage, homeimage];
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <section className="home">
    <div className="home-bg">
      <div className="home-container">
        <div className="home-text">
          <h1>Lessons and insights<br/><span>from 8 years</span></h1>
          <p>Where to grow your business as a photographer: site or social media?</p>
          <button className="get-started-button">Register</button>
        </div>
        <div className="home-image">
          <img
            src={images[currentIndex]}
            alt="Home"
            id="carosel-image"
            className="carousel-image"
          />
        </div>
      </div>
      <div className='indicator'>
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
      </div>
    </section>
  );
}
