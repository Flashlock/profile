import Box from '@mui/joy/Box';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import Chip from '@mui/joy/Chip';
import { ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import Section, { itemVariants } from '../components/Section';
import { projects, type ProjectEntry } from '../data/content';

const accentGlow: Record<NonNullable<ProjectEntry['accent']>, string> = {
  primary: 'rgba(168, 85, 247, 0.4)',
  cyan: 'rgba(34, 211, 238, 0.32)',
  magenta: 'rgba(234, 74, 170, 0.36)',
};

const accentBorder: Record<NonNullable<ProjectEntry['accent']>, string> = {
  primary: 'rgba(168, 85, 247, 0.55)',
  cyan: 'rgba(34, 211, 238, 0.5)',
  magenta: 'rgba(234, 74, 170, 0.55)',
};

export function ProjectsSection() {
  const reduce = useReducedMotion();
  const variants = reduce ? { hidden: { opacity: 1 }, visible: { opacity: 1 } } : itemVariants;

  return (
    <Section
      id="projects"
      eyebrow="04 // PROJECTS"
      title="Selected work"
      description="Platforms, tools, and side projects spanning agentic AI, developer experience, enterprise modernization, and a published mobile game."
    >
      <Box
        sx={{
          display: 'grid',
          gap: { xs: 2, md: 2.5 },
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
          },
        }}
      >
        {projects.map((p) => (
          <motion.div key={p.name} variants={variants} style={{ height: '100%' }}>
            <ProjectCard project={p} />
          </motion.div>
        ))}
      </Box>
    </Section>
  );
}

function ProjectCard({ project }: { project: ProjectEntry }) {
  const accent = project.accent ?? 'primary';
  const isLink = Boolean(project.href);
  const hasImage = Boolean(project.logo);

  return (
    <Box
      component={isLink ? 'a' : 'div'}
      {...(isLink
        ? {
            href: project.href,
            target: '_blank',
            rel: 'noopener noreferrer',
            'aria-label': `${project.name} - ${project.description} (opens in new tab)`,
          }
        : {})}
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        minHeight: 320,
        borderRadius: 'lg',
        border: '1px solid',
        borderColor: 'divider',
        textDecoration: 'none',
        color: 'inherit',
        overflow: 'hidden',
        isolation: 'isolate',
        cursor: isLink ? 'pointer' : 'default',
        backgroundColor: 'rgba(15, 12, 30, 0.65)',
        transition:
          'transform 0.4s cubic-bezier(.16,1,.3,1), border-color 0.4s ease, box-shadow 0.4s ease',
        '&:hover': isLink
          ? {
              transform: 'translateY(-4px)',
              borderColor: accentBorder[accent],
              boxShadow: `0 28px 56px rgba(0, 0, 0, 0.55), 0 0 48px ${accentGlow[accent]}`,
              '& .ab-project-bg-img': { transform: 'scale(1.05)' },
              '& .ab-project-arrow': {
                transform: 'translate(4px, -4px)',
                color: '#f1edff',
              },
            }
          : {},
      }}
    >
      {/* Layer 0: sharp, clearly-visible background image */}
      {hasImage ? (
        <Box
          aria-hidden
          component="img"
          src={project.logo}
          alt=""
          className="ab-project-bg-img"
          sx={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            transition: 'transform 0.65s cubic-bezier(.16,1,.3,1)',
            zIndex: 0,
          }}
        />
      ) : (
        <Box
          aria-hidden
          sx={{
            position: 'absolute',
            inset: 0,
            zIndex: 0,
            background: `linear-gradient(145deg, rgba(15, 12, 30, 0.9), rgba(40, 25, 80, 0.85))`,
          }}
        />
      )}

      {/* Layer 1: subtle accent wash for color cohesion */}
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          pointerEvents: 'none',
          background: `radial-gradient(120% 90% at 20% 0%, ${accentGlow[accent]}, transparent 60%)`,
          mixBlendMode: 'screen',
          opacity: 0.6,
        }}
      />

      {/* Layer 2: full-card light glass — image still reads through */}
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          pointerEvents: 'none',
          backgroundColor: 'rgba(7, 7, 19, 0.32)',
          backdropFilter: 'blur(6px) saturate(120%)',
          WebkitBackdropFilter: 'blur(6px) saturate(120%)',
        }}
      />

      {/* Top-right external-link pill */}
      {isLink && (
        <Box
          className="ab-project-arrow"
          sx={{
            position: 'absolute',
            top: 14,
            right: 14,
            zIndex: 4,
            display: 'inline-flex',
            color: 'rgba(241, 237, 255, 0.9)',
            backgroundColor: 'rgba(7, 7, 19, 0.55)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            border: '1px solid rgba(255, 255, 255, 0.18)',
            borderRadius: 'sm',
            p: 0.6,
            transition: 'transform 0.3s ease, color 0.3s ease',
          }}
        >
          <ArrowUpRight size={18} />
        </Box>
      )}

      {/* Layer 3: full-card content */}
      <Stack
        spacing={1.5}
        sx={{
          position: 'relative',
          zIndex: 3,
          p: { xs: 2.5, md: 3 },
          height: '100%',
          flex: 1,
          justifyContent: 'space-between',
        }}
      >
        <Box />
        <Stack spacing={1.25}>
          <Typography
            component="h3"
            level="h2"
            sx={{
              fontSize: { xs: '1.15rem', md: '1.28rem' },
              fontWeight: 700,
              color: '#f1edff',
              textShadow:
                '0 2px 18px rgba(0,0,0,0.7), 0 1px 4px rgba(0,0,0,0.6)',
              pr: 4,
            }}
          >
            {project.name}
          </Typography>

          <Typography
            level="body-sm"
            sx={{
              color: 'rgba(241, 237, 255, 0.92)',
              textShadow:
                '0 1px 14px rgba(0,0,0,0.7), 0 1px 3px rgba(0,0,0,0.55)',
              fontWeight: 500,
            }}
          >
            {project.description}
          </Typography>

          <Stack direction="row" spacing={0.75} flexWrap="wrap" useFlexGap sx={{ pt: 0.5 }}>
            {project.tech.map((t) => (
              <Chip
                key={t}
                size="sm"
                variant="outlined"
                sx={{
                  borderRadius: 999,
                  borderColor: 'rgba(255, 255, 255, 0.22)',
                  backgroundColor: 'rgba(7, 7, 19, 0.55)',
                  backdropFilter: 'blur(6px)',
                  WebkitBackdropFilter: 'blur(6px)',
                  color: '#f1edff',
                  fontSize: 11,
                  fontFamily: 'var(--ab-fontFamily-code)',
                  letterSpacing: '0.04em',
                  fontWeight: 500,
                }}
              >
                {t}
              </Chip>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}

export default ProjectsSection;
