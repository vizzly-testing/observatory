import { Button, Toast } from '@vizzly-testing/observatory';
import { useState } from 'react';

export function ToastDemo() {
  let [toasts, setToasts] = useState([]);
  let [counter, setCounter] = useState(0);

  let showToast = (variant) => {
    let id = counter;
    setCounter((c) => c + 1);
    setToasts((t) => [...t, { id, variant, message: getToastMessage(variant) }]);
  };

  let hideToast = (id) => {
    setToasts((t) => t.filter((toast) => toast.id !== id));
  };

  let getToastMessage = (variant) => {
    switch (variant) {
      case 'success':
        return 'Changes saved successfully!';
      case 'warning':
        return 'Some screenshots need review.';
      case 'error':
        return 'Failed to save changes.';
      case 'info':
        return 'Processing your request...';
      default:
        return 'Notification message';
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
        <Button variant="success" onClick={() => showToast('success')}>
          Success Toast
        </Button>
        <Button variant="warning" onClick={() => showToast('warning')}>
          Warning Toast
        </Button>
        <Button variant="danger" onClick={() => showToast('error')}>
          Error Toast
        </Button>
        <Button variant="secondary" onClick={() => showToast('info')}>
          Info Toast
        </Button>
      </div>
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          isVisible={true}
          message={toast.message}
          variant={toast.variant}
          onClose={() => hideToast(toast.id)}
          position="top-right"
        />
      ))}
    </div>
  );
}

export function ToastPositionsDemo() {
  return (
    <div style={{ color: '#94a3b8', fontSize: '0.875rem' }}>
      <p style={{ marginBottom: '1rem' }}>Toast positions available:</p>
      <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
        <li>
          <code style={{ color: '#fbbf24' }}>top-right</code> — Default, recommended
        </li>
        <li>
          <code style={{ color: '#fbbf24' }}>top-left</code>
        </li>
        <li>
          <code style={{ color: '#fbbf24' }}>bottom-right</code>
        </li>
        <li>
          <code style={{ color: '#fbbf24' }}>bottom-left</code>
        </li>
        <li>
          <code style={{ color: '#fbbf24' }}>top-center</code>
        </li>
        <li>
          <code style={{ color: '#fbbf24' }}>bottom-center</code>
        </li>
      </ul>
    </div>
  );
}
