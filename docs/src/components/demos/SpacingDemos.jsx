export function SpacingScaleDemo() {
  let scale = [
    { name: '0.5', px: '2px', rem: '0.125rem' },
    { name: '1', px: '4px', rem: '0.25rem' },
    { name: '1.5', px: '6px', rem: '0.375rem' },
    { name: '2', px: '8px', rem: '0.5rem' },
    { name: '3', px: '12px', rem: '0.75rem' },
    { name: '4', px: '16px', rem: '1rem' },
    { name: '5', px: '20px', rem: '1.25rem' },
    { name: '6', px: '24px', rem: '1.5rem' },
    { name: '8', px: '32px', rem: '2rem' },
    { name: '10', px: '40px', rem: '2.5rem' },
    { name: '12', px: '48px', rem: '3rem' },
    { name: '16', px: '64px', rem: '4rem' }
  ];

  return (
    <div className="space-y-2">
      {scale.map((item) => (
        <div key={item.name} className="flex items-center gap-4">
          <code className="w-12 text-xs text-amber-500 text-right">{item.name}</code>
          <div
            className="h-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded"
            style={{ width: item.px }}
          />
          <span className="text-xs text-slate-500 font-mono">{item.px}</span>
          <span className="text-xs text-slate-600 font-mono">({item.rem})</span>
        </div>
      ))}
    </div>
  );
}

export function SpacingTokensDemo() {
  let tokens = [
    { name: 'gap-1', value: '4px', usage: 'Tight: icon + text, badge content' },
    { name: 'gap-2', value: '8px', usage: 'Compact: button groups, inline elements' },
    { name: 'gap-3', value: '12px', usage: 'Standard: list items, form fields' },
    { name: 'gap-4', value: '16px', usage: 'Comfortable: card content, sections' },
    { name: 'gap-6', value: '24px', usage: 'Spacious: page sections, card groups' },
    { name: 'gap-8', value: '32px', usage: 'Large: major sections, hero elements' }
  ];

  return (
    <div className="space-y-3">
      {tokens.map((item) => (
        <div
          key={item.name}
          className="flex items-center gap-4 p-3 rounded-lg bg-slate-800/30 border border-slate-700/50"
        >
          <code className="w-16 text-xs text-amber-500 bg-amber-500/10 px-2 py-1 rounded">
            {item.name}
          </code>
          <span className="w-12 text-xs text-slate-400 font-mono">{item.value}</span>
          <span className="text-sm text-slate-500">{item.usage}</span>
        </div>
      ))}
    </div>
  );
}

export function PaddingExamplesDemo() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="rounded-xl bg-slate-800/50 border border-slate-700 overflow-hidden">
        <div className="p-2 bg-amber-500/10 border-2 border-dashed border-amber-500/30">
          <div className="bg-slate-700 rounded p-3 text-center text-sm text-slate-300">p-2</div>
        </div>
        <div className="p-2 text-center text-xs text-slate-500">Compact</div>
      </div>

      <div className="rounded-xl bg-slate-800/50 border border-slate-700 overflow-hidden">
        <div className="p-4 bg-amber-500/10 border-2 border-dashed border-amber-500/30">
          <div className="bg-slate-700 rounded p-3 text-center text-sm text-slate-300">p-4</div>
        </div>
        <div className="p-2 text-center text-xs text-slate-500">Standard</div>
      </div>

      <div className="rounded-xl bg-slate-800/50 border border-slate-700 overflow-hidden">
        <div className="p-6 bg-amber-500/10 border-2 border-dashed border-amber-500/30">
          <div className="bg-slate-700 rounded p-3 text-center text-sm text-slate-300">p-6</div>
        </div>
        <div className="p-2 text-center text-xs text-slate-500">Spacious</div>
      </div>
    </div>
  );
}

export function ComponentSpacingDemo() {
  return (
    <div className="p-6 rounded-xl bg-slate-800/30 border border-slate-700/50">
      {/* Card header */}
      <div className="flex items-center gap-3 pb-4 border-b border-slate-700/50 mb-4">
        <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
          <svg
            className="w-5 h-5 text-emerald-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div>
          <p className="font-medium text-white">Build Passed</p>
          <p className="text-sm text-slate-500">142 screenshots • 0 changes</p>
        </div>
      </div>

      {/* Content with annotations */}
      <div className="relative">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm">
            <span className="text-slate-400">Branch:</span>
            <code className="font-mono text-slate-300">main</code>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-slate-400">Commit:</span>
            <code className="font-mono text-slate-300">a1b2c3d</code>
          </div>
        </div>

        {/* Spacing annotations */}
        <div className="absolute -right-2 top-0 h-full flex flex-col justify-between text-xs text-amber-500/60">
          <span>gap-3</span>
          <span>gap-2</span>
        </div>
      </div>
    </div>
  );
}

export function GridGapsDemo() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs text-slate-500 mb-2">gap-2 (8px) — Compact grid</p>
        <div className="grid grid-cols-4 gap-2">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="h-12 rounded bg-slate-700 flex items-center justify-center text-slate-400 text-sm"
            >
              {i}
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="text-xs text-slate-500 mb-2">gap-4 (16px) — Standard grid</p>
        <div className="grid grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="h-12 rounded bg-slate-700 flex items-center justify-center text-slate-400 text-sm"
            >
              {i}
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="text-xs text-slate-500 mb-2">gap-6 (24px) — Spacious grid</p>
        <div className="grid grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="h-12 rounded bg-slate-700 flex items-center justify-center text-slate-400 text-sm"
            >
              {i}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
