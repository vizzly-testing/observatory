import {
  ArrowRightIcon,
  ExclamationTriangleIcon,
  MagnifyingGlassIcon,
  PlusIcon
} from '@heroicons/react/24/outline';
import { Button } from '@vizzly-testing/observatory';

export function ButtonVariantsDemo() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="success">Success</Button>
    </div>
  );
}

export function ButtonSizesDemo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  );
}

export function ButtonWithIconsDemo() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
      <Button icon={PlusIcon}>Create New</Button>
      <Button variant="secondary" icon={MagnifyingGlassIcon}>
        Search
      </Button>
      <Button variant="ghost" icon={ArrowRightIcon} iconPosition="right">
        Continue
      </Button>
      <Button variant="danger" icon={ExclamationTriangleIcon}>
        Delete
      </Button>
    </div>
  );
}

export function ButtonStatesDemo() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}>
      <Button disabled>Disabled</Button>
      <Button loading>Loading...</Button>
      <div style={{ maxWidth: '200px', width: '100%' }}>
        <Button fullWidth>Full Width</Button>
      </div>
    </div>
  );
}
