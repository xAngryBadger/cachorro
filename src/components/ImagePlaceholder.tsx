interface ImagePlaceholderProps {
  label?: string;
  bg?: string;
  textColor?: string;
}

export function ImagePlaceholder({ label = 'Imagem', bg = '#3a4a3f', textColor = '#f4ede0' }: ImagePlaceholderProps) {
  return (
    <div
      style={{
        width: '100%',
        aspectRatio: '4 / 3',
        background: `linear-gradient(135deg, ${bg}, #0a0908)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: textColor,
        fontFamily: "var(--font-mono)",
        fontSize: '0.75rem',
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <span style={{ opacity: 0.5 }}>{label}</span>
    </div>
  );
}
