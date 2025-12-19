/**
 * Zoom Controls Component
 * Observatory Design System - Image Viewer
 *
 * Provides zoom level management for image viewing
 * Supports keyboard shortcuts and touch-friendly mobile variant
 */

import {
  ArrowsPointingInIcon,
  MagnifyingGlassMinusIcon,
  MagnifyingGlassPlusIcon
} from '@heroicons/react/24/outline';
import { useCallback, useEffect, useState } from 'react';

const ZOOM_PRESETS = [
  { value: 'fit', label: 'Fit', icon: ArrowsPointingInIcon },
  { value: 0.25, label: '25%' },
  { value: 0.5, label: '50%' },
  { value: 0.75, label: '75%' },
  { value: 1, label: '100%' },
  { value: 1.5, label: '150%' },
  { value: 2, label: '200%' }
];

/**
 * Hook for managing zoom state
 */
export function useZoom(defaultZoom = 'fit') {
  const [zoom, setZoom] = useState(defaultZoom);

  const handleZoomChange = useCallback((newZoom) => {
    setZoom(newZoom);
  }, []);

  return {
    zoom,
    setZoom: handleZoomChange,
    isActualSize: zoom === 1,
    isFitToScreen: zoom === 'fit',
    zoomPercent: zoom === 'fit' ? null : Math.round(zoom * 100)
  };
}

/**
 * Zoom Controls Component
 *
 * @param {number|'fit'} zoom - Current zoom level (decimal or 'fit')
 * @param {Function} onZoomChange - Callback when zoom changes
 * @param {number} minZoom - Minimum zoom level (default: 0.1)
 * @param {number} maxZoom - Maximum zoom level (default: 3)
 * @param {'default'|'mobile'} variant - Display variant
 * @param {boolean} enableKeyboardShortcuts - Enable keyboard shortcuts (default: true)
 */
export function ZoomControls({
  zoom,
  onZoomChange,
  minZoom = 0.1,
  maxZoom = 3,
  variant = 'default',
  enableKeyboardShortcuts = true,
  className = ''
}) {
  const [isOpen, setIsOpen] = useState(false);

  const zoomIn = useCallback(() => {
    if (zoom === 'fit') {
      onZoomChange(0.75);
    } else {
      const newZoom = Math.min(maxZoom, zoom + 0.25);
      onZoomChange(newZoom);
    }
  }, [zoom, maxZoom, onZoomChange]);

  const zoomOut = useCallback(() => {
    if (zoom === 'fit') {
      onZoomChange(0.5);
    } else {
      const newZoom = Math.max(minZoom, zoom - 0.25);
      onZoomChange(newZoom);
    }
  }, [zoom, minZoom, onZoomChange]);

  const fitToScreen = useCallback(() => {
    onZoomChange('fit');
    setIsOpen(false);
  }, [onZoomChange]);

  const actualSize = useCallback(() => {
    onZoomChange(1);
    setIsOpen(false);
  }, [onZoomChange]);

  // Keyboard shortcuts
  useEffect(() => {
    if (!enableKeyboardShortcuts) return;

    const handleKeyDown = (e) => {
      // Ignore if typing in input
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      if (e.key === '=' || e.key === '+') {
        e.preventDefault();
        zoomIn();
      } else if (e.key === '-') {
        e.preventDefault();
        zoomOut();
      } else if (e.key === '0') {
        e.preventDefault();
        actualSize();
      } else if (e.key === '9') {
        e.preventDefault();
        fitToScreen();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [enableKeyboardShortcuts, zoomIn, zoomOut, actualSize, fitToScreen]);

  const displayValue = zoom === 'fit' ? 'Fit' : `${Math.round(zoom * 100)}%`;

  // Mobile variant - full-width touch-friendly layout
  if (variant === 'mobile') {
    return (
      <div className={`flex flex-col gap-2 ${className}`}>
        {/* Quick preset buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 -mx-1 px-1">
          {ZOOM_PRESETS.map((preset) => (
            <button
              key={preset.value}
              onClick={() => onZoomChange(preset.value)}
              className={`shrink-0 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                zoom === preset.value
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-800/60 text-slate-400 border border-slate-700/50'
              }`}
            >
              {preset.icon && <preset.icon className="w-3.5 h-3.5" />}
              <span>{preset.label}</span>
            </button>
          ))}
        </div>

        {/* Zoom in/out buttons */}
        <div className="flex items-center gap-2 bg-slate-800/60 rounded-lg p-1 border border-slate-700/50">
          <button
            onClick={zoomOut}
            className="flex-1 flex items-center justify-center gap-2 p-2.5 text-slate-300 hover:text-white hover:bg-slate-700/60 rounded-lg transition-colors"
          >
            <MagnifyingGlassMinusIcon className="w-5 h-5" />
            <span className="text-xs">Zoom Out</span>
          </button>

          <div className="px-3 py-2 min-w-[60px] text-center text-sm font-medium text-slate-200 bg-slate-900/50 rounded-lg">
            {displayValue}
          </div>

          <button
            onClick={zoomIn}
            className="flex-1 flex items-center justify-center gap-2 p-2.5 text-slate-300 hover:text-white hover:bg-slate-700/60 rounded-lg transition-colors"
          >
            <MagnifyingGlassPlusIcon className="w-5 h-5" />
            <span className="text-xs">Zoom In</span>
          </button>
        </div>
      </div>
    );
  }

  // Default desktop variant
  return (
    <div className={`relative flex items-center gap-1.5 ${className}`}>
      {/* Zoom controls */}
      <div className="flex items-center bg-slate-800/50 rounded-md p-0.5">
        <button
          onClick={zoomOut}
          className="p-1 text-slate-400 hover:text-white hover:bg-slate-700/50 rounded transition-all"
          title="Zoom out (−)"
        >
          <MagnifyingGlassMinusIcon className="w-3.5 h-3.5" />
        </button>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-2 py-1 min-w-[44px] text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-700/50 rounded transition-all tabular-nums"
          title="Click for zoom presets"
        >
          {displayValue}
        </button>

        <button
          onClick={zoomIn}
          className="p-1 text-slate-400 hover:text-white hover:bg-slate-700/50 rounded transition-all"
          title="Zoom in (+)"
        >
          <MagnifyingGlassPlusIcon className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Quick actions */}
      <div className="flex items-center bg-slate-800/50 rounded-md p-0.5">
        <button
          onClick={fitToScreen}
          className={`p-1 rounded transition-all ${
            zoom === 'fit'
              ? 'bg-blue-600 text-white'
              : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
          }`}
          title="Fit to screen (9)"
        >
          <ArrowsPointingInIcon className="w-3.5 h-3.5" />
        </button>
        <button
          onClick={actualSize}
          className={`px-2 py-1 rounded transition-all text-xs font-medium ${
            zoom === 1
              ? 'bg-blue-600 text-white'
              : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
          }`}
          title="Actual size (0)"
        >
          1:1
        </button>
      </div>

      {/* Dropdown presets */}
      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute top-full left-0 mt-1.5 z-50 bg-slate-800 border border-slate-700/50 rounded-lg shadow-xl overflow-hidden min-w-[100px]">
            {ZOOM_PRESETS.map((preset) => (
              <button
                key={preset.value}
                onClick={() => {
                  onZoomChange(preset.value);
                  setIsOpen(false);
                }}
                className={`w-full px-3 py-2 text-left text-sm flex items-center gap-2 transition-all ${
                  zoom === preset.value
                    ? 'bg-blue-600 text-white font-medium'
                    : 'text-slate-300 hover:bg-slate-700/50 hover:text-white'
                }`}
              >
                {preset.icon && <preset.icon className="w-4 h-4" />}
                <span>{preset.label}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
