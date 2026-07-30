import React from 'react';
import { render, screen } from '@testing-library/react';
import ToolTip from '../tool-tip';

describe('ToolTip Component (Neo-Brutalism)', () => {
  it('renders with text prop', () => {
    render(<ToolTip text="Hello" />);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });
});
