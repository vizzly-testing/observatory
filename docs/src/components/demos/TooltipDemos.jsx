import { Button, Tooltip } from '@vizzly-testing/observatory';

export function TooltipPositionsDemo() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', padding: '1rem 0' }}>
      <Tooltip content="Appears above" position="top">
        <Button variant="secondary">Top</Button>
      </Tooltip>
      <Tooltip content="Appears below" position="bottom">
        <Button variant="secondary">Bottom</Button>
      </Tooltip>
      <Tooltip content="Appears left" position="left">
        <Button variant="secondary">Left</Button>
      </Tooltip>
      <Tooltip content="Appears right" position="right">
        <Button variant="secondary">Right</Button>
      </Tooltip>
    </div>
  );
}

export function TooltipBasicDemo() {
  return (
    <Tooltip content="Click to save your changes">
      <Button>Save Changes</Button>
    </Tooltip>
  );
}
