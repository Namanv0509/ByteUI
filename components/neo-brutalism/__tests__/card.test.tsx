import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Card from '../card';

describe('Card Component (Neo-Brutalism)', () => {
  it('renders with default title and description', () => {
    render(<Card />);
    expect(screen.getByText('Summer')).toBeInTheDocument();
    expect(screen.getByText('Watermelon Sugar Rush')).toBeInTheDocument();
  });

  it('renders custom title, description, and footer', () => {
    render(
      <Card
        title="Custom Header"
        description="Custom body content"
        footer={<button>Action</button>}
      />
    );
    expect(screen.getByText('Custom Header')).toBeInTheDocument();
    expect(screen.getByText('Custom body content')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /action/i })).toBeInTheDocument();
  });

  it('handles click callback when passed', () => {
    const handleClick = jest.fn();
    render(<Card onClick={handleClick} title="Clickable Card" />);
    const cardEl = screen.getByRole('button');
    fireEvent.click(cardEl);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
