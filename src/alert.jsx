/**
 * Alert Component
 * Observatory Design System
 *
 * For feedback messages and notifications
 * Variants: success, warning, danger, info
 */

import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  XCircleIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';

export function Alert({
  variant = 'info',
  title,
  children,
  dismissible = false,
  onDismiss,
  icon: CustomIcon,
  className = '',
  ...props
}) {
  const variants = {
    success: {
      container: 'bg-emerald-500/10 border-emerald-500/20',
      icon: 'text-emerald-400',
      title: 'text-emerald-300',
      text: 'text-emerald-200/80',
      DefaultIcon: CheckCircleIcon
    },
    warning: {
      container: 'bg-amber-500/10 border-amber-500/20',
      icon: 'text-amber-400',
      title: 'text-amber-300',
      text: 'text-amber-200/80',
      DefaultIcon: ExclamationTriangleIcon
    },
    danger: {
      container: 'bg-red-500/10 border-red-500/20',
      icon: 'text-red-400',
      title: 'text-red-300',
      text: 'text-red-200/80',
      DefaultIcon: XCircleIcon
    },
    info: {
      container: 'bg-blue-500/10 border-blue-500/20',
      icon: 'text-blue-400',
      title: 'text-blue-300',
      text: 'text-blue-200/80',
      DefaultIcon: InformationCircleIcon
    }
  };

  const { container, icon, title: titleColor, text, DefaultIcon } = variants[variant];
  const Icon = CustomIcon || DefaultIcon;

  return (
    <div className={`flex gap-3 p-4 rounded-lg border ${container} ${className}`} {...props}>
      <div className={`flex-shrink-0 ${icon}`}>
        <Icon className="w-5 h-5" />
      </div>
      <div className="flex-1 min-w-0">
        {title && <h4 className={`text-sm font-medium ${titleColor}`}>{title}</h4>}
        {children && <div className={`text-sm ${text} ${title ? 'mt-1' : ''}`}>{children}</div>}
      </div>
      {dismissible && (
        <button
          onClick={onDismiss}
          className={`flex-shrink-0 ${icon} hover:opacity-70 transition-opacity`}
        >
          <XMarkIcon className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
