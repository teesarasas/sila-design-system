import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { SegmentedControl } from './SegmentedControl';
import { SegmentedControlItem } from './SegmentedControlItem';

const meta: Meta<typeof SegmentedControl> = {
  title: 'Components/SegmentedControl',
  component: SegmentedControl,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('tab1');
    return (
      <SegmentedControl value={value} onChange={setValue}>
        <SegmentedControlItem value="tab1">Tab 1</SegmentedControlItem>
        <SegmentedControlItem value="tab2">Tab 2</SegmentedControlItem>
        <SegmentedControlItem value="tab3">Tab 3</SegmentedControlItem>
      </SegmentedControl>
    );
  },
};

export const TwoItems: Story = {
  render: () => {
    const [value, setValue] = useState('list');
    return (
      <SegmentedControl value={value} onChange={setValue}>
        <SegmentedControlItem value="list">List</SegmentedControlItem>
        <SegmentedControlItem value="grid">Grid</SegmentedControlItem>
      </SegmentedControl>
    );
  },
};

export const FourItems: Story = {
  render: () => {
    const [value, setValue] = useState('day');
    return (
      <SegmentedControl value={value} onChange={setValue}>
        <SegmentedControlItem value="day">Day</SegmentedControlItem>
        <SegmentedControlItem value="week">Week</SegmentedControlItem>
        <SegmentedControlItem value="month">Month</SegmentedControlItem>
        <SegmentedControlItem value="year">Year</SegmentedControlItem>
      </SegmentedControl>
    );
  },
};

export const WithLabels: Story = {
  render: () => {
    const [value, setValue] = useState('all');
    return (
      <SegmentedControl value={value} onChange={setValue}>
        <SegmentedControlItem value="all">All</SegmentedControlItem>
        <SegmentedControlItem value="active">Active</SegmentedControlItem>
        <SegmentedControlItem value="archived">Archived</SegmentedControlItem>
      </SegmentedControl>
    );
  },
};
