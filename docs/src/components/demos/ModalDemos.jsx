import { Button, ConfirmationDialog, Input, Modal } from '@vizzly-testing/observatory';
import { useState } from 'react';

export function ModalBasicDemo() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Update Baseline"
        description="This will update your baseline images"
      >
        <p style={{ color: '#94a3b8', marginBottom: '1.5rem' }}>
          Are you sure you want to update the baseline? This will mark all current screenshots as
          the new reference.
        </p>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
          <Button variant="ghost" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => setIsOpen(false)}>Update Baseline</Button>
        </div>
      </Modal>
    </div>
  );
}

export function ModalWithFormDemo() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button variant="secondary" onClick={() => setIsOpen(true)}>
        Create Project
      </Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Create New Project">
        <div
          style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}
        >
          <Input label="Project Name" placeholder="my-awesome-project" />
          <Input label="Repository URL" placeholder="https://github.com/..." />
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
          <Button variant="ghost" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => setIsOpen(false)}>Create Project</Button>
        </div>
      </Modal>
    </div>
  );
}

export function ConfirmationDialogDemo() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button variant="danger" onClick={() => setIsOpen(true)}>
        Delete Project
      </Button>
      <ConfirmationDialog
        isOpen={isOpen}
        onConfirm={() => setIsOpen(false)}
        onCancel={() => setIsOpen(false)}
        title="Delete Project?"
        message="This action cannot be undone. All screenshots, builds, and settings will be permanently removed."
        confirmText="Delete Project"
        cancelText="Cancel"
        variant="danger"
      />
    </div>
  );
}

export function ConfirmationDialogVariantsDemo() {
  let [dangerOpen, setDangerOpen] = useState(false);
  let [warningOpen, setWarningOpen] = useState(false);

  return (
    <div style={{ display: 'flex', gap: '0.75rem' }}>
      <Button variant="danger" onClick={() => setDangerOpen(true)}>
        Danger
      </Button>
      <Button variant="warning" onClick={() => setWarningOpen(true)}>
        Warning
      </Button>

      <ConfirmationDialog
        isOpen={dangerOpen}
        onConfirm={() => setDangerOpen(false)}
        onCancel={() => setDangerOpen(false)}
        title="Delete permanently?"
        message="This cannot be undone."
        confirmText="Delete"
        variant="danger"
      />

      <ConfirmationDialog
        isOpen={warningOpen}
        onConfirm={() => setWarningOpen(false)}
        onCancel={() => setWarningOpen(false)}
        title="Are you sure?"
        message="This will reset all your settings."
        confirmText="Reset"
        variant="warning"
      />
    </div>
  );
}
