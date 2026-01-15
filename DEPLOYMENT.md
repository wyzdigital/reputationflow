# Deployment Guide

This guide covers deploying your ReputationFlow (WYZReview) application to various platforms.

## Quick Start with Vercel (Recommended)

Vercel is the easiest way to deploy your React + Vite app with serverless API functions.

### Prerequisites
- GitHub account (already set up ✅)
- Vercel account (free tier available)

### Steps

1. **Sign up for Vercel**
   - Go to [https://vercel.com/signup](https://vercel.com/signup)
   - Sign up with your GitHub account

2. **Import Your Repository**
   - Click "Add New Project"
   - Select your GitHub repository: `wyzdigital/reputationflow`
   - Vercel will auto-detect it's a Vite project

3. **Configure Environment Variables**
   
   Add these in the Vercel project settings:
   
   ```
   VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_key_here
   VITE_STRIPE_PRICE_SMALL_BUSINESS=price_your_id_here
   VITE_STRIPE_PRICE_BUSINESS=price_your_id_here
   STRIPE_SECRET_KEY=sk_test_your_key_here
   STRIPE_WEBHOOK_SECRET=whsec_your_secret_here
   GEMINI_API_KEY=your_gemini_key_here
   ```

4. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete (2-3 minutes)
   - Your app will be live at `https://your-app.vercel.app`

5. **Set Up Custom Domain (Optional)**
   - Go to Project Settings → Domains
   - Add your custom domain (e.g., `app.wyzreview.com`)
   - Follow DNS configuration instructions

6. **Configure Stripe Webhook**
   - Copy your Vercel deployment URL
   - Add webhook endpoint in Stripe Dashboard:
     `https://your-app.vercel.app/api/webhook`

### Automatic Deployments

Every time you push to GitHub, Vercel will automatically:
- Build your app
- Run tests (if configured)
- Deploy to production
- Generate a unique preview URL for pull requests

---

## Alternative: Deploy to Netlify

### Steps

1. **Sign up for Netlify**
   - Go to [https://app.netlify.com/signup](https://app.netlify.com/signup)
   - Connect your GitHub account

2. **Create New Site**
   - Click "Add new site" → "Import an existing project"
   - Select your GitHub repository

3. **Configure Build Settings**
   ```
   Build command: npm run build
   Publish directory: dist
   ```

4. **Set Environment Variables**
   - Go to Site Settings → Environment Variables
   - Add the same variables as listed for Vercel

5. **Deploy Functions**
   
   Netlify requires functions in a specific directory:
   ```bash
   mkdir netlify/functions
   mv api/* netlify/functions/
   ```
   
   Update each function to use Netlify's format:
   ```typescript
   export const handler = async (event, context) => {
     // Your function code
   };
   ```

6. **Deploy**
   - Click "Deploy site"
   - Your app will be live at `https://your-app.netlify.app`

---

## Alternative: Deploy to Railway

Railway is great for full-stack apps with databases.

### Steps

1. **Sign up for Railway**
   - Go to [https://railway.app](https://railway.app)
   - Sign up with GitHub

2. **Create New Project**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository

3. **Configure**
   - Railway will auto-detect Node.js
   - Add environment variables in the Variables tab

4. **Add Database (Optional)**
   - Click "New" → "Database" → "PostgreSQL"
   - Railway will provide connection string
   - Use for storing user subscriptions

5. **Deploy**
   - Railway automatically deploys on push
   - Get your public URL from the Settings tab

---

## Alternative: Custom VPS (DigitalOcean, AWS, etc.)

For more control, deploy to your own server.

### Prerequisites
- Ubuntu 22.04 server
- Domain name pointed to server IP
- SSH access

### Steps

1. **Install Node.js**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

2. **Install Nginx**
   ```bash
   sudo apt update
   sudo apt install nginx
   ```

3. **Clone Repository**
   ```bash
   cd /var/www
   sudo git clone https://github.com/wyzdigital/reputationflow.git
   cd reputationflow
   sudo npm install
   ```

4. **Build App**
   ```bash
   sudo npm run build
   ```

5. **Configure Nginx**
   ```bash
   sudo nano /etc/nginx/sites-available/reputationflow
   ```
   
   Add:
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;
       root /var/www/reputationflow/dist;
       index index.html;
       
       location / {
           try_files $uri $uri/ /index.html;
       }
       
       location /api {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

6. **Enable Site**
   ```bash
   sudo ln -s /etc/nginx/sites-available/reputationflow /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

7. **Set Up API Server**
   
   Create a Node.js server for API endpoints:
   ```bash
   sudo npm install -g pm2
   pm2 start api/server.js
   pm2 startup
   pm2 save
   ```

8. **Set Up SSL (Let's Encrypt)**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d your-domain.com
   ```

---

## Environment Variables Reference

### Frontend (VITE_ prefix required)
```
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_...
VITE_STRIPE_PRICE_SMALL_BUSINESS=price_...
VITE_STRIPE_PRICE_BUSINESS=price_...
```

### Backend (NO VITE_ prefix)
```
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
GEMINI_API_KEY=...
```

### Optional
```
DATABASE_URL=postgresql://...
NODE_ENV=production
PORT=3000
```

---

## Post-Deployment Checklist

- [ ] App loads correctly at deployment URL
- [ ] All pages are accessible (landing, pricing, signup, etc.)
- [ ] Stripe checkout works with test card
- [ ] Webhooks are receiving events (check Stripe Dashboard)
- [ ] Environment variables are set correctly
- [ ] Custom domain is configured (if applicable)
- [ ] SSL certificate is active (HTTPS)
- [ ] Analytics are tracking (if configured)
- [ ] Error monitoring is set up (Sentry, LogRocket, etc.)

---

## Continuous Deployment

### GitHub Actions (Optional)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '20'
      - run: npm install
      - run: npm run build
      - run: npm test
      # Add deployment steps for your platform
```

---

## Monitoring and Maintenance

### Performance Monitoring
- Use Vercel Analytics (built-in)
- Or add Google Analytics
- Monitor Core Web Vitals

### Error Tracking
- Set up Sentry: `npm install @sentry/react`
- Add error boundary components
- Monitor webhook failures in Stripe

### Uptime Monitoring
- Use UptimeRobot (free)
- Set up alerts for downtime
- Monitor API endpoint health

### Database Backups
- Enable automatic backups on your database host
- Test restore process regularly
- Keep backups for 30+ days

---

## Scaling Considerations

### When to Scale
- More than 10,000 monthly active users
- API response times > 500ms
- Database queries taking > 100ms
- High webhook failure rate

### How to Scale
1. **Frontend**: Already scales with Vercel/Netlify CDN
2. **API**: Move to dedicated server or serverless functions
3. **Database**: Upgrade to managed database with read replicas
4. **Caching**: Add Redis for session management
5. **Queue**: Use Bull/BullMQ for webhook processing

---

## Troubleshooting

### Build Fails
- Check Node.js version (should be 18+)
- Clear `node_modules` and reinstall
- Check for TypeScript errors

### API Endpoints Not Working
- Verify environment variables are set
- Check API function logs
- Test endpoints with curl/Postman

### Stripe Webhooks Failing
- Verify webhook secret is correct
- Check webhook endpoint is accessible
- Review webhook logs in Stripe Dashboard

### App Not Loading
- Check browser console for errors
- Verify build output in `dist` directory
- Check Nginx/server configuration

---

## Support Resources

- **Vercel Docs**: [https://vercel.com/docs](https://vercel.com/docs)
- **Netlify Docs**: [https://docs.netlify.com](https://docs.netlify.com)
- **Railway Docs**: [https://docs.railway.app](https://docs.railway.app)
- **Vite Docs**: [https://vitejs.dev](https://vitejs.dev)
- **GitHub Issues**: Report bugs in your repository
