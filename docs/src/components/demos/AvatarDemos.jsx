import { Avatar, AvatarGroup } from '@vizzly-testing/observatory';

export function AvatarSizesDemo() {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '1rem' }}>
      <Avatar name="Alice Johnson" size="xs" />
      <Avatar name="Alice Johnson" size="sm" />
      <Avatar name="Alice Johnson" size="md" />
      <Avatar name="Alice Johnson" size="lg" />
      <Avatar name="Alice Johnson" size="xl" />
    </div>
  );
}

export function AvatarStatusDemo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
      <div style={{ textAlign: 'center' }}>
        <Avatar name="Online User" status="online" />
        <div style={{ color: '#94a3b8', fontSize: '0.75rem', marginTop: '0.5rem' }}>Online</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Avatar name="Away User" status="away" />
        <div style={{ color: '#94a3b8', fontSize: '0.75rem', marginTop: '0.5rem' }}>Away</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Avatar name="Busy User" status="busy" />
        <div style={{ color: '#94a3b8', fontSize: '0.75rem', marginTop: '0.5rem' }}>Busy</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Avatar name="Offline User" status="offline" />
        <div style={{ color: '#94a3b8', fontSize: '0.75rem', marginTop: '0.5rem' }}>Offline</div>
      </div>
    </div>
  );
}

export function AvatarGroupDemo() {
  let avatars = [
    { name: 'Alice Johnson', src: null },
    { name: 'Bob Smith', src: null },
    { name: 'Carol White', src: null },
    { name: 'David Brown', src: null },
    { name: 'Eve Davis', src: null }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div>
        <div style={{ color: '#94a3b8', fontSize: '0.75rem', marginBottom: '0.5rem' }}>max=3</div>
        <AvatarGroup avatars={avatars} max={3} />
      </div>
      <div>
        <div style={{ color: '#94a3b8', fontSize: '0.75rem', marginBottom: '0.5rem' }}>
          max=5 (all shown)
        </div>
        <AvatarGroup avatars={avatars} max={5} />
      </div>
    </div>
  );
}

export function AvatarBasicDemo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <Avatar name="John Doe" />
      <Avatar name="Jane Smith" />
      <Avatar name="Bob Wilson" />
    </div>
  );
}
