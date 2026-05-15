import type { Meta, StoryObj } from '@storybook/react';
import MorphCard from './Morph-Card';   // ← Make sure the import name is correct

const meta: Meta<typeof MorphCard> = {
  title: 'MorphCard',
  component: MorphCard,
  parameters: {
    layout: 'centered',           // This fixes positioning issues
  },
  tags: ['autodocs'],
  argTypes: {
    // You can expose props here later when you make your component accept props
  },
};

export default meta;
type Story = StoryObj<typeof MorphCard>;

// Default Story
export const Default: Story = {};

// Interactive / Testing Story
export const Interactive: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-8">
      <MorphCard />
      
      <div className="text-sm text-gray-500">
        Hover to scale • Animation runs automatically
      </div>
    </div>
  ),
};

// Different Sizes (once you make size controllable)
export const Small: Story = {
  render: () => (
    <div className="scale-75">
      <MorphCard />
    </div>
  ),
};

export const Large: Story = {
  render: () => (
    <div className="scale-200">
      <MorphCard />
    </div>
  ),
};