# Observatory Docs

Documentation site for the Observatory Design System.

## Development

```bash
npm run dev      # Start dev server at localhost:4321
npm run build    # Build for production
npm run preview  # Preview production build
```

## Adding Component Pages

1. Create a demo component in `src/components/demos/`:

```jsx
// src/components/demos/MyComponentDemos.jsx
import { MyComponent } from '@vizzly-testing/observatory';

export function MyComponentDemo() {
  return <MyComponent>Example</MyComponent>;
}
```

2. Create an MDX page in `src/pages/components/`:

```mdx
---
layout: ../../layouts/DocsLayout.astro
title: MyComponent
description: Brief description
---

import { ComponentPreview } from '../../components/ComponentPreview.jsx';
import { MyComponentDemo } from '../../components/demos/MyComponentDemos.jsx';

# MyComponent

<ComponentPreview client:load>
  <MyComponentDemo />
</ComponentPreview>
```

3. Add to sidebar navigation in `src/components/Sidebar.jsx`

## Tech Stack

- [Astro](https://astro.build) with MDX
- [Tailwind CSS v4](https://tailwindcss.com)
- [View Transitions](https://docs.astro.build/en/guides/view-transitions/) for SPA-like navigation
