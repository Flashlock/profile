import { extendTheme } from '@mui/joy/styles';

export const theme = extendTheme({
  cssVarPrefix: 'ab',
  fontFamily: {
    display:
      '"Space Grotesk", "Inter", system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    body: '"Inter", system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    code: '"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  },
  colorSchemes: {
    dark: {
      palette: {
        mode: 'dark',
        primary: {
          50: '#f5edff',
          100: '#e9d8ff',
          200: '#d3b3ff',
          300: '#bc8aff',
          400: '#a661ff',
          500: '#a855f7',
          600: '#8a2dde',
          700: '#6c1fb3',
          800: '#4c1488',
          900: '#2c0a55',
          plainColor: 'var(--ab-palette-primary-300)',
          plainHoverBg: 'rgba(168, 85, 247, 0.12)',
          plainActiveBg: 'rgba(168, 85, 247, 0.18)',
          outlinedColor: 'var(--ab-palette-primary-300)',
          outlinedBorder: 'rgba(168, 85, 247, 0.45)',
          outlinedHoverBg: 'rgba(168, 85, 247, 0.12)',
          outlinedActiveBg: 'rgba(168, 85, 247, 0.18)',
          softBg: 'rgba(168, 85, 247, 0.14)',
          softColor: '#d3b3ff',
          softHoverBg: 'rgba(168, 85, 247, 0.22)',
          softActiveBg: 'rgba(168, 85, 247, 0.3)',
          solidBg: 'linear-gradient(135deg, #a855f7 0%, #6c1fb3 100%)',
          solidColor: '#ffffff',
          solidHoverBg: 'linear-gradient(135deg, #b366ff 0%, #7d2ec7 100%)',
          solidActiveBg: 'linear-gradient(135deg, #8a2dde 0%, #4c1488 100%)',
        },
        neutral: {
          50: '#f6f6fb',
          100: '#e6e6f1',
          200: '#c6c6dc',
          300: '#9d9dbd',
          400: '#6f6f95',
          500: '#4d4d72',
          600: '#33334f',
          700: '#1f1f38',
          800: '#15152a',
          900: '#0a0a1a',
        },
        success: {
          500: '#22d3ee',
        },
        background: {
          body: '#070713',
          surface: '#0d0a1f',
          level1: '#13112a',
          level2: '#1a1638',
          level3: '#221c4a',
          popup: '#15122e',
          backdrop: 'rgba(7, 7, 19, 0.6)',
        },
        text: {
          primary: '#f1edff',
          secondary: '#b8b3d6',
          tertiary: '#857fa3',
          icon: '#b8b3d6',
        },
        divider: 'rgba(168, 132, 255, 0.18)',
        common: {
          white: '#ffffff',
          black: '#000000',
        },
      },
    },
  },
  shadow: {
    xs: '0 1px 2px rgba(0,0,0,0.5)',
    sm: '0 2px 8px rgba(0,0,0,0.45)',
    md: '0 8px 24px rgba(0,0,0,0.55)',
    lg: '0 16px 40px rgba(0,0,0,0.6), 0 0 24px rgba(168, 85, 247, 0.15)',
    xl: '0 24px 64px rgba(0,0,0,0.7), 0 0 48px rgba(168, 85, 247, 0.25)',
  },
  radius: {
    xs: '6px',
    sm: '10px',
    md: '14px',
    lg: '20px',
    xl: '28px',
  },
  typography: {
    display1: {
      fontFamily: 'var(--ab-fontFamily-display)',
      fontWeight: 700,
      fontSize: 'clamp(2.75rem, 6vw + 1rem, 5.5rem)',
      lineHeight: 1.02,
      letterSpacing: '-0.04em',
    },
    display2: {
      fontFamily: 'var(--ab-fontFamily-display)',
      fontWeight: 600,
      fontSize: 'clamp(2rem, 3.5vw + 1rem, 3.5rem)',
      lineHeight: 1.08,
      letterSpacing: '-0.03em',
    },
    h1: {
      fontFamily: 'var(--ab-fontFamily-display)',
      fontWeight: 600,
      fontSize: 'clamp(1.75rem, 2vw + 1rem, 2.5rem)',
      letterSpacing: '-0.02em',
    },
    h2: {
      fontFamily: 'var(--ab-fontFamily-display)',
      fontWeight: 600,
      fontSize: '1.5rem',
      letterSpacing: '-0.01em',
    },
    h3: {
      fontFamily: 'var(--ab-fontFamily-display)',
      fontWeight: 600,
      fontSize: '1.25rem',
    },
    'title-lg': {
      fontFamily: 'var(--ab-fontFamily-display)',
      fontWeight: 600,
    },
    'body-lg': {
      fontSize: '1.125rem',
      lineHeight: 1.6,
    },
    'body-md': {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    'body-sm': {
      fontSize: '0.9rem',
      lineHeight: 1.55,
    },
    'body-xs': {
      fontSize: '0.78rem',
      lineHeight: 1.5,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
    },
  },
});

declare module '@mui/joy/styles' {
  interface TypographySystemOverrides {
    display1: true;
    display2: true;
  }
}

export default theme;
