interface ImagePlaceholderProps {
  label?: string;
  bg?: string;
  textColor?: string;
  pattern?: 'razor' | 'grid' | 'dots' | 'cross' | 'none';
  style?: React.CSSProperties;
}

export function ImagePlaceholder({
  label = 'IMAGEM',
  bg = '#3a4a3f',
  textColor = '#f4ede0',
  pattern = 'razor',
  style = {},
}: ImagePlaceholderProps) {
  const renderPattern = () => {
    switch (pattern) {
      case 'razor':
        return (
          <svg width="100%" height="100%" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="razorPat" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M40 10 L40 70" stroke="rgba(201,162,63,0.08)" strokeWidth="0.8" />
                <path d="M25 12 Q40 4 55 12 L50 28 Q40 22 30 28 Z" stroke="rgba(201,162,63,0.08)" strokeWidth="0.6" fill="none" />
                <circle cx="40" cy="42" r="16" stroke="rgba(201,162,63,0.06)" strokeWidth="0.5" fill="none" />
                <line x1="20" y1="65" x2="60" y2="65" stroke="rgba(201,162,63,0.05)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#razorPat)" />
          </svg>
        );
      case 'grid':
        return (
          <svg width="100%" height="100%" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="gridPat" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M40 0L0 0 0 40" fill="none" stroke="rgba(201,162,63,0.06)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#gridPat)" />
          </svg>
        );
      case 'dots':
        return (
          <svg width="100%" height="100%" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="dotPat" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                <circle cx="12" cy="12" r="1.5" fill="rgba(201,162,63,0.1)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dotPat)" />
          </svg>
        );
      case 'cross':
        return (
          <svg width="100%" height="100%" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="crossPat" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <line x1="30" y1="15" x2="30" y2="45" stroke="rgba(201,162,63,0.07)" strokeWidth="0.5" />
                <line x1="15" y1="30" x2="45" y2="30" stroke="rgba(201,162,63,0.07)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#crossPat)" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div style={{
      width: '100%',
      ...style,
      aspectRatio: style.height ? undefined : '4 / 3',
      background: `linear-gradient(160deg, ${bg}, #0a0908)`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: textColor,
      fontFamily: 'var(--font-mono)',
      fontSize: 'clamp(0.625rem, 0.8vw, 0.75rem)',
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      position: 'relative',
      overflow: 'hidden',
      border: '1px solid rgba(201,162,63,0.08)',
    }}>
      {renderPattern()}
      <span style={{ position: 'relative', zIndex: 2, opacity: 0.5 }}>{label}</span>

      {/* Corner accents */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '28px', height: '28px',
        borderTop: '1px solid rgba(201,162,63,0.2)', borderLeft: '1px solid rgba(201,162,63,0.2)' }} />
      <div style={{ position: 'absolute', bottom: 0, right: 0, width: '28px', height: '28px',
        borderBottom: '1px solid rgba(201,162,63,0.2)', borderRight: '1px solid rgba(201,162,63,0.2)' }} />
    </div>
  );
}
