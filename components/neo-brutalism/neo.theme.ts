
import React from 'react';

const NeoThemeWrapper = ({ children }: { children: React.ReactNode }) => (
  React.createElement('div', { 'data-theme': 'neo' }, children)
);

export default NeoThemeWrapper;