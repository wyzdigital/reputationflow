import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Search, Shield, MoreVertical, Plus, CheckCircle, XCircle, LogOut, X, Mail, Settings } from 'lucide-react';
import { MOCK_CLIENTS } from '../services/mockData';
import { ClientAccount, Tier } from '../types';

const AdminDashboard = () => {
  const [clients, setClients] = useState<ClientAccount[]>(MOCK_CLIENTS);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  
  // Modal State
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newClient, setNewClient] = useState({
      businessName: '',
      email: '',
      tier: 'Small Business' as Tier
  });

  const handleTierChange = (id: string, newTier: Tier) => {
    setClients(clients.map(c => {
        if (c.id === id) {
            let maxReviews: number | 'Unlimited' = 5;
            if (newTier === 'Small Business') maxReviews = 500;
            if (newTier === 'Business') maxReviews = 2000;
            if (newTier === 'Enterprise') maxReviews = 'Unlimited';
            
            return { ...c, tier: newTier, maxReviews };
        }
        return c;
    }));
    setEditingId(null);
  };

  const handleAddClient = (e: React.FormEvent) => {
      e.preventDefault();
      // Basic validation
      if (!newClient.businessName.trim() || !newClient.email.trim()) {
          alert("Please fill in all fields");
          return;
      }

      let maxReviews: number | 'Unlimited' = 5;
      if (newClient.tier === 'Small Business') maxReviews = 500;
      if (newClient.tier === 'Business') maxReviews = 2000;
      if (newClient.tier === 'Enterprise') maxReviews = 'Unlimited';

      const newAccount: ClientAccount = {
          id: Math.random().toString(36).substring(2, 9),
          businessName: newClient.businessName,
          email: newClient.email,
          tier: newClient.tier,
          status: 'Active',
          reviewCount: 0,
          maxReviews,
          joinedDate: new Date().toISOString().split('T')[0]
      };

      setClients([newAccount, ...clients]);
      setIsAddModalOpen(false);
      setNewClient({ businessName: '', email: '', tier: 'Small Business' });
      
      // Simulate sending login
      setTimeout(() => {
          alert(`✅ Account Created!\n\nLogin credentials have been securely sent to ${newAccount.email}.`);
      }, 100);
  };

  const filteredClients = clients.filter(c => 
    c.businessName.toLowerCase().includes(searchTerm.toLowerCase()) || 
    c.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-wyz-900">
        {/* Admin Header */}
        <header className="bg-wyz-900 text-white shadow-md">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <Shield className="text-wyz-500" size={24} />
                    <h1 className="text-xl font-bold">WYZReview Master Admin</h1>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="text-sm text-gray-300 mr-2">Logged in as SuperUser</div>
                    <NavLink to="/admin/settings" className="text-sm bg-wyz-800 hover:bg-wyz-700 px-3 py-1.5 rounded text-white flex items-center transition-colors">
                        <Settings size={14} className="mr-2" /> Settings
                    </NavLink>
                    <NavLink to="/login" className="text-sm bg-wyz-800 hover:bg-wyz-700 px-3 py-1.5 rounded text-white flex items-center transition-colors">
                        <LogOut size={14} className="mr-2" /> Logout
                    </NavLink>
                </div>
            </div>
        </header>

        <main className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800">Client Accounts</h2>
                    <p className="text-gray-500 mt-1">Manage subscriptions, tiers, and access.</p>
                </div>
                <button 
                    onClick={() => setIsAddModalOpen(true)}
                    className="bg-wyz-500 hover:bg-red-500 text-white px-4 py-2 rounded-lg font-medium flex items-center shadow-sm transition-colors"
                >
                    <Plus size={18} className="mr-2" /> Add Client
                </button>
            </div>

            {/* Filters */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 mb-6 flex items-center justify-between">
                <div className="relative w-96">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <input 
                        type="text" 
                        placeholder="Search business or email..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-wyz-500 focus:outline-none"
                    />
                </div>
                <div className="flex space-x-2">
                    <span className="px-3 py-1 bg-wyz-50 text-wyz-800 rounded-full text-xs font-bold border border-wyz-200">Total: {clients.length}</span>
                </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-50 border-b border-gray-200 text-xs uppercase text-gray-500 font-semibold tracking-wider">
                            <th className="px-6 py-4">Business</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4">Current Tier</th>
                            <th className="px-6 py-4">Usage</th>
                            <th className="px-6 py-4">Joined</th>
                            <th className="px-6 py-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {filteredClients.map((client) => (
                            <tr key={client.id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="font-bold text-gray-900">{client.businessName}</div>
                                    <div className="text-xs text-gray-500">{client.email}</div>
                                </td>
                                <td className="px-6 py-4">
                                    {client.status === 'Active' ? (
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                            <CheckCircle size={12} className="mr-1" /> Active
                                        </span>
                                    ) : (
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                            <XCircle size={12} className="mr-1" /> Suspended
                                        </span>
                                    )}
                                </td>
                                <td className="px-6 py-4">
                                    {editingId === client.id ? (
                                        <select 
                                            value={client.tier} 
                                            onChange={(e) => handleTierChange(client.id, e.target.value as Tier)}
                                            className="text-sm border border-wyz-500 rounded p-1 focus:outline-none"
                                            autoFocus
                                            onBlur={() => setEditingId(null)}
                                        >
                                            <option value="Free">Free</option>
                                            <option value="Small Business">Small Business</option>
                                            <option value="Business">Business</option>
                                            <option value="Enterprise">Enterprise</option>
                                        </select>
                                    ) : (
                                        <span 
                                            className={`inline-block px-2 py-1 rounded text-xs font-bold cursor-pointer hover:bg-gray-200 border border-transparent hover:border-gray-300 ${
                                            client.tier === 'Enterprise' ? 'bg-purple-100 text-purple-700' :
                                            client.tier === 'Business' ? 'bg-blue-100 text-blue-700' :
                                            client.tier === 'Small Business' ? 'bg-orange-100 text-orange-700' :
                                            'bg-gray-100 text-gray-700'
                                        }`}
                                        onClick={() => setEditingId(client.id)}
                                        title="Click to edit tier"
                                        >
                                            {client.tier}
                                        </span>
                                    )}
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <div className="flex-1 h-2 bg-gray-100 rounded-full w-24 mr-2 overflow-hidden">
                                            <div 
                                                className={`h-full rounded-full ${client.reviewCount > (typeof client.maxReviews === 'number' ? client.maxReviews : 0) ? 'bg-red-500' : 'bg-wyz-500'}`} 
                                                style={{ width: client.maxReviews === 'Unlimited' ? '10%' : `${Math.min(100, (client.reviewCount / (client.maxReviews as number)) * 100)}%` }}
                                            ></div>
                                        </div>
                                        <span className="text-xs text-gray-500">{client.reviewCount} / {client.maxReviews}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-500">
                                    {client.joinedDate}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className="text-gray-400 hover:text-wyz-500">
                                        <MoreVertical size={16} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>

        {/* Add Client Modal */}
        {isAddModalOpen && (
            <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                    <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-wyz-900 text-white">
                        <h3 className="font-bold text-lg">Add New Client</h3>
                        <button onClick={() => setIsAddModalOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                            <X size={20} />
                        </button>
                    </div>
                    
                    <form onSubmit={handleAddClient} className="p-6 space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Business Name</label>
                            <input 
                                type="text" 
                                required
                                value={newClient.businessName}
                                onChange={(e) => setNewClient({...newClient, businessName: e.target.value})}
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-wyz-500 focus:border-wyz-500"
                                placeholder="e.g. Joe's Coffee Shop"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Owner Email</label>
                            <div className="relative">
                                <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input 
                                    type="email" 
                                    required
                                    value={newClient.email}
                                    onChange={(e) => setNewClient({...newClient, email: e.target.value})}
                                    className="w-full border border-gray-300 rounded-lg pl-9 pr-3 py-2 text-sm focus:ring-wyz-500 focus:border-wyz-500"
                                    placeholder="owner@example.com"
                                />
                            </div>
                            <p className="text-xs text-gray-500 mt-1">Login instructions will be sent here.</p>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Subscription Tier</label>
                            <select 
                                value={newClient.tier}
                                onChange={(e) => setNewClient({...newClient, tier: e.target.value as Tier})}
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-wyz-500 focus:border-wyz-500"
                            >
                                <option value="Free">Free</option>
                                <option value="Small Business">Small Business</option>
                                <option value="Business">Business</option>
                                <option value="Enterprise">Enterprise</option>
                            </select>
                        </div>

                        <div className="pt-4 flex space-x-3">
                            <button 
                                type="button"
                                onClick={() => setIsAddModalOpen(false)}
                                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                            >
                                Cancel
                            </button>
                            <button 
                                type="submit"
                                className="flex-1 px-4 py-2 bg-wyz-500 text-white rounded-lg font-medium hover:bg-red-500 transition-colors shadow-sm"
                            >
                                Create & Send Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )}
    </div>
  );
};

export default AdminDashboard;