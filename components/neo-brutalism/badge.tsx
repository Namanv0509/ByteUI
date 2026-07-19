import React from 'react';
import styled from 'styled-components';
import NeoThemeWrapper from './neo.theme';

const Badge: React.FC<{ text: string }> = ({ text="This is a badge" }) => {
  return<NeoThemeWrapper> <StyledBadge>{text}</StyledBadge></NeoThemeWrapper>;
};

export default Badge;


const StyledBadge = styled.span`
  outline: none;
  display: inline-block;
  padding: 10px 16px;
  min-width: 125px;
  max-width:200px;
  border-radius: 12px;
  background: var(--color-accent-2);
  border: var(--border-width) solid var(--border-color);
  color: var(--color-text-black);
  font-weight: 600;
  font-family: var(--font-lexend);
`;
