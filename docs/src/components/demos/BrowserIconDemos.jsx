import { BrowserIcon, getBrowserColor } from '@vizzly-testing/observatory';

let browsers = [
  'chrome',
  'firefox',
  'safari',
  'edge',
  'webkit',
  'opera',
  'brave',
  'chromium',
  'samsung',
  'android',
  'safari-ios',
  'unknown'
];

export function BrowserIconGalleryDemo() {
  return (
    <div className="p-4 bg-slate-900 rounded-lg grid grid-cols-4 gap-4">
      {browsers.map((browser) => (
        <div key={browser} className="flex items-center gap-2 px-3 py-2 bg-slate-800 rounded-lg">
          <BrowserIcon browser={browser} className="w-5 h-5" />
          <span className="text-sm text-slate-300 capitalize">{browser}</span>
        </div>
      ))}
    </div>
  );
}

export function BrowserIconSizesDemo() {
  return (
    <div className="p-4 bg-slate-900 rounded-lg flex items-end gap-6">
      <div className="text-center">
        <BrowserIcon browser="chrome" className="w-4 h-4" />
        <span className="text-xs text-slate-500 block mt-1">4</span>
      </div>
      <div className="text-center">
        <BrowserIcon browser="chrome" className="w-5 h-5" />
        <span className="text-xs text-slate-500 block mt-1">5</span>
      </div>
      <div className="text-center">
        <BrowserIcon browser="chrome" className="w-6 h-6" />
        <span className="text-xs text-slate-500 block mt-1">6</span>
      </div>
      <div className="text-center">
        <BrowserIcon browser="chrome" className="w-8 h-8" />
        <span className="text-xs text-slate-500 block mt-1">8</span>
      </div>
      <div className="text-center">
        <BrowserIcon browser="chrome" className="w-12 h-12" />
        <span className="text-xs text-slate-500 block mt-1">12</span>
      </div>
    </div>
  );
}

export function BrowserColorDemo() {
  return (
    <div className="p-4 bg-slate-900 rounded-lg space-y-2">
      {['chrome', 'firefox', 'safari', 'edge', 'opera', 'brave'].map((browser) => (
        <div key={browser} className="flex items-center gap-3">
          <BrowserIcon browser={browser} className="w-5 h-5" />
          <span className={`text-sm ${getBrowserColor(browser)} capitalize`}>{browser}</span>
          <code className="text-xs text-slate-500 ml-auto">{getBrowserColor(browser)}</code>
        </div>
      ))}
    </div>
  );
}

export function BrowserIconNullDemo() {
  return (
    <div className="p-4 bg-slate-900 rounded-lg flex items-center gap-4">
      <div className="flex items-center gap-2">
        <BrowserIcon browser={null} className="w-5 h-5" />
        <span className="text-sm text-slate-400">null (renders nothing)</span>
      </div>
      <div className="flex items-center gap-2">
        <BrowserIcon browser="unknown-browser" className="w-5 h-5" />
        <span className="text-sm text-slate-400">unknown (globe fallback)</span>
      </div>
    </div>
  );
}
