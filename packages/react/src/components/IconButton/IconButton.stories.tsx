import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { IconButton } from './index';

const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const PlusIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const CloseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const meta: Meta<typeof IconButton> = {
  title: 'Components/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'tertiary'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    isDisabled: { control: 'boolean' },
    isLoading: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: <SearchIcon />,
    variant: 'default',
    size: 'md',
    'aria-label': 'Search',
  },
};

export const Primary: Story = {
  args: {
    icon: <PlusIcon />,
    variant: 'primary',
    size: 'md',
    'aria-label': 'Add',
  },
};

export const Secondary: Story = {
  args: {
    icon: <SearchIcon />,
    variant: 'secondary',
    size: 'md',
    'aria-label': 'Search',
  },
};

export const Tertiary: Story = {
  args: {
    icon: <CloseIcon />,
    variant: 'tertiary',
    size: 'md',
    'aria-label': 'Close',
  },
};

export const Small: Story = {
  args: {
    icon: <SearchIcon />,
    variant: 'default',
    size: 'sm',
    'aria-label': 'Search small',
  },
};

export const Large: Story = {
  args: {
    icon: <SearchIcon />,
    variant: 'default',
    size: 'lg',
    'aria-label': 'Search large',
  },
};

export const Disabled: Story = {
  args: {
    icon: <SearchIcon />,
    variant: 'primary',
    size: 'md',
    isDisabled: true,
    'aria-label': 'Search disabled',
  },
};

export const Loading: Story = {
  args: {
    icon: <SearchIcon />,
    variant: 'primary',
    size: 'md',
    isLoading: true,
    'aria-label': 'Loading',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <IconButton icon={<SearchIcon />} variant="default" size="md" aria-label="Default" />
      <IconButton icon={<SearchIcon />} variant="primary" size="md" aria-label="Primary" />
      <IconButton icon={<SearchIcon />} variant="secondary" size="md" aria-label="Secondary" />
      <IconButton icon={<SearchIcon />} variant="tertiary" size="md" aria-label="Tertiary" />
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <IconButton icon={<SearchIcon />} variant="primary" size="sm" aria-label="Small" />
      <IconButton icon={<SearchIcon />} variant="primary" size="md" aria-label="Medium" />
      <IconButton icon={<SearchIcon />} variant="primary" size="lg" aria-label="Large" />
    </div>
  ),
};
