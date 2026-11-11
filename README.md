# Unleash

Train. Fuel. Recover.

[Open the live app](https://unleash-fitness-sujit.sujithkumarreddy94.chatgpt.site/)

## Features

- ChatGPT sign-in and user-scoped Cloudflare D1 storage
- Adult profile onboarding and BMI calculation (20+)
- Rule-based workout plans based on goals, experience, available days and equipment
- Workout logging, meals, nutrition targets, hydration and recovery check-ins
- Gym membership records and a clearly labeled wearable simulation

## Local development

Requires Node.js 22.13+ and npm.

```sh
npm run install:ci
npm run db:generate
npm run build
node --import ./scripts/sites-env.mjs ./node_modules/wrangler/bin/wrangler.js d1 execute DB --local --config dist/server/wrangler.json --persist-to .wrangler/state --file drizzle/0000_square_dakota_north.sql
npm run dev
```

Apply the migration once to a new local database. The portable development server provides a synthetic local ChatGPT sign-in. Run `node test-api.mjs` while the development server is running on port 5173 to test with synthetic data.

## Hosting and authentication

The live application runs on OpenAI Sites with a Cloudflare Worker and D1 database. GitHub hosts the source; GitHub Pages cannot run this backend. Production authentication is provided by Sites, which injects verified identity headers. Do not deploy this code on another host that trusts client-supplied identity headers; a different host needs its own verified authentication integration.

The included hosting manifest declares the database binding but intentionally omits the live project's identifier. Create or bind your own Sites project before deploying a separate instance. This repository is a source snapshot, not an automatic deployment pipeline for the live site.

## Boundaries

Workout suggestions are rule-based, not medical advice. BMI is a screening measure. Wearable connections are simulated, gym memberships are self-reported, and nutrition targets are editable placeholders. No production database records or credentials are included in this repository.

