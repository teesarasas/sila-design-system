import type { Meta, StoryObj } from '@storybook/react';
import { FloatingMenu } from './FloatingMenu';
import { FloatingMenuButton } from './FloatingMenuButton';

const HomeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const SettingsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
  </svg>
);

const UserIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const meta: Meta<typeof FloatingMenu> = {
  title: 'Components/FloatingMenu',
  component: FloatingMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Layout direction',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <FloatingMenu>
      <FloatingMenuButton icon={<HomeIcon />} aria-label="Home" isSelected isActive />
      <FloatingMenuButton icon={<SearchIcon />} aria-label="Search" />
      <FloatingMenuButton icon={<SettingsIcon />} aria-label="Settings" />
      <FloatingMenuButton icon={<UserIcon />} aria-label="Profile" />
    </FloatingMenu>
  ),
};

export const WithInactiveSelected: Story = {
  render: () => (
    <FloatingMenu>
      <FloatingMenuButton icon={<HomeIcon />} aria-label="Home" isSelected isActive={false} />
      <FloatingMenuButton icon={<SearchIcon />} aria-label="Search" isSelected isActive />
      <FloatingMenuButton icon={<SettingsIcon />} aria-label="Settings" />
      <FloatingMenuButton icon={<UserIcon />} aria-label="Profile" />
    </FloatingMenu>
  ),
};

export const Vertical: Story = {
  render: () => (
    <FloatingMenu orientation="vertical">
      <FloatingMenuButton icon={<HomeIcon />} aria-label="Home" isSelected isActive />
      <FloatingMenuButton icon={<SearchIcon />} aria-label="Search" />
      <FloatingMenuButton icon={<SettingsIcon />} aria-label="Settings" />
      <FloatingMenuButton icon={<UserIcon />} aria-label="Profile" />
    </FloatingMenu>
  ),
};

export const NoSelection: Story = {
  render: () => (
    <FloatingMenu>
      <FloatingMenuButton icon={<HomeIcon />} aria-label="Home" />
      <FloatingMenuButton icon={<SearchIcon />} aria-label="Search" />
      <FloatingMenuButton icon={<SettingsIcon />} aria-label="Settings" />
    </FloatingMenu>
  ),
};
