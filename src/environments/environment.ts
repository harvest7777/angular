export const environment = {
  production: false,
  auth0: {
    domain: 'duckies.us.auth0.com',
    clientId: 'XIcf889dKOpXZue9cFehIC3G2lsQCFYv',
    authorizationParams: {
      redirect_uri: typeof window !== 'undefined' ? window.location.origin : 'http://localhost:4200',
    },
  },
};
