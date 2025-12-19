import {
  ChartBarIcon,
  DocumentDuplicateIcon,
  EllipsisVerticalIcon,
  PencilIcon,
  TrashIcon
} from '@heroicons/react/24/outline';
import { Button, Dropdown, DropdownDivider, DropdownItem, Tabs } from '@vizzly-testing/observatory';
import { useState } from 'react';

export function TabsDefaultDemo() {
  let tabs = [
    { id: 'overview', label: 'Overview', icon: ChartBarIcon },
    { id: 'components', label: 'Components', count: 15 },
    { id: 'tokens', label: 'Design Tokens' },
    { id: 'patterns', label: 'Patterns' }
  ];

  return <Tabs tabs={tabs} defaultTab="overview" onChange={() => {}} />;
}

export function TabsPillsDemo() {
  let tabs = [
    { id: 'all', label: 'All' },
    { id: 'approved', label: 'Approved' },
    { id: 'pending', label: 'Pending' },
    { id: 'rejected', label: 'Rejected' }
  ];

  return <Tabs tabs={tabs} defaultTab="all" variant="pills" />;
}

export function TabsUnderlineDemo() {
  let tabs = [
    { id: 'details', label: 'Details' },
    { id: 'history', label: 'History' },
    { id: 'settings', label: 'Settings' }
  ];

  return <Tabs tabs={tabs} defaultTab="details" variant="underline" />;
}

export function DropdownBasicDemo() {
  return (
    <Dropdown
      trigger={
        <Button variant="secondary" icon={EllipsisVerticalIcon}>
          Actions
        </Button>
      }
    >
      <DropdownItem icon={PencilIcon} onClick={() => {}}>
        Edit
      </DropdownItem>
      <DropdownItem icon={DocumentDuplicateIcon} onClick={() => {}}>
        Duplicate
      </DropdownItem>
      <DropdownDivider />
      <DropdownItem icon={TrashIcon} variant="danger" onClick={() => {}}>
        Delete
      </DropdownItem>
    </Dropdown>
  );
}

export function DropdownPositionsDemo() {
  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Dropdown trigger={<Button variant="secondary">Bottom Left</Button>} align="left">
        <DropdownItem onClick={() => {}}>Option 1</DropdownItem>
        <DropdownItem onClick={() => {}}>Option 2</DropdownItem>
      </Dropdown>

      <Dropdown trigger={<Button variant="secondary">Bottom Right</Button>} align="right">
        <DropdownItem onClick={() => {}}>Option 1</DropdownItem>
        <DropdownItem onClick={() => {}}>Option 2</DropdownItem>
      </Dropdown>
    </div>
  );
}
