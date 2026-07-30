import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import CheckBox from './checkbox';

const meta: Meta<typeof CheckBox> = {
  title: 'Neo-Brutalism/CheckBox',
  component: CheckBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CheckBox>;

export const Unchecked: Story = {
  args: {
    children: 'Accept Terms & Conditions',
    defaultChecked: false,
  },
};

export const Checked: Story = {
  args: {
    children: 'Enable High Contrast Mode',
    defaultChecked: true,
  },
};

export const InteractiveGroup: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <CheckBox defaultChecked>Subscribe to Newsletter</CheckBox>
      <CheckBox>Enable Push Notifications</CheckBox>
      <CheckBox defaultChecked>Dark Theme Enabled</CheckBox>
    </div>
  ),
};
