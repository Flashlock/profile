import { useEffect, useMemo, useRef, useState } from 'react';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import {
  motion,
  useMotionValue,
  useAnimationFrame,
  useReducedMotion,
} from 'framer-motion';
import { brands, type BrandEntry } from '../data/content';

const PILL_HEIGHT = 88;
const WIDE_WIDTH = 220;
const SQUARE_WIDTH = 88;
const PILL_MARGIN_X = 16;
const SCROLL_PX_PER_SEC = 80;

const pillWidth = (b: BrandEntry) => (b.shape === 'square' ? SQUARE_WIDTH : WIDE_WIDTH);

function estimatedSegmentWidth(items: BrandEntry[]) {
  return items.reduce((acc, b) => acc + pillWidth(b) + PILL_MARGIN_X, 0);
}

/**
 * Hand-driven marquee. We hold the position in a `motionValue` and advance it
 * inside `useAnimationFrame`. Pausing on hover just stops advancing — the
 * position is preserved, so no jerk and no snap-to-zero. We tween the active
 * speed (currentSpeedRef) toward the target speed for a smooth stop/resume.
 */
export function BrandStrip() {
  const reduce = useReducedMotion();
  const halfRef = useRef<HTMLDivElement>(null);
  const [halfWidth, setHalfWidth] = useState(0);
  const [viewportW, setViewportW] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200,
  );
  const [hovered, setHovered] = useState(false);

  const x = useMotionValue(0);
  const currentSpeedRef = useRef(0);

  const expandedBrands = useMemo(() => {
    const baseW = estimatedSegmentWidth(brands);
    if (baseW <= 0) return brands;
    const target = Math.max(viewportW * 2.5, 2400);
    const repeats = Math.max(2, Math.ceil(target / baseW));
    return Array.from({ length: repeats }).flatMap(() => brands);
  }, [viewportW]);

  useEffect(() => {
    const onResize = () => setViewportW(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    const el = halfRef.current;
    if (!el) return;

    const measure = () => setHalfWidth(el.getBoundingClientRect().width);
    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(el);

    const imgs = el.querySelectorAll('img');
    const onLoad = () => measure();
    imgs.forEach((img) => {
      if (!img.complete) img.addEventListener('load', onLoad, { once: true });
    });

    return () => {
      ro.disconnect();
      imgs.forEach((img) => img.removeEventListener('load', onLoad));
    };
  }, [expandedBrands]);

  useAnimationFrame((_t, deltaMs) => {
    if (halfWidth === 0) return;
    if (reduce) {
      x.set(0);
      return;
    }

    const targetSpeed = hovered ? 0 : SCROLL_PX_PER_SEC;
    const easeFactor = 1 - Math.exp(-deltaMs / 180);
    currentSpeedRef.current +=
      (targetSpeed - currentSpeedRef.current) * easeFactor;

    if (Math.abs(currentSpeedRef.current) < 0.01) return;

    const dt = deltaMs / 1000;
    let next = x.get() - currentSpeedRef.current * dt;

    if (next <= -halfWidth) next += halfWidth;
    else if (next > 0) next -= halfWidth;

    x.set(next);
  });

  return (
    <Box
      component="section"
      aria-label="Brands worked with"
      sx={{
        position: 'relative',
        width: '100%',
        py: { xs: 4, md: 5 },
        backgroundColor: 'rgba(13, 10, 31, 0.4)',
        borderBottom: '1px solid',
        borderColor: 'divider',
        overflow: 'hidden',
      }}
    >
      <Typography
        level="body-xs"
        sx={{
          textAlign: 'center',
          color: 'text.tertiary',
          fontFamily: 'var(--ab-fontFamily-code)',
          letterSpacing: '0.24em',
          mb: 2.5,
          textTransform: 'uppercase',
          px: 2,
        }}
      >
        Trusted by - shipped with
      </Typography>
      <Box
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocusCapture={() => setHovered(true)}
        onBlurCapture={(e) => {
          // Only resume if focus left the marquee entirely
          if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
            setHovered(false);
          }
        }}
        sx={{
          position: 'relative',
          width: '100%',
          py: 1.5,
          maskImage:
            'linear-gradient(90deg, transparent 0%, #000 6%, #000 94%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(90deg, transparent 0%, #000 6%, #000 94%, transparent 100%)',
        }}
      >
        <motion.div
          style={{
            display: 'flex',
            width: 'max-content',
            minWidth: '100%',
            x,
            willChange: 'transform',
          }}
        >
          <Box ref={halfRef} sx={{ display: 'flex', flexShrink: 0 }}>
            {expandedBrands.map((b, i) => (
              <BrandPill key={`a-${b.name}-${i}`} brand={b} />
            ))}
          </Box>
          <Box sx={{ display: 'flex', flexShrink: 0 }} aria-hidden>
            {expandedBrands.map((b, i) => (
              <BrandPill key={`b-${b.name}-${i}`} brand={b} ariaHidden />
            ))}
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
}

function BrandPill({ brand, ariaHidden }: { brand: BrandEntry; ariaHidden?: boolean }) {
  const w = pillWidth(brand);
  return (
    <Box
      component="a"
      href={brand.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaHidden ? undefined : `${brand.name} (opens in new tab)`}
      aria-hidden={ariaHidden || undefined}
      tabIndex={ariaHidden ? -1 : undefined}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        mx: 1,
        p: 1.5,
        width: w,
        height: PILL_HEIGHT,
        borderRadius: 'lg',
        border: '1px solid',
        borderColor: 'divider',
        backgroundColor: '#ffffff',
        textDecoration: 'none',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
        flexShrink: 0,
        '&:hover': {
          transform: 'translateY(-2px)',
          borderColor: 'rgba(168, 132, 255, 0.55)',
          boxShadow:
            '0 14px 32px rgba(0, 0, 0, 0.5), 0 0 24px rgba(168, 85, 247, 0.25)',
        },
      }}
    >
      <Box
        component="img"
        src={brand.src}
        alt={ariaHidden ? '' : `${brand.name} logo`}
        width={w - 24}
        height={PILL_HEIGHT - 24}
        sx={{
          maxWidth: '100%',
          maxHeight: '100%',
          width: 'auto',
          height: 'auto',
          objectFit: 'contain',
        }}
      />
    </Box>
  );
}

export default BrandStrip;
