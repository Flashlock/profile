import Box from '@mui/joy/Box';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import Button from '@mui/joy/Button';
import { Mail, Phone, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons';
import { motion, useReducedMotion } from 'framer-motion';
import Section, { itemVariants } from '../components/Section';
import { profile, links } from '../data/content';
import SponsorButton from '../components/SponsorButton';

const detailItems = [
  { icon: <Mail size={18} />, label: profile.email, href: links.email },
  { icon: <Phone size={18} />, label: profile.phone, href: links.phone },
  { icon: <MapPin size={18} />, label: profile.location, href: undefined },
];

const socialItems = [
  {
    icon: <LinkedinIcon size={18} />,
    href: links.linkedin,
    label: 'LinkedIn',
  },
  {
    icon: <GithubIcon size={18} />,
    href: links.github,
    label: 'GitHub',
  },
];

export function ContactSection() {
  const reduce = useReducedMotion();
  const variants = reduce ? { hidden: { opacity: 1 }, visible: { opacity: 1 } } : itemVariants;

  return (
    <Section
      id="contact"
      eyebrow="05 // CONTACT"
      title="Let's build something."
      description="I'm open to senior full-stack and AI engineering roles, contract work, and interesting collaborations. The fastest way to reach me is email."
    >
      <Box
        sx={{
          position: 'relative',
          p: { xs: 3, md: 5 },
          borderRadius: 'xl',
          border: '1px solid',
          borderColor: 'divider',
          backgroundColor: 'rgba(15, 12, 30, 0.65)',
          backdropFilter: 'blur(10px)',
          overflow: 'hidden',
          '&::after': {
            content: '""',
            position: 'absolute',
            top: -1,
            left: -1,
            right: -1,
            bottom: -1,
            borderRadius: 'inherit',
            padding: '1px',
            background:
              'linear-gradient(135deg, rgba(168, 85, 247, 0.5), rgba(34, 211, 238, 0.4), transparent 70%)',
            WebkitMask:
              'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
            pointerEvents: 'none',
          },
        }}
      >
        <Box
          sx={{
            display: 'grid',
            gap: { xs: 4, md: 6 },
            gridTemplateColumns: { xs: '1fr', md: '1.1fr 0.9fr' },
            position: 'relative',
            zIndex: 1,
          }}
        >
          <Stack spacing={3}>
            <motion.div variants={variants}>
              <Stack spacing={1.5}>
                {detailItems.map((d) => {
                  const inner = (
                    <Stack
                      direction="row"
                      spacing={2}
                      alignItems="center"
                      sx={{
                        py: 1.5,
                        px: 2,
                        borderRadius: 'md',
                        border: '1px solid',
                        borderColor: 'divider',
                        backgroundColor: 'rgba(7, 7, 19, 0.55)',
                        textDecoration: 'none',
                        color: 'text.primary',
                        transition: 'border-color 0.25s ease, background-color 0.25s ease',
                        '&:hover': d.href
                          ? {
                              borderColor: 'rgba(168, 132, 255, 0.55)',
                              backgroundColor: 'rgba(168, 85, 247, 0.08)',
                            }
                          : undefined,
                      }}
                    >
                      <Box
                        sx={{
                          width: 36,
                          height: 36,
                          borderRadius: 'sm',
                          display: 'grid',
                          placeItems: 'center',
                          color: '#67e8f9',
                          backgroundColor: 'rgba(34, 211, 238, 0.1)',
                          border: '1px solid rgba(34, 211, 238, 0.3)',
                        }}
                      >
                        {d.icon}
                      </Box>
                      <Typography level="body-md" sx={{ color: 'text.primary' }}>
                        {d.label}
                      </Typography>
                    </Stack>
                  );
                  return d.href ? (
                    <Box
                      key={d.label}
                      component="a"
                      href={d.href}
                      sx={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      {inner}
                    </Box>
                  ) : (
                    <Box key={d.label}>{inner}</Box>
                  );
                })}
              </Stack>
            </motion.div>

            <motion.div variants={variants}>
              <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap" useFlexGap>
                {socialItems.map((s) => (
                  <IconButton
                    key={s.label}
                    component="a"
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${s.label} (opens in new tab)`}
                    variant="outlined"
                    color="neutral"
                    sx={{
                      borderRadius: 999,
                      borderColor: 'rgba(168, 132, 255, 0.35)',
                      color: 'text.primary',
                      backgroundColor: 'rgba(7, 7, 19, 0.5)',
                      transition: 'all 0.25s ease',
                      '&:hover': {
                        borderColor: 'rgba(168, 132, 255, 0.7)',
                        backgroundColor: 'rgba(168, 85, 247, 0.12)',
                        boxShadow: '0 0 16px rgba(168, 85, 247, 0.3)',
                      },
                    }}
                  >
                    {s.icon}
                  </IconButton>
                ))}
              </Stack>
            </motion.div>
          </Stack>

          <motion.div variants={variants}>
            <Stack
              spacing={2.5}
              sx={{
                p: { xs: 3, md: 3.5 },
                borderRadius: 'lg',
                background:
                  'linear-gradient(135deg, rgba(168, 85, 247, 0.18), rgba(7, 7, 19, 0.6))',
                border: '1px solid rgba(168, 132, 255, 0.35)',
                height: '100%',
              }}
            >
              <Typography
                level="body-xs"
                sx={{
                  color: 'primary.300',
                  fontFamily: 'var(--ab-fontFamily-code)',
                  letterSpacing: '0.18em',
                  fontWeight: 600,
                }}
              >
                SUPPORT MY OPEN SOURCE
              </Typography>
              <Typography
                component="h3"
                level="h2"
                sx={{ fontSize: { xs: '1.4rem', md: '1.65rem' } }}
              >
                Sponsor on GitHub
              </Typography>
              <Typography level="body-md" sx={{ color: 'text.secondary' }}>
                Sponsorships fund time on open-source utilities like Kahn Queue and other developer tooling I share publicly.
              </Typography>
              <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
                <SponsorButton size="md" variant="solid" />
                <Button
                  component="a"
                  href={links.email}
                  variant="outlined"
                  color="neutral"
                  size="md"
                  startDecorator={<Mail size={16} />}
                  sx={{
                    borderRadius: 999,
                    borderColor: 'rgba(168, 132, 255, 0.4)',
                    color: 'text.primary',
                    '&:hover': {
                      borderColor: 'rgba(168, 132, 255, 0.7)',
                      backgroundColor: 'rgba(168, 85, 247, 0.1)',
                    },
                  }}
                >
                  Email me
                </Button>
              </Stack>
            </Stack>
          </motion.div>
        </Box>
      </Box>
    </Section>
  );
}

export default ContactSection;
