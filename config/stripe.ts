export const STRIPE_CONFIG = {
  publishableKey: import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || '',
  // Price IDs for each subscription tier (replace with your actual Stripe Price IDs)
  prices: {
    smallBusiness: import.meta.env.VITE_STRIPE_PRICE_SMALL_BUSINESS || 'price_small_business',
    business: import.meta.env.VITE_STRIPE_PRICE_BUSINESS || 'price_business',
  },
  // Product information
  products: {
    free: {
      name: 'Free',
      price: 0,
      features: ['Up to 5 Reviews', 'Basic Dashboard', 'Email Support'],
    },
    smallBusiness: {
      name: 'Small Business',
      price: 49,
      priceId: 'price_small_business',
      features: ['500 Requests/mo', '3 Locations', 'Full Analytics', 'QR Codes'],
    },
    business: {
      name: 'Business',
      price: 149,
      priceId: 'price_business',
      features: ['2,000 Requests/mo', '10 Locations', 'API Access', 'Priority Support'],
    },
  },
};
