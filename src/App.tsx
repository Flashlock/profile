import Box from '@mui/joy/Box';
import GrainOverlay from './components/GrainOverlay';
import TopNav from './components/TopNav';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ExperienceSection from './sections/ExperienceSection';
import ProjectsSection from './sections/ProjectsSection';
import BrandStrip from './components/BrandStrip';
import ContactSection from './sections/ContactSection';
import { profile } from './data/content';

export default function App() {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden',
        bgcolor: 'background.body',
        color: 'text.primary',
      }}
    >
      <GrainOverlay />
      <Box
        component="a"
        href="#main-content"
        className="ab-skip-link"
        sx={{
          position: 'absolute',
          top: 8,
          left: 8,
          zIndex: 100,
          px: 2,
          py: 1,
          borderRadius: 'sm',
          backgroundColor: 'background.surface',
          border: '1px solid',
          borderColor: 'rgba(168, 132, 255, 0.6)',
          color: 'text.primary',
          fontFamily: 'var(--ab-fontFamily-display)',
          fontWeight: 600,
          fontSize: 14,
          textDecoration: 'none',
          transform: 'translateY(-150%)',
          transition: 'transform 0.2s ease',
          '&:focus, &:focus-visible': {
            transform: 'translateY(0)',
            outline: '2px solid #67e8f9',
            outlineOffset: 2,
          },
        }}
      >
        Skip to main content
      </Box>
      <Box sx={{ position: 'relative', zIndex: 2 }}>
        <TopNav />
        <Box component="main" id="main-content" tabIndex={-1} sx={{ outline: 'none' }}>
          <HeroSection />
          <BrandStrip />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <ContactSection />
        </Box>
        <Box
          component="footer"
          sx={{
            py: 4,
            px: { xs: 3, md: 6 },
            borderTop: '1px solid',
            borderColor: 'divider',
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 1,
            alignItems: { xs: 'flex-start', sm: 'center' },
            justifyContent: 'space-between',
            color: 'text.tertiary',
            fontSize: 14,
          }}
        >
          <span>
            (c) {new Date().getFullYear()} {profile.name}. All rights reserved.
          </span>
          <span>Built with React, MUI Joy and Framer Motion.</span>
        </Box>
      </Box>
    </Box>
  );
}
