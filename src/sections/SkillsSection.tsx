import Box from '@mui/joy/Box';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import Chip from '@mui/joy/Chip';
import { motion, useReducedMotion } from 'framer-motion';
import Section, { itemVariants } from '../components/Section';
import { skillGroups } from '../data/content';

export function SkillsSection() {
  const reduce = useReducedMotion();
  const variants = reduce ? { hidden: { opacity: 1 }, visible: { opacity: 1 } } : itemVariants;

  return (
    <Section
      id="skills"
      eyebrow="02 // STACK"
      title="Tools of the trade"
      description="A working palette - languages, frameworks, and platforms I reach for to ship full-stack products and AI-native tooling."
    >
      <Stack spacing={{ xs: 3, md: 4 }}>
        {skillGroups.map((group) => (
          <motion.div key={group.title} variants={variants}>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '220px 1fr' },
                gap: { xs: 1.5, md: 4 },
                alignItems: 'baseline',
                py: 2.5,
                borderTop: '1px solid',
                borderColor: 'divider',
              }}
            >
              <Typography
                level="body-xs"
                sx={{
                  color: 'primary.300',
                  fontFamily: 'var(--ab-fontFamily-code)',
                  letterSpacing: '0.16em',
                  fontWeight: 600,
                }}
              >
                {group.title}
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                {group.items.map((item) => (
                  <Chip
                    key={item}
                    size="md"
                    variant="outlined"
                    sx={{
                      borderRadius: 999,
                      borderColor: 'rgba(168, 132, 255, 0.25)',
                      backgroundColor: 'rgba(15, 12, 30, 0.55)',
                      color: 'text.primary',
                      fontFamily: 'var(--ab-fontFamily-body)',
                      fontWeight: 500,
                      transition: 'border-color 0.25s ease, background-color 0.25s ease, box-shadow 0.25s ease',
                      '&:hover': {
                        borderColor: 'rgba(168, 132, 255, 0.6)',
                        backgroundColor: 'rgba(168, 85, 247, 0.12)',
                        boxShadow: '0 0 14px rgba(168, 85, 247, 0.25)',
                      },
                    }}
                  >
                    {item}
                  </Chip>
                ))}
              </Stack>
            </Box>
          </motion.div>
        ))}
      </Stack>
    </Section>
  );
}

export default SkillsSection;
