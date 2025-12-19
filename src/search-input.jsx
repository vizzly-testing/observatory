import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';

/**
 * SearchInput - Reusable search input with icon and clear button
 * Used in table toolbars for filtering by text
 */
export function SearchInput({
  value,
  onChange,
  placeholder = 'Search...',
  className = '',
  autoFocus = false
}) {
  return (
    <div className={`relative flex-1 ${className}`}>
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoFocus={autoFocus}
        className="w-full pl-9 pr-8 py-2 bg-gray-900/50 border border-gray-700/50 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 focus:ring-1 focus:ring-gray-600/50 transition-colors"
      />
      {value && (
        <button
          onClick={() => onChange('')}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
        >
          <XMarkIcon className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
