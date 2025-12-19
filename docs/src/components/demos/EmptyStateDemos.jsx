import { CameraIcon, FolderIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Button, Card, EmptyState } from '@vizzly-testing/observatory';

export function EmptyStateBasicDemo() {
  return (
    <Card>
      <EmptyState
        icon={CameraIcon}
        title="No Screenshots Yet"
        description="Start capturing screenshots to see your visual testing results here."
        action={<Button>Capture First Screenshot</Button>}
      />
    </Card>
  );
}

export function EmptyStateVariantsDemo() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
      <Card>
        <EmptyState
          icon={FolderIcon}
          title="No Projects"
          description="Create your first project to start visual testing."
          action={<Button>Create Project</Button>}
        />
      </Card>
      <Card>
        <EmptyState
          icon={MagnifyingGlassIcon}
          title="No Results"
          description="Try adjusting your search or filters."
        />
      </Card>
    </div>
  );
}

export function EmptyStateMinimalDemo() {
  return <EmptyState title="Nothing here yet" description="Content will appear when available." />;
}
