export function TypeScaleDemo() {
  let scale = [
    { name: 'text-xs', size: '0.75rem', line: '1rem', usage: 'Captions, badges, metadata' },
    { name: 'text-sm', size: '0.875rem', line: '1.25rem', usage: 'Secondary text, descriptions' },
    { name: 'text-base', size: '1rem', line: '1.5rem', usage: 'Body text, default size' },
    { name: 'text-lg', size: '1.125rem', line: '1.75rem', usage: 'Lead paragraphs, emphasis' },
    { name: 'text-xl', size: '1.25rem', line: '1.75rem', usage: 'Section headings' },
    { name: 'text-2xl', size: '1.5rem', line: '2rem', usage: 'Page section titles' },
    { name: 'text-3xl', size: '1.875rem', line: '2.25rem', usage: 'Page titles' },
    { name: 'text-4xl', size: '2.25rem', line: '2.5rem', usage: 'Hero headings' }
  ];

  return (
    <div className="space-y-6">
      {scale.map((item) => (
        <div key={item.name} className="flex items-baseline gap-6 pb-6 border-b border-slate-800">
          <div className="w-24 shrink-0">
            <code className="text-xs text-amber-500 bg-amber-500/10 px-2 py-1 rounded">
              {item.name}
            </code>
          </div>
          <div className="flex-1">
            <p
              className={`text-white ${item.name}`}
              style={{ fontSize: item.size, lineHeight: item.line }}
            >
              The quick brown fox jumps over the lazy dog
            </p>
          </div>
          <div className="w-32 shrink-0 text-right">
            <span className="text-xs text-slate-500 font-mono">
              {item.size} / {item.line}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export function FontWeightsDemo() {
  let weights = [
    { name: 'font-normal', weight: '400', usage: 'Body text' },
    { name: 'font-medium', weight: '500', usage: 'Emphasis, labels' },
    { name: 'font-semibold', weight: '600', usage: 'Headings, buttons' },
    { name: 'font-bold', weight: '700', usage: 'Strong emphasis' }
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {weights.map((item) => (
        <div key={item.name} className="p-4 rounded-xl bg-slate-800/30 border border-slate-700/50">
          <p className="text-2xl text-white mb-2" style={{ fontWeight: item.weight }}>
            Aa Bb Cc
          </p>
          <code className="text-xs text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded">
            {item.name}
          </code>
          <span className="text-xs text-slate-500 ml-2">{item.weight}</span>
          <p className="text-xs text-slate-500 mt-2">{item.usage}</p>
        </div>
      ))}
    </div>
  );
}

export function FontFamiliesDemo() {
  return (
    <div className="space-y-6">
      <div className="p-6 rounded-xl bg-slate-800/30 border border-slate-700/50">
        <div className="flex items-center gap-3 mb-3">
          <code className="text-xs text-amber-500 bg-amber-500/10 px-2 py-1 rounded">
            font-sans
          </code>
          <span className="text-xs text-slate-500">System UI Stack</span>
        </div>
        <p className="text-2xl text-white font-sans mb-2">
          The quick brown fox jumps over the lazy dog
        </p>
        <p className="text-sm text-slate-400 font-sans">
          Used for all interface text. Clean, readable, and universally available.
        </p>
      </div>

      <div className="p-6 rounded-xl bg-slate-800/30 border border-slate-700/50">
        <div className="flex items-center gap-3 mb-3">
          <code className="text-xs text-amber-500 bg-amber-500/10 px-2 py-1 rounded">
            font-mono
          </code>
          <span className="text-xs text-slate-500">Monospace Stack</span>
        </div>
        <p className="text-2xl text-white font-mono mb-2">const diff = compare(a, b);</p>
        <p className="text-sm text-slate-400 font-mono">
          Used for code, technical values, and tabular data.
        </p>
      </div>
    </div>
  );
}

export function TextHierarchyDemo() {
  return (
    <div className="p-6 rounded-xl bg-slate-800/30 border border-slate-700/50">
      <h1 className="text-2xl font-semibold text-white mb-2">Build #1234 — Dashboard</h1>
      <p className="text-slate-400 mb-6">
        Visual regression test results from the latest CI run.
        <span className="text-slate-500"> Completed 2 minutes ago.</span>
      </p>

      <div className="flex items-center gap-4 p-4 rounded-lg bg-slate-800/50 border border-slate-700/50">
        <div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center">
          <svg
            className="w-6 h-6 text-emerald-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div>
          <p className="font-medium text-white">142 screenshots passed</p>
          <p className="text-sm text-slate-500">No visual changes detected</p>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2 text-xs text-slate-600">
        <span>Commit:</span>
        <code className="font-mono text-slate-500">a1b2c3d</code>
        <span className="text-slate-700">•</span>
        <span>Branch:</span>
        <code className="font-mono text-slate-500">feature/dark-mode</code>
      </div>
    </div>
  );
}

export function LeadingDemo() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {[
        { name: 'leading-tight', value: '1.25', desc: 'Headings' },
        { name: 'leading-normal', value: '1.5', desc: 'Body text' },
        { name: 'leading-relaxed', value: '1.625', desc: 'Long-form' }
      ].map((item) => (
        <div key={item.name} className="p-4 rounded-xl bg-slate-800/30 border border-slate-700/50">
          <code className="text-xs text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded">
            {item.name}
          </code>
          <p className="text-sm text-white mt-3" style={{ lineHeight: item.value }}>
            Observatory provides visual testing for modern web apps. Catch regressions before they
            reach production.
          </p>
          <p className="text-xs text-slate-500 mt-2">{item.desc}</p>
        </div>
      ))}
    </div>
  );
}
