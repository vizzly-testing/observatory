/**
 * Zoomable Image Component
 * Observatory Design System - Image Viewer
 *
 * Provides pan and zoom functionality for image viewing
 * Supports overlays, loading states, and device detection
 */

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

/**
 * Zoomable Image Container
 *
 * @param {string} src - Image source URL
 * @param {string} alt - Alt text
 * @param {number|'fit'} zoom - Zoom level (decimal or 'fit')
 * @param {Object} metadata - Optional metadata for device detection { width, height, platform, device }
 * @param {Function} onLoad - Callback when image loads
 * @param {Function} onError - Callback on error
 * @param {ReactNode} overlay - Content to overlay on the image (scales with zoom)
 * @param {ReactNode} children - Additional overlays (fixed position)
 * @param {boolean} showPanHint - Show "drag to pan" hint
 * @param {boolean} showDeviceInfo - Show device badge from metadata
 * @param {boolean} showLoadingIndicator - Show loading spinner
 * @param {string} checkerboardColor - Background color for transparency
 */
export function ZoomableImage({
  src,
  alt,
  zoom = 'fit',
  metadata,
  onLoad,
  onError,
  overlay,
  children,
  showPanHint = true,
  showDeviceInfo = false,
  showLoadingIndicator = true,
  checkerboardColor = '#1a1a1a',
  className = ''
}) {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const [imageDimensions, setImageDimensions] = useState({
    width: 0,
    height: 0
  });
  const [containerDimensions, setContainerDimensions] = useState({
    width: 0,
    height: 0
  });
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [imageLoaded, setImageLoaded] = useState(false);

  // Detect device type from metadata
  const deviceInfo = useMemo(() => {
    if (!metadata) return null;

    const platform = metadata.platform?.toLowerCase() || '';
    const device = metadata.device?.toLowerCase() || '';
    const width = metadata.width || metadata.viewport_width || 0;
    const height = metadata.height || metadata.viewport_height || 0;

    const isIOS = platform === 'ios' || device.includes('iphone') || device.includes('ipad');
    const isAndroid = platform === 'android';
    const isMobile = isIOS || isAndroid || width < 768;
    const isPortrait = height > width;

    return {
      platform: isIOS ? 'ios' : isAndroid ? 'android' : 'desktop',
      isMobile,
      isPortrait
    };
  }, [metadata]);

  // Handle image load
  const handleImageLoad = useCallback(
    (e) => {
      const img = e.target;
      setImageDimensions({
        width: img.naturalWidth,
        height: img.naturalHeight
      });
      setImageLoaded(true);
      onLoad?.();
    },
    [onLoad]
  );

  // Update container dimensions on resize
  useEffect(() => {
    const updateContainerSize = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setContainerDimensions({ width: rect.width, height: rect.height });
      }
    };

    updateContainerSize();
    window.addEventListener('resize', updateContainerSize);
    return () => window.removeEventListener('resize', updateContainerSize);
  }, []);

  // Calculate actual zoom scale
  const scale = useMemo(() => {
    if (!imageDimensions.width || !containerDimensions.width) return 1;

    const scaleX = containerDimensions.width / imageDimensions.width;
    const scaleY = containerDimensions.height / imageDimensions.height;
    const fitScale = Math.min(scaleX, scaleY, 1); // Never scale up for fit

    return zoom === 'fit' ? fitScale : zoom;
  }, [zoom, imageDimensions, containerDimensions]);

  // Calculate scaled dimensions
  const scaledDimensions = useMemo(
    () => ({
      width: imageDimensions.width * scale,
      height: imageDimensions.height * scale
    }),
    [imageDimensions, scale]
  );

  // Check if panning is needed
  const canPan = useMemo(
    () =>
      scaledDimensions.width > containerDimensions.width ||
      scaledDimensions.height > containerDimensions.height,
    [scaledDimensions, containerDimensions]
  );

  // Reset pan when zoom changes
  useEffect(() => {
    setPan({ x: 0, y: 0 });
  }, [zoom]);

  // Pan handlers
  const handleMouseDown = useCallback(
    (e) => {
      if (!canPan) return;
      e.preventDefault();
      setIsDragging(true);
      setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
    },
    [canPan, pan]
  );

  const handleMouseMove = useCallback(
    (e) => {
      if (!isDragging) return;

      let newX = e.clientX - dragStart.x;
      let newY = e.clientY - dragStart.y;

      // Constrain pan to keep image visible
      const maxPanX = Math.max(0, (scaledDimensions.width - containerDimensions.width) / 2);
      const maxPanY = Math.max(0, (scaledDimensions.height - containerDimensions.height) / 2);

      newX = Math.max(-maxPanX, Math.min(maxPanX, newX));
      newY = Math.max(-maxPanY, Math.min(maxPanY, newY));

      setPan({ x: newX, y: newY });
    },
    [isDragging, dragStart, scaledDimensions, containerDimensions]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Image transform style
  const imageStyle = useMemo(
    () => ({
      transform: `translate(${pan.x}px, ${pan.y}px) scale(${scale})`,
      transformOrigin: 'center center',
      transition: isDragging ? 'none' : 'transform 0.2s ease-out',
      cursor: canPan ? (isDragging ? 'grabbing' : 'grab') : 'default'
    }),
    [pan, scale, isDragging, canPan]
  );

  // Checkerboard background style
  const checkerboardStyle = useMemo(
    () => ({
      backgroundImage: `
      linear-gradient(45deg, ${checkerboardColor} 25%, transparent 25%),
      linear-gradient(-45deg, ${checkerboardColor} 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, ${checkerboardColor} 75%),
      linear-gradient(-45deg, transparent 75%, ${checkerboardColor} 75%)
    `,
      backgroundSize: '20px 20px',
      backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
      backgroundColor: '#111'
    }),
    [checkerboardColor]
  );

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Checkerboard background */}
      <div className="absolute inset-0" style={checkerboardStyle} />

      {/* Centered image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          ref={imageRef}
          src={src}
          alt={alt}
          style={imageStyle}
          onLoad={handleImageLoad}
          onError={onError}
          className="max-w-none select-none"
          draggable={false}
        />
      </div>

      {/* Scaled overlay content */}
      {overlay && imageLoaded && (
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ transform: `translate(${pan.x}px, ${pan.y}px)` }}
        >
          <div
            style={{
              width: scaledDimensions.width,
              height: scaledDimensions.height,
              position: 'relative'
            }}
            className="pointer-events-auto"
          >
            {overlay}
          </div>
        </div>
      )}

      {/* Fixed position children */}
      {children}

      {/* Loading indicator */}
      {showLoadingIndicator && !imageLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-800/50">
          <div className="flex items-center gap-3 text-slate-400">
            <div className="w-5 h-5 border-2 border-slate-500 border-t-transparent rounded-full animate-spin" />
            <span className="text-sm">Loading...</span>
          </div>
        </div>
      )}

      {/* Pan indicator */}
      {showPanHint && canPan && !isDragging && imageLoaded && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-slate-800/90 backdrop-blur-sm rounded-full text-xs text-slate-400 pointer-events-none">
          Drag to pan
        </div>
      )}

      {/* Device info badge */}
      {showDeviceInfo && deviceInfo?.isMobile && imageLoaded && (
        <div className="absolute top-4 left-4 px-2 py-1 bg-slate-800/90 backdrop-blur-sm rounded text-xs text-slate-400 pointer-events-none">
          {deviceInfo.platform === 'ios' ? '📱 iOS' : '🤖 Android'}
          {deviceInfo.isPortrait ? ' Portrait' : ' Landscape'}
        </div>
      )}
    </div>
  );
}

/**
 * Side-by-side comparison component
 */
export function SideBySideView({
  leftSrc,
  rightSrc,
  leftLabel = 'Left',
  rightLabel = 'Right',
  zoom = 'fit',
  metadata,
  onLeftLoad,
  onRightLoad,
  className = ''
}) {
  return (
    <div className={`flex gap-4 h-full ${className}`}>
      {/* Left */}
      <div className="flex-1 flex flex-col min-w-0">
        <div className="px-3 py-2 bg-slate-800/50 border-b border-slate-700/50">
          <span className="text-sm font-medium text-slate-300">{leftLabel}</span>
        </div>
        <div className="flex-1 min-h-0">
          <ZoomableImage
            src={leftSrc}
            alt={leftLabel}
            zoom={zoom}
            metadata={metadata}
            onLoad={onLeftLoad}
            className="w-full h-full"
          />
        </div>
      </div>

      {/* Divider */}
      <div className="w-px bg-slate-700/50 self-stretch" />

      {/* Right */}
      <div className="flex-1 flex flex-col min-w-0">
        <div className="px-3 py-2 bg-slate-800/50 border-b border-slate-700/50">
          <span className="text-sm font-medium text-slate-300">{rightLabel}</span>
        </div>
        <div className="flex-1 min-h-0">
          <ZoomableImage
            src={rightSrc}
            alt={rightLabel}
            zoom={zoom}
            metadata={metadata}
            onLoad={onRightLoad}
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
