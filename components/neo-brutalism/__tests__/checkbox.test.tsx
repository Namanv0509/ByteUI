import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CheckBox from '../checkbox';

describe('CheckBox Component (Neo-Brutalism)', () => {
  it('renders input checkbox with label text', () => {
    render(<CheckBox>Accept Terms</CheckBox>);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
    expect(screen.getByText('Accept Terms')).toBeInTheDocument();
  });

  it('toggles checked state on click', () => {
    render(<CheckBox>Subscribe</CheckBox>);
    const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
    expect(checkbox.checked).toBe(false);

    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);
  });
});
