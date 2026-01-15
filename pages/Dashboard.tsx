import React, { useEffect, useState } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, LineChart, Line 
} from 'recharts';
import { Star, TrendingUp, Users, MessageSquare } from 'lucide-react';
import Header from '../components/Header';
import { generateFunnelAdvice } from '../services/geminiService';

const data = [
  { name: 'Mon', reviews: 4, rating: 4.2 },
  { name: 'Tue', reviews: 3, rating: 3.8 },
  { name: 'Wed', reviews: 7, rating: 4.5 },
  { name: 'Thu', reviews: 5, rating: 4.0 },
  { name: 'Fri', reviews: 9, rating: 4.8 },
  { name: 'Sat', reviews: 12, rating: 4.6 },
  { name: 'Sun', reviews: 8, rating: 4.3 },
];

const StatCard = ({ icon, label, value, trend, color }: any) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start justify-between">
    <div>
      <p className="text-sm font-medium text-gray-500 mb-1">{label}</p>
      <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
      <div className={`flex items-center mt-2 text-xs font-medium ${trend.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
        <TrendingUp size={14} className="mr-1" />
        {trend} vs last week
      </div>
    </div>
    <div className={`p-3 rounded-lg ${color}`}>
      {icon}
    </div>
  </div>
);

const Dashboard = () => {
  const [advice, setAdvice] = useState<string | null>(null);
  const [loadingAdvice, setLoadingAdvice] = useState(false);

  useEffect(() => {
    const fetchAdvice = async () => {
        if (!process.env.API_KEY) return;
        setLoadingAdvice(true);
        const result = await generateFunnelAdvice({ avgRating: 4.4, totalReviews: 1248, nps: 72 });
        setAdvice(result || "No advice available.");
        setLoadingAdvice(false);
    };
    fetchAdvice();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      <Header title="Dashboard" />
      <main className="px-8 py-8 md:ml-64 space-y-8">
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard 
            icon={<Star className="text-yellow-600" />} 
            color="bg-yellow-50"
            label="Average Rating" 
            value="4.4" 
            trend="+0.2" 
          />
          <StatCard 
            icon={<MessageSquare className="text-blue-600" />} 
            color="bg-blue-50"
            label="Total Reviews" 
            value="1,248" 
            trend="+12%" 
          />
          <StatCard 
            icon={<Users className="text-indigo-600" />} 
            color="bg-indigo-50"
            label="NPS Score" 
            value="72" 
            trend="+4" 
          />
          <StatCard 
            icon={<TrendingUp className="text-green-600" />} 
            color="bg-green-50"
            label="Sentiment" 
            value="Positive" 
            trend="+5%" 
          />
        </div>

        {/* AI Insight Section */}
        <div className="bg-gradient-to-r from-brand-600 to-indigo-700 rounded-xl p-6 text-white shadow-lg relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-lg font-bold mb-2 flex items-center">
                <span className="mr-2">✨</span> Gemini Strategic Insights
            </h2>
            {loadingAdvice ? (
                <div className="animate-pulse h-16 bg-white/20 rounded"></div>
            ) : (
                 <div className="prose prose-invert max-w-none text-brand-50 text-sm">
                    {advice ? (
                         <div dangerouslySetInnerHTML={{ __html: advice.replace(/\n/g, '<br/>') }} />
                    ) : (
                        <p>Configure your API Key to unlock AI-driven strategic advice for your business reputation.</p>
                    )}
                </div>
            )}
          </div>
           {/* Decorative circles */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-indigo-500 opacity-20 rounded-full blur-2xl"></div>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Review Volume */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-800 mb-6">Review Volume & Rating</h3>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} />
                  <YAxis yAxisId="left" axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} />
                  <YAxis yAxisId="right" orientation="right" domain={[0, 5]} hide />
                  <RechartsTooltip 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  />
                  <Line yAxisId="left" type="monotone" dataKey="reviews" stroke="#3b82f6" strokeWidth={3} dot={{r: 4}} activeDot={{r: 6}} />
                  <Line yAxisId="right" type="monotone" dataKey="rating" stroke="#fbbf24" strokeWidth={3} dot={{r: 4}} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Source Distribution */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-800 mb-6">Review Sources</h3>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={[
                  { source: 'Google', count: 450 },
                  { source: 'Yelp', count: 210 },
                  { source: 'Direct', count: 180 },
                  { source: 'Facebook', count: 90 },
                ]}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                  <XAxis dataKey="source" axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} />
                  <RechartsTooltip cursor={{fill: '#f3f4f6'}} contentStyle={{ borderRadius: '8px', border: 'none' }}/>
                  <Bar dataKey="count" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={40} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;