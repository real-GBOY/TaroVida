import { site } from '../data/site';

interface LogoMarkProps {
  size?: number;
  className?: string;
  /** Blends out the black PNG background on dark surfaces */
  onDark?: boolean;
}

export default function LogoMark({ size = 48, className = '', onDark = false }: LogoMarkProps) {
  return (
    <img
      src={site.logoUrl}
      alt=""
      width={size}
      height={size}
      className={`shrink-0 object-contain ${onDark ? 'mix-blend-screen' : ''} ${className}`.trim()}
      aria-hidden
    />
  );
}

interface LogoWatermarkProps {
  size?: number;
  className?: string;
}

export function LogoWatermark({ size = 560, className = '' }: LogoWatermarkProps) {
  return (
    <img
      src={site.logoUrl}
      alt=""
      width={size}
      height={size}
      className={`pointer-events-none max-w-none select-none object-contain mix-blend-screen opacity-[0.07] ${className}`.trim()}
      aria-hidden
    />
  );
}
