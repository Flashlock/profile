import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import { motion, useReducedMotion } from 'framer-motion';
import Section, { itemVariants } from '../components/Section';
import { profile, stats } from '../data/content';

export function AboutSection() {
  const reduce = useReducedMotion();
  const variants = reduce ? { hidden: { opacity: 1 }, visible: { opacity: 1 } } : itemVariants;

  return (
    <Section
      id="about"
      eyebrow="01 // ABOUT"
      title={<>Engineer who ships, with an AI-first lens.</>}
      description={profile.summary}
    >
      <Box
        sx={{
          display: 'grid',
          gap: 2,
          gridTemplateColumns: {
            xs: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          },
        }}
      >
        {stats.map((s) => (
          <motion.div key={s.label} variants={variants}>
            <Box
              sx={{
                position: 'relative',
                p: { xs: 2.5, md: 3 },
                borderRadius: 'lg',
                border: '1px solid',
                borderColor: 'divider',
                backgroundColor: 'rgba(15, 12, 30, 0.5)',
                backdropFilter: 'blur(8px)',
                overflow: 'hidden',
                transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  borderColor: 'rgba(168, 132, 255, 0.45)',
                  boxShadow: '0 18px 36px rgba(0, 0, 0, 0.45), 0 0 32px rgba(168, 85, 247, 0.18)',
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  inset: 0,
                  borderRadius: 'inherit',
                  background:
                    'radial-gradient(120% 120% at 0% 0%, rgba(168, 85, 247, 0.18), transparent 60%)',
                  opacity: 0.7,
                  pointerEvents: 'none',
                },
              }}
            >
              <Typography
                level="display2"
                sx={{
                  fontSize: { xs: '2rem', md: '2.5rem' },
                  background: 'linear-gradient(135deg, #f1edff 0%, #c6a4ff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                {s.value}
              </Typography>
              <Typography
                level="body-sm"
                sx={{
                  color: 'text.secondary',
                  mt: 1,
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                {s.label}
              </Typography>
            </Box>
          </motion.div>
        ))}
      </Box>
    </Section>
  );
}

export default AboutSection;
