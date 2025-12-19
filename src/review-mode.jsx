/**
 * ReviewMode Component
 * Observatory Design System
 *
 * Provides a "review mode" for keyboard-driven screenshot review workflows.
 * When active, enables keyboard shortcuts for approval, rejection, and view manipulation.
 *
 * Features:
 * - Space to enter review mode
 * - Esc to exit review mode
 * - Visual indicator when active
 * - Configurable shortcuts
 * - Accessible announcements
 */

import { createContext, useCallback, useContext, useEffect, useState } from 'react';

const ReviewModeContext = createContext(null);

/**
 * ReviewModeProvider - Wrap your review UI with this to enable review mode
 */
export function ReviewModeProvider({ children, defaultActive = false }) {
  const [isActive, setIsActive] = useState(defaultActive);

  const enter = useCallback(() => setIsActive(true), []);
  const exit = useCallback(() => setIsActive(false), []);
  const toggle = useCallback(() => setIsActive((prev) => !prev), []);

  // Handle Space to toggle review mode
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't trigger in inputs
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      if (e.key === ' ') {
        e.preventDefault();
        toggle();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [toggle]);

  const value = {
    isActive,
    enter,
    exit,
    toggle
  };

  return <ReviewModeContext.Provider value={value}>{children}</ReviewModeContext.Provider>;
}

/**
 * useReviewMode - Access review mode state and actions
 */
export function useReviewMode() {
  const context = useContext(ReviewModeContext);
  if (!context) {
    throw new Error('useReviewMode must be used within a ReviewModeProvider');
  }
  return context;
}

/**
 * useReviewModeShortcuts - Register keyboard shortcuts that only work in review mode
 *
 * @param {Object} shortcuts - Map of key to handler function
 * @param {Object} options - Additional options
 *
 * Example:
 * useReviewModeShortcuts({
 *   'a': () => handleApprove(),
 *   'r': () => handleReject(),
 *   'd': () => toggleDiff(),
 *   't': () => cycleViewMode(),
 * });
 */
export function useReviewModeShortcuts(shortcuts, options = {}) {
  const { isActive } = useReviewMode();
  const { enabled = true } = options;

  useEffect(() => {
    if (!isActive || !enabled) return;

    const handleKeyDown = (e) => {
      // Don't trigger in inputs
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      // Don't trigger with modifiers (except shift for uppercase)
      if (e.metaKey || e.ctrlKey || e.altKey) return;

      const key = e.key.toLowerCase();
      const handler = shortcuts[key];

      if (handler) {
        e.preventDefault();
        handler(e);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isActive, enabled, shortcuts]);
}

/**
 * ReviewModeHint - Shows how to enter/exit review mode
 */
export function ReviewModeHint({ className = '' }) {
  const { isActive } = useReviewMode();

  return (
    <span className={`text-xs text-slate-500 ${className}`}>
      <span className="text-slate-400">Space</span> {isActive ? 'exit review' : 'review mode'}
    </span>
  );
}

/**
 * ReviewModeShortcutsHint - Shows available shortcuts when in review mode
 */
export function ReviewModeShortcutsHint({
  showApprove = true,
  showReject = true,
  showDiff = true,
  showViewMode = true,
  className = ''
}) {
  const { isActive } = useReviewMode();

  if (!isActive) {
    return (
      <p className={`text-xs text-slate-500 ${className}`}>
        <span className="text-slate-400">Space</span> to enter review mode
      </p>
    );
  }

  return (
    <p className={`text-xs text-slate-500 whitespace-nowrap ${className}`}>
      {showApprove && (
        <>
          <span className="text-emerald-500 font-medium">A</span> approve
        </>
      )}
      {showReject && (
        <>
          {' · '}
          <span className="text-red-500 font-medium">R</span> reject
        </>
      )}
      {showDiff && (
        <>
          {' · '}
          <span className="text-slate-400 font-medium">D</span> diff
        </>
      )}
      {showViewMode && (
        <>
          {' · '}
          <span className="text-slate-400 font-medium">T</span> view
        </>
      )}
      {' · '}
      <span className="text-slate-400">Space</span> exit
    </p>
  );
}

export default ReviewModeProvider;
