module.exports = {
  client: {
    includes: ["src/**/*.tsx"],
    service: {
      name: "hasura",
      url: "http://localhost:8080/v1/graphql",
      headers: {
        "x-hasura-admin-secret": "adminsecret",
      },
      skipSSLValidation: true,
    },
  },
};
