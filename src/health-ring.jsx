/**
 * Health Ring Component
 * Observatory Design System
 *
 * Radial progress indicator for health scores
 */

import { useEffect, useState } from 'react';

export function HealthRing({
  value = 0,
  label = '',
  size = 120,
  strokeWidth = 8,
  animated = true,
  showValue = true,
  className = ''
}) {
  const [displayValue, setDisplayValue] = useState(animated ? 0 : value);

  useEffect(() => {
    if (!animated) {
      setDisplayValue(value);
      return;
    }

    const start = 0;
    const end = value;
    const duration = 1000;
    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setDisplayValue(Math.round(start + (end - start) * eased));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [value, animated]);

  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (displayValue / 100) * circumference;

  const getColor = () => {
    if (value >= 80) return '#10b981';
    if (value >= 50) return '#f59e0b';
    return '#ef4444';
  };

  const stroke = getColor();

  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <svg
        className="transform -rotate-90"
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
      >
        {/* Glow filter */}
        <defs>
          <filter id={`glow-${size}`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth={strokeWidth}
        />

        {/* Progress */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          filter={`url(#glow-${size})`}
          style={{
            transition: animated ? 'stroke-dashoffset 1s cubic-bezier(0.4, 0, 0.2, 1)' : 'none'
          }}
        />
      </svg>

      {showValue && (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-mono font-semibold text-white" style={{ fontSize: size * 0.22 }}>
            {displayValue}%
          </span>
          {label && (
            <span
              className="text-slate-500 uppercase tracking-wider font-medium"
              style={{ fontSize: size * 0.08 }}
            >
              {label}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
