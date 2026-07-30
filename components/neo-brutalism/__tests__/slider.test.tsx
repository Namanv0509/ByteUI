import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ReusableSlider from '../slider';

describe('ReusableSlider Component (Neo-Brutalism)', () => {
  it('renders slider input with default values', () => {
    render(<ReusableSlider id="test-slider" min={0} max={100} defaultValue={50} />);
    const input = screen.getByRole('slider') as HTMLInputElement;
    expect(input).toBeInTheDocument();
    expect(input.value).toBe('50');
  });

  it('triggers onChange callback when moved', () => {
    const handleChange = jest.fn();
    render(<ReusableSlider id="test-slider" min={0} max={100} value={25} onChange={handleChange} />);
    const input = screen.getByRole('slider');

    fireEvent.change(input, { target: { value: '75' } });
    expect(handleChange).toHaveBeenCalledWith(75);
  });
});
