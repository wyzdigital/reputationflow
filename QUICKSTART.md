# Quick Start Guide

Get your ReputationFlow app up and running in 15 minutes!

## Step 1: Clone & Install (2 minutes)

```bash
git clone https://github.com/wyzdigital/reputationflow.git
cd reputationflow
npm install
```

## Step 2: Set Up Stripe (5 minutes)

1. **Create Stripe Account**
   - Go to [stripe.com](https://stripe.com) and sign up
   - Switch to **Test Mode** (toggle in top right)

2. **Get API Keys**
   - Go to **Developers → API Keys**
   - Copy **Publishable Key** (pk_test_...)
   - Copy **Secret Key** (sk_test_...)

3. **Create Products**
   - Go to **Products** → **Add Product**
   
   **Product 1: Small Business Plan**
   - Name: Small Business Plan
   - Price: $49/month (recurring)
   - Copy the Price ID (price_...)
   
   **Product 2: Business Plan**
   - Name: Business Plan
   - Price: $149/month (recurring)
   - Copy the Price ID (price_...)

## Step 3: Configure Environment (2 minutes)

Edit `.env.local`:

```bash
# Replace with your actual keys
GEMINI_API_KEY=your_gemini_key_here

VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_key_here
VITE_STRIPE_PRICE_SMALL_BUSINESS=price_your_id_here
VITE_STRIPE_PRICE_BUSINESS=price_your_id_here

STRIPE_SECRET_KEY=sk_test_your_key_here
STRIPE_WEBHOOK_SECRET=whsec_your_secret_here
```

## Step 4: Run Locally (1 minute)

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Step 5: Test Payment (3 minutes)

1. Navigate to `/pricing` page
2. Click "Get Started" on Small Business plan
3. Use test card: `4242 4242 4242 4242`
   - Expiry: Any future date (e.g., 12/25)
   - CVC: Any 3 digits (e.g., 123)
   - ZIP: Any 5 digits (e.g., 12345)
4. Complete checkout
5. You should be redirected to success page!

## Step 6: Deploy to Vercel (2 minutes)

1. **Sign up for Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub

2. **Import Repository**
   - Click "Add New Project"
   - Select `wyzdigital/reputationflow`
   - Click "Import"

3. **Add Environment Variables**
   - Paste all variables from `.env.local`
   - Click "Deploy"

4. **Done!** Your app is live at `https://your-app.vercel.app`

## Step 7: Set Up Webhooks (2 minutes)

1. **Get Your Deployment URL**
   - Copy your Vercel URL (e.g., `https://your-app.vercel.app`)

2. **Add Webhook in Stripe**
   - Go to **Developers → Webhooks** in Stripe Dashboard
   - Click "Add Endpoint"
   - URL: `https://your-app.vercel.app/api/webhook`
   - Select events:
     - `checkout.session.completed`
     - `customer.subscription.created`
     - `customer.subscription.updated`
     - `customer.subscription.deleted`
     - `invoice.payment_succeeded`
     - `invoice.payment_failed`
   - Click "Add Endpoint"

3. **Copy Webhook Secret**
   - Click on your new webhook
   - Click "Reveal" next to "Signing secret"
   - Copy the secret (whsec_...)

4. **Update Vercel Environment Variable**
   - Go to Vercel project settings
   - Find `STRIPE_WEBHOOK_SECRET`
   - Update with your webhook secret
   - Redeploy (Vercel will prompt you)

## 🎉 You're Done!

Your app is now live with:
- ✅ Stripe payments working
- ✅ Webhooks configured
- ✅ Automatic deployments on git push
- ✅ SSL certificate (HTTPS)

## Next Steps

### Add Custom Domain
1. Go to Vercel project settings → Domains
2. Add your domain (e.g., `app.wyzreview.com`)
3. Update DNS records as instructed
4. Wait for SSL certificate (5-10 minutes)

### Go Live with Real Payments
1. Complete Stripe account verification
2. Switch to **Live Mode** in Stripe
3. Get live API keys (pk_live_... and sk_live_...)
4. Update Vercel environment variables
5. Update webhook endpoint to use live mode
6. Test with a real card (you can refund immediately)

### Add Database (Optional)
To store user data and subscriptions:

1. **Add PostgreSQL on Vercel**
   - Go to Storage → Create Database → Postgres
   - Copy connection string

2. **Install Prisma**
   ```bash
   npm install prisma @prisma/client
   npx prisma init
   ```

3. **Create Schema**
   ```prisma
   model User {
     id        String   @id @default(cuid())
     email     String   @unique
     name      String
     stripeCustomerId String?
     subscription Subscription?
   }
   
   model Subscription {
     id        String   @id @default(cuid())
     userId    String   @unique
     user      User     @relation(fields: [userId], references: [id])
     stripeSubscriptionId String
     status    String
     planName  String
     currentPeriodEnd DateTime
   }
   ```

4. **Update Webhook Handler**
   - Add database writes in `/api/webhook.ts`
   - Store subscription data when checkout completes

## Troubleshooting

### "Stripe failed to load"
- Check that `VITE_STRIPE_PUBLISHABLE_KEY` is set correctly
- Restart dev server after changing `.env.local`

### Checkout not working
- Verify API endpoint is accessible
- Check browser console for errors
- Make sure you're using test mode keys

### Webhooks not firing
- Verify webhook URL is correct
- Check webhook secret matches
- Test webhook in Stripe Dashboard

## Need Help?

- 📖 Full docs: [STRIPE_SETUP.md](./STRIPE_SETUP.md)
- 🚀 Deployment guide: [DEPLOYMENT.md](./DEPLOYMENT.md)
- 🐛 Report issues: [GitHub Issues](https://github.com/wyzdigital/reputationflow/issues)
- 💬 Stripe support: [support.stripe.com](https://support.stripe.com)

---

**Time to launch**: ~15 minutes  
**Difficulty**: Beginner-friendly  
**Cost**: Free (Stripe test mode, Vercel hobby plan)
