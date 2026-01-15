import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowLeft, Save, CreditCard, Layers, ShieldAlert } from 'lucide-react';

const AdminSettings = () => {
  const [tiers, setTiers] = useState([
    { name: 'Small Business', price: 49, reviewLimit: 500 },
    { name: 'Business', price: 149, reviewLimit: 2000 },
    { name: 'Enterprise', price: 'Custom', reviewLimit: 'Unlimited' },
  ]);

  const [paymentConfig, setPaymentConfig] = useState({
    provider: 'Stripe',
    apiKey: 'pk_live_51Mz...',
    currency: 'USD'
  });

  const handleSave = () => {
    alert("System settings saved successfully.");
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-wyz-900">
      <header className="bg-wyz-900 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <div className="flex items-center space-x-3">
                <NavLink to="/admin" className="text-gray-400 hover:text-white transition-colors">
                    <ArrowLeft size={24} />
                </NavLink>
                <h1 className="text-xl font-bold">Platform Settings</h1>
            </div>
            <button onClick={handleSave} className="bg-wyz-500 hover:bg-red-500 text-white px-4 py-2 rounded-lg font-medium flex items-center shadow-sm transition-colors">
                <Save size={18} className="mr-2" /> Save Changes
            </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8 space-y-8">
        
        {/* Tier Pricing Configuration */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 bg-gray-50 flex items-center gap-2">
                <Layers size={20} className="text-wyz-500" />
                <h2 className="font-bold text-gray-800">Subscription Tiers & Pricing</h2>
            </div>
            <div className="p-6">
                <div className="grid gap-6">
                    {tiers.map((tier, index) => (
                        <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end border-b border-gray-100 pb-4 last:border-0">
                            <div>
                                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Tier Name</label>
                                <input type="text" value={tier.name} className="w-full border border-gray-300 rounded px-3 py-2 text-sm font-medium bg-gray-50 text-gray-500" disabled />
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Monthly Price ($)</label>
                                <input 
                                    type="text" 
                                    value={tier.price} 
                                    onChange={(e) => {
                                        const newTiers = [...tiers];
                                        newTiers[index].price = e.target.value as any;
                                        setTiers(newTiers);
                                    }}
                                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-wyz-500 focus:outline-none" 
                                />
                            </div>
                             <div>
                                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Monthly Requests</label>
                                <input 
                                    type="text" 
                                    value={tier.reviewLimit} 
                                    onChange={(e) => {
                                        const newTiers = [...tiers];
                                        newTiers[index].reviewLimit = e.target.value as any;
                                        setTiers(newTiers);
                                    }}
                                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-wyz-500 focus:outline-none" 
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Payment Settings */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
             <div className="px-6 py-4 border-b border-gray-100 bg-gray-50 flex items-center gap-2">
                <CreditCard size={20} className="text-wyz-500" />
                <h2 className="font-bold text-gray-800">Payment Gateway</h2>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Provider</label>
                    <select 
                        value={paymentConfig.provider}
                        onChange={(e) => setPaymentConfig({...paymentConfig, provider: e.target.value})}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-wyz-500 focus:border-wyz-500"
                    >
                        <option value="Stripe">Stripe</option>
                        <option value="PayPal">PayPal</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Currency</label>
                    <select 
                        value={paymentConfig.currency}
                        onChange={(e) => setPaymentConfig({...paymentConfig, currency: e.target.value})}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-wyz-500 focus:border-wyz-500"
                    >
                        <option value="USD">USD ($)</option>
                        <option value="EUR">EUR (€)</option>
                        <option value="GBP">GBP (£)</option>
                    </select>
                </div>
                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">API Key (Public)</label>
                    <input 
                        type="text" 
                        value={paymentConfig.apiKey} 
                         onChange={(e) => setPaymentConfig({...paymentConfig, apiKey: e.target.value})}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm font-mono text-gray-600 focus:ring-wyz-500 focus:border-wyz-500" 
                    />
                </div>
            </div>
        </section>

         {/* Admin Controls */}
         <section className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
             <div className="px-6 py-4 border-b border-gray-100 bg-gray-50 flex items-center gap-2">
                <ShieldAlert size={20} className="text-red-500" />
                <h2 className="font-bold text-gray-800">Danger Zone</h2>
            </div>
            <div className="p-6">
                <div className="flex items-center justify-between py-2">
                    <div>
                        <h3 className="font-medium text-gray-900">Maintenance Mode</h3>
                        <p className="text-xs text-gray-500">Disable access for all non-admin users.</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-wyz-500"></div>
                    </label>
                </div>
            </div>
        </section>

      </main>
    </div>
  );
};

export default AdminSettings;