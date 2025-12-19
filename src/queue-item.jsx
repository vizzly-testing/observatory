/**
 * QueueItem Component
 * Observatory Design System
 *
 * A list item for review queues showing screenshot thumbnails with status indicators.
 * Used in fullscreen comparison views to navigate between screenshots.
 */

import { useState } from 'react';

/**
 * Get a human-readable description of the change based on analysis metadata
 * Works with both cloud format (analysis_metadata) and CLI format (diffClusters)
 * Returns { label, detail, color } where detail is the percentage/number
 */
function getChangeDescription(item) {
  // Cloud format: analysis_metadata with cluster_analysis and hot_spot_coverage
  let analysisMetadata = item.analysis_metadata || {};
  let clusterAnalysis = analysisMetadata.cluster_analysis || {};

  // CLI format: diffClusters array directly on item
  let diffClusters = item.diffClusters || [];

  // Get diff percentage for detail (supports both formats)
  let diffPct = item.diff_percentage ?? item.diffPercentage;
  let pctDetail = diffPct != null ? `${Number(diffPct).toFixed(1)}%` : null;

  // Get cluster count (supports both formats)
  let clusterCount = clusterAnalysis.clusterCount ?? (diffClusters.length || null);

  // Check for auto-approved dynamic content (only if actually auto-approved)
  // The auto_approval_reason indicates WHY it was auto-approved
  let isAutoApproved = item.approval_status === 'auto_approved';
  let autoApprovalReason = analysisMetadata.auto_approval_reason;

  if (isAutoApproved && autoApprovalReason) {
    return { label: 'Auto-approved', detail: pctDetail, color: 'text-purple-400/80' };
  }

  // Use cluster classification if available (cloud format)
  let classification = clusterAnalysis.classification;
  if (classification) {
    let detail = clusterCount ? `${clusterCount} regions` : pctDetail;
    switch (classification) {
      case 'dynamic_content':
        return { label: 'Dynamic content', detail, color: 'text-purple-400/80' };
      case 'major_structural':
        return { label: 'Major structural', detail, color: 'text-red-400/80' };
      case 'major':
        return { label: 'Major changes', detail, color: 'text-orange-400/80' };
      case 'moderate':
        return { label: 'Moderate changes', detail, color: 'text-amber-400/80' };
      case 'minor':
        return { label: 'Minor changes', detail, color: 'text-amber-400/80' };
    }
  }

  // Use cluster count for description
  if (clusterCount > 0) {
    let label = clusterCount === 1 ? '1 region' : `${clusterCount} regions`;
    return { label, detail: pctDetail, color: 'text-amber-400/80' };
  }

  // Fallback to diff percentage with better formatting
  // Thresholds: <1% tiny, <5% small, <15% moderate, <30% significant, ≥30% large
  if (diffPct != null) {
    let pct = Number(diffPct);
    let label;
    let color;
    if (pct < 1) {
      label = 'Tiny change';
      color = 'text-slate-400/80';
    } else if (pct < 5) {
      label = 'Small change';
      color = 'text-amber-400/80';
    } else if (pct < 15) {
      label = 'Moderate change';
      color = 'text-amber-400/80';
    } else if (pct < 30) {
      label = 'Significant change';
      color = 'text-orange-400/80';
    } else {
      label = 'Large change';
      color = 'text-red-400/80';
    }
    return { label, detail: pctDetail, color };
  }

  return null;
}

/**
 * QueueItem - A selectable item in the review queue
 *
 * @param {Object} item - The comparison/screenshot item
 * @param {string} item.name - Display name
 * @param {string} item.result - Result type: 'changed' | 'new' | 'unchanged' | 'missing'
 * @param {string} item.approval_status - Status: 'pending' | 'approved' | 'auto_approved' | 'rejected'
 * @param {number} item.diff_percentage - Percentage of pixels changed
 * @param {Object} item.analysis_metadata - Honeydiff analysis data
 * @param {boolean} isActive - Whether this item is currently selected
 * @param {string} thumbnailUrl - URL for the screenshot thumbnail
 * @param {function} onClick - Click handler
 */
export function QueueItem({ item, isActive, thumbnailUrl, onClick }) {
  let [imageLoaded, setImageLoaded] = useState(false);

  // Support both cloud format (result) and CLI format (status)
  let hasChanges = item.result === 'changed' || item.status === 'failed';
  let isNew = item.result === 'new' || item.status === 'new' || item.status === 'baseline-created';
  let isApproved = item.approval_status === 'approved' || item.approval_status === 'auto_approved';
  let isRejected = item.approval_status === 'rejected';
  let isFlaky = item.is_flaky;
  let needsReview = (hasChanges || isNew) && !isApproved && !isRejected;

  let changeDescription = hasChanges ? getChangeDescription(item) : null;

  // Determine highlight color based on status
  let getHighlightClasses = () => {
    if (!isActive) return 'hover:bg-slate-800/60 active:bg-slate-800/80';
    if (isRejected) return 'bg-red-500/15 ring-1 ring-red-500/40';
    if (isApproved) return 'bg-emerald-500/15 ring-1 ring-emerald-500/40';
    if (isFlaky) return 'bg-purple-500/15 ring-1 ring-purple-500/40';
    return 'bg-amber-500/15 ring-1 ring-amber-500/40';
  };

  // Determine active indicator color
  let getIndicatorColor = () => {
    if (isRejected) return 'bg-red-500';
    if (isApproved) return 'bg-emerald-500';
    if (isFlaky) return 'bg-purple-500';
    return 'bg-amber-500';
  };

  // Determine title text color when active
  let getTitleColor = () => {
    if (!isActive) return 'text-slate-300';
    if (isRejected) return 'text-red-300 font-medium';
    if (isApproved) return 'text-emerald-300 font-medium';
    if (isFlaky) return 'text-purple-300 font-medium';
    return 'text-amber-300 font-medium';
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        group relative w-full flex items-center gap-3 px-3 py-2.5 rounded-lg
        text-left transition-all active:scale-[0.99]
        ${getHighlightClasses()}
        ${needsReview ? 'opacity-100' : 'opacity-60 hover:opacity-100'}
      `}
    >
      {/* Thumbnail */}
      <div className="relative w-10 h-14 flex-shrink-0 rounded-md overflow-hidden bg-slate-800/80">
        {thumbnailUrl && (
          <img
            src={thumbnailUrl}
            alt={item.name}
            className={`w-full h-full object-cover object-top transition-opacity ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
          />
        )}
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center text-slate-600 text-sm font-medium">
            {(item.name || '?').charAt(0).toUpperCase()}
          </div>
        )}

        {/* Status badge */}
        {hasChanges && (
          <div className="absolute top-0.5 right-0.5">
            <span
              className={`w-2 h-2 rounded-full block ${isApproved ? 'bg-emerald-500' : isRejected ? 'bg-red-500' : 'bg-amber-500 animate-pulse'}`}
            />
          </div>
        )}
        {isNew && !hasChanges && (
          <div className="absolute bottom-0.5 left-0.5 px-1 py-0.5 bg-blue-500 rounded text-[8px] font-bold text-white">
            NEW
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <p className={`text-sm truncate ${getTitleColor()}`}>{item.name || 'Unnamed'}</p>
        {changeDescription && (
          <p className={`text-[10px] mt-0.5 ${changeDescription.color}`}>
            {changeDescription.label}
            {changeDescription.detail && (
              <span className="text-slate-500 ml-1">· {changeDescription.detail}</span>
            )}
          </p>
        )}
      </div>

      {/* Active indicator */}
      {isActive && (
        <div
          className={`absolute left-0 top-3 bottom-3 w-0.5 rounded-full ${getIndicatorColor()}`}
        />
      )}
    </button>
  );
}

export default QueueItem;
