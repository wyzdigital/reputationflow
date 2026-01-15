import { Review, Campaign, FunnelConfig, ClientAccount } from '../types';

export const MOCK_REVIEWS: Review[] = [
  {
    id: '1',
    customerName: 'Alice Johnson',
    date: '2023-10-25',
    rating: 5,
    source: 'Google',
    content: 'Absolutely loved the service! The staff was attentive and the atmosphere was perfect.',
    status: 'Replied',
    sentiment: 'Positive'
  },
  {
    id: '2',
    customerName: 'Michael Smith',
    date: '2023-10-24',
    rating: 2,
    source: 'Direct',
    content: 'Wait times were incredibly long. I waited 45 minutes for a table despite having a reservation.',
    status: 'Pending',
    sentiment: 'Negative'
  },
  {
    id: '3',
    customerName: 'Sarah Davis',
    date: '2023-10-23',
    rating: 4,
    source: 'Yelp',
    content: 'Great food, but a bit pricey for the portion sizes. Would come back for special occasions.',
    status: 'Pending',
    sentiment: 'Neutral'
  },
  {
    id: '4',
    customerName: 'James Wilson',
    date: '2023-10-22',
    rating: 1,
    source: 'Direct',
    content: 'Found a hair in my soup. Unacceptable hygiene standards.',
    status: 'Flagged',
    sentiment: 'Negative'
  },
  {
    id: '5',
    customerName: 'Emily Brown',
    date: '2023-10-21',
    rating: 5,
    source: 'Google',
    content: 'Best experience I have had in years. Highly recommend to everyone.',
    status: 'Pending',
    sentiment: 'Positive'
  }
];

export const MOCK_CAMPAIGNS: Campaign[] = [
  {
    id: 'c1',
    name: 'October Customer Appreciation',
    type: 'Email',
    sent: 1250,
    opened: 850,
    converted: 120,
    status: 'Active',
    lastSent: '2023-10-25'
  },
  {
    id: 'c2',
    name: 'Table QR Codes',
    type: 'QR',
    sent: 0, // Not applicable for QR generally, but tracks scans
    opened: 430, // Scans
    converted: 55,
    status: 'Active',
    lastSent: 'N/A'
  },
  {
    id: 'c3',
    name: 'Post-Purchase SMS',
    type: 'SMS',
    sent: 500,
    opened: 480,
    converted: 90,
    status: 'Completed',
    lastSent: '2023-09-30'
  }
];

export const DEFAULT_FUNNEL_CONFIG: FunnelConfig = {
  minPublicRating: 4,
  googlePlaceId: 'ChIJN1t_tDeuEmsRUsoyG83frY4',
  yelpUrl: 'https://yelp.com/biz/example',
  facebookUrl: '',
  customMessagePositive: 'Thank you! We are thrilled you enjoyed your experience. Please share your thoughts publicly.',
  customMessageNegative: 'We are sorry we missed the mark. Please tell us how we can improve.'
};

export const MOCK_CLIENTS: ClientAccount[] = [
  {
    id: '1',
    businessName: 'Acme Corp',
    email: 'contact@acme.com',
    tier: 'Small Business',
    status: 'Active',
    reviewCount: 342,
    maxReviews: 500,
    joinedDate: '2023-01-15'
  },
  {
    id: '2',
    businessName: 'Bistro 55',
    email: 'manager@bistro55.com',
    tier: 'Free',
    status: 'Active',
    reviewCount: 3,
    maxReviews: 5,
    joinedDate: '2023-10-01'
  },
  {
    id: '3',
    businessName: 'TechFlow Solutions',
    email: 'admin@techflow.io',
    tier: 'Business',
    status: 'Active',
    reviewCount: 1250,
    maxReviews: 2000,
    joinedDate: '2022-11-20'
  },
  {
    id: '4',
    businessName: 'Global Retail',
    email: 'ops@globalretail.com',
    tier: 'Enterprise',
    status: 'Active',
    reviewCount: 15400,
    maxReviews: 'Unlimited',
    joinedDate: '2022-05-10'
  },
  {
    id: '5',
    businessName: 'Joe\'s Garage',
    email: 'joe@garage.com',
    tier: 'Free',
    status: 'Suspended',
    reviewCount: 5,
    maxReviews: 5,
    joinedDate: '2023-09-12'
  }
];