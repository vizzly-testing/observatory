import { ArrowPathIcon, BellIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { Badge, Button, Skeleton, StatusDot } from '@vizzly-testing/observatory';
import { useState } from 'react';

export function TransitionDemo() {
  let [hovered, setHovered] = useState(null);

  let items = [
    { label: 'Default', duration: '150ms', easing: 'ease' },
    { label: 'Fast', duration: '100ms', easing: 'ease-out' },
    { label: 'Smooth', duration: '200ms', easing: 'ease-in-out' },
    { label: 'Bounce', duration: '300ms', easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)' }
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {items.map((item, i) => (
        <button
          key={i}
          className="p-4 rounded-xl bg-slate-800/50 border border-slate-700 text-left"
          style={{
            transition: `all ${item.duration} ${item.easing}`,
            transform: hovered === i ? 'scale(1.02)' : 'scale(1)',
            borderColor: hovered === i ? '#f59e0b' : undefined,
            boxShadow: hovered === i ? '0 0 20px rgba(245, 158, 11, 0.2)' : undefined
          }}
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(null)}
        >
          <p className="font-medium text-white mb-1">{item.label}</p>
          <code className="text-xs text-slate-500">
            {item.duration} {item.easing}
          </code>
        </button>
      ))}
    </div>
  );
}

export function PulseDotsDemo() {
  return (
    <div className="flex items-center gap-8">
      <div className="flex items-center gap-3">
        <StatusDot variant="success" pulse />
        <span className="text-sm text-slate-300">Processing</span>
      </div>
      <div className="flex items-center gap-3">
        <StatusDot variant="warning" pulse />
        <span className="text-sm text-slate-300">Pending Review</span>
      </div>
      <div className="flex items-center gap-3">
        <StatusDot variant="info" pulse />
        <span className="text-sm text-slate-300">Uploading</span>
      </div>
    </div>
  );
}

export function LoadingStatesDemo() {
  let [loading, setLoading] = useState(true);

  return (
    <div className="space-y-6">
      <div className="flex gap-4">
        <Button variant={loading ? 'secondary' : 'primary'} onClick={() => setLoading(!loading)}>
          Toggle Loading
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 rounded-xl bg-slate-800/30 border border-slate-700/50">
          <p className="text-xs text-slate-500 mb-3">Button Loading</p>
          <Button loading={loading}>Save Changes</Button>
        </div>

        <div className="p-4 rounded-xl bg-slate-800/30 border border-slate-700/50">
          <p className="text-xs text-slate-500 mb-3">Skeleton Loading</p>
          {loading ? (
            <div className="space-y-2">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          ) : (
            <div className="space-y-2">
              <p className="text-sm text-slate-300">Content loaded!</p>
              <p className="text-sm text-slate-400">More content here</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function SpinnerDemo() {
  return (
    <div className="flex items-center gap-8">
      <div className="text-center">
        <ArrowPathIcon className="w-6 h-6 text-slate-400 animate-spin mx-auto mb-2" />
        <code className="text-xs text-slate-500">animate-spin</code>
      </div>
      <div className="text-center">
        <div className="w-6 h-6 border-2 border-slate-700 border-t-amber-500 rounded-full animate-spin mx-auto mb-2" />
        <code className="text-xs text-slate-500">border spinner</code>
      </div>
      <div className="text-center">
        <div className="flex gap-1 mx-auto mb-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 bg-amber-500 rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>
        <code className="text-xs text-slate-500">bounce dots</code>
      </div>
    </div>
  );
}

export function HoverEffectsDemo() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <button className="p-4 rounded-xl bg-slate-800/50 border border-slate-700 transition-colors hover:bg-slate-700 hover:border-slate-600">
        <p className="text-sm text-slate-300">Color Change</p>
        <code className="text-xs text-slate-500">hover:bg-*</code>
      </button>

      <button className="p-4 rounded-xl bg-slate-800/50 border border-slate-700 transition-transform hover:scale-105">
        <p className="text-sm text-slate-300">Scale Up</p>
        <code className="text-xs text-slate-500">hover:scale-105</code>
      </button>

      <button className="p-4 rounded-xl bg-slate-800/50 border border-slate-700 transition-shadow hover:shadow-lg hover:shadow-amber-500/10">
        <p className="text-sm text-slate-300">Shadow Glow</p>
        <code className="text-xs text-slate-500">hover:shadow-*</code>
      </button>
    </div>
  );
}

export function FocusRingDemo() {
  return (
    <div className="flex gap-4">
      <button className="px-4 py-2 bg-amber-500 text-slate-900 font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-slate-900">
        Click to Focus
      </button>
      <input
        type="text"
        placeholder="Focus me"
        className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
      />
    </div>
  );
}

export function BadgeAnimationDemo() {
  return (
    <div className="flex items-center gap-4">
      <Badge variant="info" dot pulseDot>
        Comparing
      </Badge>
      <Badge variant="warning" dot pulseDot>
        Uploading
      </Badge>
      <Badge variant="success" dot>
        Complete
      </Badge>
    </div>
  );
}

export function PageTransitionDemo() {
  let [page, setPage] = useState(1);

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        {[1, 2, 3].map((p) => (
          <button
            key={p}
            onClick={() => setPage(p)}
            className={`px-3 py-1 rounded-lg text-sm transition-colors ${
              page === p
                ? 'bg-amber-500 text-slate-900'
                : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            Page {p}
          </button>
        ))}
      </div>

      <div
        key={page}
        className="p-6 rounded-xl bg-slate-800/30 border border-slate-700/50"
        style={{
          animation: 'fadeInUp 0.3s ease-out'
        }}
      >
        <h3 className="font-medium text-white mb-2">Page {page} Content</h3>
        <p className="text-sm text-slate-400">
          This content fades in with a subtle upward motion when the page changes.
        </p>
      </div>
    </div>
  );
}

export function ReducedMotionDemo() {
  return (
    <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30">
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
          <svg
            className="w-4 h-4 text-blue-400"
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
        </div>
        <div>
          <p className="font-medium text-blue-300 text-sm">Respecting User Preferences</p>
          <p className="text-sm text-slate-400 mt-1">
            All animations in Observatory respect the{' '}
            <code className="text-xs">prefers-reduced-motion</code> media query. Users who prefer
            reduced motion will see instant state changes instead of animations.
          </p>
        </div>
      </div>
    </div>
  );
}
