import Keycloak from "keycloak-js";

export const keycloak = Keycloak({
  realm: "starter",
  url: "http://localhost:8081/auth/",
  clientId: "demo",
});

export const initializeKeycloak = async () => {
  return await keycloak.init({
    onLoad: "login-required",
  });
};
