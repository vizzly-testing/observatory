/**
 * Avatar Component
 * Observatory Design System
 *
 * User avatar with fallback initials
 */

export function Avatar({ src, alt = '', name = '', size = 'md', status, className = '' }) {
  const sizeClasses = {
    xs: 'w-6 h-6 text-[10px]',
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base',
    xl: 'w-16 h-16 text-lg'
  };

  const statusSizes = {
    xs: 'w-1.5 h-1.5 border',
    sm: 'w-2 h-2 border',
    md: 'w-2.5 h-2.5 border-2',
    lg: 'w-3 h-3 border-2',
    xl: 'w-4 h-4 border-2'
  };

  const statusColors = {
    online: 'bg-emerald-500',
    offline: 'bg-slate-500',
    busy: 'bg-red-500',
    away: 'bg-amber-500'
  };

  const getInitials = (name) => {
    if (!name) return '?';
    const parts = name.split(' ').filter(Boolean);
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  };

  const getColorFromName = (name) => {
    const colors = [
      'bg-amber-600',
      'bg-emerald-600',
      'bg-blue-600',
      'bg-purple-600',
      'bg-pink-600',
      'bg-cyan-600',
      'bg-orange-600',
      'bg-teal-600'
    ];
    const hash = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return colors[hash % colors.length];
  };

  return (
    <div className={`relative inline-flex ${className}`}>
      {src ? (
        <img
          src={src}
          alt={alt || name}
          className={`${sizeClasses[size]} rounded-full object-cover ring-2 ring-slate-700`}
        />
      ) : (
        <div
          className={`${sizeClasses[size]} ${getColorFromName(name)} rounded-full flex items-center justify-center font-medium text-white ring-2 ring-slate-700`}
        >
          {getInitials(name)}
        </div>
      )}
      {status && (
        <span
          className={`absolute bottom-0 right-0 ${statusSizes[size]} ${statusColors[status]} rounded-full border-slate-900`}
        />
      )}
    </div>
  );
}

export function AvatarGroup({ avatars = [], max = 4, size = 'md', className = '' }) {
  const displayAvatars = avatars.slice(0, max);
  const remainingCount = avatars.length - max;

  const overlapClasses = {
    xs: '-ml-1.5',
    sm: '-ml-2',
    md: '-ml-2.5',
    lg: '-ml-3',
    xl: '-ml-4'
  };

  const countSizeClasses = {
    xs: 'w-6 h-6 text-[10px]',
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base',
    xl: 'w-16 h-16 text-lg'
  };

  return (
    <div className={`flex items-center ${className}`}>
      {displayAvatars.map((avatar, index) => (
        <div
          key={avatar.id || index}
          className={index === 0 ? '' : overlapClasses[size]}
          style={{ zIndex: displayAvatars.length - index }}
        >
          <Avatar src={avatar.src} name={avatar.name} alt={avatar.alt} size={size} />
        </div>
      ))}
      {remainingCount > 0 && (
        <div
          className={`${overlapClasses[size]} ${countSizeClasses[size]} bg-slate-700 rounded-full flex items-center justify-center font-medium text-slate-300 ring-2 ring-slate-900`}
          style={{ zIndex: 0 }}
        >
          +{remainingCount}
        </div>
      )}
    </div>
  );
}
