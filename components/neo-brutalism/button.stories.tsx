import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Button from './button';

const meta: Meta<typeof Button> = {
  title: 'Neo-Brutalism/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'disabled', 'cta'],
      description: 'The visual style variant of the button',
    },
    children: {
      control: 'text',
      description: 'Content inside the button',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables button interactions',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'CLICK ME ⚡',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'SECONDARY BTN',
  },
};

export const CallToAction: Story = {
  args: {
    variant: 'cta',
    children: 'CLAIM OFFER 🚀',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'disabled',
    children: 'DISABLED',
    disabled: true,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button variant="primary">PRIMARY</Button>
      <Button variant="secondary">SECONDARY</Button>
      <Button variant="cta">CTA BUTTON</Button>
      <Button variant="disabled" disabled>DISABLED</Button>
    </div>
  ),
};