import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import ReusableSlider from './slider';

const meta: Meta<typeof ReusableSlider> = {
  title: 'Neo-Brutalism/Slider',
  component: ReusableSlider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
    defaultValue: { control: 'number' },
  },
};

export default meta;
type Story = StoryObj<typeof ReusableSlider>;

export const Default: Story = {
  args: {
    defaultValue: 50,
    min: 0,
    max: 100,
  },
};

export const CustomRange: Story = {
  args: {
    defaultValue: 25,
    min: 0,
    max: 50,
    step: 5,
  },
};
