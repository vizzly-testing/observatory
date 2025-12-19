/**
 * ApprovalButtons Component
 * Observatory Design System
 *
 * Approve/Reject buttons for visual review workflows.
 * Mobile-first with compact and full variants.
 *
 * Features:
 * - Clear visual states (pending, approved, rejected)
 * - Touch-friendly sizing
 * - Compact mode for mobile headers
 * - Loading states
 */

import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';

/**
 * Single approval button
 */
export function ApprovalButton({
  variant = 'approve', // 'approve' | 'reject'
  isActive = false,
  onClick,
  disabled = false,
  loading = false,
  compact = false,
  showLabel = true,
  className = '',
  testId
}) {
  const config = {
    approve: {
      label: 'Approve',
      icon: CheckIcon,
      activeClasses: 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20',
      inactiveClasses: 'text-slate-400 hover:text-emerald-400 hover:bg-emerald-500/10',
      dotColor: 'bg-emerald-500'
    },
    reject: {
      label: 'Reject',
      icon: XMarkIcon,
      activeClasses: 'bg-red-500 text-white shadow-lg shadow-red-500/20',
      inactiveClasses: 'text-slate-400 hover:text-red-400 hover:bg-red-500/10',
      dotColor: 'bg-red-500'
    }
  }[variant];

  const Icon = config.icon;

  let buttonTestId = testId || `btn-${variant}`;

  // Compact mode for mobile - icon only or smaller
  if (compact) {
    return (
      <button
        onClick={onClick}
        disabled={disabled || loading}
        className={`
          flex items-center justify-center
          p-2 sm:px-3 sm:py-1.5
          rounded-lg text-sm font-medium
          transition-all duration-150
          disabled:opacity-50 disabled:cursor-not-allowed
          ${isActive ? config.activeClasses : config.inactiveClasses}
          ${className}
        `}
        title={config.label}
        aria-label={config.label}
        aria-pressed={isActive}
        data-testid={buttonTestId}
        data-active={isActive}
      >
        {loading ? (
          <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        ) : (
          <>
            <Icon className="w-4 h-4 sm:mr-1.5" />
            <span className="hidden sm:inline">{config.label}</span>
          </>
        )}
      </button>
    );
  }

  // Full mode
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        flex items-center gap-2
        px-3 sm:px-4 py-2
        rounded-lg text-sm font-semibold
        transition-all duration-150
        disabled:opacity-50 disabled:cursor-not-allowed
        ${isActive ? config.activeClasses : config.inactiveClasses}
        ${className}
      `}
      aria-pressed={isActive}
      data-testid={buttonTestId}
      data-active={isActive}
    >
      {loading ? (
        <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      ) : (
        <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-white' : config.dotColor}`} />
      )}
      {showLabel && <span>{config.label}</span>}
    </button>
  );
}

/**
 * ApprovalButtonGroup - Paired approve/reject buttons
 */
export function ApprovalButtonGroup({
  status, // 'pending' | 'approved' | 'auto_approved' | 'rejected'
  onApprove,
  onReject,
  disabled = false,
  loading = false,
  compact = false,
  className = ''
}) {
  const isApproved = status === 'approved' || status === 'auto_approved';
  const isRejected = status === 'rejected';

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {onReject && (
        <ApprovalButton
          variant="reject"
          isActive={isRejected}
          onClick={onReject}
          disabled={disabled}
          loading={loading && isRejected}
          compact={compact}
        />
      )}
      {onApprove && (
        <ApprovalButton
          variant="approve"
          isActive={isApproved}
          onClick={onApprove}
          disabled={disabled}
          loading={loading && isApproved}
          compact={compact}
        />
      )}
    </div>
  );
}

/**
 * MobileApprovalBar - Bottom bar version for mobile
 * Touch-friendly approve/reject with clear visual states
 */
export function MobileApprovalBar({
  status,
  onApprove,
  onReject,
  disabled = false,
  loading = false,
  className = '',
  testIdPrefix = 'mobile'
}) {
  const isApproved = status === 'approved' || status === 'auto_approved';
  const isRejected = status === 'rejected';

  return (
    <div
      className={`
        flex items-stretch gap-2
        px-3 py-2.5
        ${className}
      `}
    >
      {onReject && (
        <button
          onClick={onReject}
          disabled={disabled || loading}
          data-testid={`${testIdPrefix}-btn-reject`}
          data-active={isRejected}
          className={`
            flex-1
            flex items-center justify-center gap-2
            py-3 px-4
            rounded-xl text-sm font-semibold
            transition-all duration-150 active:scale-[0.98]
            disabled:opacity-50 disabled:cursor-not-allowed
            ${
              isRejected
                ? 'bg-red-500 text-white shadow-md shadow-red-500/25 ring-1 ring-red-400/30'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 active:bg-red-500/20 active:text-red-400'
            }
          `}
        >
          <XMarkIcon className="w-5 h-5" />
          <span>Reject</span>
        </button>
      )}

      {onApprove && (
        <button
          onClick={onApprove}
          disabled={disabled || loading}
          data-testid={`${testIdPrefix}-btn-approve`}
          data-active={isApproved}
          className={`
            flex-1
            flex items-center justify-center gap-2
            py-3 px-4
            rounded-xl text-sm font-semibold
            transition-all duration-150 active:scale-[0.98]
            disabled:opacity-50 disabled:cursor-not-allowed
            ${
              isApproved
                ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/25 ring-1 ring-emerald-400/30'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 active:bg-emerald-500/20 active:text-emerald-400'
            }
          `}
        >
          <CheckIcon className="w-5 h-5" />
          <span>Approve</span>
        </button>
      )}
    </div>
  );
}

export default ApprovalButtonGroup;
