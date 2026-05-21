'use client'
import React, { FC } from 'react';
import styled from 'styled-components';
import NeoThemeWrapper from './neo.theme';

const StyledWrapper = styled.div<{ variant: 'primary' | 'secondary' }>`
  .button {
    padding: 15px 30px;
    margin-top: 10px;
    border: var(--border-width) solid var(--border-color);
    box-shadow: var(--shadow-md-1);
    font-weight: 750;
    font-size: 16px;
    transition: all 0.2s ease;
    cursor: pointer;
    color: var(--color-text);
    border-radius: var(--border-radius);
  }

  /* Primary (Default) */
  .button.primary {
    background: var(--color-accent-1);

    &:hover {
      transform: translate(1.5px, 1.5px);
      box-shadow: 1.5px 1.5px 0 #1e1e1e;
      background: var(--color-accent-4);
    }

    &:active {
      transform: translate(3px, 3px);
      box-shadow: 0 0 0 #1e1e1e;
    }
  }

  /* Secondary */
  .button.secondary {
    background: var(--color-accent-2);
    color: var(--color-text);

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
  [key: string]: any; 
}

const Button: FC<Props> = ({ 
  children, 
  variant = 'primary', 
  className = '',
  ...props 
}) => {
  return (
    <StyledWrapper variant={variant}>
      <NeoThemeWrapper>
      <div className={className} {...props}>
        <button 
          className={`button ${variant}`} 
          {...props}
        >
          {children || 'COOL'}
        </button>
      </div>
      </NeoThemeWrapper>
    </StyledWrapper>
  );
};

export default Button;