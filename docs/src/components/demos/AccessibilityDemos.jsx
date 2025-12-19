import { CheckCircleIcon, ExclamationTriangleIcon, XCircleIcon } from '@heroicons/react/24/outline';
import { Badge, Button, Input, Modal, Tooltip } from '@vizzly-testing/observatory';
import { useState } from 'react';

export function ColorContrastDemo() {
  let examples = [
    { bg: '#0f172a', fg: '#ffffff', ratio: '15.8:1', pass: true, label: 'White on Background' },
    { bg: '#0f172a', fg: '#9ca3af', ratio: '6.2:1', pass: true, label: 'Secondary text' },
    { bg: '#0f172a', fg: '#f59e0b', ratio: '8.4:1', pass: true, label: 'Amber accent' },
    { bg: '#1a2332', fg: '#6b7280', ratio: '4.1:1', pass: true, label: 'Tertiary text' },
    { bg: '#f59e0b', fg: '#0f172a', ratio: '8.4:1', pass: true, label: 'Dark on amber' }
  ];

  return (
    <div className="space-y-3">
      {examples.map((ex, i) => (
        <div
          key={i}
          className="flex items-center gap-4 p-3 rounded-lg bg-slate-800/30 border border-slate-700/50"
        >
          <div
            className="w-24 h-12 rounded-lg flex items-center justify-center text-sm font-medium"
            style={{ backgroundColor: ex.bg, color: ex.fg }}
          >
            Aa
          </div>
          <div className="flex-1">
            <p className="text-sm text-white">{ex.label}</p>
            <p className="text-xs text-slate-500">
              Contrast ratio: <span className="font-mono">{ex.ratio}</span>
            </p>
          </div>
          <Badge variant={ex.pass ? 'success' : 'danger'}>{ex.pass ? 'AAA' : 'Fail'}</Badge>
        </div>
      ))}
    </div>
  );
}

export function FocusIndicatorsDemo() {
  return (
    <div className="space-y-6">
      <p className="text-sm text-slate-400">Use Tab to navigate through these elements:</p>

      <div className="flex flex-wrap gap-4">
        <Button>Primary Button</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
      </div>

      <div className="flex gap-4">
        <Input placeholder="Text input" />
        <select className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500">
          <option>Select option</option>
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
      </div>

      <div className="flex gap-4">
        <a
          href="#"
          className="text-amber-500 underline focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded"
        >
          Text link
        </a>
        <button className="text-slate-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-500 rounded p-1">
          <XCircleIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

export function SemanticColorsDemo() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
        <div className="flex items-center gap-2 mb-2">
          <CheckCircleIcon className="w-5 h-5 text-emerald-400" />
          <span className="font-medium text-emerald-300">Success State</span>
        </div>
        <p className="text-sm text-slate-400">Green always means approved, passed, or positive.</p>
      </div>

      <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30">
        <div className="flex items-center gap-2 mb-2">
          <XCircleIcon className="w-5 h-5 text-red-400" />
          <span className="font-medium text-red-300">Error State</span>
        </div>
        <p className="text-sm text-slate-400">Red always means rejected, failed, or error.</p>
      </div>

      <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30">
        <div className="flex items-center gap-2 mb-2">
          <ExclamationTriangleIcon className="w-5 h-5 text-amber-400" />
          <span className="font-medium text-amber-300">Warning State</span>
        </div>
        <p className="text-sm text-slate-400">Amber means attention needed or pending.</p>
      </div>

      <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30">
        <div className="flex items-center gap-2 mb-2">
          <svg
            className="w-5 h-5 text-blue-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="font-medium text-blue-300">Info State</span>
        </div>
        <p className="text-sm text-slate-400">Blue means informational or processing.</p>
      </div>
    </div>
  );
}

export function AriaLabelsDemo() {
  return (
    <div className="space-y-4">
      <div className="p-4 rounded-lg bg-slate-800/30 border border-slate-700/50">
        <p className="text-xs text-slate-500 mb-3">Icon-only button with aria-label</p>
        <div className="flex gap-3">
          <button
            aria-label="Close dialog"
            className="p-2 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors"
          >
            <XCircleIcon className="w-5 h-5 text-slate-300" />
          </button>
          <button
            aria-label="Delete item"
            className="p-2 rounded-lg bg-red-500/20 hover:bg-red-500/30 transition-colors"
          >
            <svg
              className="w-5 h-5 text-red-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </div>
        <code className="block mt-3 text-xs text-slate-500">
          {'<button aria-label="Close dialog">'}
        </code>
      </div>

      <div className="p-4 rounded-lg bg-slate-800/30 border border-slate-700/50">
        <p className="text-xs text-slate-500 mb-3">Decorative icons with aria-hidden</p>
        <div className="flex items-center gap-2">
          <CheckCircleIcon className="w-5 h-5 text-emerald-400" aria-hidden="true" />
          <span className="text-slate-300">142 tests passed</span>
        </div>
        <code className="block mt-3 text-xs text-slate-500">
          {'<CheckIcon aria-hidden="true" /> 142 tests passed'}
        </code>
      </div>
    </div>
  );
}

export function KeyboardNavigationDemo() {
  let shortcuts = [
    { keys: ['Tab'], action: 'Move focus forward' },
    { keys: ['Shift', 'Tab'], action: 'Move focus backward' },
    { keys: ['Enter'], action: 'Activate button/link' },
    { keys: ['Space'], action: 'Toggle checkbox/button' },
    { keys: ['Escape'], action: 'Close modal/dropdown' },
    { keys: ['↑', '↓'], action: 'Navigate menu items' }
  ];

  return (
    <div className="grid grid-cols-2 gap-3">
      {shortcuts.map((shortcut, i) => (
        <div
          key={i}
          className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/30 border border-slate-700/50"
        >
          <div className="flex gap-1">
            {shortcut.keys.map((key, j) => (
              <kbd
                key={j}
                className="px-2 py-1 bg-slate-700 border border-slate-600 rounded text-xs text-slate-300 font-mono"
              >
                {key}
              </kbd>
            ))}
          </div>
          <span className="text-sm text-slate-400">{shortcut.action}</span>
        </div>
      ))}
    </div>
  );
}

export function ScreenReaderDemo() {
  return (
    <div className="space-y-4">
      <div className="p-4 rounded-lg bg-slate-800/30 border border-slate-700/50">
        <p className="text-xs text-slate-500 mb-3">Visually hidden but screen reader accessible</p>
        <button className="px-4 py-2 bg-amber-500 text-slate-900 font-medium rounded-lg">
          <span className="sr-only">Download </span>
          Export Report
          <span className="sr-only"> as PDF file</span>
        </button>
        <p className="mt-3 text-xs text-slate-500">
          Screen reader announces: "Download Export Report as PDF file"
        </p>
      </div>

      <div className="p-4 rounded-lg bg-slate-800/30 border border-slate-700/50">
        <p className="text-xs text-slate-500 mb-3">Live region for dynamic updates</p>
        <div role="status" aria-live="polite" className="text-sm text-emerald-400">
          ✓ Changes saved successfully
        </div>
        <code className="block mt-3 text-xs text-slate-500">
          {'<div role="status" aria-live="polite">'}
        </code>
      </div>
    </div>
  );
}

export function FormAccessibilityDemo() {
  let [error, setError] = useState(true);

  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1.5">
          Email address
          <span className="text-red-400 ml-1">*</span>
        </label>
        <Input
          id="email"
          type="email"
          placeholder="you@example.com"
          aria-required="true"
          aria-describedby="email-hint"
        />
        <p id="email-hint" className="mt-1.5 text-xs text-slate-500">
          We'll use this to send build notifications
        </p>
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-slate-300 mb-1.5">
          Password
        </label>
        <Input
          id="password"
          type="password"
          error={error ? 'Password must be at least 8 characters' : undefined}
          aria-invalid={error}
          aria-describedby={error ? 'password-error' : undefined}
        />
        {error && (
          <p id="password-error" className="mt-1.5 text-xs text-red-400" role="alert">
            Password must be at least 8 characters
          </p>
        )}
      </div>

      <Button variant="secondary" size="sm" onClick={() => setError(!error)}>
        Toggle Error State
      </Button>
    </div>
  );
}
