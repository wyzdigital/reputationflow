# Stripe Integration Setup Guide

This guide will walk you through setting up Stripe payments for your ReputationFlow (WYZReview) application.

## Overview

The app now includes:
- ✅ Stripe Checkout for subscription payments
- ✅ Customer Portal for subscription management
- ✅ Webhook handling for payment events
- ✅ Pricing page with plan selection
- ✅ Success page after payment

## Step 1: Create a Stripe Account

1. Go to [https://stripe.com](https://stripe.com) and sign up for an account
2. Complete the account verification process
3. Switch to **Test Mode** using the toggle in the Stripe Dashboard (for development)

## Step 2: Get Your API Keys

1. Navigate to **Developers → API Keys** in the Stripe Dashboard
2. Copy your **Publishable Key** (starts with `pk_test_`)
3. Copy your **Secret Key** (starts with `sk_test_`)
4. Update your `.env.local` file:
   ```
   VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_actual_key_here
   STRIPE_SECRET_KEY=sk_test_your_actual_key_here
   ```

## Step 3: Create Products and Prices

### Create Small Business Plan ($49/month)

1. Go to **Products** in the Stripe Dashboard
2. Click **+ Add Product**
3. Fill in the details:
   - **Name**: Small Business Plan
   - **Description**: 500 Requests/mo, 3 Locations, Full Analytics, QR Codes
   - **Pricing**: Recurring
   - **Price**: $49.00 USD
   - **Billing Period**: Monthly
4. Click **Save Product**
5. Copy the **Price ID** (starts with `price_`)
6. Update `.env.local`:
   ```
   VITE_STRIPE_PRICE_SMALL_BUSINESS=price_your_actual_price_id
   ```

### Create Business Plan ($149/month)

1. Repeat the above steps with:
   - **Name**: Business Plan
   - **Description**: 2,000 Requests/mo, 10 Locations, API Access, Priority Support
   - **Price**: $149.00 USD
2. Copy the **Price ID** and update `.env.local`:
   ```
   VITE_STRIPE_PRICE_BUSINESS=price_your_actual_price_id
   ```

## Step 4: Deploy Backend API Endpoints

Your app needs backend API endpoints to create checkout sessions and handle webhooks. The code is in the `/api` directory.

### Option A: Deploy to Vercel (Recommended)

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts to deploy
4. Set environment variables in Vercel Dashboard:
   - `STRIPE_SECRET_KEY`
   - `STRIPE_WEBHOOK_SECRET` (get this in Step 5)

### Option B: Deploy to Netlify

1. Move API files to `netlify/functions/` directory
2. Update function exports for Netlify format
3. Deploy using Netlify CLI or GitHub integration
4. Set environment variables in Netlify Dashboard

### Option C: Custom Backend

1. Set up an Express/Fastify/Next.js server
2. Implement the API endpoints from the `/api` directory
3. Deploy to your preferred hosting (Railway, Render, etc.)
4. Update the API URLs in `stripeService.ts`

## Step 5: Set Up Webhooks

Webhooks keep your database in sync with Stripe events (subscriptions, payments, cancellations).

1. Go to **Developers → Webhooks** in Stripe Dashboard
2. Click **+ Add Endpoint**
3. Enter your webhook URL:
   - Vercel: `https://your-app.vercel.app/api/webhook`
   - Netlify: `https://your-app.netlify.app/.netlify/functions/webhook`
   - Custom: `https://your-domain.com/api/webhook`
4. Select events to listen to:
   - `checkout.session.completed`
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
   - `invoice.payment_succeeded`
   - `invoice.payment_failed`
5. Click **Add Endpoint**
6. Copy the **Signing Secret** (starts with `whsec_`)
7. Update `.env.local`:
   ```
   STRIPE_WEBHOOK_SECRET=whsec_your_actual_secret
   ```

## Step 6: Configure Customer Portal

The Customer Portal allows users to manage their subscriptions, update payment methods, and view invoices.

1. Go to **Settings → Billing → Customer Portal** in Stripe Dashboard
2. Click **Activate**
3. Configure settings:
   - ✅ Allow customers to update payment methods
   - ✅ Allow customers to update billing information
   - ✅ Allow customers to cancel subscriptions
   - ✅ Allow customers to switch plans
4. Save settings

## Step 7: Test the Integration

### Test Checkout Flow

1. Start your development server: `npm run dev`
2. Navigate to `/pricing` page
3. Click "Get Started" on a paid plan
4. Use Stripe test card: `4242 4242 4242 4242`
   - Expiry: Any future date
   - CVC: Any 3 digits
   - ZIP: Any 5 digits
5. Complete the checkout
6. Verify you're redirected to `/success`

### Test Webhooks Locally

1. Install Stripe CLI: [https://stripe.com/docs/stripe-cli](https://stripe.com/docs/stripe-cli)
2. Login: `stripe login`
3. Forward webhooks to local server:
   ```bash
   stripe listen --forward-to localhost:3000/api/webhook
   ```
4. Copy the webhook signing secret and update `.env.local`
5. Trigger test events:
   ```bash
   stripe trigger checkout.session.completed
   ```

### Test Customer Portal

1. After subscribing, go to your dashboard
2. Add a "Manage Subscription" button that calls `redirectToCustomerPortal(customerId)`
3. Click the button and verify the portal opens
4. Test updating payment method, viewing invoices, etc.

## Step 8: Implement Database Integration

The webhook handler (`/api/webhook.ts`) has TODO comments where you need to add your database logic:

```typescript
case 'checkout.session.completed': {
  // TODO: Update your database with the new subscription
  // - Create or update user record
  // - Store customer ID and subscription ID
  // - Activate subscription features
  break;
}
```

You'll need to:
1. Set up a database (PostgreSQL, MySQL, MongoDB, etc.)
2. Create a `subscriptions` table with fields:
   - `user_id`
   - `stripe_customer_id`
   - `stripe_subscription_id`
   - `plan_name`
   - `status`
   - `current_period_end`
3. Update the webhook handler to write to your database
4. Add authentication to protect dashboard routes
5. Check subscription status before allowing access to features

## Step 9: Go Live

When you're ready to accept real payments:

1. Complete Stripe account verification
2. Switch to **Live Mode** in Stripe Dashboard
3. Get your live API keys (start with `pk_live_` and `sk_live_`)
4. Update production environment variables
5. Update webhook endpoint to production URL
6. Test with a real card (you can refund it immediately)
7. Monitor the Stripe Dashboard for payments and subscriptions

## Additional Features to Implement

### Usage-Based Billing

If you want to charge based on actual review requests:
1. Create a metered price in Stripe
2. Use `stripe.subscriptionItems.createUsageRecord()` to report usage
3. Update webhook handler to track usage

### Proration

When users upgrade/downgrade:
1. Enable proration in Stripe settings
2. Use `stripe.subscriptions.update()` with `proration_behavior: 'create_prorations'`

### Free Trials

To offer a 14-day trial:
1. Add `subscription_data.trial_period_days: 14` to checkout session
2. Update pricing page to mention trial

### Discounts and Coupons

1. Create coupons in Stripe Dashboard
2. Add `allow_promotion_codes: true` to checkout session (already included)
3. Users can enter coupon codes at checkout

## Troubleshooting

### "Stripe failed to load"
- Check that `VITE_STRIPE_PUBLISHABLE_KEY` is set correctly
- Ensure the key starts with `pk_test_` or `pk_live_`
- Restart your dev server after updating `.env.local`

### Webhook signature verification failed
- Ensure `STRIPE_WEBHOOK_SECRET` matches the webhook endpoint
- Check that you're using the raw request body (not parsed JSON)
- Verify the webhook URL is correct in Stripe Dashboard

### Checkout session not redirecting
- Check browser console for errors
- Verify API endpoint is deployed and accessible
- Test API endpoint directly with curl/Postman

### Customer portal not opening
- Ensure Customer Portal is activated in Stripe Dashboard
- Verify you're passing a valid Stripe customer ID
- Check API endpoint logs for errors

## Resources

- [Stripe Documentation](https://stripe.com/docs)
- [Stripe Checkout Guide](https://stripe.com/docs/payments/checkout)
- [Stripe Webhooks Guide](https://stripe.com/docs/webhooks)
- [Stripe Testing Guide](https://stripe.com/docs/testing)
- [Stripe Customer Portal](https://stripe.com/docs/billing/subscriptions/integrating-customer-portal)

## Support

If you need help with Stripe integration:
- [Stripe Support](https://support.stripe.com/)
- [Stripe Discord Community](https://discord.gg/stripe)
- Check the `/api` directory for implementation examples
