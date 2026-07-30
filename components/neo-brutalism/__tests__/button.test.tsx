import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../button';

describe('Button Component (Neo-Brutalism)', () => {
  it('renders children correctly', () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });

  it('renders fallback label if no children provided', () => {
    render(<Button />);
    expect(screen.getByRole('button', { name: /cool/i })).toBeInTheDocument();
  });

  it('applies primary variant class by default', () => {
    render(<Button>Primary</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('primary');
  });

  it('applies custom variant classes', () => {
    const { rerender } = render(<Button variant="secondary">Secondary</Button>);
    expect(screen.getByRole('button')).toHaveClass('secondary');

    rerender(<Button variant="cta">CTA</Button>);
    expect(screen.getByRole('button')).toHaveClass('cta');

    rerender(<Button variant="disabled">Disabled</Button>);
    expect(screen.getByRole('button')).toHaveClass('disabled');
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Clickable</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('respects disabled attribute', () => {
    const handleClick = jest.fn();
    render(<Button disabled onClick={handleClick}>Disabled</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });
});
