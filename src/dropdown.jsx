/**
 * Dropdown Component
 * Observatory Design System
 *
 * A simple dropdown menu with trigger button
 */

import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { useEffect, useRef, useState } from 'react';

export function Dropdown({
  trigger,
  children,
  align = 'left',
  className = '',
  menuClassName = '',
  disabled = false
}) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const alignmentClasses = {
    left: 'left-0',
    right: 'right-0',
    center: 'left-1/2 -translate-x-1/2'
  };

  return (
    <div className={`relative ${className}`} ref={containerRef}>
      <button
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {trigger}
        <ChevronDownIcon className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div
          className={`absolute top-full mt-2 min-w-[12rem] bg-slate-800 border border-slate-700 rounded-xl shadow-xl z-50 overflow-hidden ${alignmentClasses[align]} ${menuClassName}`}
          role="menu"
        >
          {children}
        </div>
      )}
    </div>
  );
}

export function DropdownItem({
  onClick,
  children,
  variant = 'default',
  disabled = false,
  icon: Icon,
  className = ''
}) {
  const variantClasses = {
    default: 'text-slate-300 hover:bg-slate-700 hover:text-white',
    primary: 'text-blue-400 hover:bg-blue-900/30',
    danger: 'text-red-400 hover:bg-red-900/30',
    success: 'text-emerald-400 hover:bg-emerald-900/30'
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full text-left px-4 py-2.5 text-sm flex items-center gap-3 transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${variantClasses[variant]} ${className}`}
      role="menuitem"
    >
      {Icon && <Icon className="w-4 h-4 shrink-0" />}
      {children}
    </button>
  );
}

export function DropdownDivider() {
  return <div className="h-px bg-slate-700 my-1" role="separator" />;
}

export function DropdownHeader({ children, className = '' }) {
  return (
    <div
      className={`px-4 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider ${className}`}
    >
      {children}
    </div>
  );
}
