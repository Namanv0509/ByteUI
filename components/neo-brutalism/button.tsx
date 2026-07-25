'use client';
import React, { FC } from 'react';
import styled from 'styled-components';
import NeoThemeWrapper from './neo.theme';

type ButtonVariant = 'primary' | 'secondary' | 'disabled' | 'cta';

const StyledWrapper = styled.div<{ variant: ButtonVariant }>`
  .button {
    padding: 15px 30px;
    margin-top: 10px;
    border: var(--border-width) solid var(--border-color);
    box-shadow: var(--shadow-md-1);
    font-weight: 750;
    font-size: 16px;
    transition: all 0.2s ease;
    cursor: pointer;
    color: var(--color-text-black);
    border-radius: var(--border-radius);
  }

  /* Primary */
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
  .button.cta{
   background: var(--color-accent-4);
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
    color: var(--color-text-black);
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
  .button.disabled {
    background: var(--color-accent-3);
    color: var(--color-text-muted);
    cursor: not-allowed;
    pointer-events: none;
    box-shadow: none;
  }
`;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
}

const Button: FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className = '',
  ...props
}) => {
  return (
    <StyledWrapper variant={variant}>
      <NeoThemeWrapper>
        <button
          className={`button ${variant} ${className}`}
          {...props}
        >
          {children || 'COOL'}
        </button>
      </NeoThemeWrapper>
    </StyledWrapper>
  );
};

export default Button;