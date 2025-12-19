/**
 * FilterPill - Reusable filter button with label, count, and color state
 * Used in table toolbars for status filtering
 */

const colorClasses = {
  amber: {
    active: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
    inactive: 'text-amber-400/70 border-transparent hover:border-amber-500/30 hover:bg-amber-500/10'
  },
  cyan: {
    active: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
    inactive: 'text-cyan-400/70 border-transparent hover:border-cyan-500/30 hover:bg-cyan-500/10'
  },
  blue: {
    active: 'bg-blue-500/20 text-blue-300 border-blue-500/40',
    inactive: 'text-blue-400/70 border-transparent hover:border-blue-500/30 hover:bg-blue-500/10'
  },
  green: {
    active: 'bg-green-500/20 text-green-300 border-green-500/40',
    inactive: 'text-green-400/70 border-transparent hover:border-green-500/30 hover:bg-green-500/10'
  },
  emerald: {
    active: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    inactive:
      'text-emerald-400/70 border-transparent hover:border-emerald-500/30 hover:bg-emerald-500/10'
  },
  red: {
    active: 'bg-red-500/20 text-red-300 border-red-500/40',
    inactive: 'text-red-400/70 border-transparent hover:border-red-500/30 hover:bg-red-500/10'
  },
  orange: {
    active: 'bg-orange-500/20 text-orange-300 border-orange-500/40',
    inactive:
      'text-orange-400/70 border-transparent hover:border-orange-500/30 hover:bg-orange-500/10'
  },
  purple: {
    active: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
    inactive:
      'text-purple-400/70 border-transparent hover:border-purple-500/30 hover:bg-purple-500/10'
  },
  gray: {
    active: 'bg-gray-500/20 text-gray-300 border-gray-500/40',
    inactive: 'text-gray-400/70 border-transparent hover:border-gray-500/30 hover:bg-gray-500/10'
  }
};

export function FilterPill({
  label,
  count = 0,
  color = 'gray',
  active = false,
  disabled = false,
  onClick,
  icon: Icon,
  className = ''
}) {
  const colors = colorClasses[color] || colorClasses.gray;
  const stateClass = active ? colors.active : colors.inactive;

  return (
    <button
      onClick={onClick}
      disabled={disabled || count === 0}
      className={`
        inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium
        border transition-all duration-150
        ${stateClass}
        ${disabled || count === 0 ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'}
        ${className}
      `}
    >
      {Icon && <Icon className="w-3.5 h-3.5" />}
      <span>{label}</span>
      <span
        className={`
          px-1 py-0.5 rounded text-[10px] font-semibold min-w-[18px] text-center
          ${active ? 'bg-white/10' : 'bg-gray-700/50'}
        `}
      >
        {count}
      </span>
    </button>
  );
}

/**
 * FilterPillGroup - Container for a group of filter pills with optional dividers
 */
export function FilterPillGroup({ children, className = '' }) {
  return <div className={`flex items-center gap-1.5 flex-wrap ${className}`}>{children}</div>;
}

/**
 * FilterDivider - Visual separator between filter groups
 */
export function FilterDivider() {
  return <div className="w-px h-5 bg-gray-700/50" />;
}
