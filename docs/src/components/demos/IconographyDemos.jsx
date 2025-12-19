import {
  AdjustmentsHorizontalIcon,
  ArrowDownTrayIcon,
  ArrowLeftIcon,
  ArrowPathIcon,
  ArrowRightIcon,
  ArrowUpTrayIcon,
  Bars3Icon,
  BellIcon,
  BuildingOfficeIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  ClipboardIcon,
  ClockIcon,
  CodeBracketIcon,
  Cog6ToothIcon,
  CommandLineIcon,
  ComputerDesktopIcon,
  CubeIcon,
  DevicePhoneMobileIcon,
  DocumentDuplicateIcon,
  DocumentIcon,
  EllipsisVerticalIcon,
  ExclamationTriangleIcon,
  EyeIcon,
  EyeSlashIcon,
  FolderIcon,
  FolderOpenIcon,
  FunnelIcon,
  GlobeAltIcon,
  InformationCircleIcon,
  LinkIcon,
  MagnifyingGlassIcon,
  MagnifyingGlassMinusIcon,
  MagnifyingGlassPlusIcon,
  MinusIcon,
  PencilIcon,
  PhotoIcon,
  PlusIcon,
  RectangleGroupIcon,
  ShareIcon,
  TrashIcon,
  UserIcon,
  UsersIcon,
  XCircleIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';

import {
  CheckCircleIcon as CheckCircleSolid,
  ExclamationTriangleIcon as ExclamationTriangleSolid,
  XCircleIcon as XCircleSolid
} from '@heroicons/react/24/solid';

let statusIcons = [
  { icon: CheckCircleIcon, name: 'CheckCircleIcon', usage: 'Success, approved, passed' },
  { icon: XCircleIcon, name: 'XCircleIcon', usage: 'Error, rejected, failed' },
  { icon: ExclamationTriangleIcon, name: 'ExclamationTriangleIcon', usage: 'Warning, attention' },
  { icon: InformationCircleIcon, name: 'InformationCircleIcon', usage: 'Info, help, details' },
  { icon: ClockIcon, name: 'ClockIcon', usage: 'Pending, scheduled, history' },
  { icon: ArrowPathIcon, name: 'ArrowPathIcon', usage: 'Processing, refresh, sync' }
];

let actionIcons = [
  { icon: EyeIcon, name: 'EyeIcon', usage: 'View, preview, show' },
  { icon: EyeSlashIcon, name: 'EyeSlashIcon', usage: 'Hide, ignore' },
  { icon: PlusIcon, name: 'PlusIcon', usage: 'Add, create, new' },
  { icon: TrashIcon, name: 'TrashIcon', usage: 'Delete, remove' },
  { icon: PencilIcon, name: 'PencilIcon', usage: 'Edit, modify' },
  { icon: DocumentDuplicateIcon, name: 'DocumentDuplicateIcon', usage: 'Copy, duplicate' },
  { icon: ArrowDownTrayIcon, name: 'ArrowDownTrayIcon', usage: 'Download, export' },
  { icon: ArrowUpTrayIcon, name: 'ArrowUpTrayIcon', usage: 'Upload, import' }
];

let navigationIcons = [
  { icon: ArrowRightIcon, name: 'ArrowRightIcon', usage: 'Next, continue, go to' },
  { icon: ArrowLeftIcon, name: 'ArrowLeftIcon', usage: 'Back, previous' },
  { icon: ChevronDownIcon, name: 'ChevronDownIcon', usage: 'Expand, dropdown' },
  { icon: ChevronRightIcon, name: 'ChevronRightIcon', usage: 'Expand, drill down' },
  { icon: XMarkIcon, name: 'XMarkIcon', usage: 'Close, dismiss' },
  { icon: Bars3Icon, name: 'Bars3Icon', usage: 'Menu, hamburger' },
  { icon: EllipsisVerticalIcon, name: 'EllipsisVerticalIcon', usage: 'More options' }
];

let visualTestingIcons = [
  { icon: PhotoIcon, name: 'PhotoIcon', usage: 'Screenshot, image' },
  { icon: MagnifyingGlassIcon, name: 'MagnifyingGlassIcon', usage: 'Search, find' },
  { icon: MagnifyingGlassPlusIcon, name: 'MagnifyingGlassPlusIcon', usage: 'Zoom in' },
  { icon: MagnifyingGlassMinusIcon, name: 'MagnifyingGlassMinusIcon', usage: 'Zoom out' },
  { icon: FunnelIcon, name: 'FunnelIcon', usage: 'Filter' },
  {
    icon: AdjustmentsHorizontalIcon,
    name: 'AdjustmentsHorizontalIcon',
    usage: 'Settings, configure'
  },
  { icon: RectangleGroupIcon, name: 'RectangleGroupIcon', usage: 'Layout, components' }
];

function IconGrid({ icons }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
      {icons.map(({ icon: Icon, name, usage }) => (
        <div
          key={name}
          className="group p-4 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:border-amber-500/30 hover:bg-slate-800/50 transition-all cursor-pointer"
        >
          <div className="flex items-center gap-3 mb-2">
            <Icon className="w-6 h-6 text-slate-300 group-hover:text-amber-400 transition-colors" />
            <code className="text-xs text-slate-500 truncate">{name.replace('Icon', '')}</code>
          </div>
          <p className="text-xs text-slate-500">{usage}</p>
        </div>
      ))}
    </div>
  );
}

export function StatusIconsDemo() {
  return <IconGrid icons={statusIcons} />;
}

export function ActionIconsDemo() {
  return <IconGrid icons={actionIcons} />;
}

export function NavigationIconsDemo() {
  return <IconGrid icons={navigationIcons} />;
}

export function VisualTestingIconsDemo() {
  return <IconGrid icons={visualTestingIcons} />;
}

export function IconSizesDemo() {
  let sizes = [
    { size: 'w-4 h-4', label: '16px', usage: 'Inline, badges' },
    { size: 'w-5 h-5', label: '20px', usage: 'Buttons, inputs' },
    { size: 'w-6 h-6', label: '24px', usage: 'Standard UI' },
    { size: 'w-8 h-8', label: '32px', usage: 'Cards, emphasis' },
    { size: 'w-10 h-10', label: '40px', usage: 'Empty states' },
    { size: 'w-12 h-12', label: '48px', usage: 'Hero, marketing' }
  ];

  return (
    <div className="flex items-end gap-6 flex-wrap">
      {sizes.map((item) => (
        <div key={item.size} className="text-center">
          <div className="flex items-center justify-center h-16">
            <CheckCircleIcon className={`${item.size} text-emerald-400`} />
          </div>
          <code className="text-xs text-amber-500">{item.size.split(' ')[0]}</code>
          <p className="text-xs text-slate-500 mt-1">{item.label}</p>
        </div>
      ))}
    </div>
  );
}

export function IconStylesDemo() {
  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="p-6 rounded-xl bg-slate-800/30 border border-slate-700/50">
        <div className="flex items-center gap-4 mb-4">
          <CheckCircleIcon className="w-8 h-8 text-emerald-400" />
          <XCircleIcon className="w-8 h-8 text-red-400" />
          <ExclamationTriangleIcon className="w-8 h-8 text-amber-400" />
        </div>
        <code className="text-xs text-amber-500">@heroicons/react/24/outline</code>
        <p className="text-sm text-slate-400 mt-2">Default style. Use for most UI elements.</p>
      </div>

      <div className="p-6 rounded-xl bg-slate-800/30 border border-slate-700/50">
        <div className="flex items-center gap-4 mb-4">
          <CheckCircleSolid className="w-8 h-8 text-emerald-400" />
          <XCircleSolid className="w-8 h-8 text-red-400" />
          <ExclamationTriangleSolid className="w-8 h-8 text-amber-400" />
        </div>
        <code className="text-xs text-amber-500">@heroicons/react/24/solid</code>
        <p className="text-sm text-slate-400 mt-2">
          For emphasis, selected states, or filled badges.
        </p>
      </div>
    </div>
  );
}

export function IconWithTextDemo() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <CheckCircleIcon className="w-5 h-5 text-emerald-400 shrink-0" />
        <span className="text-slate-300">142 tests passed</span>
      </div>

      <div className="flex items-center gap-2">
        <XCircleIcon className="w-5 h-5 text-red-400 shrink-0" />
        <span className="text-slate-300">3 visual regressions detected</span>
      </div>

      <div className="flex items-center gap-2">
        <ArrowPathIcon className="w-5 h-5 text-blue-400 shrink-0 animate-spin" />
        <span className="text-slate-300">Processing screenshots...</span>
      </div>

      <button className="flex items-center gap-2 px-4 py-2 bg-amber-500 text-slate-900 font-medium rounded-lg hover:bg-amber-400 transition-colors">
        <PlusIcon className="w-5 h-5" />
        Create Build
      </button>
    </div>
  );
}

export function IconColorsDemo() {
  return (
    <div className="grid grid-cols-4 gap-4">
      {[
        { color: 'text-slate-400', label: 'Neutral', bg: 'bg-slate-500/10' },
        { color: 'text-emerald-400', label: 'Success', bg: 'bg-emerald-500/10' },
        { color: 'text-amber-400', label: 'Warning', bg: 'bg-amber-500/10' },
        { color: 'text-red-400', label: 'Danger', bg: 'bg-red-500/10' },
        { color: 'text-blue-400', label: 'Info', bg: 'bg-blue-500/10' },
        { color: 'text-purple-400', label: 'Special', bg: 'bg-purple-500/10' },
        { color: 'text-white', label: 'Primary', bg: 'bg-slate-700' },
        { color: 'text-slate-600', label: 'Disabled', bg: 'bg-slate-800' }
      ].map((item) => (
        <div key={item.label} className="text-center">
          <div
            className={`w-12 h-12 mx-auto rounded-xl ${item.bg} flex items-center justify-center mb-2`}
          >
            <PhotoIcon className={`w-6 h-6 ${item.color}`} />
          </div>
          <span className="text-xs text-slate-500">{item.label}</span>
        </div>
      ))}
    </div>
  );
}
