/**
 * Backend API endpoint for creating Stripe Checkout Sessions
 * 
 * This file demonstrates the backend logic needed for Stripe integration.
 * You'll need to deploy this as a serverless function or API endpoint.
 * 
 * For Vercel: Place in /api directory
 * For Netlify: Place in /netlify/functions directory
 * For custom backend: Implement in your Express/Fastify/etc server
 */

import Stripe from 'stripe';

// Initialize Stripe with your secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-12-18.acacia',
});

export default async function handler(req: any, res: any) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { priceId, customerEmail, successUrl, cancelUrl } = req.body;

    // Validate required fields
    if (!priceId) {
      return res.status(400).json({ error: 'Price ID is required' });
    }

    // Create Checkout Session
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      customer_email: customerEmail,
      success_url: successUrl,
      cancel_url: cancelUrl,
      allow_promotion_codes: true,
      billing_address_collection: 'auto',
      metadata: {
        // Add any custom metadata you want to track
      },
    });

    return res.status(200).json({ id: session.id, url: session.url });
  } catch (error: any) {
    console.error('Error creating checkout session:', error);
    return res.status(500).json({ error: error.message });
  }
}
