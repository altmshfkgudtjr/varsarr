import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';
import GlobalStyles from 'lib/GlobalStyles';
import RecoilProvider from 'components/providers/RecoilProvider';
import QueryProvider from 'components/providers/QueryProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryProvider>
      <RecoilProvider>
        <GlobalStyles />
        <App />
      </RecoilProvider>
    </QueryProvider>
  </React.StrictMode>,
);
