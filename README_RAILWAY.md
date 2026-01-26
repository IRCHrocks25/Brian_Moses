# Railway Deployment Guide for Next.js

This project is configured for deployment on Railway.

## Quick Deploy

1. Connect your GitHub repository to Railway
2. Railway will automatically detect Next.js and use the correct build settings
3. The app will be available at `your-app-name.up.railway.app`

## Configuration Files

- `railway.json` - Railway-specific configuration
- `next.config.js` - Next.js configuration with standalone output for optimized deployments
- `package.json` - Contains build and start scripts

## Environment Variables

If you need to set environment variables in Railway:
1. Go to your Railway project settings
2. Add variables in the "Variables" tab
3. They will be available at build and runtime

## Build Process

Railway will:
1. Install dependencies (`npm install`)
2. Run the build command (`npm run build`)
3. Start the server with `npm start`

## Port Configuration

The `start` script uses `$PORT` which Railway automatically provides. This ensures the app runs on the correct port.

## Troubleshooting

### Build Fails
- Check that all dependencies are in `package.json`
- Ensure `next` is in `dependencies`, not `devDependencies`
- Verify Node.js version compatibility (Next.js 14 requires Node 18+)

### Images Not Loading
- Ensure images are in the `public` folder
- Check that image paths are correct (starting with `/images/...`)
- Verify `next.config.js` has image optimization enabled

### Static Assets Not Found
- Make sure all assets are in the `public` directory
- Check that paths use absolute paths starting with `/`

## Local Testing

To test the production build locally:

```bash
npm run build
npm start
```

The app will run on `http://localhost:3000` (or the PORT specified).

