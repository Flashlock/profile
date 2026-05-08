import { useEffect, useState } from 'react';
import Box from '@mui/joy/Box';
import Stack from '@mui/joy/Stack';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import { Menu as MenuIcon, X as CloseIcon } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { motion, AnimatePresence } from 'framer-motion';
import { links, navItems, profile } from '../data/content';
import SponsorButton from './SponsorButton';

const NAV_HEIGHT = 72;

export function TopNav() {
  const [active, setActive] = useState<string>('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = ['home', ...navItems.map((n) => n.id)];
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (els.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      {
        rootMargin: `-${NAV_HEIGHT + 24}px 0px -55% 0px`,
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const initials = profile.name
    .split(' ')
    .map((p) => p[0])
    .join('')
    .slice(0, 2);

  return (
    <Sheet
      component={motion.header}
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: scrolled ? 'rgba(7, 7, 19, 0.72)' : 'rgba(7, 7, 19, 0.35)',
        backdropFilter: 'blur(14px) saturate(140%)',
        WebkitBackdropFilter: 'blur(14px) saturate(140%)',
        borderBottom: '1px solid',
        borderColor: scrolled ? 'divider' : 'transparent',
        transition: 'background-color 0.25s ease, border-color 0.25s ease',
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          height: NAV_HEIGHT,
          px: { xs: 2.5, md: 5 },
          maxWidth: 1400,
          mx: 'auto',
          width: '100%',
        }}
      >
        <Box
          component="a"
          href="#home"
          aria-label={`${profile.name} — back to top`}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1.25,
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          <Box
            sx={{
              width: 38,
              height: 38,
              borderRadius: 'sm',
              display: 'grid',
              placeItems: 'center',
              fontFamily: 'var(--ab-fontFamily-code)',
              fontWeight: 700,
              letterSpacing: '0.02em',
              fontSize: 14,
              background:
                'linear-gradient(135deg, rgba(168, 85, 247, 0.85) 0%, rgba(34, 211, 238, 0.7) 100%)',
              color: '#0a0a1a',
              boxShadow: '0 0 24px rgba(168, 85, 247, 0.45)',
            }}
          >
            {initials}
          </Box>
          <Stack spacing={0} sx={{ display: { xs: 'none', sm: 'flex' } }}>
            <Typography
              level="body-sm"
              sx={{ fontWeight: 600, lineHeight: 1.1, color: 'text.primary' }}
            >
              {profile.name}
            </Typography>
            <Typography
              level="body-xs"
              sx={{
                color: 'text.tertiary',
                fontFamily: 'var(--ab-fontFamily-code)',
                letterSpacing: '0.14em',
              }}
            >
              {profile.title}
            </Typography>
          </Stack>
        </Box>

        <Stack
          component="nav"
          aria-label="Primary"
          direction="row"
          spacing={0.5}
          sx={{
            display: { xs: 'none', md: 'flex' },
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          {navItems.map((item) => {
            const isActive = active === item.id;
            return (
              <Box
                key={item.id}
                component="a"
                href={`#${item.id}`}
                aria-current={isActive ? 'true' : undefined}
                sx={{
                  position: 'relative',
                  px: 2,
                  py: 1,
                  borderRadius: 'sm',
                  fontSize: 14,
                  fontWeight: 500,
                  textDecoration: 'none',
                  color: isActive ? 'text.primary' : 'text.secondary',
                  transition: 'color 0.2s ease',
                  '&:hover': { color: 'text.primary' },
                }}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    style={{
                      position: 'absolute',
                      left: 12,
                      right: 12,
                      bottom: 4,
                      height: 2,
                      borderRadius: 2,
                      background:
                        'linear-gradient(90deg, #a855f7 0%, #22d3ee 100%)',
                      boxShadow: '0 0 12px rgba(168, 85, 247, 0.6)',
                    }}
                  />
                )}
              </Box>
            );
          })}
        </Stack>

        <Stack direction="row" spacing={1} alignItems="center">
          <Stack
            direction="row"
            spacing={0.5}
            sx={{ display: { xs: 'none', sm: 'flex' } }}
          >
            <IconButton
              component="a"
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              variant="plain"
              size="sm"
              aria-label="GitHub (opens in new tab)"
              sx={{ color: 'text.secondary', '&:hover': { color: 'text.primary' } }}
            >
              <GithubIcon size={18} />
            </IconButton>
            <IconButton
              component="a"
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              variant="plain"
              size="sm"
              aria-label="LinkedIn (opens in new tab)"
              sx={{ color: 'text.secondary', '&:hover': { color: 'text.primary' } }}
            >
              <LinkedinIcon size={18} />
            </IconButton>
          </Stack>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <SponsorButton />
          </Box>
          <IconButton
            variant="outlined"
            color="neutral"
            size="sm"
            onClick={() => setMobileOpen((v) => !v)}
            sx={{ display: { xs: 'inline-flex', md: 'none' } }}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            {mobileOpen ? <CloseIcon size={18} /> : <MenuIcon size={18} />}
          </IconButton>
        </Stack>
      </Stack>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile"
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <Stack
              component="nav"
              aria-label="Mobile primary"
              spacing={0.5}
              sx={{
                px: 3,
                pb: 3,
                pt: 1,
                borderTop: '1px solid',
                borderColor: 'divider',
                display: { md: 'none' },
              }}
            >
              {navItems.map((item) => (
                <Box
                  key={item.id}
                  component="a"
                  href={`#${item.id}`}
                  aria-current={active === item.id ? 'true' : undefined}
                  onClick={() => setMobileOpen(false)}
                  sx={{
                    py: 1.25,
                    px: 1,
                    borderRadius: 'sm',
                    color: active === item.id ? 'primary.300' : 'text.secondary',
                    textDecoration: 'none',
                    fontWeight: 500,
                    fontSize: 16,
                  }}
                >
                  {item.label}
                </Box>
              ))}
              <Box sx={{ pt: 1.5 }}>
                <SponsorButton fullWidth />
              </Box>
            </Stack>
          </motion.div>
        )}
      </AnimatePresence>
    </Sheet>
  );
}

export default TopNav;
