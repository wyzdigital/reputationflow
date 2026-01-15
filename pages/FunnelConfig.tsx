import React, { useState } from 'react';
import { Save, Smartphone, Star, ExternalLink, AlertTriangle, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import { DEFAULT_FUNNEL_CONFIG } from '../services/mockData';
import { FunnelConfig } from '../types';

const FunnelConfigPage = () => {
  const [config, setConfig] = useState<FunnelConfig>(DEFAULT_FUNNEL_CONFIG);
  const [activeTab, setActiveTab] = useState<'config' | 'preview'>('config');
  const [previewRating, setPreviewRating] = useState<number>(0);

  const handleSave = () => {
    alert("Configuration saved successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      <Header title="Funnel Configuration" />
      <main className="px-8 py-8 md:ml-64">
        
        <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Column: Config */}
            <div className="flex-1 space-y-6">
                
                {/* Tabs */}
                <div className="bg-white rounded-lg p-1 inline-flex border border-gray-200 shadow-sm">
                    <button 
                        onClick={() => setActiveTab('config')}
                        className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${activeTab === 'config' ? 'bg-brand-100 text-brand-700' : 'text-gray-600 hover:text-gray-900'}`}
                    >
                        Settings
                    </button>
                    <button 
                         onClick={() => setActiveTab('preview')}
                        className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${activeTab === 'preview' ? 'bg-brand-100 text-brand-700' : 'text-gray-600 hover:text-gray-900'}`}
                    >
                        Live Preview
                    </button>
                </div>

                {activeTab === 'config' ? (
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-6 animate-in fade-in">
                        
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-1">Routing Logic</h3>
                            <p className="text-sm text-gray-500 mb-4">Determine which reviews are sent public vs internal.</p>
                            
                            <div className="bg-blue-50 border border-blue-100 p-4 rounded-lg flex items-start gap-3">
                                <div className="p-2 bg-blue-100 rounded-full text-blue-600 mt-1">
                                    <AlertTriangle size={16} />
                                </div>
                                <div>
                                    <p className="text-sm text-blue-800 font-medium">Smart Routing Active</p>
                                    <p className="text-xs text-blue-600 mt-1">Customers rating <strong>{config.minPublicRating} stars</strong> or higher will be asked to review on Google/Yelp. Others will see a feedback form.</p>
                                </div>
                            </div>

                            <div className="mt-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Minimum Rating for Public Review</label>
                                <div className="flex items-center space-x-2">
                                    {[1, 2, 3, 4, 5].map(num => (
                                        <button 
                                            key={num}
                                            onClick={() => setConfig({...config, minPublicRating: num})}
                                            className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${config.minPublicRating === num ? 'bg-brand-600 text-white ring-4 ring-brand-100' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                                        >
                                            {num}
                                        </button>
                                    ))}
                                    <span className="text-sm text-gray-500 ml-2">stars</span>
                                </div>
                            </div>
                        </div>

                        <hr className="border-gray-100" />

                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">Destinations</h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Google Place ID</label>
                                    <input 
                                        type="text" 
                                        value={config.googlePlaceId}
                                        onChange={(e) => setConfig({...config, googlePlaceId: e.target.value})}
                                        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-brand-500 focus:border-brand-500" 
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Yelp Business URL</label>
                                    <input 
                                        type="text" 
                                        value={config.yelpUrl}
                                        onChange={(e) => setConfig({...config, yelpUrl: e.target.value})}
                                        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-brand-500 focus:border-brand-500" 
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="pt-4">
                            <button 
                                onClick={handleSave}
                                className="w-full md:w-auto bg-brand-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-brand-700 transition-colors flex items-center justify-center"
                            >
                                <Save size={18} className="mr-2" />
                                Save Configuration
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 flex flex-col items-center justify-center min-h-[400px] animate-in fade-in">
                        <p className="text-gray-500 mb-4">Interact with the mobile simulator on the right to test your flow.</p>
                        <div className="hidden lg:block text-brand-600">
                            <ArrowRight size={32} />
                        </div>
                    </div>
                )}
            </div>

            {/* Right Column: Phone Preview */}
            <div className="w-full lg:w-[380px] flex-shrink-0 flex justify-center sticky top-24">
                <div className="w-[320px] h-[640px] bg-gray-900 rounded-[3rem] p-4 shadow-2xl relative border-8 border-gray-800">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-xl z-20"></div>
                    
                    {/* Phone Screen Content */}
                    <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden flex flex-col relative">
                        {/* Fake Browser Bar */}
                        <div className="bg-gray-50 p-3 text-center border-b border-gray-200">
                            <p className="text-[10px] text-gray-500">review.acmecorp.com</p>
                        </div>

                        {/* Content */}
                        <div className="flex-1 p-6 flex flex-col items-center text-center overflow-y-auto">
                            <div className="w-16 h-16 bg-gray-100 rounded-full mb-6 flex items-center justify-center">
                                <span className="text-2xl font-bold text-gray-400">Logo</span>
                            </div>
                            
                            <h2 className="text-xl font-bold text-gray-900 mb-2">How was your experience?</h2>
                            <p className="text-sm text-gray-600 mb-8">Your feedback helps us serve you better.</p>

                            <div className="flex space-x-2 mb-8">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button 
                                        key={star}
                                        onClick={() => setPreviewRating(star)}
                                        className="transition-transform active:scale-90 focus:outline-none"
                                    >
                                        <Star 
                                            size={32} 
                                            className={`${star <= previewRating ? 'text-yellow-400 fill-current' : 'text-gray-200 fill-current'}`} 
                                        />
                                    </button>
                                ))}
                            </div>

                            {previewRating > 0 && (
                                <div className="w-full animate-in slide-in-from-bottom-4 fade-in duration-300">
                                    {previewRating >= config.minPublicRating ? (
                                        // Positive Flow
                                        <div className="space-y-4">
                                            <div className="bg-green-50 text-green-800 p-3 rounded-lg text-sm mb-4">
                                                {config.customMessagePositive}
                                            </div>
                                            <button className="w-full py-3 bg-white border border-gray-200 rounded-xl shadow-sm hover:bg-gray-50 flex items-center justify-center space-x-2">
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" className="w-5 h-5" alt="Google" />
                                                <span className="font-medium text-gray-700">Review on Google</span>
                                            </button>
                                            <button className="w-full py-3 bg-white border border-gray-200 rounded-xl shadow-sm hover:bg-gray-50 flex items-center justify-center space-x-2">
                                                <span className="font-bold text-red-600">Yelp</span>
                                                <span className="font-medium text-gray-700">Review on Yelp</span>
                                            </button>
                                        </div>
                                    ) : (
                                        // Negative Flow
                                        <div className="space-y-3 text-left">
                                             <div className="bg-gray-50 text-gray-700 p-3 rounded-lg text-sm mb-2 text-center">
                                                {config.customMessageNegative}
                                            </div>
                                            <div>
                                                <label className="text-xs font-medium text-gray-500 ml-1">What went wrong?</label>
                                                <textarea className="w-full border border-gray-300 rounded-lg p-2 text-sm mt-1 focus:ring-brand-500 focus:border-brand-500" rows={3}></textarea>
                                            </div>
                                            <div>
                                                <label className="text-xs font-medium text-gray-500 ml-1">Email (Optional)</label>
                                                <input type="email" className="w-full border border-gray-300 rounded-lg p-2 text-sm mt-1" />
                                            </div>
                                            <button className="w-full py-3 bg-brand-600 text-white rounded-xl font-medium shadow-sm hover:bg-brand-700 mt-2">
                                                Send Feedback
                                            </button>
                                        </div>
                                    )}
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </div>
      </main>
    </div>
  );
};

export default FunnelConfigPage;