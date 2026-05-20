import React, { useState } from 'react';
import Card from './card';
import styled from 'styled-components';
import {ArrowRight, ArrowLeft} from 'lucide-react';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
  title: "Cubism",
  image: "https://images.unsplash.com/photo-1694636773362-8c6b4e591286?q=80&w=1437&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  description: "Fragmented forms and multiple perspectives blended into one composition."
},
{
  title: "Abstract Expressionism",
  image: "https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  description: "Bold colors and spontaneous brushstrokes expressing raw emotion and energy."
},
{
  title: "Surrealism",
  image: "https://images.unsplash.com/photo-1752302113131-1c3a31cd1f74?q=80&w=1443&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  description: "Dreamlike imagery and unexpected scenes inspired by the subconscious mind."
}
  ];

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <>
      <StyledWrapper>
        <div className="carousel-container">
          <button className="arrow prev" onClick={goToPrev}>
            <ArrowLeft />
          </button>

          <div className="carousel">
            <div 
              className="carousel-track"
              style={{ translate: '160px', transform: `translateX(-${currentIndex*100}%)` }}
            >
              {cards.map((card, index) => (
                <div key={index} className="carousel-item">
                  <Card
                    title={card.title}
                    image={card.image}
                    description={card.description}
                  />
                </div>
              ))}
            </div>
          </div>

          <button className="arrow next" onClick={goToNext}>
            <ArrowRight />
          </button>
        </div>

        <div className="dots">
          {cards.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </StyledWrapper>
    </>
  );
};

const StyledWrapper = styled.div`
  .carousel-container {
    position: relative;
    display: flex;
    align-items: center;
    margin: 60px auto;
    max-width: 600px;
  }

  .carousel {
    overflow: hidden;
    width: 100%;
    padding: 40px 10px;
  }

  .carousel-track {
    display: flex;
    transition: transform 0.5s ease-in-out;

  }

  .carousel-item {
    min-width: 100%;
    box-sizing: border-box;
    padding: 0 30px;
  }

  .arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.6);
    color: white;
    border: none;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    font-size: 20px;
    cursor: pointer;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.3s;
  }

  .arrow:hover {
    background: rgba(0, 0, 0, 0.8);
  }

  .prev {
    left: 40px;
  }

  .next {
    right: 40px;
  }

  .dots {
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-top: 16px;
  }

  .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #ccc;
    cursor: pointer;
    transition: all 0.3s;
  }

  .dot.active {
    background: #333;
    transform: scale(1.3);
  }
`;

export default Carousel;