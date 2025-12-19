/**
 * Empty State Component
 * Observatory Design System
 *
 * Placeholder for empty content areas
 */

import { FolderOpenIcon } from '@heroicons/react/24/outline';

export function EmptyState({
  icon: Icon = FolderOpenIcon,
  title = 'No data',
  description,
  action,
  className = ''
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center py-16 px-4 text-center ${className}`}
    >
      <div className="w-16 h-16 rounded-2xl bg-slate-800/50 flex items-center justify-center mb-4">
        <Icon className="w-8 h-8 text-slate-500" />
      </div>
      <h3 className="text-lg font-medium text-white mb-1">{title}</h3>
      {description && <p className="text-sm text-slate-400 max-w-sm mb-6">{description}</p>}
      {action && <div>{action}</div>}
    </div>
  );
}
