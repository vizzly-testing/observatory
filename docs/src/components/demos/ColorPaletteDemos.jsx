import { useState } from 'react';

let coreColors = [
  { name: '--vz-bg', value: '#0f172a', label: 'Background', usage: 'Page background, base layer' },
  {
    name: '--vz-surface',
    value: '#1a2332',
    label: 'Surface',
    usage: 'Cards, panels, elevated content'
  },
  {
    name: '--vz-elevated',
    value: '#1e293b',
    label: 'Elevated',
    usage: 'Dropdowns, popovers, modals'
  },
  { name: '--vz-border', value: '#374151', label: 'Border', usage: 'Primary borders, dividers' },
  {
    name: '--vz-border-subtle',
    value: '#2d3748',
    label: 'Border Subtle',
    usage: 'Subtle separators, table lines'
  }
];

let accentColors = [
  {
    name: '--accent-success',
    value: '#10b981',
    muted: '#132a23',
    label: 'Success',
    usage: 'Approved, passed, active states'
  },
  {
    name: '--accent-warning',
    value: '#f59e0b',
    muted: '#2a2317',
    label: 'Warning',
    usage: 'Pending, attention needed'
  },
  {
    name: '--accent-danger',
    value: '#ef4444',
    muted: '#2a1717',
    label: 'Danger',
    usage: 'Rejected, failed, errors'
  },
  {
    name: '--accent-info',
    value: '#3b82f6',
    muted: '#172033',
    label: 'Info',
    usage: 'Processing, informational'
  }
];

let textColors = [
  { name: '--text-primary', value: '#ffffff', label: 'Primary', usage: 'Headings, important text' },
  {
    name: '--text-secondary',
    value: '#9ca3af',
    label: 'Secondary',
    usage: 'Body text, descriptions'
  },
  {
    name: '--text-tertiary',
    value: '#6b7280',
    label: 'Tertiary',
    usage: 'Captions, hints, metadata'
  },
  { name: '--text-muted', value: '#4b5563', label: 'Muted', usage: 'Disabled text, placeholders' }
];

let brandColors = [
  { name: 'Amber 500', value: '#f59e0b', label: 'Primary Brand', usage: 'CTAs, links, highlights' },
  { name: 'Amber 400', value: '#fbbf24', label: 'Hover State', usage: 'Interactive hover states' },
  { name: 'Orange 500', value: '#f97316', label: 'Gradient End', usage: 'Gradient accents' }
];

function ColorSwatch({ color, showCopy = true }) {
  let [copied, setCopied] = useState(false);

  let handleCopy = async () => {
    await navigator.clipboard.writeText(color.value);
    setCopied(true);
    let timer = window.setTimeout(() => setCopied(false), 1500);
    return () => window.clearTimeout(timer);
  };

  return (
    <div className="group relative">
      <button
        onClick={handleCopy}
        className="w-full text-left focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-xl"
      >
        <div
          className="h-20 rounded-t-xl border border-b-0 border-slate-700 transition-transform group-hover:scale-[1.02]"
          style={{ backgroundColor: color.value }}
        />
        <div className="p-3 bg-slate-800/50 rounded-b-xl border border-t-0 border-slate-700">
          <div className="flex items-center justify-between mb-1">
            <span className="font-mono text-xs text-slate-300">{color.name}</span>
            {copied && <span className="text-xs text-emerald-400">Copied!</span>}
          </div>
          <div className="font-mono text-xs text-slate-500 mb-1">{color.value}</div>
          <div className="text-xs text-slate-400">{color.label}</div>
        </div>
      </button>
      {color.usage && <div className="mt-2 text-xs text-slate-500">{color.usage}</div>}
    </div>
  );
}

function AccentSwatch({ color }) {
  let [copied, setCopied] = useState(false);

  let handleCopy = async () => {
    await navigator.clipboard.writeText(color.value);
    setCopied(true);
    let timer = window.setTimeout(() => setCopied(false), 1500);
    return () => window.clearTimeout(timer);
  };

  return (
    <div className="group">
      <button
        onClick={handleCopy}
        className="w-full text-left focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-xl"
      >
        <div className="flex rounded-xl overflow-hidden border border-slate-700 transition-transform group-hover:scale-[1.02]">
          <div className="w-2/3 h-24" style={{ backgroundColor: color.value }} />
          <div className="w-1/3 h-24" style={{ backgroundColor: color.muted }} />
        </div>
        <div className="mt-2 flex items-center justify-between">
          <span className="font-medium text-sm text-slate-200">{color.label}</span>
          {copied && <span className="text-xs text-emerald-400">Copied!</span>}
        </div>
        <div className="font-mono text-xs text-slate-500 mt-0.5">
          {color.value} / {color.muted}
        </div>
      </button>
      <div className="mt-1 text-xs text-slate-500">{color.usage}</div>
    </div>
  );
}

export function CorePaletteDemo() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
      {coreColors.map((color) => (
        <ColorSwatch key={color.name} color={color} />
      ))}
    </div>
  );
}

export function AccentPaletteDemo() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
      {accentColors.map((color) => (
        <AccentSwatch key={color.name} color={color} />
      ))}
    </div>
  );
}

export function TextColorsDemo() {
  return (
    <div className="space-y-4">
      {textColors.map((color) => (
        <div
          key={color.name}
          className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/30 border border-slate-700/50"
        >
          <div
            className="w-12 h-12 rounded-lg border border-slate-600"
            style={{ backgroundColor: color.value }}
          />
          <div className="flex-1">
            <div className="flex items-center gap-3">
              <span className="font-medium" style={{ color: color.value }}>
                {color.label}
              </span>
              <span className="font-mono text-xs text-slate-500">{color.value}</span>
            </div>
            <div className="text-sm text-slate-500 mt-0.5">{color.usage}</div>
          </div>
          <code className="font-mono text-xs text-slate-400 bg-slate-800 px-2 py-1 rounded">
            {color.name}
          </code>
        </div>
      ))}
    </div>
  );
}

export function BrandColorsDemo() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {brandColors.map((color) => (
        <ColorSwatch key={color.name} color={color} />
      ))}
    </div>
  );
}

export function ColorLayersDemo() {
  return (
    <div className="relative p-8 rounded-2xl" style={{ backgroundColor: 'var(--vz-bg, #0f172a)' }}>
      <div className="text-xs text-slate-500 absolute top-2 left-3">--vz-bg</div>
      <div className="p-6 rounded-xl" style={{ backgroundColor: 'var(--vz-surface, #1a2332)' }}>
        <div className="text-xs text-slate-500 mb-4">--vz-surface</div>
        <div
          className="p-4 rounded-lg border"
          style={{
            backgroundColor: 'var(--vz-elevated, #1e293b)',
            borderColor: 'var(--vz-border, #374151)'
          }}
        >
          <div className="text-xs text-slate-500 mb-2">--vz-elevated</div>
          <div className="text-sm text-slate-300">
            Nested elevation layers create depth and visual hierarchy
          </div>
        </div>
      </div>
    </div>
  );
}
