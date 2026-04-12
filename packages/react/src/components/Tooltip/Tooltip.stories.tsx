import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Position relative to trigger',
    },
    delay: {
      control: 'number',
      description: 'Delay in ms before showing',
    },
    content: {
      control: 'text',
      description: 'Tooltip content',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: 'Tooltip text',
    position: 'top',
    children: <button>Hover me</button>,
  },
};

export const Top: Story = {
  args: {
    content: 'Top tooltip',
    position: 'top',
    children: <button>Top</button>,
  },
};

export const Bottom: Story = {
  args: {
    content: 'Bottom tooltip',
    position: 'bottom',
    children: <button>Bottom</button>,
  },
};

export const Left: Story = {
  args: {
    content: 'Left tooltip',
    position: 'left',
    children: <button>Left</button>,
  },
};

export const Right: Story = {
  args: {
    content: 'Right tooltip',
    position: 'right',
    children: <button>Right</button>,
  },
};

export const AllPositions: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '48px', padding: '48px' }}>
      <Tooltip content="Top tooltip" position="top">
        <button>Top</button>
      </Tooltip>
      <Tooltip content="Bottom tooltip" position="bottom">
        <button>Bottom</button>
      </Tooltip>
      <Tooltip content="Left tooltip" position="left">
        <button>Left</button>
      </Tooltip>
      <Tooltip content="Right tooltip" position="right">
        <button>Right</button>
      </Tooltip>
    </div>
  ),
};

export const LongContent: Story = {
  args: {
    content: 'This is a longer tooltip with more detailed information',
    position: 'top',
    children: <button>Hover for details</button>,
  },
};

export const WithDelay: Story = {
  args: {
    content: 'Delayed tooltip',
    position: 'top',
    delay: 500,
    children: <button>500ms delay</button>,
  },
};
