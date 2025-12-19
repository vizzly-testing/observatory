import { StatusDot } from '@vizzly-testing/observatory';

export function StatusDotBasicDemo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <StatusDot status="success" />
        <span style={{ color: '#94a3b8', fontSize: '0.875rem' }}>Approved</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <StatusDot status="warning" />
        <span style={{ color: '#94a3b8', fontSize: '0.875rem' }}>Pending</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <StatusDot status="danger" />
        <span style={{ color: '#94a3b8', fontSize: '0.875rem' }}>Rejected</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <StatusDot status="processing" />
        <span style={{ color: '#94a3b8', fontSize: '0.875rem' }}>Processing</span>
      </div>
    </div>
  );
}

export function StatusDotSizesDemo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <StatusDot status="success" size="sm" />
        <span style={{ color: '#94a3b8', fontSize: '0.875rem' }}>Small</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <StatusDot status="success" size="md" />
        <span style={{ color: '#94a3b8', fontSize: '0.875rem' }}>Medium</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <StatusDot status="success" size="lg" />
        <span style={{ color: '#94a3b8', fontSize: '0.875rem' }}>Large</span>
      </div>
    </div>
  );
}

export function StatusDotAnimatedDemo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <StatusDot status="processing" />
        <span style={{ color: '#94a3b8', fontSize: '0.875rem' }}>Processing (animated)</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <StatusDot status="success" />
        <span style={{ color: '#94a3b8', fontSize: '0.875rem' }}>Success (static)</span>
      </div>
    </div>
  );
}
