import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  .button {
    padding: 15px 30px;
    margin-top: 10px;
    border: 3px solid #000000;
    box-shadow: 3px 3px 0 #000000;
    font-weight: 750;
    font-size: 16px;
    background: #f76b9aff;
    transition: all 0.3s ease;
    cursor: pointer;
    color: #000000;
  }

  .button:hover {
    transform: translate(1.5px, 1.5px);
    box-shadow: 1.5px 1.5px 0 #000000;
    background: #f0e68c;
  }

  .button:active {
    transform: translate(3px, 3px);
    box-shadow: 0 0 0 #000000;
  }
`;

const Button = () => {
  return (
    <StyledWrapper>
      <div>
        <button className="button">COOL</button>
      </div>
    </StyledWrapper>
  );
};

export default Button;