/**
 * Tooltip Component
 * Observatory Design System
 *
 * Hover tooltip for additional context
 */

import { useState } from 'react';

export function Tooltip({ content, children, position = 'top', className = '' }) {
  let [isVisible, setIsVisible] = useState(false);
  let [timeoutId, setTimeoutId] = useState(null);

  let showTooltip = () => {
    let id = window.requestAnimationFrame(() => {
      setIsVisible(true);
    });
    setTimeoutId(id);
  };

  let hideTooltip = () => {
    if (timeoutId) {
      window.cancelAnimationFrame(timeoutId);
    }
    setIsVisible(false);
  };

  let positionClasses = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2'
  };

  let arrowClasses = {
    top: 'top-full left-1/2 -translate-x-1/2 border-t-slate-800',
    bottom: 'bottom-full left-1/2 -translate-x-1/2 border-b-slate-800',
    left: 'left-full top-1/2 -translate-y-1/2 border-l-slate-800',
    right: 'right-full top-1/2 -translate-y-1/2 border-r-slate-800'
  };

  return (
    <div
      className={`relative inline-flex ${className}`}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {children}
      <div
        className={`absolute z-50 pointer-events-none transition-all duration-150 ${positionClasses[position]} ${
          isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 shadow-xl text-xs text-white whitespace-nowrap">
          {content}
        </div>
        <div className={`absolute border-4 border-transparent ${arrowClasses[position]}`} />
      </div>
    </div>
  );
}
