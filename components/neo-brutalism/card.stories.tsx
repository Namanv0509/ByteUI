import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Card from './card';

const meta: Meta<typeof Card> = {
  title: 'Neo-Brutalism/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['simple', 'image', 'text'],
      description: 'The layout variant of the card',
    },
    title: {
      control: 'text',
      description: 'Card category header',
    },
    description: {
      control: 'text',
      description: 'Main body copy',
    },
    fluid: {
      control: 'boolean',
      description: 'Fills container width when set to true',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const ImageVariant: Story = {
  args: {
    variant: 'image',
    title: 'SUMMER EDITION',
    description: 'Watermelon Sugar High - Fresh Brutalist Palette',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80',
  },
};

export const SimpleVariant: Story = {
  args: {
    variant: 'simple',
    title: 'MINIMALIST',
    description: 'A simple neo-brutalist card without large hero graphics.',
  },
};

export const TextVariant: Story = {
  args: {
    variant: 'text',
    title: 'DOCUMENTATION',
    description: 'Neo-brutalism relies on bold typography, heavy outlines, and stark background contrasts to draw user attention.',
  },
};

export const CustomFooter: Story = {
  args: {
    variant: 'image',
    title: 'FEATURED PRODUCT',
    description: 'ByteUI Component Pack v1.0',
    footer: (
      <button style={{
        padding: '6px 12px',
        fontWeight: 'bold',
        background: '#000',
        color: '#fff',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer'
      }}>
        Buy Now →
      </button>
    ),
  },
};
