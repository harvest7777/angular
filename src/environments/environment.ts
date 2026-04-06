export const environment = {
  production: false,
  auth0: {
    domain: 'YOUR_AUTH0_DOMAIN', // e.g. dev-abc123.us.auth0.com
    clientId: 'YOUR_AUTH0_CLIENT_ID',
    authorizationParams: {
      redirect_uri: 'http://localhost:4200',
    },
  },
};
