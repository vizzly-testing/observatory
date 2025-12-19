/**
 * ActionToast Component
 * Observatory Design System
 *
 * A compact, inline notification for immediate action feedback.
 * Unlike Toast, this is designed to appear near the action area (e.g., toolbar)
 * without covering important UI elements.
 *
 * Features:
 * - Compact pill-style design
 * - Auto-dismiss with smooth exit animation
 * - Positioned relative to parent container (not fixed)
 * - Designed for approval/rejection feedback in review workflows
 */

import { CheckIcon, ExclamationTriangleIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';

const variantConfig = {
  approved: {
    icon: CheckIcon,
    bg: 'bg-emerald-500/90',
    border: 'border-emerald-400/30',
    text: 'text-white',
    glow: 'shadow-emerald-500/25'
  },
  rejected: {
    icon: XMarkIcon,
    bg: 'bg-red-500/90',
    border: 'border-red-400/30',
    text: 'text-white',
    glow: 'shadow-red-500/25'
  },
  cleared: {
    icon: XMarkIcon,
    bg: 'bg-slate-600/90',
    border: 'border-slate-500/30',
    text: 'text-slate-200',
    glow: 'shadow-slate-500/15'
  },
  error: {
    icon: ExclamationTriangleIcon,
    bg: 'bg-red-600/90',
    border: 'border-red-500/30',
    text: 'text-white',
    glow: 'shadow-red-500/25'
  }
};

export function ActionToast({
  message,
  variant = 'approved',
  isVisible = false,
  onHide,
  duration = 1500,
  className = ''
}) {
  const [isShowing, setIsShowing] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setIsShowing(true);
      setIsExiting(false);

      // Schedule exit animation
      const exitTimer = window.setTimeout(() => {
        setIsExiting(true);
      }, duration - 200);

      // Schedule actual hide
      const hideTimer = window.setTimeout(() => {
        setIsShowing(false);
        setIsExiting(false);
        onHide?.();
      }, duration);

      return () => {
        clearTimeout(exitTimer);
        clearTimeout(hideTimer);
      };
    }
  }, [isVisible, duration, onHide]);

  if (!isShowing) return null;

  const config = variantConfig[variant] || variantConfig.approved;
  const Icon = config.icon;

  return (
    <div
      className={`
        inline-flex items-center gap-1.5
        px-3 py-1.5
        rounded-full
        border
        backdrop-blur-sm
        shadow-lg
        ${config.bg}
        ${config.border}
        ${config.text}
        ${config.glow}
        transition-all duration-200
        ${isExiting ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}
        ${className}
      `}
      role="status"
      aria-live="polite"
    >
      <Icon className="w-4 h-4 shrink-0" />
      <span className="text-sm font-medium whitespace-nowrap">{message}</span>
    </div>
  );
}

/**
 * useActionToast - Hook for managing action toast state
 */
export function useActionToast() {
  const [toast, setToast] = useState({
    isVisible: false,
    message: '',
    variant: 'approved'
  });

  const show = (message, variant = 'approved') => {
    setToast({ isVisible: true, message, variant });
  };

  const hide = () => {
    setToast((prev) => ({ ...prev, isVisible: false }));
  };

  return {
    toast,
    show,
    hide,
    showApproved: (message = 'Approved') => show(message, 'approved'),
    showRejected: (message = 'Rejected') => show(message, 'rejected'),
    showCleared: (message = 'Cleared') => show(message, 'cleared'),
    showError: (message = 'Failed') => show(message, 'error')
  };
}

export default ActionToast;
