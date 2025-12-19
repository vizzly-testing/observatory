/**
 * Modal Component
 * Observatory Design System
 *
 * Dialog/Modal component with variants
 */

import { XMarkIcon } from '@heroicons/react/24/outline';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

export function Modal({
  isOpen,
  onClose,
  title,
  description,
  children,
  size = 'md',
  showClose = true,
  className = ''
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
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  let sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
    full: 'max-w-[90vw]'
  };

  return createPortal(
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div
          className={`relative bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl w-full ${sizeClasses[size]} animate-in zoom-in-95 fade-in duration-200 ${className}`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* Header */}
          {(title || showClose) && (
            <div className="flex items-start justify-between px-6 py-5 border-b border-slate-700/50">
              <div>
                {title && (
                  <h2 id="modal-title" className="text-lg font-semibold text-white">
                    {title}
                  </h2>
                )}
                {description && <p className="text-sm text-slate-400 mt-1">{description}</p>}
              </div>
              {showClose && (
                <button
                  onClick={onClose}
                  className="text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg p-1.5 -mr-1.5 transition-colors"
                  aria-label="Close"
                >
                  <XMarkIcon className="w-5 h-5" />
                </button>
              )}
            </div>
          )}

          {/* Content */}
          <div className="px-6 py-5">{children}</div>
        </div>
      </div>
    </div>,
    document.body
  );
}

export function ModalFooter({ children, className = '' }) {
  return (
    <div
      className={`flex items-center justify-end gap-3 pt-4 mt-4 border-t border-slate-700/50 ${className}`}
    >
      {children}
    </div>
  );
}
