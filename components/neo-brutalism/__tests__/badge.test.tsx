import React from 'react';
import { render, screen } from '@testing-library/react';
import Badge from '../badge';

describe('Badge Component (Neo-Brutalism)', () => {
  it('renders default text when no prop is supplied', () => {
    render(<Badge text="This is a badge" />);
    expect(screen.getByText('This is a badge')).toBeInTheDocument();
  });

  it('renders custom badge text', () => {
    render(<Badge text="FEATURED" />);
    expect(screen.getByText('FEATURED')).toBeInTheDocument();
  });
});
