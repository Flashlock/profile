import type { ReactNode } from 'react';
import Box from '@mui/joy/Box';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import { motion, useReducedMotion, type Variants } from 'framer-motion';

export const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

const reducedVariants: Variants = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0 },
};

type SectionProps = {
  id: string;
  eyebrow?: string;
  title?: ReactNode;
  description?: ReactNode;
  children: ReactNode;
  align?: 'left' | 'center';
  fullBleed?: boolean;
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  align = 'left',
  fullBleed = false,
}: SectionProps) {
  const reduce = useReducedMotion();
  const variants = reduce ? reducedVariants : sectionVariants;

  const titleId = title ? `${id}-title` : undefined;

  return (
    <Box
      component="section"
      id={id}
      aria-labelledby={titleId}
      sx={{
        position: 'relative',
        py: { xs: 8, md: 14 },
        px: fullBleed ? 0 : { xs: 3, md: 6 },
        maxWidth: fullBleed ? '100%' : 1200,
        mx: 'auto',
        width: '100%',
      }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={variants}
      >
        {(eyebrow || title || description) && (
          <Stack
            spacing={1.5}
            sx={{
              mb: { xs: 5, md: 7 },
              maxWidth: 760,
              mx: align === 'center' ? 'auto' : 0,
              textAlign: align,
              px: fullBleed ? { xs: 3, md: 6 } : 0,
            }}
          >
            {eyebrow && (
              <motion.div variants={reduce ? reducedVariants : itemVariants}>
                <Typography
                  level="body-xs"
                  sx={{
                    color: 'primary.300',
                    fontFamily: 'var(--ab-fontFamily-code)',
                    letterSpacing: '0.18em',
                    fontWeight: 600,
                  }}
                >
                  {eyebrow}
                </Typography>
              </motion.div>
            )}
            {title && (
              <motion.div variants={reduce ? reducedVariants : itemVariants}>
                <Typography
                  component="h2"
                  id={titleId}
                  level="display2"
                  sx={{ color: 'text.primary' }}
                >
                  {title}
                </Typography>
              </motion.div>
            )}
            {description && (
              <motion.div variants={reduce ? reducedVariants : itemVariants}>
                <Typography level="body-lg" sx={{ color: 'text.secondary' }}>
                  {description}
                </Typography>
              </motion.div>
            )}
          </Stack>
        )}
        {children}
      </motion.div>
    </Box>
  );
}

export default Section;
