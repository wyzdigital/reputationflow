import React from 'react';
import { Mail, QrCode, Plus, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import { MOCK_CAMPAIGNS } from '../services/mockData';

const Campaigns = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      <Header title="Campaigns" />
      <main className="px-8 py-8 md:ml-64">
        
        <div className="flex justify-between items-center mb-8">
            <h2 className="text-lg font-bold text-gray-800">Your Campaigns</h2>
            <button className="bg-brand-600 hover:bg-brand-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center transition-colors shadow-sm">
                <Plus size={16} className="mr-2" />
                New Campaign
            </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
            {/* Create New Card - Email */}
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:border-brand-400 hover:bg-brand-50/50 transition-all cursor-pointer group h-64">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                    <Mail size={24} />
                </div>
                <h3 className="font-semibold text-gray-900">Email Request</h3>
                <p className="text-sm text-gray-500 mt-2 max-w-xs">Send automated review requests to your customer list via email.</p>
            </div>

            {/* Create New Card - QR */}
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:border-brand-400 hover:bg-brand-50/50 transition-all cursor-pointer group h-64">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-4 group-hover:scale-110 transition-transform">
                    <QrCode size={24} />
                </div>
                <h3 className="font-semibold text-gray-900">QR Code</h3>
                <p className="text-sm text-gray-500 mt-2 max-w-xs">Generate a printable QR code for physical locations.</p>
            </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 bg-gray-50/50">
                <h3 className="font-semibold text-gray-800">Active Campaigns</h3>
            </div>
            <div className="divide-y divide-gray-100">
                {MOCK_CAMPAIGNS.map(campaign => (
                    <div key={campaign.id} className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
                        <div className="flex items-center space-x-4">
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${campaign.type === 'Email' ? 'bg-blue-100 text-blue-600' : campaign.type === 'QR' ? 'bg-purple-100 text-purple-600' : 'bg-green-100 text-green-600'}`}>
                                {campaign.type === 'Email' ? <Mail size={20} /> : campaign.type === 'QR' ? <QrCode size={20} /> : <Mail size={20} />}
                            </div>
                            <div>
                                <h4 className="font-medium text-gray-900">{campaign.name}</h4>
                                <p className="text-xs text-gray-500">Last active: {campaign.lastSent}</p>
                            </div>
                        </div>
                        
                        <div className="flex items-center space-x-8">
                            <div className="text-center">
                                <p className="text-lg font-bold text-gray-800">{campaign.sent > 0 ? campaign.sent : '∞'}</p>
                                <p className="text-xs text-gray-500 uppercase tracking-wide">Sent</p>
                            </div>
                            <div className="text-center">
                                <p className="text-lg font-bold text-gray-800">{campaign.opened}</p>
                                <p className="text-xs text-gray-500 uppercase tracking-wide">Opened/Scan</p>
                            </div>
                            <div className="text-center">
                                <p className="text-lg font-bold text-green-600">{campaign.converted}</p>
                                <p className="text-xs text-gray-500 uppercase tracking-wide">Reviews</p>
                            </div>
                        </div>

                        <button className="text-gray-400 hover:text-brand-600">
                            <ArrowRight size={20} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
      </main>
    </div>
  );
};

export default Campaigns;