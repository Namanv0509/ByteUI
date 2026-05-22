import React from 'react';
import styled from 'styled-components';
import "@fontsource/lexend/400.css";
import "@fontsource/public-sans";
import NeoThemeWrapper from './neo.theme';

interface CardProps {
  className?: string;
  children?: React.ReactNode;
  title?: string;
  description?: string;
  image?: string; 
}

const Card = ({
  className,
  title = 'Summer',
  description = 'Watermelon Sugar Rush',
  image
}: CardProps) => {
  return (
    <StyledWrapper className={className}>
      <NeoThemeWrapper>
      <div className="card">
        <div
          className="card-image"
          style={{
            backgroundImage: image ? `url(${image})` : 'none',
          }}
        />

        <div className="category">{title}</div>
        <div className="heading">{description}</div>
      </div>

      {/* Decorative SVG */}
      <div className="svg-wrapper">
        <svg
          width="200"
          height="200"
          viewBox="0 0 250 250"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M147.318 2.87012C162.248 -1.15111 174.135 1.54508 181.295 8.70508C188.455 15.8651 191.151 27.7519 187.13 42.6816C183.11 57.6081 172.388 75.4631 152.908 94.2812L152.164 95L152.908 95.7188C172.364 114.537 183.067 132.391 187.076 147.317C191.086 162.247 188.384 174.135 181.224 181.295C174.064 188.455 162.182 191.151 147.265 187.13C132.35 183.11 114.514 172.388 95.7197 152.908L95 152.163L94.2812 152.908C75.4631 172.388 57.6081 183.11 42.6816 187.13C27.7519 191.151 15.8651 188.455 8.70508 181.295C1.54508 174.135 -1.15111 162.248 2.87012 147.318C6.89046 132.392 17.6117 114.537 37.0918 95.7188L37.8359 95L37.0918 94.2812C17.6117 75.4631 6.89046 57.6081 2.87012 42.6816C-1.15111 27.7519 1.54508 15.8651 8.70508 8.70508C15.8651 1.54508 27.7519 -1.15111 42.6816 2.87012C57.6081 6.89046 75.4631 17.6117 94.2812 37.0918L95 37.8359L95.7188 37.0918C114.537 17.6117 132.392 6.89046 147.318 2.87012Z"
            fill="#5294FF"
            stroke="black"
            strokeWidth="5"
            strokeMiterlimit="10"
          />
        </svg>
      </div>
      </NeoThemeWrapper>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: auto;

  .card {
    width: 100%;
    max-width:200px;
    background: var(--color-accent-1);
    padding: 0.4em;
    border-radius: var(--border-radius);
    border: var(--border-width) solid var(--border-color);
    box-shadow: var(--shadow-lg-1);
    position: relative;
    z-index: 2;
  }

  .card-image {
    background-color: var(--color-accent-4);
    width: 100%;
    height: 130px;
    border-radius: var(--border-radius);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    transition: transform 0.3s ease;

    &:hover {
      cursor: pointer;
      transform: scale(1.01);
    }
  }

  .category {
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: 600;
    color: #0d5ff8;
    padding: 10px 7px 0;
    font-family: 'Lexend', sans-serif;
    cursor: pointer;
  }

  .heading {
    font-weight: 600;
    color: var(--color-text-black);
    padding: 7px;
    font-family: var(--font-sans);
    margin-bottom: 20px;
    cursor: pointer;
    line-height: 1.2;
  }

  .svg-wrapper {
    position: absolute;
    top: -80px;
    right: -90px;
    z-index: 999;
    pointer-events: none;
    transform: scale(0.50);
  }
`;

export default Card;