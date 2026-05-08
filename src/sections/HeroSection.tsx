import { useEffect, useState } from 'react';
import Box from '@mui/joy/Box';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import Chip from '@mui/joy/Chip';
import { ArrowRight, MapPin } from 'lucide-react';
import { GithubIcon } from '../components/BrandIcons';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import { profile, links } from '../data/content';

const ROLE_INTERVAL_MS = 2200;

export function HeroSection() {
  const reduce = useReducedMotion();
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => {
      setRoleIndex((i) => (i + 1) % profile.roles.length);
    }, ROLE_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [reduce]);

  const headlineWords = profile.name.split(' ');

  return (
    <Box
      component="section"
      id="home"
      aria-label="Introduction"
      sx={{
        position: 'relative',
        minHeight: { xs: 'calc(100vh - 72px)', md: 'calc(100vh - 80px)' },
        px: { xs: 3, md: 6 },
        py: { xs: 8, md: 10 },
        maxWidth: 1400,
        mx: 'auto',
        display: 'grid',
        alignItems: 'center',
        gridTemplateColumns: { xs: '1fr', md: '1.25fr 0.85fr' },
        gap: { xs: 6, md: 10 },
      }}
    >
      <Stack spacing={{ xs: 3, md: 4 }}>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap" useFlexGap>
            {profile.available && (
              <Chip
                size="sm"
                variant="soft"
                color="success"
                sx={{
                  borderRadius: 999,
                  fontFamily: 'var(--ab-fontFamily-code)',
                  letterSpacing: '0.16em',
                  fontSize: 11,
                  textTransform: 'uppercase',
                  bgcolor: 'rgba(34, 211, 238, 0.12)',
                  color: '#67e8f9',
                  border: '1px solid rgba(34, 211, 238, 0.35)',
                  '&::before': {
                    content: '""',
                    width: 7,
                    height: 7,
                    borderRadius: '50%',
                    backgroundColor: '#22d3ee',
                    boxShadow: '0 0 10px #22d3ee',
                    marginRight: 8,
                    animation: 'ab-pulse 1.8s ease-in-out infinite',
                  },
                  '@keyframes ab-pulse': {
                    '0%, 100%': { opacity: 1 },
                    '50%': { opacity: 0.45 },
                  },
                }}
              >
                Available for new opportunities
              </Chip>
            )}
            <Chip
              size="sm"
              variant="outlined"
              color="neutral"
              startDecorator={<MapPin size={13} />}
              sx={{
                borderRadius: 999,
                fontFamily: 'var(--ab-fontFamily-code)',
                fontSize: 11,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'text.secondary',
              }}
            >
              {profile.location}
            </Chip>
          </Stack>
        </motion.div>

        <Typography
          component="h1"
          level="display1"
          sx={{ color: 'text.primary' }}
        >
          {headlineWords.map((word, i) => (
            <motion.span
              key={`${word}-${i}`}
              initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{
                delay: 0.1 + i * 0.08,
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{ display: 'inline-block', marginRight: '0.25em' }}
              className={i === headlineWords.length - 1 ? 'ab-gradient-text' : undefined}
            >
              {word}
            </motion.span>
          ))}
        </Typography>

        <Stack
          direction="row"
          spacing={1.5}
          alignItems="center"
          sx={{ minHeight: 44, flexWrap: 'wrap' }}
          useFlexGap
        >
          <Typography
            component="p"
            level="h2"
            sx={{
              fontWeight: 500,
              color: 'text.secondary',
              fontFamily: 'var(--ab-fontFamily-display)',
            }}
          >
            I am a
          </Typography>
          <Box
            aria-label={profile.roles.join(', ')}
            sx={{
              position: 'relative',
              display: 'inline-flex',
              alignItems: 'center',
              minWidth: { xs: 220, sm: 280 },
              height: 44,
              px: 1.5,
              borderRadius: 'sm',
              backgroundColor: 'rgba(168, 85, 247, 0.1)',
              border: '1px solid rgba(168, 85, 247, 0.3)',
              boxShadow: 'inset 0 0 24px rgba(168, 85, 247, 0.15)',
              overflow: 'hidden',
            }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={profile.roles[roleIndex]}
                aria-hidden
                initial={reduce ? { opacity: 1 } : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? { opacity: 1 } : { opacity: 0, y: -20 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  fontFamily: 'var(--ab-fontFamily-display)',
                  fontWeight: 600,
                  fontSize: '1.5rem',
                  letterSpacing: '-0.01em',
                  color: '#d3b3ff',
                  whiteSpace: 'nowrap',
                }}
              >
                {profile.roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </Box>
        </Stack>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <Typography
            level="body-lg"
            sx={{ color: 'text.secondary', maxWidth: 620 }}
          >
            {profile.tagline}
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
            <Button
              component="a"
              href="#contact"
              size="lg"
              color="primary"
              variant="solid"
              endDecorator={<ArrowRight size={18} />}
              sx={{
                borderRadius: 999,
                px: 3,
                fontFamily: 'var(--ab-fontFamily-display)',
                fontWeight: 600,
                boxShadow: '0 12px 32px rgba(168, 85, 247, 0.35)',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 20px 44px rgba(168, 85, 247, 0.5)',
                },
              }}
            >
              Get in touch
            </Button>
            <Button
              component="a"
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              variant="outlined"
              color="neutral"
              startDecorator={<GithubIcon size={18} />}
              sx={{
                borderRadius: 999,
                px: 3,
                fontFamily: 'var(--ab-fontFamily-display)',
                fontWeight: 500,
                borderColor: 'rgba(168, 132, 255, 0.4)',
                backgroundColor: 'rgba(15, 12, 30, 0.6)',
                backdropFilter: 'blur(8px)',
                '&:hover': {
                  borderColor: 'rgba(168, 132, 255, 0.7)',
                  backgroundColor: 'rgba(168, 85, 247, 0.08)',
                },
              }}
            >
              View GitHub
            </Button>
          </Stack>
        </motion.div>
      </Stack>

      <HeadshotFrame />
    </Box>
  );
}

function HeadshotFrame() {
  const reduce = useReducedMotion();

  return (
    <Box
      sx={{
        position: 'relative',
        justifySelf: { xs: 'center', md: 'end' },
        width: { xs: 260, sm: 320, md: 380 },
        aspectRatio: '1 / 1',
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        style={{ position: 'relative', width: '100%', height: '100%' }}
      >
        {/* Outer rotating conic-gradient ring */}
        <motion.div
          aria-hidden
          animate={reduce ? undefined : { rotate: 360 }}
          transition={
            reduce ? undefined : { duration: 18, ease: 'linear', repeat: Infinity }
          }
          style={{
            position: 'absolute',
            inset: -10,
            borderRadius: '50%',
            background:
              'conic-gradient(from 0deg, #a855f7, #22d3ee, #ea4aaa, #a855f7)',
            filter: 'blur(2px)',
            opacity: 0.85,
          }}
        />
        {/* Mask ring to a thin band */}
        <Box
          aria-hidden
          sx={{
            position: 'absolute',
            inset: -10,
            borderRadius: '50%',
            background: 'radial-gradient(circle, transparent 64%, #070713 65%)',
          }}
        />
        {/* Headshot */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            overflow: 'hidden',
            border: '1px solid rgba(168, 132, 255, 0.35)',
            boxShadow:
              '0 30px 80px rgba(0, 0, 0, 0.6), inset 0 0 40px rgba(168, 85, 247, 0.15)',
          }}
        >
          <Box
            component="img"
            src={profile.headshot}
            alt={`${profile.name} headshot`}
            loading="eager"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center 22%',
              filter: 'saturate(1.05) contrast(1.02)',
            }}
          />
        </Box>
        {/* Floating accent dots */}
        {!reduce && (
          <>
            <motion.div
              aria-hidden
              animate={{ y: [0, -10, 0], x: [0, 6, 0] }}
              transition={{ duration: 6, ease: 'easeInOut', repeat: Infinity }}
              style={{
                position: 'absolute',
                top: '8%',
                right: '-6%',
                width: 14,
                height: 14,
                borderRadius: '50%',
                background: '#22d3ee',
                boxShadow: '0 0 18px #22d3ee',
              }}
            />
            <motion.div
              aria-hidden
              animate={{ y: [0, 10, 0], x: [0, -8, 0] }}
              transition={{ duration: 7, ease: 'easeInOut', repeat: Infinity }}
              style={{
                position: 'absolute',
                bottom: '6%',
                left: '-4%',
                width: 10,
                height: 10,
                borderRadius: '50%',
                background: '#a855f7',
                boxShadow: '0 0 16px #a855f7',
              }}
            />
          </>
        )}
      </motion.div>
    </Box>
  );
}

export default HeroSection;
