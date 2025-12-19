import {
  CheckCircleIcon,
  EnvelopeIcon,
  LockClosedIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';
import {
  Checkbox,
  Combobox,
  Input,
  SearchInput,
  Select,
  Textarea,
  Toggle
} from '@vizzly-testing/observatory';
import { useState } from 'react';

// Input demos
export function InputBasicDemo() {
  return (
    <div style={{ maxWidth: '320px' }}>
      <Input label="Project Name" placeholder="Enter project name..." />
    </div>
  );
}

export function InputWithIconDemo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '320px' }}>
      <Input label="Email" placeholder="you@example.com" icon={EnvelopeIcon} />
      <Input label="Search" placeholder="Search screenshots..." icon={MagnifyingGlassIcon} />
    </div>
  );
}

export function InputStatesDemo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '320px' }}>
      <Input
        label="With Error"
        placeholder="Email address"
        error="Please enter a valid email"
        defaultValue="invalid"
      />
      <Input label="With Hint" placeholder="my-project" hint="Only lowercase letters and hyphens" />
      <Input label="Disabled" placeholder="Cannot edit" disabled />
    </div>
  );
}

// Textarea demos
export function TextareaBasicDemo() {
  return (
    <div style={{ maxWidth: '400px' }}>
      <Textarea
        label="Description"
        placeholder="Describe your project..."
        hint="Markdown is supported"
      />
    </div>
  );
}

// Select demos
export function SelectBasicDemo() {
  return (
    <div style={{ maxWidth: '320px' }}>
      <Select
        label="Baseline Branch"
        options={[
          { value: 'main', label: 'main' },
          { value: 'develop', label: 'develop' },
          { value: 'staging', label: 'staging' }
        ]}
        placeholder="Choose branch"
      />
    </div>
  );
}

// Checkbox demos
export function CheckboxBasicDemo() {
  let [checked, setChecked] = useState(false);
  let [checked2, setChecked2] = useState(true);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Checkbox
        label="Auto-approve matching screenshots"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
      <Checkbox
        label="Send notifications"
        description="Get notified when builds complete"
        checked={checked2}
        onChange={(e) => setChecked2(e.target.checked)}
      />
      <Checkbox label="Disabled option" disabled />
    </div>
  );
}

// Toggle demos
export function ToggleBasicDemo() {
  let [enabled, setEnabled] = useState(true);
  let [enabled2, setEnabled2] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <Toggle
        label="Dynamic content detection"
        description="Auto-detect and ignore dynamic regions"
        checked={enabled}
        onChange={(e) => setEnabled(e.target.checked)}
      />
      <Toggle
        label="Email notifications"
        checked={enabled2}
        onChange={(e) => setEnabled2(e.target.checked)}
      />
    </div>
  );
}

// SearchInput demos
export function SearchInputBasicDemo() {
  let [value, setValue] = useState('');

  return (
    <div style={{ maxWidth: '320px' }}>
      <SearchInput value={value} onChange={setValue} placeholder="Search screenshots..." />
      <p style={{ color: '#64748b', fontSize: '0.75rem', marginTop: '0.5rem' }}>
        Value: "{value || '(empty)'}"
      </p>
    </div>
  );
}

// Combobox demos
export function ComboboxBasicDemo() {
  let [selected, setSelected] = useState(null);

  let branches = [
    { id: 1, name: 'main' },
    { id: 2, name: 'develop' },
    { id: 3, name: 'feature/auth' },
    { id: 4, name: 'feature/dashboard' },
    { id: 5, name: 'fix/modal-bug' }
  ];

  return (
    <div style={{ maxWidth: '320px' }}>
      <Combobox
        items={branches}
        itemToString={(branch) => branch?.name || ''}
        renderItem={(branch, { selected }) => (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span>{branch.name}</span>
            {selected && (
              <CheckCircleIcon style={{ width: '1rem', height: '1rem', color: '#f59e0b' }} />
            )}
          </div>
        )}
        selectedItem={selected}
        onSelectedItemChange={setSelected}
        label="Select Branch"
        placeholder="Search branches..."
      />
    </div>
  );
}
