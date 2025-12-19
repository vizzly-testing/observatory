/**
 * ConfirmationDialog Component
 * Observatory Design System
 *
 * A specialized modal for confirmation actions (delete, dangerous operations, etc.)
 * Variants: danger, warning, info
 */

import { ExclamationTriangleIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Button } from './button.jsx';

export function ConfirmationDialog({
  isOpen,
  onConfirm,
  onCancel,
  title,
  message,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  variant = 'danger',
  loading = false,
  icon: CustomIcon,
  children
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    let handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen && !loading) {
        onCancel();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onCancel, loading]);

  if (!isOpen) return null;

  let variantStyles = {
    danger: {
      header: 'bg-red-900/20 border-red-500/30',
      iconBg: 'bg-red-500',
      title: 'text-red-300',
      message: 'text-red-200',
      buttonVariant: 'danger'
    },
    warning: {
      header: 'bg-amber-900/20 border-amber-500/30',
      iconBg: 'bg-amber-500',
      title: 'text-amber-300',
      message: 'text-amber-200',
      buttonVariant: 'warning'
    },
    info: {
      header: 'bg-blue-900/20 border-blue-500/30',
      iconBg: 'bg-blue-500',
      title: 'text-blue-300',
      message: 'text-blue-200',
      buttonVariant: 'primary'
    }
  };

  let styles = variantStyles[variant] || variantStyles.danger;
  let Icon = CustomIcon || ExclamationTriangleIcon;

  return createPortal(
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={loading ? undefined : onCancel}
      />

      {/* Dialog */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div
          className="relative bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden"
          role="alertdialog"
          aria-modal="true"
          aria-labelledby="confirmation-title"
          aria-describedby="confirmation-description"
        >
          {/* Close button */}
          <button
            onClick={onCancel}
            disabled={loading}
            className="absolute top-5 right-5 z-10 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg p-1 transition-colors disabled:opacity-50"
            aria-label="Close dialog"
          >
            <XMarkIcon className="w-5 h-5" />
          </button>

          {/* Header with icon */}
          <div className={`px-8 pt-8 pb-6 border-b border-slate-700/50 ${styles.header}`}>
            <div className="flex items-center gap-4">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${styles.iconBg}`}
              >
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 id="confirmation-title" className={`text-xl font-semibold pr-8 ${styles.title}`}>
                {title}
              </h3>
            </div>
          </div>

          {/* Content */}
          <div id="confirmation-description" className="px-8 py-6">
            {message && <p className={`text-sm leading-relaxed ${styles.message}`}>{message}</p>}
            {children && (
              <div className={`text-sm leading-relaxed ${styles.message} ${message ? 'mt-4' : ''}`}>
                {children}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="px-8 py-6 bg-slate-800/30 border-t border-slate-700/50">
            <div className="flex flex-col-reverse sm:flex-row gap-3 sm:justify-end">
              <Button variant="secondary" onClick={onCancel} disabled={loading}>
                {cancelText}
              </Button>
              <Button variant={styles.buttonVariant} onClick={onConfirm} loading={loading}>
                {confirmText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
