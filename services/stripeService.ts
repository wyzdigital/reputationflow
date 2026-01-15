import { loadStripe, Stripe } from '@stripe/stripe-js';
import { STRIPE_CONFIG } from '../config/stripe';

let stripePromise: Promise<Stripe | null>;

export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(STRIPE_CONFIG.publishableKey);
  }
  return stripePromise;
};

export interface CheckoutSessionParams {
  priceId: string;
  customerEmail?: string;
  successUrl?: string;
  cancelUrl?: string;
}

/**
 * Create a Stripe Checkout Session
 * This function should be called from your backend API
 */
export const createCheckoutSession = async (params: CheckoutSessionParams) => {
  try {
    // In a production app, this should call your backend API
    // which then creates the checkout session using the Stripe Node SDK
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        priceId: params.priceId,
        customerEmail: params.customerEmail,
        successUrl: params.successUrl || `${window.location.origin}/success`,
        cancelUrl: params.cancelUrl || `${window.location.origin}/signup`,
      }),
    });

    const session = await response.json();
    return session;
  } catch (error) {
    console.error('Error creating checkout session:', error);
    throw error;
  }
};

/**
 * Redirect to Stripe Checkout
 */
export const redirectToCheckout = async (sessionId: string) => {
  const stripe = await getStripe();
  if (!stripe) {
    throw new Error('Stripe failed to load');
  }

  const { error } = await stripe.redirectToCheckout({ sessionId });
  
  if (error) {
    console.error('Error redirecting to checkout:', error);
    throw error;
  }
};

/**
 * Create and redirect to checkout in one step
 */
export const handleSubscriptionCheckout = async (
  priceId: string,
  customerEmail?: string
) => {
  try {
    const session = await createCheckoutSession({
      priceId,
      customerEmail,
    });
    
    if (session.id) {
      await redirectToCheckout(session.id);
    }
  } catch (error) {
    console.error('Error handling subscription checkout:', error);
    throw error;
  }
};

/**
 * Create a Customer Portal session for managing subscriptions
 */
export const createPortalSession = async (customerId: string) => {
  try {
    const response = await fetch('/api/create-portal-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        customerId,
        returnUrl: `${window.location.origin}/dashboard`,
      }),
    });

    const session = await response.json();
    return session;
  } catch (error) {
    console.error('Error creating portal session:', error);
    throw error;
  }
};

/**
 * Redirect to Customer Portal
 */
export const redirectToCustomerPortal = async (customerId: string) => {
  try {
    const session = await createPortalSession(customerId);
    if (session.url) {
      window.location.href = session.url;
    }
  } catch (error) {
    console.error('Error redirecting to customer portal:', error);
    throw error;
  }
};
