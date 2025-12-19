import { Alert } from '@vizzly-testing/observatory';

export function AlertVariantsDemo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Alert variant="success" title="Build Approved">
        All screenshots match the baseline. Looking good!
      </Alert>
      <Alert variant="warning" title="Review Required">
        3 screenshots have visual differences that need attention.
      </Alert>
      <Alert variant="danger" title="Build Failed">
        Could not process this build. Check your configuration.
      </Alert>
      <Alert variant="info" title="Processing">
        Comparing your screenshots against the baseline...
      </Alert>
    </div>
  );
}

export function AlertBasicDemo() {
  return (
    <Alert variant="info" title="Tip">
      You can use keyboard shortcuts to navigate between screenshots.
    </Alert>
  );
}

export function AlertDismissibleDemo() {
  return (
    <Alert variant="success" title="Changes Saved" dismissible onDismiss={() => {}}>
      Your project settings have been updated successfully.
    </Alert>
  );
}

export function AlertWithoutTitleDemo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Alert variant="success">Screenshots uploaded successfully.</Alert>
      <Alert variant="warning">Some screenshots may take longer to process.</Alert>
    </div>
  );
}
