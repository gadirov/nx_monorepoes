import Keycloak from 'keycloak-js';

export const keycloakConfig = {
  url: import.meta.env.VITE_KEYCLOAK_URL,
  realm: 'naa-lms',
  clientId: 'naa-lms',
};

export const keycloak = new Keycloak(keycloakConfig);

export const keycloakProviderConfig = {
  onLoad: 'login-required',
  pkceMethod: 'S256', //Proof Key for Code Exchange
  redirectUri: import.meta.env.VITE_KEYCLOAK_REDIRECT_URL,
};
