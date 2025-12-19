import {
  Bars3BottomLeftIcon,
  BellAlertIcon,
  CheckCircleIcon,
  CubeIcon,
  CursorArrowRaysIcon,
  DocumentTextIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  KeyIcon,
  MoonIcon,
  RectangleGroupIcon,
  Squares2X2Icon,
  TableCellsIcon,
  XCircleIcon
} from '@heroicons/react/24/outline';
import { Badge, Button, Card, CardBody } from '@vizzly-testing/observatory';

export function PhilosophyCardsDemo() {
  let principles = [
    {
      icon: CheckCircleIcon,
      title: 'Status Colors Are Sacred',
      description:
        'Colors communicate critical information. Green means approved, amber means pending, red means failed. Never use these decoratively.',
      color: 'emerald'
    },
    {
      icon: TableCellsIcon,
      title: 'Information Density Matters',
      description:
        'Visual testing dashboards display lots of data. Our components pack information efficiently with progressive disclosure.',
      color: 'blue'
    },
    {
      icon: KeyIcon,
      title: 'Keyboard Navigation First',
      description:
        'Power users navigate with keyboards. Every component supports full keyboard navigation with clear focus indicators.',
      color: 'purple'
    },
    {
      icon: MoonIcon,
      title: 'Dark Theme Native',
      description:
        'We build for dark interfaces from the ground up with carefully tuned contrast ratios. Not adapted—designed.',
      color: 'amber'
    }
  ];

  let colorClasses = {
    emerald: {
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-500/20',
      icon: 'text-emerald-400',
      glow: 'group-hover:shadow-emerald-500/10'
    },
    blue: {
      bg: 'bg-blue-500/10',
      border: 'border-blue-500/20',
      icon: 'text-blue-400',
      glow: 'group-hover:shadow-blue-500/10'
    },
    purple: {
      bg: 'bg-purple-500/10',
      border: 'border-purple-500/20',
      icon: 'text-purple-400',
      glow: 'group-hover:shadow-purple-500/10'
    },
    amber: {
      bg: 'bg-amber-500/10',
      border: 'border-amber-500/20',
      icon: 'text-amber-400',
      glow: 'group-hover:shadow-amber-500/10'
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {principles.map((principle, i) => {
        let Icon = principle.icon;
        let colors = colorClasses[principle.color];
        return (
          <div
            key={i}
            className={`group relative p-5 rounded-xl border ${colors.border} ${colors.bg} transition-all duration-200 hover:shadow-lg ${colors.glow}`}
          >
            <div
              className={`w-10 h-10 rounded-lg ${colors.bg} flex items-center justify-center mb-4`}
            >
              <Icon className={`w-5 h-5 ${colors.icon}`} />
            </div>
            <h3 className="text-white font-semibold mb-2">{principle.title}</h3>
            <p className="text-sm text-slate-400 leading-relaxed">{principle.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export function StatusColorsDemo() {
  let statuses = [
    {
      color: '#10b981',
      bg: 'bg-emerald-500',
      label: 'Green',
      meaning: 'Approved / Passed',
      icon: CheckCircleIcon
    },
    {
      color: '#f59e0b',
      bg: 'bg-amber-500',
      label: 'Amber',
      meaning: 'Pending / Review',
      icon: ExclamationTriangleIcon
    },
    {
      color: '#ef4444',
      bg: 'bg-red-500',
      label: 'Red',
      meaning: 'Failed / Rejected',
      icon: XCircleIcon
    },
    {
      color: '#3b82f6',
      bg: 'bg-blue-500',
      label: 'Blue',
      meaning: 'Info / Processing',
      icon: InformationCircleIcon
    }
  ];

  return (
    <div className="flex flex-wrap gap-3">
      {statuses.map((status) => {
        let Icon = status.icon;
        return (
          <div
            key={status.label}
            className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-slate-800/50 border border-slate-700/50"
          >
            <div className={`w-8 h-8 rounded-lg ${status.bg}/20 flex items-center justify-center`}>
              <Icon className={`w-4 h-4`} style={{ color: status.color }} />
            </div>
            <div>
              <p className="text-sm font-medium" style={{ color: status.color }}>
                {status.label}
              </p>
              <p className="text-xs text-slate-500">{status.meaning}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function ComponentCategoriesDemo() {
  let categories = [
    {
      icon: CubeIcon,
      name: 'Actions',
      components: ['Button', 'Dropdown'],
      color: 'text-amber-400',
      bg: 'bg-amber-500/10'
    },
    {
      icon: Squares2X2Icon,
      name: 'Data Display',
      components: ['Badge', 'Card', 'Table'],
      color: 'text-blue-400',
      bg: 'bg-blue-500/10'
    },
    {
      icon: BellAlertIcon,
      name: 'Feedback',
      components: ['Alert', 'Toast', 'Modal'],
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10'
    },
    {
      icon: CursorArrowRaysIcon,
      name: 'Forms',
      components: ['Input', 'Select', 'Toggle'],
      color: 'text-purple-400',
      bg: 'bg-purple-500/10'
    },
    {
      icon: Bars3BottomLeftIcon,
      name: 'Navigation',
      components: ['Tabs', 'Dropdown'],
      color: 'text-cyan-400',
      bg: 'bg-cyan-500/10'
    },
    {
      icon: RectangleGroupIcon,
      name: 'Layout',
      components: ['Card', 'EmptyState'],
      color: 'text-pink-400',
      bg: 'bg-pink-500/10'
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {categories.map((cat) => {
        let Icon = cat.icon;
        return (
          <div
            key={cat.name}
            className="p-4 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:border-slate-600 transition-colors"
          >
            <div className={`w-9 h-9 rounded-lg ${cat.bg} flex items-center justify-center mb-3`}>
              <Icon className={`w-5 h-5 ${cat.color}`} />
            </div>
            <p className="font-medium text-white text-sm mb-1">{cat.name}</p>
            <p className="text-xs text-slate-500">{cat.components.join(', ')}</p>
          </div>
        );
      })}
    </div>
  );
}

export function LivePreviewDemo() {
  return (
    <div className="p-6 rounded-xl bg-slate-800/30 border border-slate-700/50">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 flex items-center justify-center border border-emerald-500/20">
          <CheckCircleIcon className="w-6 h-6 text-emerald-400" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold text-white">Build #1234</h3>
            <Badge variant="success">Approved</Badge>
          </div>
          <p className="text-sm text-slate-400 mb-3">142 screenshots • 0 changes detected</p>
          <div className="flex gap-2">
            <Button size="sm">View Details</Button>
            <Button variant="ghost" size="sm">
              Compare
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function QuickStartStepsDemo() {
  let steps = [
    { num: 1, title: 'Install the package', code: 'npm install @vizzly-testing/observatory' },
    { num: 2, title: 'Import styles', code: "import '@vizzly-testing/observatory/styles'" },
    {
      num: 3,
      title: 'Use components',
      code: "import { Button } from '@vizzly-testing/observatory'"
    }
  ];

  return (
    <div className="space-y-3">
      {steps.map((step) => (
        <div key={step.num} className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 font-semibold text-sm shrink-0">
            {step.num}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm text-slate-300 mb-1">{step.title}</p>
            <code className="block text-xs text-slate-500 font-mono bg-slate-800/50 px-3 py-2 rounded-lg truncate">
              {step.code}
            </code>
          </div>
        </div>
      ))}
    </div>
  );
}
