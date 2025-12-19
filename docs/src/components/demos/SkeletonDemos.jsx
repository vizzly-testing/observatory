import { Skeleton, SkeletonCard, SkeletonTable } from '@vizzly-testing/observatory';

export function SkeletonBasicDemo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
      <Skeleton variant="heading" />
      <Skeleton variant="text" count={3} />
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <Skeleton variant="avatar" />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <Skeleton variant="text" width="40%" />
          <Skeleton variant="text" width="60%" height="12px" />
        </div>
      </div>
    </div>
  );
}

export function SkeletonCardDemo() {
  return (
    <div style={{ maxWidth: '400px' }}>
      <SkeletonCard />
    </div>
  );
}

export function SkeletonTableDemo() {
  return <SkeletonTable rows={4} columns={4} />;
}

export function SkeletonVariantsDemo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '400px' }}>
      <div>
        <div style={{ color: '#64748b', fontSize: '0.75rem', marginBottom: '0.5rem' }}>Heading</div>
        <Skeleton variant="heading" />
      </div>
      <div>
        <div style={{ color: '#64748b', fontSize: '0.75rem', marginBottom: '0.5rem' }}>
          Text (3 lines)
        </div>
        <Skeleton variant="text" count={3} />
      </div>
      <div>
        <div style={{ color: '#64748b', fontSize: '0.75rem', marginBottom: '0.5rem' }}>Avatar</div>
        <Skeleton variant="avatar" />
      </div>
      <div>
        <div style={{ color: '#64748b', fontSize: '0.75rem', marginBottom: '0.5rem' }}>
          Custom size
        </div>
        <Skeleton width="200px" height="40px" />
      </div>
    </div>
  );
}
