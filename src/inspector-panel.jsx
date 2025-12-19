/**
 * InspectorPanel Component
 * Observatory Design System
 *
 * A non-invasive slide-out inspector panel for detailed metadata display.
 * Designed to overlay content rather than push it, reducing visual disruption
 * during review workflows.
 *
 * Features:
 * - Uses MobileDrawer for consistent mobile bottom sheet behavior
 * - Organized sections with collapsible groups
 * - Copy-to-clipboard actions
 * - Keyboard dismissible (Escape)
 */

import {
  ArrowTopRightOnSquareIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  ClipboardDocumentIcon
} from '@heroicons/react/24/outline';
import { CheckIcon } from '@heroicons/react/24/solid';
import { useCallback, useState } from 'react';
import { DrawerContent, DrawerHeader, MobileDrawer } from './mobile-drawer.jsx';

/**
 * InspectorSection - Collapsible section within the inspector
 *
 * @param {string} title - Section title (displayed uppercase)
 * @param {Component} icon - Optional icon component
 * @param {ReactNode} children - Section content
 * @param {boolean} defaultExpanded - Whether section starts expanded (default: true)
 * @param {string} badge - Optional badge text shown in header
 */
function InspectorSection({ title, icon: Icon, children, defaultExpanded = true, badge }) {
  let [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div className="border-b border-slate-800/50 last:border-b-0">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-4 py-3 flex items-center gap-2 text-left hover:bg-slate-800/30 transition-colors"
      >
        {isExpanded ? (
          <ChevronDownIcon className="w-3.5 h-3.5 text-slate-500" />
        ) : (
          <ChevronRightIcon className="w-3.5 h-3.5 text-slate-500" />
        )}
        {Icon && <Icon className="w-4 h-4 text-slate-400" />}
        <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex-1">
          {title}
        </span>
        {badge && (
          <span className="text-[10px] font-medium text-slate-500 bg-slate-800 px-1.5 py-0.5 rounded">
            {badge}
          </span>
        )}
      </button>

      <div
        className={`
        overflow-hidden transition-all duration-200
        ${isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}
      `}
      >
        <div className="px-4 pb-3 space-y-2">{children}</div>
      </div>
    </div>
  );
}

/**
 * InspectorRow - Key-value row for displaying metadata
 *
 * @param {string} label - Row label
 * @param {string|number} value - Row value (returns null if empty)
 * @param {boolean} mono - Use monospace font for value (default: false)
 * @param {boolean} copyable - Show copy button on hover (default: false)
 * @param {string} href - Optional URL to make value a link
 * @param {Object} badge - Optional badge { variant: 'success'|'warning'|'danger'|'info', label: string }
 * @param {Component} icon - Optional icon component
 */
function InspectorRow({ label, value, mono = false, copyable = false, href, badge, icon: Icon }) {
  let [copied, setCopied] = useState(false);

  let handleCopy = useCallback(
    async (e) => {
      e.preventDefault();
      e.stopPropagation();
      await navigator.clipboard.writeText(String(value));
      setCopied(true);
    },
    [value]
  );

  // Reset copied state on mouse leave
  let handleMouseLeave = useCallback(() => {
    if (copied) setCopied(false);
  }, [copied]);

  if (value === null || value === undefined || value === '') {
    return null;
  }

  let valueElement = (
    <span
      className={`
      text-slate-200 truncate
      ${mono ? 'font-mono text-xs' : 'text-sm'}
    `}
    >
      {value}
    </span>
  );

  if (href) {
    valueElement = (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`
          text-blue-400 hover:text-blue-300 truncate inline-flex items-center gap-1
          ${mono ? 'font-mono text-xs' : 'text-sm'}
        `}
      >
        {value}
        <ArrowTopRightOnSquareIcon className="w-3 h-3 flex-shrink-0" />
      </a>
    );
  }

  return (
    <div
      className="flex items-center justify-between gap-3 py-1 group"
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center gap-2 text-slate-500 text-xs flex-shrink-0">
        {Icon && <Icon className="w-3.5 h-3.5" />}
        <span>{label}</span>
      </div>

      <div className="flex items-center gap-2 min-w-0">
        {badge && (
          <span
            className={`
            text-[10px] font-medium px-1.5 py-0.5 rounded-full border
            ${badge.variant === 'success' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : ''}
            ${badge.variant === 'warning' ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' : ''}
            ${badge.variant === 'danger' ? 'bg-red-500/10 text-red-400 border-red-500/20' : ''}
            ${badge.variant === 'info' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' : ''}
            ${!badge.variant || badge.variant === 'default' ? 'bg-slate-500/10 text-slate-400 border-slate-500/20' : ''}
          `}
          >
            {badge.label}
          </span>
        )}

        {valueElement}

        {copyable && (
          <button
            onClick={handleCopy}
            className={`
              p-1 rounded transition-colors flex-shrink-0
              ${
                copied
                  ? 'text-emerald-400 bg-emerald-500/10'
                  : 'text-slate-600 hover:text-slate-400 opacity-0 group-hover:opacity-100'
              }
            `}
            title={copied ? 'Copied!' : `Copy ${label}`}
          >
            {copied ? (
              <CheckIcon className="w-3 h-3" />
            ) : (
              <ClipboardDocumentIcon className="w-3 h-3" />
            )}
          </button>
        )}
      </div>
    </div>
  );
}

/**
 * InspectorAction - Action button/link within the inspector
 *
 * @param {string} label - Button label
 * @param {Component} icon - Optional icon component
 * @param {function} onClick - Click handler (for buttons)
 * @param {string} href - URL (renders as link instead of button)
 * @param {string} variant - 'default' | 'primary' | 'danger'
 */
function InspectorAction({ label, icon: Icon, onClick, href, variant = 'default' }) {
  let variantClasses = {
    default: 'text-slate-400 hover:text-white hover:bg-slate-800/50',
    primary: 'text-blue-400 hover:text-blue-300 hover:bg-blue-500/10',
    danger: 'text-red-400 hover:text-red-300 hover:bg-red-500/10'
  };

  let Component = href ? 'a' : 'button';
  let props = href ? { href, target: '_blank', rel: 'noopener noreferrer' } : { onClick };

  return (
    <Component
      {...props}
      className={`
        flex items-center gap-2 w-full px-3 py-2 rounded-lg text-sm
        transition-colors ${variantClasses[variant]}
      `}
    >
      {Icon && <Icon className="w-4 h-4 flex-shrink-0" />}
      <span>{label}</span>
    </Component>
  );
}

/**
 * Main InspectorPanel component
 *
 * Uses MobileDrawer for consistent behavior:
 * - Mobile: bottom sheet with drag handle
 * - Desktop: right sidebar (always visible when open)
 */
export function InspectorPanel({
  isOpen,
  onClose,
  title = 'Inspector',
  subtitle,
  children,
  className = '',
  showHeader = true,
  testId = 'inspector-panel'
}) {
  return (
    <MobileDrawer
      isOpen={isOpen}
      onClose={onClose}
      position="bottom"
      desktopPosition="right"
      width="w-80"
      mobileHeight="30vh"
      expandedHeight="80vh"
      alwaysVisibleOnDesktop={false}
      showBackdrop={false}
      className={className}
      testId={testId}
    >
      {showHeader && <DrawerHeader title={title} subtitle={subtitle} onClose={onClose} />}

      <DrawerContent>{children}</DrawerContent>
    </MobileDrawer>
  );
}

// Export sub-components for composition
InspectorPanel.Section = InspectorSection;
InspectorPanel.Row = InspectorRow;
InspectorPanel.Action = InspectorAction;

export { InspectorSection, InspectorRow, InspectorAction };
