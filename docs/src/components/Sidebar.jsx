import {
  BellAlertIcon,
  CubeIcon,
  CursorArrowRaysIcon,
  DocumentTextIcon,
  EyeIcon,
  PhotoIcon,
  RectangleStackIcon,
  SparklesIcon,
  Squares2X2Icon,
  SwatchIcon,
  TableCellsIcon,
  UserGroupIcon,
  WindowIcon
} from '@heroicons/react/24/outline';

let navigation = [
  {
    title: 'Getting Started',
    icon: DocumentTextIcon,
    items: [
      { title: 'Introduction', href: '/getting-started/introduction' },
      { title: 'Installation', href: '/getting-started/installation' },
      { title: 'Design Principles', href: '/getting-started/principles' }
    ]
  },
  {
    title: 'Foundations',
    icon: SwatchIcon,
    items: [
      { title: 'Colors', href: '/foundations/colors' },
      { title: 'Typography', href: '/foundations/typography' },
      { title: 'Spacing', href: '/foundations/spacing' },
      { title: 'Iconography', href: '/foundations/iconography' },
      { title: 'Animation', href: '/foundations/animation' },
      { title: 'Accessibility', href: '/foundations/accessibility' }
    ]
  },
  {
    title: 'Components',
    icon: CubeIcon,
    items: [
      { title: 'Button', href: '/components/button' },
      { title: 'Badge', href: '/components/badge' },
      { title: 'Card', href: '/components/card' },
      { title: 'StatusDot', href: '/components/status-dot' },
      { title: 'Alert', href: '/components/alert' },
      { title: 'Toast', href: '/components/toast' },
      { title: 'Tooltip', href: '/components/tooltip' },
      { title: 'Avatar', href: '/components/avatar' },
      { title: 'EmptyState', href: '/components/empty-state' },
      { title: 'HealthRing', href: '/components/health-ring' },
      { title: 'Skeleton', href: '/components/skeleton' }
    ]
  },
  {
    title: 'Form Controls',
    icon: CursorArrowRaysIcon,
    items: [
      { title: 'Input', href: '/components/input' },
      { title: 'Textarea', href: '/components/textarea' },
      { title: 'Select', href: '/components/select' },
      { title: 'Checkbox', href: '/components/checkbox' },
      { title: 'Toggle', href: '/components/toggle' },
      { title: 'SearchInput', href: '/components/search-input' },
      { title: 'Combobox', href: '/components/combobox' }
    ]
  },
  {
    title: 'Data Display',
    icon: TableCellsIcon,
    items: [
      { title: 'Table', href: '/components/table' },
      { title: 'DataTable', href: '/components/data-table' },
      { title: 'Timeline', href: '/components/timeline' }
    ]
  },
  {
    title: 'Filtering',
    icon: RectangleStackIcon,
    items: [
      { title: 'FilterPill', href: '/components/filter-pill' },
      { title: 'ActiveFilterChip', href: '/components/active-filter-chip' },
      { title: 'TableToolbar', href: '/components/table-toolbar' }
    ]
  },
  {
    title: 'Navigation',
    icon: Squares2X2Icon,
    items: [
      { title: 'Tabs', href: '/components/tabs' },
      { title: 'Dropdown', href: '/components/dropdown' }
    ]
  },
  {
    title: 'Overlays',
    icon: WindowIcon,
    items: [
      { title: 'Modal', href: '/components/modal' },
      { title: 'ConfirmationDialog', href: '/components/confirmation-dialog' }
    ]
  },
  {
    title: 'Image Viewer',
    icon: PhotoIcon,
    items: [
      { title: 'ZoomControls', href: '/components/zoom-controls' },
      { title: 'ThumbnailStrip', href: '/components/thumbnail-strip' }
    ]
  },
  {
    title: 'Review Workflow',
    icon: EyeIcon,
    items: [
      { title: 'VariantStrip', href: '/components/variant-strip' },
      { title: 'BrowserIcon', href: '/components/browser-icon' }
    ]
  }
];

export function Sidebar({ currentPath }) {
  return (
    <aside className="w-72 shrink-0 border-r border-[--vz-border] bg-[--vz-bg] overflow-y-auto h-[calc(100vh-4rem)] sticky top-16">
      {/* Decorative gradient at top */}
      <div className="h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />

      <nav className="p-5">
        {navigation.map((section, idx) => {
          let SectionIcon = section.icon;
          return (
            <div key={section.title} className={idx > 0 ? 'mt-8' : ''}>
              <h3 className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-3 px-3">
                <SectionIcon className="w-4 h-4 text-amber-500/60" />
                {section.title}
              </h3>
              <ul className="space-y-0.5">
                {section.items.map((item) => {
                  let isActive = currentPath === item.href || currentPath === item.href + '/';
                  return (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        className={`
                          block px-3 py-2 rounded-lg text-sm transition-all duration-150
                          ${
                            isActive
                              ? 'bg-amber-500/10 text-amber-400 font-medium shadow-sm shadow-amber-500/5'
                              : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                          }
                        `}
                      >
                        <span className="flex items-center gap-2">
                          {isActive && <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />}
                          {item.title}
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}

        {/* Footer decoration */}
        <div className="mt-12 pt-6 border-t border-slate-800/50">
          <div className="px-3 flex items-center gap-3 text-slate-600">
            <svg width="20" height="20" viewBox="0 0 100 100" fill="none" className="opacity-40">
              <path
                d="M50 5L90 27.5V72.5L50 95L10 72.5V27.5L50 5Z"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
              <circle cx="50" cy="50" r="10" fill="currentColor" />
            </svg>
            <span className="text-xs">Observatory Design System</span>
          </div>
        </div>
      </nav>
    </aside>
  );
}
