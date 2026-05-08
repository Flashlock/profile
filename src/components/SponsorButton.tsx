import Button from '@mui/joy/Button';
import { Heart } from 'lucide-react';
import { links } from '../data/content';

type SponsorButtonProps = {
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  variant?: 'outlined' | 'soft' | 'solid';
};

/**
 * GitHub-style "Sponsor" button. Mirrors the look GitHub renders on profiles —
 * a bordered pill with a pink heart icon — but themed for the dark surface.
 */
export function SponsorButton({
  size = 'sm',
  fullWidth = false,
  variant = 'outlined',
}: SponsorButtonProps) {
  return (
    <Button
      component="a"
      href={links.sponsor}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Sponsor Austin Betts on GitHub (opens in new tab)"
      size={size}
      variant={variant}
      color="neutral"
      startDecorator={
        <Heart
          aria-hidden
          size={16}
          fill="#ea4aaa"
          stroke="#ea4aaa"
          style={{
            filter: 'drop-shadow(0 0 6px rgba(234, 74, 170, 0.65))',
          }}
        />
      }
      sx={{
        borderRadius: 999,
        fontWeight: 600,
        fontFamily: 'var(--ab-fontFamily-display)',
        letterSpacing: '0.01em',
        backgroundColor: 'rgba(15, 12, 30, 0.7)',
        borderColor: 'rgba(234, 74, 170, 0.35)',
        color: 'text.primary',
        backdropFilter: 'blur(8px)',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease',
        width: fullWidth ? '100%' : 'auto',
        '&:hover': {
          backgroundColor: 'rgba(234, 74, 170, 0.12)',
          borderColor: 'rgba(234, 74, 170, 0.7)',
          boxShadow: '0 0 0 4px rgba(234, 74, 170, 0.12)',
          transform: 'translateY(-1px)',
        },
      }}
    >
      Sponsor
    </Button>
  );
}

export default SponsorButton;
