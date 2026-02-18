# Superb Dog Grooming

## Local development

1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`

## GitHub sync

- One-time sync: `npm run sync`
- Continuous auto-sync every 20 seconds: `npm run autosync`

## Netlify auto deploy

This repo includes:

- `netlify.toml` (build command + publish directory)
- `.github/workflows/deploy-netlify.yml` (deploys to Netlify on each push to `main`)

### Required GitHub secrets

Add these in your GitHub repo settings under **Settings -> Secrets and variables -> Actions**:

- `NETLIFY_AUTH_TOKEN`
- `NETLIFY_SITE_ID`

After these secrets are set, every push to `main` will automatically deploy to Netlify.
