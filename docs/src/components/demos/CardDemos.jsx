import {
  CheckCircleIcon,
  Cog6ToothIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';
import { Badge, Button, Card, CardBody, CardFooter, CardHeader } from '@vizzly-testing/observatory';

export function BasicCardDemo() {
  return (
    <Card>
      <CardHeader
        icon={Cog6ToothIcon}
        title="Project Settings"
        description="Configure your project"
      />
      <CardBody>
        <p style={{ color: '#94a3b8', margin: 0 }}>
          Card content goes here. Use CardBody for consistent padding.
        </p>
      </CardBody>
    </Card>
  );
}

export function CardVariantsDemo() {
  return (
    <div style={{ display: 'grid', gap: '1rem' }}>
      <Card variant="success">
        <CardHeader icon={CheckCircleIcon} title="Build Approved" description="All tests passing" />
        <CardBody>
          <p style={{ color: '#94a3b8', margin: 0 }}>This build looks great!</p>
        </CardBody>
      </Card>
      <Card variant="warning">
        <CardHeader
          icon={ExclamationTriangleIcon}
          title="Review Required"
          description="3 changes detected"
        />
        <CardBody>
          <p style={{ color: '#94a3b8', margin: 0 }}>Screenshots need attention.</p>
        </CardBody>
      </Card>
      <Card variant="danger">
        <CardHeader
          icon={ExclamationTriangleIcon}
          title="Build Failed"
          description="Configuration error"
        />
        <CardBody>
          <p style={{ color: '#94a3b8', margin: 0 }}>Check your settings.</p>
        </CardBody>
      </Card>
    </div>
  );
}

export function CardWithFooterDemo() {
  return (
    <Card style={{ maxWidth: '400px' }}>
      <CardHeader title="Delete Project" />
      <CardBody>
        <p style={{ color: '#94a3b8', margin: 0 }}>
          This action cannot be undone. All builds will be deleted.
        </p>
      </CardBody>
      <CardFooter>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
          <Button variant="ghost">Cancel</Button>
          <Button variant="danger">Delete</Button>
        </div>
      </CardFooter>
    </Card>
  );
}

export function CardHeaderActionsDemo() {
  return (
    <Card>
      <CardHeader
        icon={Cog6ToothIcon}
        title="API Keys"
        description="Manage your API tokens"
        actions={
          <Button variant="secondary" size="sm">
            Generate Key
          </Button>
        }
      />
      <CardBody>
        <p style={{ color: '#94a3b8', margin: 0 }}>Your API keys will appear here.</p>
      </CardBody>
    </Card>
  );
}

export function CardHoverDemo() {
  return (
    <Card hover style={{ maxWidth: '400px', cursor: 'pointer' }}>
      <CardHeader title="Homepage" description="Last updated 2 hours ago" />
      <CardBody>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <Badge variant="success">Approved</Badge>
          <Badge>12 screenshots</Badge>
        </div>
      </CardBody>
    </Card>
  );
}
