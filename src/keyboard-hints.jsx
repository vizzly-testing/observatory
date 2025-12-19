/**
 * KeyboardHints Component
 * Observatory Design System
 *
 * Displays available keyboard shortcuts in a subtle, non-intrusive way.
 * Designed for power users who want faster workflows.
 *
 * Features:
 * - Compact inline display
 * - Semi-transparent to not distract from content
 * - Can be shown/hidden based on user preference
 * - Accessible with proper semantics
 */

import { useEffect, useState } from 'react';

/**
 * Individual keyboard shortcut hint
 */
export function KeyboardHint({ keyLabel, action, variant = 'default', className = '' }) {
  let variants = {
    default: {
      key: 'bg-slate-700/80 border-slate-600/50 text-slate-300',
      action: 'text-slate-500'
    },
    approve: {
      key: 'bg-emerald-900/50 border-emerald-700/50 text-emerald-400',
      action: 'text-emerald-600'
    },
    reject: {
      key: 'bg-red-900/50 border-red-700/50 text-red-400',
      action: 'text-red-600'
    },
    nav: {
      key: 'bg-slate-700/60 border-slate-600/40 text-slate-400',
      action: 'text-slate-500'
    }
  };

  let config = variants[variant] || variants.default;

  return (
    <span className={`inline-flex items-center gap-1 ${className}`}>
      <span
        className={`
          inline-flex items-center justify-center
          min-w-5 h-5 px-1.5
          text-[10px] font-mono font-semibold leading-none
          rounded border
          ${config.key}
        `}
        role="img"
        aria-label={`${keyLabel} key`}
      >
        {keyLabel}
      </span>
      <span className={`text-[10px] ${config.action}`}>{action}</span>
    </span>
  );
}

/**
 * Grouped keyboard hints for review workflow
 */
export function ReviewKeyboardHints({
  showApprove = true,
  showReject = true,
  showNav = true,
  showInfo = true,
  isApproved = false,
  isRejected = false,
  className = ''
}) {
  return (
    <div
      className={`flex items-center gap-3 ${className}`}
      role="region"
      aria-label="Keyboard shortcuts"
    >
      {showNav && (
        <div className="flex items-center gap-2">
          <KeyboardHint keyLabel="↑↓" action="navigate" variant="nav" />
        </div>
      )}

      {(showApprove || showReject) && (
        <div className="flex items-center gap-2">
          {showApprove && (
            <KeyboardHint
              keyLabel="A"
              action={isApproved ? 'clear' : 'approve'}
              variant="approve"
            />
          )}
          {showReject && (
            <KeyboardHint keyLabel="R" action={isRejected ? 'clear' : 'reject'} variant="reject" />
          )}
        </div>
      )}

      {showInfo && (
        <div className="flex items-center gap-2">
          <KeyboardHint keyLabel="I" action="info" variant="nav" />
          <KeyboardHint keyLabel="Esc" action="close" variant="nav" />
        </div>
      )}
    </div>
  );
}

/**
 * Compact keyboard shortcuts bar for toolbar integration
 */
export function KeyboardBar({ shortcuts = [], visible = true, className = '' }) {
  if (!visible || shortcuts.length === 0) return null;

  return (
    <div
      className={`
        flex items-center gap-2
        px-2 py-1
        bg-slate-900/60 backdrop-blur-sm
        border border-slate-800/40
        rounded-md
        ${className}
      `}
      role="region"
      aria-label="Keyboard shortcuts"
    >
      {shortcuts.map((shortcut, idx) => (
        <KeyboardHint
          key={shortcut.key}
          keyLabel={shortcut.key}
          action={shortcut.action}
          variant={shortcut.variant || 'default'}
        />
      ))}
    </div>
  );
}

/**
 * Hook to track if user prefers keyboard shortcuts
 * Shows hints when user starts using keyboard, hides after mouse use
 */
export function useKeyboardHintsVisibility(defaultVisible = true) {
  let [visible, setVisible] = useState(defaultVisible);
  let [lastInputType, setLastInputType] = useState('mouse');

  useEffect(() => {
    let handleKeyDown = (e) => {
      // Show hints when user uses keyboard shortcuts
      if (
        e.key === 'ArrowUp' ||
        e.key === 'ArrowDown' ||
        e.key.toLowerCase() === 'a' ||
        e.key.toLowerCase() === 'r'
      ) {
        setLastInputType('keyboard');
        setVisible(true);
      }
    };

    let handleMouseMove = () => {
      if (lastInputType === 'keyboard') {
        setLastInputType('mouse');
        // Don't auto-hide, let user control visibility
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [lastInputType]);

  return { visible, setVisible, lastInputType };
}

export default KeyboardHint;
