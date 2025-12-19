/**
 * ViewModeToggle Component
 * Observatory Design System
 *
 * Toggle between different comparison view modes (overlay, toggle, slide).
 * Mobile-first with icon-only compact variant.
 *
 * Features:
 * - Three view modes: overlay, toggle, onion-skin (slide)
 * - Compact icon-only mode for mobile
 * - Full labels on desktop
 * - Smooth transitions
 */

import {
  ArrowsRightLeftIcon,
  Square2StackIcon,
  ViewColumnsIcon
} from '@heroicons/react/24/outline';

/**
 * View mode configuration
 */
let viewModes = [
  {
    value: 'overlay',
    label: 'Overlay',
    shortLabel: 'Over',
    icon: Square2StackIcon,
    description: 'Show diff overlay on image'
  },
  {
    value: 'toggle',
    label: 'Toggle',
    shortLabel: 'Toggle',
    icon: ArrowsRightLeftIcon,
    description: 'Toggle between baseline and current'
  },
  {
    value: 'onion-skin',
    label: 'Slide',
    shortLabel: 'Slide',
    icon: ViewColumnsIcon,
    description: 'Slide to compare baseline and current'
  }
];

/**
 * ViewModeToggle - Segmented control for view modes
 */
export function ViewModeToggle({
  value = 'overlay',
  onChange,
  disabled = false,
  compact = false,
  showLabels = true,
  className = ''
}) {
  return (
    <div
      className={`
        inline-flex items-center
        bg-slate-800/60 rounded-lg p-0.5
        ${className}
      `}
      role="radiogroup"
      aria-label="View mode"
    >
      {viewModes.map((mode) => {
        let isActive = value === mode.value;
        let Icon = mode.icon;

        return (
          <button
            key={mode.value}
            onClick={() => onChange?.(mode.value)}
            disabled={disabled}
            className={`
              flex items-center justify-center gap-1.5
              ${compact ? 'p-2' : 'px-2 sm:px-3 py-1.5'}
              rounded-md text-xs font-medium
              transition-all duration-150
              disabled:opacity-50 disabled:cursor-not-allowed
              ${
                isActive
                  ? 'bg-amber-500 text-slate-900 shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
              }
            `}
            role="radio"
            aria-checked={isActive}
            title={mode.description}
          >
            {compact ? (
              <Icon className="w-4 h-4" />
            ) : (
              <>
                <Icon className="w-4 h-4 hidden sm:block" />
                <span className={showLabels ? '' : 'sr-only'}>
                  {compact ? mode.shortLabel : mode.label}
                </span>
              </>
            )}
          </button>
        );
      })}
    </div>
  );
}

/**
 * ViewModeSelect - Dropdown version for very compact spaces
 */
export function ViewModeSelect({ value = 'overlay', onChange, disabled = false, className = '' }) {
  let currentMode = viewModes.find((m) => m.value === value) || viewModes[0];
  let Icon = currentMode.icon;

  return (
    <div className={`relative ${className}`}>
      <select
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        disabled={disabled}
        className="
          appearance-none
          bg-slate-800/60 border border-slate-700/50
          rounded-lg pl-8 pr-8 py-2
          text-sm text-slate-200
          cursor-pointer
          focus:outline-none focus:ring-2 focus:ring-amber-500/50
          disabled:opacity-50 disabled:cursor-not-allowed
        "
      >
        {viewModes.map((mode) => (
          <option key={mode.value} value={mode.value}>
            {mode.label}
          </option>
        ))}
      </select>

      {/* Icon */}
      <Icon className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />

      {/* Chevron */}
      <svg
        className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  );
}

export default ViewModeToggle;
