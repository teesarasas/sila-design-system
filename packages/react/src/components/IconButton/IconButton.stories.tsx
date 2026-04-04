import type { Meta, StoryObj } from '@storybook/react';

// Placeholder component until IconButton is fully implemented
const IconButtonPlaceholder = () => (
  <button style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}>
    <span>🔍</span>
  </button>
);

const meta: Meta<typeof IconButtonPlaceholder> = {
  title: 'Components/IconButton',
  component: IconButtonPlaceholder,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
