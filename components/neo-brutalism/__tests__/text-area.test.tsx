import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TextArea from '../text-area';

describe('TextArea Component (Neo-Brutalism)', () => {
  it('renders textarea with placeholder', () => {
    render(<TextArea placeholder="Write your message..." />);
    const textarea = screen.getByPlaceholderText('Write your message...');
    expect(textarea).toBeInTheDocument();
  });

  it('updates text on user input', () => {
    render(<TextArea placeholder="Input here" />);
    const textarea = screen.getByPlaceholderText('Input here') as HTMLTextAreaElement;

    fireEvent.change(textarea, { target: { value: 'Neo brutalism is awesome!' } });
    expect(textarea.value).toBe('Neo brutalism is awesome!');
  });
});
