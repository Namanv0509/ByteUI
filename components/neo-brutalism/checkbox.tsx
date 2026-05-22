import React from 'react';
import { styled } from 'styled-components';
import NeoThemeWrapper from './neo.theme';

const CheckBox: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return (
    <StyledWrapper>
      <NeoThemeWrapper>
        <label className="checkbox-container">
          <input type="checkbox" className="checkbox" {...props} />
          <span className="custom-checkbox" />
          <span className="label-text">{props.children}</span>
        </label>
      </NeoThemeWrapper>
    </StyledWrapper>
  );
};

export default CheckBox;

const StyledWrapper = styled.div`
  .checkbox-container {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
    gap: 12px; 
  }

  .checkbox {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }
  .custom-checkbox {
    position: relative;
    width: 40px; 
    height: 40px;
    border: var(--border-width) solid var(--color-border);
    box-shadow: var(--shadow-md-1);

    border-radius: var(--border-radius);
    background-color: transparent;
    transition: all 0.2s ease;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .custom-checkbox::after {
    content: "";
    position: absolute;
    display: none;
    width: 8px;
    height: 16px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
    margin-top: -2px;

  }

  .checkbox:checked ~ .custom-checkbox {
    background: var(--color-accent-1);
    border-color: var(--border-color);
    box-shadow: 1.5px 1.5px 0 var(--shadow-md-1);
    transform: translate(1.5px, 1.5px);
  }
  .checkbox:checked ~ .custom-checkbox::after {
    display: block;
  }
`;