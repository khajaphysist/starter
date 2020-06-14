import ApolloClient from "apollo-boost";
import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/react-hooks";

import App from "./App";
import { initializeKeycloak, keycloak } from "./libs/keycloak";
import * as serviceWorker from "./serviceWorker";

const run = async () => {
  await initializeKeycloak();
  const client = new ApolloClient({
    uri: "http://localhost:8080/v1/graphql",
    headers: {
      Authorization: `Bearer ${keycloak.token}`,
    },
  });
  ReactDOM.render(
    <React.StrictMode>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

run();

serviceWorker.unregister();
