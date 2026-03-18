# SaveGuard

AI-powered subscription management. Automatically detects wasteful subscriptions, negotiates better rates, and cancels unused services.

## What It Does

- Connects to your bank via Plaid/Interac
- Identifies recurring subscription charges
- Calculates usage scores based on transaction patterns
- Generates AI-powered negotiation emails (Anthropic Claude)
- Sends cancellation requests to merchants
- Tracks savings over time

## Tech Stack

Next.js 16, TypeScript, Supabase, Plaid, Anthropic Claude API, Resend, Tailwind CSS

## Setup

```bash
npm install
cp .env.example .env.local
# Add your API keys to .env.local
npm run dev
```

## Environment Variables

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
PLAID_CLIENT_ID=
PLAID_SECRET=
PLAID_ENV=sandbox
ANTHROPIC_API_KEY=
RESEND_API_KEY=
FROM_EMAIL=
```

## Demo

Load demo data from the dashboard to see the platform in action without connecting a real bank account.

Built for the Interac Hackathon 2026.

;)