import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import ToolTip from './tool-tip';

const meta: Meta<typeof ToolTip> = {
  title: 'Neo-Brutalism/Tool Tip',
  component: ToolTip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    tooltip: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof ToolTip>;

export const Default: Story = {
  args: {
      "text": "Sample Tool Tip",
      "tooltip": "This is a tool tip tooltip"
  },
};

