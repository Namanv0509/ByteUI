import React from 'react';
import NeoThemeWrapper from './neo.theme';
import styled from 'styled-components';

const TextArea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement>> = (props) => {
  return (
    <NeoThemeWrapper>
      <StyledTextArea placeholder="Enter your message here..." className="text-area" {...props} />
    </NeoThemeWrapper>
  );
};

const StyledTextArea = styled.textarea`
  width: 400px;
  min-height: 65px;
  padding: 12px 16px;
  border: var(--border-width) solid var(--border-color);
  box-shadow: var(--shadow-lg-2);
  background: var(--color-accent-2);
  border-radius: var(--border-radius);
  resize: vertical;
  color: var(--color-text-black);
  font-family: var(--font-lexend);
  font-weight: 600;

  &:focus {
    outline: none;
    border-color: var(--border-color);
    box-shadow: 1.5px 1.5px 0 var(--shadow-md-1);
    transform: translate(1.5px, 1.5px);
  }
  &::placeholder {
    color: var(--color-text-black);
  }
`;

export default TextArea;




