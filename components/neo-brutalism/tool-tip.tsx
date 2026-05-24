import React from 'react';
import styled from 'styled-components';
import Badge from './badge';
import NeoThemeWrapper from './neo.theme';

interface ToolTipProps {
  text: string;
  children?: React.ReactNode;
  tooltip?: string;
}

const ToolTip: React.FC<ToolTipProps> = ({ text, children,tooltip }) => {
  return (
    <NeoThemeWrapper>
      <StyledWrapper>
        {children && <span className="tooltip-children">{children}</span>}
        <div className="badge-container">
          <Badge text={text} />
          <div className="tooltip-text">
            {tooltip || "This is a tooltip"}
          </div>
        </div>
      </StyledWrapper>
    </NeoThemeWrapper>
  );
};

export default ToolTip;

const StyledWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  position: relative;

  .badge-container {
    position: relative;
    display: inline-block;
  }

  .tooltip-text {
    visibility: hidden;
    position: absolute;
    bottom: calc(100% + 14px);
    left: 50%;
    transform: translateX(-50%) translateY(8px);
    background-color: var(--color-accent-4);
    color: var(--color-text-black);
    text-align: center;
    padding: 8px 16px;
    border: var(--border-width) solid var(--border-color);
    border-radius: 8px;
    box-shadow: 4px 4px 0 var(--border-color);
    font-weight: 700;
    font-family: var(--font-lexend), var(--font-sans), sans-serif;
    font-size: 14px;
    white-space: nowrap;
    z-index: 10;
    opacity: 0;
    transition: opacity 0.15s cubic-bezier(0.175, 0.885, 0.32, 1.275), 
    transform 0.15s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    pointer-events: none;
  }

  .tooltip-text::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%) translateY(2px) rotate(45deg);
    margin-top: -6px;
    width: 12px;
    height: 12px;
    background-color: var(--color-accent-4);
    border-right: var(--border-width) solid var(--border-color);
    border-bottom: var(--border-width) solid var(--border-color);
    z-index: -1;
  }

  .badge-container:hover .tooltip-text {
    visibility: visible;
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
`;
