import { FC } from 'react';

import { Router } from './components/templates/router';
import { ErrorBoundary } from './components/templates/error-boundary';

const App: FC = () => {
  return (
    <ErrorBoundary>
      <Router />
    </ErrorBoundary>
  );
};

export default App;
