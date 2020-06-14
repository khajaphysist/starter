## Introduction

Follow along my tutorial at my [blog](https://khaja.dev/posts/a-sane-starter-for-rapid-prototyping/) to start.

This starter use following stack

- [Hasura](https://hasura.io/)
- [Keycloak](https://www.keycloak.org/)
- Postgres
- Apollo React client
- React for frontend with [Ant Design](https://ant.design/) or antd component library
- Typescript and Yarn as the package manager
- Docker

## Installation

Run `yarn` in `client` directory to install required dependencies.

To modify theme, update `modifyVars` in `client/craco.config.js`.

## Prerequisites to run

From the above tutorial, be sure to have

- created required `realms`, `clients`, `users`, `groups` and `mappers` in keycloak.
- created required `tables` from hasura console and granted permissions.

## Running

Run `docker-compose up -d` to start required containers. After all containers are running properly, you can run `yarn start` to start development sever.
