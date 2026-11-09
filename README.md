# Tactyqal Labs

A two-part assignment for [Tactyqal Labs](https://tactyqal.com/), a company that mentors teens in India to build no-code apps in 8 weeks. The audience is parents of teens, and the goal is to get them to book a free consultation.

1. **Homepage redesign** - modern UI, good UX, responsive layout (`/web`).
2. **Blog backend** - replaces the WordPress blog with a database, a CRUD API and a small demo frontend (`/api` + `/web`).

> **Status: Phase 1 - project setup only.** No pages, tables or features yet.

## Structure

| Path              | Stack                                                      |
| ----------------- | ---------------------------------------------------------- |
| `web/`            | Next.js (App Router), TypeScript, Tailwind CSS, shadcn/ui  |
| `api/`            | Node.js, Express, TypeScript, PostgreSQL (`pg`)            |
| `api/migrations/` | SQL migrations (empty for now)                             |
| `api/seeds/`      | Seed data, incl. the 6 existing blog posts (empty for now) |

npm workspaces: one `npm install` at the root installs both apps.

## Prerequisites

- Node.js 20+ (built on 24) and npm
- PostgreSQL 14+ (not required to boot; needed once migrations arrive)

## Setup

```bash
npm install

# environment files
cp api/.env.example api/.env
cp web/.env.example web/.env.local
```

Edit `api/.env` (set `DATABASE_URL` and `ADMIN_API_KEY`).

| Variable              | App | Purpose                                              |
| --------------------- | --- | ---------------------------------------------------- |
| `PORT`                | api | API port (default `4000`)                            |
| `DATABASE_URL`        | api | PostgreSQL connection string                         |
| `ADMIN_API_KEY`       | api | Secret for write endpoints                           |
| `CORS_ORIGIN`         | api | Allowed web origin (default `http://localhost:3000`) |
| `NEXT_PUBLIC_API_URL` | web | Base URL of the API                                  |

## Run

```bash
npm run dev          # both apps together (api :4000, web :3000)
npm run dev:api      # API only
npm run dev:web      # web only
```

Verify: `curl http://localhost:4000/health` returns `{"status":"ok","db":"connected"|"unavailable",...}`. The API stays up if Postgres isn't reachable yet; `db` reports its state.

## Other scripts

```bash
npm run lint         # ESLint, both apps
npm run typecheck    # tsc, both apps
npm run format       # Prettier, both apps
npm run build        # production build, both apps
```

## Roadmap

1. Phase 1 - setup (this)
2. Phase 2 - blog database schema, migrations, seed the 6 existing posts with their original slugs
3. Phase 3 - blog CRUD API (admin-key protected writes)
4. Phase 4 - homepage redesign
5. Phase 5 - blog frontend, polish, deploy
