/**
 * Status Dot Component
 * Observatory Design System
 *
 * Small status indicator dot
 */

export function StatusDot({ status = 'default', pulse = false, size = 'md', className = '' }) {
  const statusColors = {
    default: 'bg-slate-500',
    success: 'bg-emerald-500',
    warning: 'bg-amber-500',
    danger: 'bg-red-500',
    info: 'bg-blue-500',
    processing: 'bg-blue-500'
  };

  const sizeClasses = {
    sm: 'w-1.5 h-1.5',
    md: 'w-2 h-2',
    lg: 'w-3 h-3'
  };

  const shouldPulse = pulse || status === 'processing';

  return (
    <span className={`relative inline-flex ${className}`}>
      {shouldPulse && (
        <span
          className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${statusColors[status]}`}
        />
      )}
      <span
        className={`relative inline-flex rounded-full ${sizeClasses[size]} ${statusColors[status]}`}
      />
    </span>
  );
}
