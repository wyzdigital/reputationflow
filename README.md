# ReputationFlow (WYZReview)

A comprehensive reputation management platform that helps businesses collect 5-star reviews on Google and Yelp while handling negative feedback privately.

![GitHub](https://img.shields.io/github/license/wyzdigital/reputationflow)
![Node](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)
![React](https://img.shields.io/badge/react-19.2.3-blue)

## 🚀 Features

- **Smart Review Funnel**: Directs happy customers to public review sites and unhappy ones to private feedback
- **Multi-Platform Support**: Google, Yelp, and custom review platforms
- **Real-Time Analytics**: Track review performance, sentiment analysis, and campaign effectiveness
- **QR Code Generation**: Create scannable codes for easy review collection
- **AI-Powered Insights**: Gemini AI analyzes feedback and suggests improvements
- **Subscription Management**: Stripe-powered payment processing with multiple tiers
- **Customer Portal**: Self-service subscription and billing management
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile

## 📋 Table of Contents

- [Quick Start](#quick-start)
- [Installation](#installation)
- [Configuration](#configuration)
- [Stripe Integration](#stripe-integration)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [Contributing](#contributing)
- [License](#license)

## ⚡ Quick Start

### Prerequisites

- Node.js 18+ 
- npm or pnpm
- Stripe account (for payments)
- Gemini API key (for AI features)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/wyzdigital/reputationflow.git
   cd reputationflow
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.local.example .env.local
   # Edit .env.local with your API keys
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   ```
   http://localhost:5173
   ```

## 🔧 Installation

### Development Setup

```bash
# Install dependencies
npm install

# Run development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Production Setup

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions for:
- Vercel (recommended)
- Netlify
- Railway
- Custom VPS

## ⚙️ Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```bash
# Gemini AI
GEMINI_API_KEY=your_gemini_api_key

# Stripe (Frontend - VITE_ prefix required)
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_key
VITE_STRIPE_PRICE_SMALL_BUSINESS=price_your_id
VITE_STRIPE_PRICE_BUSINESS=price_your_id

# Stripe (Backend - NO VITE_ prefix)
STRIPE_SECRET_KEY=sk_test_your_key
STRIPE_WEBHOOK_SECRET=whsec_your_secret
```

### Stripe Setup

See [STRIPE_SETUP.md](./STRIPE_SETUP.md) for complete Stripe integration guide including:
- Creating products and prices
- Setting up webhooks
- Configuring customer portal
- Testing payments
- Going live

## 💳 Stripe Integration

This app includes a complete Stripe subscription integration:

### Features
- ✅ Subscription checkout with Stripe Checkout
- ✅ Multiple pricing tiers (Free, Small Business, Business, Enterprise)
- ✅ Customer portal for subscription management
- ✅ Webhook handling for payment events
- ✅ Automatic subscription status updates
- ✅ Proration support for plan changes
- ✅ Test mode for development

### API Endpoints

The `/api` directory contains serverless functions for:
- `create-checkout-session.ts` - Creates Stripe checkout sessions
- `create-portal-session.ts` - Creates customer portal sessions
- `webhook.ts` - Handles Stripe webhook events

### Pricing Tiers

| Plan | Price | Features |
|------|-------|----------|
| **Free** | $0/mo | 5 reviews, Basic dashboard, Email support |
| **Small Business** | $49/mo | 500 requests/mo, 3 locations, Full analytics, QR codes |
| **Business** | $149/mo | 2,000 requests/mo, 10 locations, API access, Priority support |
| **Enterprise** | Custom | Unlimited requests, Unlimited locations, White labeling, Dedicated manager |

## 🚀 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/wyzdigital/reputationflow)

1. Click the button above or:
   ```bash
   npm i -g vercel
   vercel
   ```

2. Set environment variables in Vercel dashboard

3. Configure Stripe webhook endpoint:
   ```
   https://your-app.vercel.app/api/webhook
   ```

### Deploy to Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Add environment variables
5. Deploy

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

## 📁 Project Structure

```
reputationflow/
├── api/                          # Serverless API functions
│   ├── create-checkout-session.ts
│   ├── create-portal-session.ts
│   └── webhook.ts
├── components/                   # React components
│   ├── Header.tsx
│   └── Sidebar.tsx
├── config/                       # Configuration files
│   └── stripe.ts
├── pages/                        # Page components
│   ├── LandingPage.tsx
│   ├── Pricing.tsx
│   ├── Signup.tsx
│   ├── Login.tsx
│   ├── Dashboard.tsx
│   ├── Reviews.tsx
│   ├── Campaigns.tsx
│   ├── FunnelConfig.tsx
│   ├── Success.tsx
│   └── ...
├── services/                     # Service layer
│   ├── stripeService.ts
│   ├── geminiService.ts
│   └── mockData.ts
├── App.tsx                       # Main app component
├── index.tsx                     # Entry point
├── types.ts                      # TypeScript types
├── vite.config.ts               # Vite configuration
├── vercel.json                  # Vercel deployment config
├── STRIPE_SETUP.md              # Stripe integration guide
├── DEPLOYMENT.md                # Deployment guide
└── README.md                    # This file
```

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS (via custom classes)
- **Lucide React** - Icon library
- **Recharts** - Data visualization

### Backend
- **Stripe** - Payment processing
- **Stripe Checkout** - Hosted checkout pages
- **Stripe Webhooks** - Event handling
- **Serverless Functions** - API endpoints

### AI & Services
- **Google Gemini AI** - AI-powered insights
- **Stripe Customer Portal** - Self-service billing

### Development
- **ESLint** - Code linting
- **TypeScript** - Static type checking
- **Git** - Version control
- **GitHub** - Code hosting

## 🎨 Customization

### Branding

Update colors in your CSS/Tailwind config:
- Primary: `brand-orange` (#FF6B35)
- Secondary: `brand-dark` (#1A1A1A)
- Accent: `wyz-500` (custom red)

### Pricing

Edit pricing tiers in:
- `pages/LandingPage.tsx` - Landing page pricing section
- `pages/Pricing.tsx` - Dedicated pricing page
- `config/stripe.ts` - Stripe configuration

### Features

Add new pages/features:
1. Create component in `pages/`
2. Add route in `App.tsx`
3. Update navigation in `Sidebar.tsx`

## 🧪 Testing

### Test Stripe Integration

Use Stripe test cards:
- **Success**: `4242 4242 4242 4242`
- **Decline**: `4000 0000 0000 0002`
- **3D Secure**: `4000 0025 0000 3155`

Expiry: Any future date  
CVC: Any 3 digits  
ZIP: Any 5 digits

### Test Webhooks Locally

```bash
# Install Stripe CLI
brew install stripe/stripe-cli/stripe

# Login
stripe login

# Forward webhooks
stripe listen --forward-to localhost:5173/api/webhook

# Trigger test events
stripe trigger checkout.session.completed
```

## 📊 Analytics & Monitoring

### Built-in Analytics
- Review collection metrics
- Campaign performance tracking
- Sentiment analysis
- Response rate monitoring

### Recommended Tools
- **Vercel Analytics** - Performance monitoring
- **Sentry** - Error tracking
- **Google Analytics** - User behavior
- **Stripe Dashboard** - Payment analytics

## 🔒 Security

- Environment variables for sensitive data
- Stripe webhook signature verification
- HTTPS enforced in production
- Input validation on all forms
- XSS protection with React
- CSRF protection on API endpoints

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: Check [STRIPE_SETUP.md](./STRIPE_SETUP.md) and [DEPLOYMENT.md](./DEPLOYMENT.md)
- **Issues**: [GitHub Issues](https://github.com/wyzdigital/reputationflow/issues)
- **Stripe Support**: [https://support.stripe.com](https://support.stripe.com)

## 🎯 Roadmap

- [ ] Email notification system
- [ ] SMS review requests
- [ ] Advanced analytics dashboard
- [ ] Multi-language support
- [ ] Mobile app (React Native)
- [ ] API for third-party integrations
- [ ] White-label solution
- [ ] Advanced AI insights

## 📸 Screenshots

### Landing Page
Beautiful, conversion-optimized landing page with clear value proposition.

### Dashboard
Real-time analytics showing review performance and trends.

### Pricing Page
Clear pricing tiers with Stripe checkout integration.

### Review Funnel
Smart funnel that routes customers based on satisfaction level.

## 🙏 Acknowledgments

- Built with [React](https://react.dev)
- Powered by [Stripe](https://stripe.com)
- AI by [Google Gemini](https://ai.google.dev)
- Icons by [Lucide](https://lucide.dev)
- Deployed on [Vercel](https://vercel.com)

---

Made with ❤️ by WYZ Digital LLC

**Repository**: [https://github.com/wyzdigital/reputationflow](https://github.com/wyzdigital/reputationflow)
