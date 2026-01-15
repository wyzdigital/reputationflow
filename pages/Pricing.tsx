import React, { useState } from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';
import { Check, ArrowLeft } from 'lucide-react';
import { handleSubscriptionCheckout } from '../services/stripeService';
import { STRIPE_CONFIG } from '../config/stripe';

const Pricing = () => {
  const [searchParams] = useSearchParams();
  const email = searchParams.get('email') || '';
  const [loading, setLoading] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handlePlanSelection = async (priceId: string, planName: string) => {
    if (planName === 'Free') {
      // Redirect to signup for free plan
      window.location.href = '/signup';
      return;
    }

    if (planName === 'Enterprise') {
      // Redirect to contact for enterprise
      window.location.href = '/contact';
      return;
    }

    try {
      setLoading(priceId);
      setError(null);
      await handleSubscriptionCheckout(priceId, email);
    } catch (err) {
      console.error('Checkout error:', err);
      setError('Failed to start checkout. Please try again.');
      setLoading(null);
    }
  };

  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: '/mo',
      description: 'For small tests',
      features: [
        'Up to 5 Reviews',
        'Basic Dashboard',
        'Email Support',
      ],
      priceId: null,
      buttonText: 'Start Free',
      buttonStyle: 'border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white',
      popular: false,
    },
    {
      name: 'Small Business',
      price: '$49',
      period: '/mo',
      description: 'Growing locations',
      features: [
        '500 Requests/mo',
        '3 Locations',
        'Full Analytics',
        'QR Codes',
      ],
      priceId: STRIPE_CONFIG.prices.smallBusiness,
      buttonText: 'Get Started',
      buttonStyle: 'bg-brand-orange text-white hover:bg-orange-600 hover:shadow-lg',
      popular: true,
    },
    {
      name: 'Business',
      price: '$149',
      period: '/mo',
      description: 'Established brands',
      features: [
        '2,000 Requests/mo',
        '10 Locations',
        'API Access',
        'Priority Support',
      ],
      priceId: STRIPE_CONFIG.prices.business,
      buttonText: 'Get Started',
      buttonStyle: 'border border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white',
      popular: false,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Large scale ops',
      features: [
        'Unlimited Requests',
        'Unlimited Locations',
        'White Labeling',
        'Dedicated Manager',
      ],
      priceId: null,
      buttonText: 'Contact Sales',
      buttonStyle: 'border border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white',
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-wyz-50">
      <div className="p-6">
        <NavLink to="/" className="flex items-center text-gray-600 hover:text-wyz-500 transition-colors font-medium w-fit">
          <ArrowLeft size={20} className="mr-2" />
          Back to Home
        </NavLink>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Choose Your Plan
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Start with our free tier or upgrade to unlock more features and grow your reputation.
          </p>
        </div>

        {error && (
          <div className="max-w-2xl mx-auto mb-8 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-center">
            {error}
          </div>
        )}

        <div className="grid md:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-white rounded-2xl p-8 flex flex-col relative ${
                plan.popular
                  ? 'transform md:-translate-y-4 shadow-xl border-2 border-brand-orange'
                  : 'border border-gray-200 hover:border-gray-300 transition-colors'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-brand-orange text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                  POPULAR
                </div>
              )}

              <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <p className="text-gray-400 text-sm mb-6">{plan.description}</p>
              
              <div className="text-5xl font-extrabold mb-6 text-gray-900">
                {plan.price}
                <span className="text-lg text-gray-400 font-medium">{plan.period}</span>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-gray-600">
                    <div className={`rounded-full p-0.5 mr-3 text-white ${plan.popular ? 'bg-green-500' : 'bg-brand-orange'}`}>
                      <Check size={10} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => plan.priceId && handlePlanSelection(plan.priceId, plan.name)}
                disabled={loading === plan.priceId}
                className={`w-full py-3.5 rounded-xl font-bold text-center transition-all shadow-md ${plan.buttonStyle} ${
                  loading === plan.priceId ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {loading === plan.priceId ? 'Loading...' : plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm">
            All plans include a 14-day free trial. No credit card required for the free tier.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Need help choosing? <NavLink to="/contact" className="text-brand-orange font-semibold hover:underline">Contact us</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
