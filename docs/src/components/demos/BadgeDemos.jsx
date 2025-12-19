import { Badge } from '@vizzly-testing/observatory';

export function BadgeVariantsDemo() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
      <Badge>Default</Badge>
      <Badge variant="success">Approved</Badge>
      <Badge variant="warning">Pending</Badge>
      <Badge variant="danger">Rejected</Badge>
      <Badge variant="info">Processing</Badge>
      <Badge variant="purple">Special</Badge>
    </div>
  );
}

export function BadgeWithDotsDemo() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
      <Badge variant="success" dot>
        Active
      </Badge>
      <Badge variant="warning" dot>
        Reviewing
      </Badge>
      <Badge variant="danger" dot>
        Failed
      </Badge>
      <Badge variant="info" dot pulseDot>
        Comparing
      </Badge>
    </div>
  );
}

export function BadgeSizesDemo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
  );
}
