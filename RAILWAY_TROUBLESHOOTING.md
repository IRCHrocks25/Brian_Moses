# Railway Build Troubleshooting Guide

## Current Issue
Build gets stuck at "scheduling build" with no error messages.

## Solutions to Try

### Option 1: Use Dockerfile (Current Setup)
I've created a Dockerfile that gives us more control. Railway should now use Docker instead of NIXPACKS.

**To use this:**
1. Make sure `railway.json` specifies `"builder": "DOCKERFILE"`
2. Deploy again on Railway

### Option 2: Switch Back to NIXPACKS with Verbose Logging
If Docker doesn't work, try this in `railway.json`:

```json
{
  "$schema": "https://railway.app/railway.schema.json",
  "build": {
    "builder": "NIXPACKS",
    "buildCommand": "npm run build:verbose"
  },
  "deploy": {
    "startCommand": "npm start"
  }
}
```

### Option 3: Remove railway.json Entirely
Sometimes Railway's auto-detection works better:
1. Delete `railway.json`
2. Let Railway auto-detect Next.js
3. Deploy again

### Option 4: Check Railway Dashboard Settings
1. Go to Railway Dashboard → Your Service → Settings
2. Check "Build Command" - should be `npm run build`
3. Check "Start Command" - should be `npm start`
4. Check "Root Directory" - should be `/` or empty
5. Clear build cache and redeploy

### Option 5: Try Vercel Instead
Vercel is built specifically for Next.js and might work better:
1. Go to vercel.com
2. Import your GitHub repo
3. It will auto-detect Next.js and deploy

### Option 6: Local Build Test
Test if the build works locally:
```bash
npm ci
npm run build
npm start
```

If this fails locally, fix those errors first.

## Debugging Steps

1. **Check Full Build Logs:**
   - In Railway, go to "Build Logs" tab
   - Scroll ALL the way down
   - Look for any red error messages
   - Check if there's a timeout message

2. **Check Railway Status:**
   - Visit status.railway.app
   - See if there are known issues

3. **Check Service Limits:**
   - Railway free tier has build time limits
   - Check if you've hit the limit

4. **Try Manual Build:**
   - In Railway dashboard, try "Redeploy"
   - Or trigger a new deployment from GitHub

## Current Configuration Files

- `Dockerfile` - Docker build configuration
- `railway.json` - Railway-specific settings (using Docker)
- `.nvmrc` - Node version (18.17.0)
- `package.json` - Has `engines` field for Node version
