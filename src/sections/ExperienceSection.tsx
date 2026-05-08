import { useRef } from 'react';
import Box from '@mui/joy/Box';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import Chip from '@mui/joy/Chip';
import { ArrowUpRight } from 'lucide-react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import Section, { itemVariants } from '../components/Section';
import { experience } from '../data/content';

export function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 30%'],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const variants = reduce ? { hidden: { opacity: 1 }, visible: { opacity: 1 } } : itemVariants;

  return (
    <Section
      id="experience"
      eyebrow="03 // EXPERIENCE"
      title="A track record of shipping"
      description="Founding contributor at Workday's API Tooling team, modernizer of EVRAZ's enterprise stack, and an indie game studio founder along the way."
    >
      <Box ref={containerRef} sx={{ position: 'relative', pl: { xs: 4, md: 6 } }}>
        {/* Track */}
        <Box
          aria-hidden
          sx={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: { xs: 12, md: 18 },
            width: 2,
            borderRadius: 1,
            backgroundColor: 'rgba(168, 132, 255, 0.12)',
            pointerEvents: 'none',
          }}
        >
          <motion.div
            aria-hidden
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              transformOrigin: 'top',
              scaleY: reduce ? 1 : lineScale,
              background: 'linear-gradient(180deg, #a855f7 0%, #22d3ee 100%)',
              borderRadius: 2,
              boxShadow: '0 0 14px rgba(168, 85, 247, 0.5)',
            }}
          />
        </Box>

        <Stack spacing={{ xs: 4, md: 6 }}>
          {experience.map((entry) => (
            <motion.div key={entry.company} variants={variants}>
              <Box sx={{ position: 'relative' }}>
                {/* Node */}
                <Box
                  aria-hidden
                  sx={{
                    position: 'absolute',
                    left: { xs: -28, md: -42 },
                    top: 8,
                    width: 16,
                    height: 16,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, #f1edff 0%, #a855f7 70%)',
                    boxShadow: '0 0 18px rgba(168, 85, 247, 0.7)',
                  }}
                />
                <Box
                  sx={{
                    p: { xs: 2.5, md: 3.5 },
                    borderRadius: 'lg',
                    border: '1px solid',
                    borderColor: 'divider',
                    backgroundColor: 'rgba(15, 12, 30, 0.6)',
                    backdropFilter: 'blur(8px)',
                    transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      borderColor: 'rgba(168, 132, 255, 0.5)',
                      boxShadow: '0 18px 40px rgba(0, 0, 0, 0.5), 0 0 32px rgba(168, 85, 247, 0.15)',
                    },
                  }}
                >
                  <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    spacing={{ xs: 2, md: 3 }}
                    alignItems={{ xs: 'flex-start', md: 'center' }}
                    justifyContent="space-between"
                    sx={{ mb: 1.5 }}
                  >
                    <Stack direction="row" spacing={2} alignItems="center">
                      {entry.brandLogo && (
                        <Box
                          sx={{
                            width: 56,
                            height: 56,
                            display: 'grid',
                            placeItems: 'center',
                            borderRadius: 'sm',
                            backgroundColor: '#ffffff',
                            p: 1,
                            flexShrink: 0,
                          }}
                        >
                          <Box
                            component="img"
                            src={entry.brandLogo}
                            alt={`${entry.company} logo`}
                            sx={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                          />
                        </Box>
                      )}
                      <Stack spacing={0.25}>
                        <Typography
                          component="h3"
                          level="h2"
                          sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' } }}
                        >
                          {entry.role}
                        </Typography>
                        <Typography
                          level="body-md"
                          sx={{ color: 'text.secondary', fontWeight: 500 }}
                        >
                          {entry.companyHref ? (
                            <Box
                              component="a"
                              href={entry.companyHref}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`${entry.company} (opens in new tab)`}
                              sx={{
                                color: 'inherit',
                                textDecoration: 'none',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 0.5,
                                borderBottom: '1px dashed transparent',
                                transition:
                                  'color 0.2s ease, border-color 0.2s ease',
                                '&:hover': {
                                  color: 'text.primary',
                                  borderBottomColor: 'rgba(168, 132, 255, 0.6)',
                                },
                                '&:hover .ab-company-arrow': {
                                  transform: 'translate(2px, -2px)',
                                  opacity: 1,
                                },
                              }}
                            >
                              {entry.company}
                              <Box
                                className="ab-company-arrow"
                                component="span"
                                sx={{
                                  display: 'inline-flex',
                                  opacity: 0.55,
                                  transition: 'transform 0.2s ease, opacity 0.2s ease',
                                }}
                              >
                                <ArrowUpRight size={14} />
                              </Box>
                            </Box>
                          ) : (
                            entry.company
                          )}
                          {entry.location ? ` - ${entry.location}` : ''}
                        </Typography>
                      </Stack>
                    </Stack>
                    <Chip
                      size="sm"
                      variant="outlined"
                      sx={{
                        borderRadius: 999,
                        fontFamily: 'var(--ab-fontFamily-code)',
                        letterSpacing: '0.12em',
                        fontSize: 11,
                        textTransform: 'uppercase',
                        borderColor: 'rgba(168, 132, 255, 0.35)',
                        color: 'text.secondary',
                      }}
                    >
                      {entry.dates}
                    </Chip>
                  </Stack>
                  <Typography
                    level="body-md"
                    sx={{ color: 'text.secondary', mb: 2 }}
                  >
                    {entry.summary}
                  </Typography>
                  <Stack component="ul" spacing={1} sx={{ pl: 2.5, m: 0 }}>
                    {entry.bullets.map((b) => (
                      <Box
                        component="li"
                        key={b}
                        sx={{
                          color: 'text.secondary',
                          fontSize: 14,
                          lineHeight: 1.6,
                          '&::marker': { color: 'primary.300' },
                        }}
                      >
                        {b}
                      </Box>
                    ))}
                  </Stack>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Stack>
      </Box>
    </Section>
  );
}

export default ExperienceSection;
