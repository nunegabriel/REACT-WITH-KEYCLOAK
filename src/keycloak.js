import Keycloak from 'keycloak-js';

const keycloak = Keycloak({
  url: 'http://your-keycloak-server/auth',
  realm: 'your-realm',
  clientId: 'your-client-id',
});

keycloak.init({ onLoad: 'login-required' }).then((auth) => {
    if (!auth) {
      window.location.reload();
    } else {
      console.log('Authenticated');
    }
  });

export { keycloak };
  