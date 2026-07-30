import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import TextArea from './text-area';

const meta: Meta<typeof TextArea> = {
  title: 'Neo-Brutalism/TextArea',
  component: TextArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
  args: {
    placeholder: 'Enter feedback or message here...',
  },
};

export const PreFilled: Story = {
  args: {
    defaultValue: 'ByteUI provides incredible neo-brutalist styling with smooth zero-overhead components.',
  },
};
