import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFalback from './ui/ErrorFallback';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary
      onReset={() => window.location.replace('/')}
      FallbackComponent={ErrorFalback}
    >
      <App />
    </ErrorBoundary>
  </StrictMode>
);
