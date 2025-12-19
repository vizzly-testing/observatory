import { Card, CardBody } from '@vizzly-testing/observatory';
import { ThumbnailStrip, ZoomControls } from '@vizzly-testing/observatory/image-viewer';
import { useState } from 'react';

export function ZoomControlsBasicDemo() {
  let [zoom, setZoom] = useState('fit');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <ZoomControls zoom={zoom} onZoomChange={setZoom} />
      <p style={{ color: '#64748b', fontSize: '0.75rem', margin: 0 }}>Current zoom: {zoom}</p>
    </div>
  );
}

export function ZoomControlsMobileDemo() {
  let [zoom, setZoom] = useState('fit');

  return (
    <div style={{ maxWidth: '320px' }}>
      <ZoomControls zoom={zoom} onZoomChange={setZoom} variant="mobile" />
    </div>
  );
}

export function ThumbnailStripDemo() {
  let [activeId, setActiveId] = useState(1);
  let [expanded, setExpanded] = useState(true);

  let items = [
    { id: 1, label: 'Homepage', badge: 'NEW' },
    { id: 2, label: 'Login Page' },
    { id: 3, label: 'Dashboard', badge: 'DIFF' },
    { id: 4, label: 'Settings' },
    { id: 5, label: 'Profile' },
    { id: 6, label: 'Checkout' }
  ];

  return (
    <Card style={{ overflow: 'hidden' }}>
      <CardBody padding="p-0">
        <div
          style={{
            height: '120px',
            background: 'var(--vz-elevated)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <span style={{ color: '#64748b' }}>
            Image preview: {items.find((i) => i.id === activeId)?.label}
          </span>
        </div>
      </CardBody>
      <ThumbnailStrip
        items={items}
        activeId={activeId}
        onSelect={setActiveId}
        collapsible
        isExpanded={expanded}
        onToggle={() => setExpanded(!expanded)}
      />
    </Card>
  );
}
