import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';
import { AccordionItem } from './AccordionItem';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['single', 'multiple'],
      description: 'Allow single or multiple items expanded',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div style={{ width: '480px' }}>
      <Accordion {...args}>
        <AccordionItem title="What is a design system?">
          <p style={{ margin: 0 }}>
            A design system is a collection of reusable components, guided by clear standards, that can be assembled together to build applications.
          </p>
        </AccordionItem>
        <AccordionItem title="Why use design tokens?">
          <p style={{ margin: 0 }}>
            Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes.
          </p>
        </AccordionItem>
        <AccordionItem title="How do I get started?">
          <p style={{ margin: 0 }}>
            Install the package from npm and import the components you need into your React application.
          </p>
        </AccordionItem>
      </Accordion>
    </div>
  ),
  args: {
    type: 'single',
  },
};

export const MultipleExpand: Story = {
  render: () => (
    <div style={{ width: '480px' }}>
      <Accordion type="multiple" defaultExpandedIndex={[0, 1]}>
        <AccordionItem title="Section One">
          <p style={{ margin: 0 }}>Content for section one.</p>
        </AccordionItem>
        <AccordionItem title="Section Two">
          <p style={{ margin: 0 }}>Content for section two.</p>
        </AccordionItem>
        <AccordionItem title="Section Three">
          <p style={{ margin: 0 }}>Content for section three.</p>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div style={{ width: '480px' }}>
      <Accordion type="single">
        <AccordionItem
          title="Account Settings"
          subtitle="Manage your account"
          icon={
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          }
        >
          <p style={{ margin: 0 }}>Update your profile information and preferences.</p>
        </AccordionItem>
        <AccordionItem
          title="Notifications"
          subtitle="Configure alerts"
          icon={
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
          }
        >
          <p style={{ margin: 0 }}>Choose which notifications you want to receive.</p>
        </AccordionItem>
        <AccordionItem
          title="Security"
          subtitle="Protect your account"
          icon={
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          }
        >
          <p style={{ margin: 0 }}>Manage your password and two-factor authentication.</p>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

export const DefaultExpanded: Story = {
  render: () => (
    <div style={{ width: '480px' }}>
      <Accordion type="single" defaultExpandedIndex={0}>
        <AccordionItem title="First (expanded by default)">
          <p style={{ margin: 0 }}>This item is expanded when the component mounts.</p>
        </AccordionItem>
        <AccordionItem title="Second">
          <p style={{ margin: 0 }}>Click to expand this item.</p>
        </AccordionItem>
        <AccordionItem title="Third">
          <p style={{ margin: 0 }}>Click to expand this item.</p>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};
