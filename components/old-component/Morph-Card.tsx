import React from 'react';
import styled from 'styled-components';

const MorphCard = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="head">Window</div>
        <div className="content">
          This is a neobrutalist-style window with a button and space for any content
          you want!
          <br />
          <button className="button">Button</button>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    font-family: Montserrat, sans-serif;
    width: 300px;
    height: 250px;
    translate: -6px -6px;
    background: #ff66a3;
    border: 3px solid #000000;
    box-shadow: 12px 12px 0 #000000;
    overflow: hidden;
    transition: all 0.3s ease;
  }

  .head {
    font-family: Montserrat, sans-serif;
    font-size: 14px;
    font-weight: 900;
    width: 100%;
    height: 32px;
    background: #ffffff;
    padding: 5px 12px;
    color: #000000;
    border-bottom: 3px solid #000000;
  }

  .content {
    padding: 8px 12px;
    font-size: 14px;
    font-weight: 600;
  }

  .button {
    padding: 5px 10px;
    margin-top: 10px;
    border: 3px solid #000000;
    box-shadow: 3px 3px 0 #000000;
    font-weight: 750;
    background: #4ade80;
    transition: all 0.3s ease;
    cursor: pointer;
  }

  .button:hover {
    translate: 1.5px 1.5px;
    box-shadow: 1.5px 1.5px 0 #000000;
    background: #1ac2ff;
  }

  .button:active {
    translate: 3px 3px;
    box-shadow: 0 0 0 #000000;
  }

  .card:hover {
    translate: -6px;
  }`;

export default MorphCard;
