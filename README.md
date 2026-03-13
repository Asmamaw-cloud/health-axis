<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

Health Axis unified backend API built with Nest.js, PostgreSQL, and Prisma. It provides REST and WebSocket endpoints for patients, providers, pharmacies, and admins, including consultations, prescriptions, health monitoring, messaging, and notifications.

## Project setup

```bash
npm install
```

## Environment configuration

Copy `.env.example` to `.env` and fill in:

- `DATABASE_URL` – PostgreSQL connection string
- `JWT_SECRET`, `JWT_EXPIRES_IN`
- `FRONTEND_ORIGINS` – comma-separated list of allowed origins
- `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`
- `AGORA_APP_ID`, `AGORA_APP_CERTIFICATE`

## Database & Prisma

```bash
npx prisma migrate dev --name init
npx prisma generate
```

## Run the project

```bash
# development
npm run start:dev

# production build
npm run build
npm run start:prod
```

The API will be available at `http://localhost:3000`, with Swagger docs at `http://localhost:3000/docs`.

## Core endpoints (high level)

- `POST /auth/register`, `POST /auth/login`, `POST /auth/logout`, `POST /auth/reset-password`
- `GET /providers`, `GET /providers/:id`, `PATCH /providers/:id`
- `POST /consultations/book`, `GET /consultations`, `PUT /consultations/:id/status`, `POST /consultations/:id/start`
- `POST /consultations/:id/prescription`
- `GET /medicines/search`, `POST /pharmacy/medicines`, `PUT /pharmacy/medicines/:id`
- `POST /health-readings`, `GET /health-readings`
- `POST /messages`, `GET /messages?with=:userId`
- `GET /notifications`
- `GET /admin/providers`, `PATCH /admin/providers/:id/approve`
- `GET /admin/pharmacies`, `PATCH /admin/pharmacies/:id/approve`
- `GET /admin/analytics`
- `GET /me`, `GET /dashboard`

## WebSocket usage

- Connect to the Socket.io gateway using JWT (e.g. via `auth: { userId }` during handshake).
- Events:
  - `message:send` / `message:received`
  - `notification:new`

## Tests

```bash
npm run test        # unit tests
npm run test:e2e    # e2e tests
npm run test:cov    # coverage
```

## Deployment notes

- Platforms: Render, Railway, or similar Node hosting.
- Use `npm run build` then `npm run start:prod`.
- Ensure `DATABASE_URL` and other env vars are configured in the platform dashboard.
