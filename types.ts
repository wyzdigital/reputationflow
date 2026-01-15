import React from 'react';

export interface Review {
  id: string;
  customerName: string;
  date: string;
  rating: number;
  source: 'Google' | 'Yelp' | 'Direct' | 'Email';
  content: string;
  status: 'Pending' | 'Replied' | 'Flagged';
  sentiment?: 'Positive' | 'Neutral' | 'Negative';
  aiAnalysis?: string;
  aiReplyDraft?: string;
}

export interface Campaign {
  id: string;
  name: string;
  type: 'Email' | 'SMS' | 'QR';
  sent: number;
  opened: number;
  converted: number;
  status: 'Active' | 'Draft' | 'Completed';
  lastSent: string;
}

export interface FunnelConfig {
  minPublicRating: number; // e.g. 4. If < 4, go to internal form.
  googlePlaceId: string;
  yelpUrl: string;
  facebookUrl: string;
  customMessagePositive: string;
  customMessageNegative: string;
}

export interface NavItem {
  label: string;
  path: string;
  icon: React.ReactNode;
}

export type Tier = 'Free' | 'Small Business' | 'Business' | 'Enterprise';

export interface ClientAccount {
  id: string;
  businessName: string;
  email: string;
  tier: Tier;
  status: 'Active' | 'Suspended';
  reviewCount: number;
  maxReviews: number | 'Unlimited';
  joinedDate: string;
}