import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import App from './App';
import { theme } from './theme';
import './styles.css';

const rootEl = document.getElementById('root');
if (!rootEl) {
  throw new Error('Root element #root not found');
}

createRoot(rootEl).render(
  <StrictMode>
    <CssVarsProvider theme={theme} defaultMode="dark" modeStorageKey="ab-mode">
      <CssBaseline />
      <App />
    </CssVarsProvider>
  </StrictMode>,
);
