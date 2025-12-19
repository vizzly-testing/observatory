/**
 * Tabs Component
 * Observatory Design System
 *
 * Tab navigation component
 */

import { useEffect, useState } from 'react';

export function Tabs({ tabs = [], defaultTab, onChange, variant = 'default', className = '' }) {
  let [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  // Sync internal state with external defaultTab prop (controlled component pattern)
  useEffect(() => {
    if (defaultTab !== undefined) {
      setActiveTab(defaultTab);
    }
  }, [defaultTab]);

  let handleTabChange = (tabId) => {
    setActiveTab(tabId);
    onChange?.(tabId);
  };

  let variantClasses = {
    default: {
      container: 'border-b border-slate-700/50',
      tab: 'px-4 py-3 text-sm font-medium transition-colors relative',
      active: 'text-amber-400',
      inactive: 'text-slate-400 hover:text-white',
      indicator: 'absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500'
    },
    pills: {
      container: 'bg-slate-800/50 rounded-lg p-1 inline-flex',
      tab: 'px-4 py-2 text-sm font-medium rounded-md transition-all',
      active: 'bg-amber-500 text-slate-900',
      inactive: 'text-slate-400 hover:text-white hover:bg-slate-700/50',
      indicator: ''
    },
    underline: {
      container: 'flex gap-6',
      tab: 'pb-3 text-sm font-medium transition-colors relative',
      active: 'text-white',
      inactive: 'text-slate-500 hover:text-slate-300',
      indicator:
        'absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-amber-500 to-amber-400'
    }
  };

  let styles = variantClasses[variant];

  return (
    <div className={className} data-testid="tabs">
      <div className={styles.container}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={`${styles.tab} ${activeTab === tab.id ? styles.active : styles.inactive}`}
            data-testid={`tab-${tab.id}`}
            data-active={activeTab === tab.id}
          >
            <span className="flex items-center gap-2">
              {tab.icon && <tab.icon className="w-4 h-4" />}
              {tab.label}
              {tab.count !== undefined && (
                <span
                  className={`ml-1 px-1.5 py-0.5 text-xs rounded-full ${
                    activeTab === tab.id
                      ? 'bg-amber-400/20 text-amber-300'
                      : 'bg-slate-700 text-slate-400'
                  }`}
                >
                  {tab.count}
                </span>
              )}
            </span>
            {activeTab === tab.id && styles.indicator && <div className={styles.indicator} />}
          </button>
        ))}
      </div>
    </div>
  );
}
