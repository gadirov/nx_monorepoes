import * as ReactDOM from 'react-dom/client';
import App from './app/app';
import {
  eventLogger,
  i18nInstance,
  keycloak,
  keycloakProviderConfig,
} from '@react-monorepo/config';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import Cookies from 'js-cookie';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const tokenLogger = ({ token }: any) => {
  Cookies.set('token', token);
};
i18nInstance.init(() => {
  root.render(
    <ReactKeycloakProvider
      authClient={keycloak}
      initOptions={keycloakProviderConfig}
      LoadingComponent={<h1>Loading...</h1>}
      onEvent={eventLogger}
      onTokens={tokenLogger}
    >
      <App />
    </ReactKeycloakProvider>
  );
});

// if not work NEXTUI and tailwind css: fix: project.json  postcss.config.js; and install - npm install tailwindcss postcss autoprefixer
