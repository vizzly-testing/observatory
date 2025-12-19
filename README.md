# Observatory Design System

A React component library for Vizzly visual testing applications. Built with Tailwind CSS v4.

## Installation

```bash
npm install @vizzly-testing/observatory
```

## Requirements

- React 18+ or 19+
- Tailwind CSS v4+
- downshift (optional, for Combobox)

## Quick Start

Import the styles in your main CSS file:

```css
@import '@vizzly-testing/observatory/styles';
```

Import and use components:

```jsx
import { Button, Card, CardHeader, CardBody, Alert } from '@vizzly-testing/observatory';

function App() {
  return (
    <Card variant="success">
      <CardHeader title="Welcome" />
      <CardBody>
        <Alert variant="info" title="Tip">
          Use Observatory components for consistent UI.
        </Alert>
        <Button variant="primary">Get Started</Button>
      </CardBody>
    </Card>
  );
}
```

## Package Exports

```javascript
// Main components
import { Button, Card, DataTable, ... } from '@vizzly-testing/observatory';

// Image viewer components (separate entry for tree-shaking)
import { ZoomControls, ZoomableImage, useZoom } from '@vizzly-testing/observatory/image-viewer';

// CSS variables and animations
import '@vizzly-testing/observatory/styles';
```

## Components

### Core UI
- **Button** - Action button with variants (primary, secondary, ghost, danger, warning, success)
- **Card, CardHeader, CardBody, CardFooter** - Content containers with accent borders
- **Modal** - Dialog overlay with escape key handling
- **ConfirmationDialog** - Specialized modal for dangerous actions
- **Tabs** - Tab navigation (default, pills, underline variants)
- **Alert** - Feedback banners (success, warning, danger, info)
- **Toast, ToastContainer** - Temporary notifications
- **Badge** - Status indicators with auto-detection
- **Tooltip** - Hover tooltips

### Form Controls
- **Input, Textarea, Select** - Form inputs with labels, hints, and errors
- **Checkbox, Toggle** - Boolean inputs
- **Combobox** - Searchable dropdown (requires downshift)
- **Dropdown** - Generic dropdown menu
- **SearchInput** - Search field with icon and clear button

### Data Display
- **DataTable** - Responsive table with mobile card layout, sorting, column management
- **Table** - Simple table component
- **TableToolbar** - Integrated toolbar with search and filters
- **Avatar, AvatarGroup** - User avatars with status indicators
- **Timeline** - Status timeline for processes
- **HealthRing** - Radial progress indicator
- **Skeleton, SkeletonCard, SkeletonTable** - Loading placeholders
- **EmptyState** - Empty state placeholder
- **StatusDot** - Small status indicators

### Filters
- **FilterPill, FilterPillGroup** - Filter toggles
- **ActiveFilterChip, ActiveFilterBar** - Display active filters

### Review Workflow
- **ApprovalButton, ApprovalButtonGroup, MobileApprovalBar** - Approve/reject buttons
- **QueueItem** - Review queue list item with status indicators
- **InspectorPanel** - Slide-out metadata panel
- **ReviewModeProvider, useReviewMode** - Keyboard-driven review context
- **KeyboardHint, KeyboardBar** - Keyboard shortcut hints
- **ActionToast** - Compact inline action feedback
- **ViewModeToggle, ViewModeSelect** - Comparison view mode selector

### Variant Selection
- **VariantStrip** - Dimension-grouped variant selector
- **VariantPills** - Compact variant metadata display
- **VariantBreadcrumb** - Breadcrumb-style variant navigation
- **BrowserIcon** - Browser logo icons

### Mobile & Layout
- **MobileDrawer** - Responsive drawer/sidebar (bottom sheet on mobile)
- **DrawerHeader, DrawerContent, DrawerFooter** - Drawer composition

### Image Viewer
- **ZoomableImage** - Pan and zoom image viewer
- **ZoomControls, useZoom** - Zoom management with keyboard shortcuts
- **SideBySideView** - Two images side by side
- **ThumbnailStrip** - Horizontal thumbnail navigation

### Utilities
- **getScreenshotMetadata** - Extract metadata from screenshot objects
- **getViewportDisplay** - Format viewport strings
- **getUniquePropertyValues** - Get unique values across screenshots

## Design Tokens

CSS variables for theming (defined in `styles.css`):

```css
:root {
  --vz-bg: #0f172a;
  --vz-surface: #1a2332;
  --vz-elevated: #1e293b;
  --vz-border: #374151;
  --vz-border-subtle: #2d3748;

  --accent-success: #10b981;
  --accent-warning: #f59e0b;
  --accent-danger: #ef4444;
  --accent-info: #3b82f6;

  --text-primary: #ffffff;
  --text-secondary: #9ca3af;
  --text-tertiary: #6b7280;
  --text-muted: #4b5563;
}
```

## Documentation

See the [docs folder](./docs) for detailed component documentation:

- [Core UI Components](./docs/core-ui.md)
- [Form Controls](./docs/forms.md)
- [Data Display](./docs/data-display.md)
- [Review Workflow](./docs/review-workflow.md)
- [Image Viewer](./docs/image-viewer.md)
- [Variant Selection](./docs/variants.md)

## License

MIT
