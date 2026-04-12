import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { Button } from '../Button';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Card title',
    },
    description: {
      control: 'text',
      description: 'Card description/body text',
    },
    imageSrc: {
      control: 'text',
      description: 'Image source URL',
    },
    imageAlt: {
      control: 'text',
      description: 'Image alt text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Card Title',
    description: 'This is a description of the card content that provides more context.',
  },
};

export const WithImage: Story = {
  args: {
    title: 'Card with Image',
    description: 'This card has an image at the top.',
    imageSrc: 'https://placehold.co/600x338',
    imageAlt: 'Placeholder image',
  },
};

export const WithActions: Story = {
  args: {
    title: 'Card with Actions',
    description: 'This card has action buttons at the bottom.',
    actions: (
      <>
        <Button variant="primary" size="sm">Action</Button>
        <Button variant="secondary" size="sm">Cancel</Button>
      </>
    ),
  },
};

export const WithImageAndActions: Story = {
  args: {
    title: 'Full Card',
    description: 'A complete card with image and action buttons.',
    imageSrc: 'https://placehold.co/600x338',
    imageAlt: 'Placeholder image',
    actions: (
      <>
        <Button variant="primary" size="sm">Learn More</Button>
        <Button variant="tertiary" size="sm">Dismiss</Button>
      </>
    ),
  },
};

export const TitleOnly: Story = {
  args: {
    title: 'Simple Card',
  },
};

export const WithCustomContent: Story = {
  args: {
    title: 'Custom Content',
    children: (
      <p style={{ margin: 0, color: 'var(--semantic-color-foreground-secondary)' }}>
        This card uses the children prop for custom content instead of the description prop.
      </p>
    ),
  },
};

export const CardGrid: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 280px)', gap: '16px' }}>
      <Card
        title="First Card"
        description="A short description for the first card."
        imageSrc="https://placehold.co/600x338"
        imageAlt="First"
      />
      <Card
        title="Second Card"
        description="A short description for the second card."
        imageSrc="https://placehold.co/600x338"
        imageAlt="Second"
      />
      <Card
        title="Third Card"
        description="A short description for the third card."
        imageSrc="https://placehold.co/600x338"
        imageAlt="Third"
      />
    </div>
  ),
};
