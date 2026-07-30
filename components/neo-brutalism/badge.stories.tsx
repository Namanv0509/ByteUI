import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Badge from './badge';

const meta: Meta<typeof Badge> = {
  title: 'Neo-Brutalism/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
      description: 'Text rendered inside the badge',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    text: 'FEATURED ⚡',
  },
};

export const MultipleBadges: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px' }}>
      <Badge text="NEW RELEASE" />
      <Badge text="BETA 1.0" />
      <Badge text="TOP CHOICE" />
    </div>
  ),
};
