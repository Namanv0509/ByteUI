'use client'
import React, { FC } from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div<{ variant: 'primary' | 'secondary' }>`
  .button {
    padding: 15px 30px;
    margin-top: 10px;
    border: 3px solid #000000;
    box-shadow: 3px 3px 0 #000000;
    font-weight: 750;
    font-size: 16px;
    transition: all 0.3s ease;
    cursor: pointer;
    color: #000000;
    border-radius: 15px;
  }

  /* Primary (Default) */
  .button.primary {
    background: #f76b9aff;

    &:hover {
      transform: translate(1.5px, 1.5px);
      box-shadow: 1.5px 1.5px 0 #000000;
      background: #f0e68c;
    }

    &:active {
      transform: translate(3px, 3px);
      box-shadow: 0 0 0 #000000;
    }
  }

  /* Secondary */
  .button.secondary {
    background: #ffffff;
    color: #000000;

    &:hover {
      transform: translate(1.5px, 1.5px);
      box-shadow: 1.5px 1.5px 0 #000000;
      background: #f0f0f0;
    }

    &:active {
      transform: translate(3px, 3px);
      box-shadow: 0 0 0 #000000;
      background: #e0e0e0;
    }
  }
`;

interface Props {
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary';
  [key: string]: any; // for other button props
}

const Button: FC<Props> = ({ 
  children, 
  variant = 'primary', 
  className = '',
  ...props 
}) => {
  return (
    <StyledWrapper variant={variant}>
      <div className={className} {...props}>
        <button 
          className={`button ${variant}`} 
          {...props}
        >
          {children || 'COOL'}
        </button>
      </div>
    </StyledWrapper>
  );
};

export default Button;