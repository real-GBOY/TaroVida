import { useEffect } from 'react';

export function useLenis(enabled = true) {
  useEffect(() => {
    if (!enabled) return;

    let lenis: { raf: (time: number) => void; destroy: () => void } | null = null;
    let raf = 0;
    let cancelled = false;

    import('@studio-freight/lenis').then(({ default: Lenis }) => {
      if (cancelled) return;
      lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
      const loop = (time: number) => {
        lenis?.raf(time);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      lenis?.destroy();
    };
  }, [enabled]);
}
