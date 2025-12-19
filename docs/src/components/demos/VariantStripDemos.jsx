import { DimensionGroup, VariantButton, VariantStrip } from '@vizzly-testing/observatory';
import { useState } from 'react';

/**
 * Mock comparison data for demos
 */
let mockComparisons = [
  {
    id: '1',
    viewport_width: 1920,
    viewport_height: 1080,
    browser: 'chrome',
    result: 'changed',
    approval_status: null,
    metadata: { theme: 'light' }
  },
  {
    id: '2',
    viewport_width: 1920,
    viewport_height: 1080,
    browser: 'chrome',
    result: 'changed',
    approval_status: null,
    metadata: { theme: 'dark' }
  },
  {
    id: '3',
    viewport_width: 1920,
    viewport_height: 1080,
    browser: 'firefox',
    result: 'unchanged',
    approval_status: null,
    metadata: { theme: 'light' }
  },
  {
    id: '4',
    viewport_width: 1920,
    viewport_height: 1080,
    browser: 'firefox',
    result: 'unchanged',
    approval_status: null,
    metadata: { theme: 'dark' }
  },
  {
    id: '5',
    viewport_width: 1280,
    viewport_height: 720,
    browser: 'chrome',
    result: 'approved',
    approval_status: 'approved',
    metadata: { theme: 'light' }
  },
  {
    id: '6',
    viewport_width: 1280,
    viewport_height: 720,
    browser: 'chrome',
    result: 'approved',
    approval_status: 'approved',
    metadata: { theme: 'dark' }
  },
  {
    id: '7',
    viewport_width: 375,
    viewport_height: 812,
    browser: 'safari',
    result: 'new',
    approval_status: null,
    metadata: { theme: 'light' }
  },
  {
    id: '8',
    viewport_width: 375,
    viewport_height: 812,
    browser: 'safari',
    result: 'new',
    approval_status: null,
    metadata: { theme: 'dark' }
  }
];

/**
 * Basic VariantStrip demo
 */
export function BasicVariantStripDemo() {
  let [selectedId, setSelectedId] = useState('1');
  let simpleComparisons = mockComparisons.slice(0, 4).map((c) => ({
    ...c,
    metadata: {} // Remove theme for simple demo
  }));

  return (
    <div className="p-4 bg-slate-900 rounded-lg">
      <VariantStrip
        variants={simpleComparisons}
        currentVariantId={selectedId}
        onVariantSelect={(variant) => setSelectedId(variant.id)}
      />
      <div className="mt-4 text-sm text-slate-400">Selected: {selectedId}</div>
    </div>
  );
}

/**
 * Multi-dimension variant selector with theme grouping
 */
export function MultiDimensionDemo() {
  let [selectedId, setSelectedId] = useState('1');

  return (
    <div className="p-4 bg-slate-900 rounded-lg">
      <VariantStrip
        variants={mockComparisons}
        currentVariantId={selectedId}
        onVariantSelect={(variant) => setSelectedId(variant.id)}
        baselineSignatureProperties={['theme']}
      />
      <div className="mt-4 text-sm text-slate-400">
        Selected: {selectedId} (viewport + browser + theme grouping)
      </div>
    </div>
  );
}

/**
 * Compact mode for tight UI spaces
 */
export function CompactVariantStripDemo() {
  let [selectedId, setSelectedId] = useState('1');

  return (
    <div className="p-4 bg-slate-900 rounded-lg">
      <VariantStrip
        variants={mockComparisons}
        currentVariantId={selectedId}
        onVariantSelect={(variant) => setSelectedId(variant.id)}
        baselineSignatureProperties={['theme']}
        compact
      />
    </div>
  );
}

/**
 * Without labels
 */
export function NoLabelsDemo() {
  let [selectedId, setSelectedId] = useState('1');

  return (
    <div className="p-4 bg-slate-900 rounded-lg">
      <VariantStrip
        variants={mockComparisons}
        currentVariantId={selectedId}
        onVariantSelect={(variant) => setSelectedId(variant.id)}
        baselineSignatureProperties={['theme']}
        showLabels={false}
      />
    </div>
  );
}

/**
 * Individual VariantButton component
 */
export function VariantButtonDemo() {
  let [selected, setSelected] = useState('chrome');

  return (
    <div className="p-4 bg-slate-900 rounded-lg flex gap-2">
      <VariantButton
        value="chrome"
        displayValue="Chrome"
        dimension="browser"
        isSelected={selected === 'chrome'}
        comparisons={[{ result: 'changed', approval_status: null }]}
        onClick={() => setSelected('chrome')}
      />
      <VariantButton
        value="firefox"
        displayValue="Firefox"
        dimension="browser"
        isSelected={selected === 'firefox'}
        comparisons={[{ result: 'unchanged', approval_status: null }]}
        onClick={() => setSelected('firefox')}
      />
      <VariantButton
        value="safari"
        displayValue="Safari"
        dimension="browser"
        isSelected={selected === 'safari'}
        comparisons={[{ result: 'approved', approval_status: 'approved' }]}
        onClick={() => setSelected('safari')}
      />
    </div>
  );
}

/**
 * DimensionGroup container
 */
export function DimensionGroupDemo() {
  return (
    <div className="p-4 bg-slate-900 rounded-lg">
      <DimensionGroup label="Size">
        <VariantButton
          value="1920x1080"
          displayValue="1920×1080"
          dimension="viewport"
          isSelected={true}
          comparisons={[{ result: 'unchanged', approval_status: null }]}
          onClick={() => {}}
        />
        <VariantButton
          value="1280x720"
          displayValue="1280×720"
          dimension="viewport"
          isSelected={false}
          comparisons={[{ result: 'unchanged', approval_status: null }]}
          onClick={() => {}}
        />
      </DimensionGroup>
    </div>
  );
}

/**
 * Custom properties (locale example)
 */
export function CustomPropertiesDemo() {
  let [selectedId, setSelectedId] = useState('1');

  let localeComparisons = [
    {
      id: '1',
      viewport_width: 1920,
      viewport_height: 1080,
      browser: 'chrome',
      result: 'changed',
      approval_status: null,
      metadata: { locale: 'en-US' }
    },
    {
      id: '2',
      viewport_width: 1920,
      viewport_height: 1080,
      browser: 'chrome',
      result: 'unchanged',
      approval_status: null,
      metadata: { locale: 'es-ES' }
    },
    {
      id: '3',
      viewport_width: 1920,
      viewport_height: 1080,
      browser: 'chrome',
      result: 'new',
      approval_status: null,
      metadata: { locale: 'ja-JP' }
    },
    {
      id: '4',
      viewport_width: 1920,
      viewport_height: 1080,
      browser: 'firefox',
      result: 'unchanged',
      approval_status: null,
      metadata: { locale: 'en-US' }
    }
  ];

  return (
    <div className="p-4 bg-slate-900 rounded-lg">
      <VariantStrip
        variants={localeComparisons}
        currentVariantId={selectedId}
        onVariantSelect={(variant) => setSelectedId(variant.id)}
        baselineSignatureProperties={['locale']}
      />
      <div className="mt-4 text-sm text-slate-400">
        Using <code className="text-amber-400">baselineSignatureProperties</code> to include locale
      </div>
    </div>
  );
}
