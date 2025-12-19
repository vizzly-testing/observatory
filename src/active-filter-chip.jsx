import { XMarkIcon } from '@heroicons/react/24/outline';

/**
 * ActiveFilterChip - Shows an active filter with dismiss button
 * Used to display currently applied filters that can be removed
 */

let colorClasses = {
  amber: 'bg-amber-500/10 text-amber-300 border-amber-500/20',
  cyan: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
  blue: 'bg-blue-500/10 text-blue-300 border-blue-500/20',
  green: 'bg-green-500/10 text-green-300 border-green-500/20',
  emerald: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
  red: 'bg-red-500/10 text-red-300 border-red-500/20',
  orange: 'bg-orange-500/10 text-orange-300 border-orange-500/20',
  purple: 'bg-purple-500/10 text-purple-300 border-purple-500/20',
  gray: 'bg-gray-700/50 text-gray-300 border-gray-600/50'
};

export function ActiveFilterChip({ label, color = 'gray', onRemove, icon: Icon, className = '' }) {
  return (
    <span
      className={`
        inline-flex items-center gap-1 px-2 py-0.5 border rounded text-xs
        whitespace-nowrap flex-shrink-0
        ${colorClasses[color] || colorClasses.gray}
        ${className}
      `}
    >
      {Icon && <Icon className="w-3 h-3" />}
      <span className="max-w-[150px] truncate">{label}</span>
      {onRemove && (
        <button onClick={onRemove} className="ml-0.5 hover:text-white transition-colors">
          <XMarkIcon className="w-3 h-3" />
        </button>
      )}
    </span>
  );
}

/**
 * ActiveFilterBar - Container for showing active filters with count summary
 */
export function ActiveFilterBar({
  filteredCount,
  totalCount,
  children,
  onClearAll,
  className = ''
}) {
  let hasFilters = children && (Array.isArray(children) ? children.length > 0 : true);

  if (!hasFilters) return null;

  return (
    <div
      className={`
        flex items-center gap-2 px-3 sm:px-4 py-2 bg-gray-900/30 border-b border-gray-700/30
        overflow-x-auto scrollbar-none
        ${className}
      `}
    >
      {(filteredCount !== undefined || totalCount !== undefined) && (
        <>
          <span className="text-xs text-gray-500 whitespace-nowrap">
            <span className="font-medium text-white">{filteredCount}</span>
            {totalCount !== undefined && <span className="hidden sm:inline"> of {totalCount}</span>}
          </span>
          <div className="w-px h-4 bg-gray-700/50 flex-shrink-0" />
        </>
      )}

      <div className="flex items-center gap-1.5 flex-nowrap sm:flex-wrap">{children}</div>

      {onClearAll && (
        <>
          <div className="flex-1" />
          <button
            onClick={onClearAll}
            className="inline-flex items-center gap-1 px-2 py-1 text-xs text-gray-400 hover:text-white transition-colors whitespace-nowrap"
          >
            <XMarkIcon className="w-3.5 h-3.5" />
            Clear all
          </button>
        </>
      )}
    </div>
  );
}
