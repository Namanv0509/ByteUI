import React from 'react';
import styled from 'styled-components';
import "@fontsource/lexend/400.css";
import "@fontsource/public-sans"; 

const Card = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="card-image" />
        <div className="category"> Summer </div>
        <div className="heading"> Watermelon Sugar Rush
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    width: 190px;
    background: #f76b9aff;
    padding: .4em;
    border-radius: 15px;
    border: 3px solid rgba(0, 0, 0);
    box-shadow: 8px 8px rgba(0, 0, 0);
  }

  .card-image {
    background-color: #F0E68C;
    width: 100%;
    height: 130px;
    border-radius: 15px;
  }

  .card-image:hover {
    cursor: pointer;
  }

  .category {
    text-transform: uppercase;
    font-size: 0.7em;
    font-weight: 600;
    color: rgba(13, 95, 248, 1);
    padding: 10px 7px 0;
    font-family: 'Lexend', sans-serif;
  }

  .category:hover {
    cursor: pointer;
  }

  .heading {
    font-weight: 600;
    color: rgb(88, 87, 87);
    padding: 7px;
    font-family: 'Public Sans', sans-serif;
    margin-bottom: 30px;
  }

  .heading:hover {
    cursor: pointer;
  }`


export default Card;
