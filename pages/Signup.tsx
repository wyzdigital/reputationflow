import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Mail, Building, Lock, User } from 'lucide-react';

const Signup = () => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [formData, setFormData] = useState({
    businessName: '',
    name: '',
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setStep('success');
    }, 1000);
  };

  if (step === 'success') {
    return (
      <div className="min-h-screen bg-wyz-50 flex items-center justify-center p-6">
        <div className="bg-white max-w-md w-full rounded-2xl shadow-xl p-8 text-center animate-in fade-in zoom-in-95">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
            <CheckCircle size={32} />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Check your inbox!</h2>
          <p className="text-gray-600 mb-8">
            We've sent a confirmation link to <span className="font-semibold text-gray-900">{formData.email}</span>. 
            Please click the link to verify your email and activate your account.
          </p>
          <div className="space-y-3">
             <button className="w-full py-3 bg-wyz-500 text-white rounded-lg font-bold hover:bg-red-500 transition-colors">
                Open Gmail
             </button>
             <NavLink to="/" className="block w-full py-3 bg-white border border-gray-200 text-gray-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                Back to Home
             </NavLink>
          </div>
          <p className="text-xs text-gray-400 mt-6">
            Didn't receive it? <button className="text-wyz-500 font-semibold hover:underline">Resend email</button>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-wyz-50 flex flex-col">
       <div className="p-6">
             <NavLink to="/" className="flex items-center text-gray-600 hover:text-wyz-500 transition-colors font-medium w-fit">
                <ArrowLeft size={20} className="mr-2" />
                Back to Home
            </NavLink>
        </div>

      <div className="flex-1 flex items-center justify-center p-6">
        <div className="bg-white max-w-lg w-full rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
           
           <div className="w-full p-8 md:p-10">
              <div className="mb-8">
                 <h2 className="text-2xl font-bold text-wyz-900">Create your account</h2>
                 <p className="text-gray-500 mt-2">Start managing your reputation for free.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                 <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <div className="relative">
                        <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input 
                            required
                            type="text" 
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wyz-500 focus:outline-none"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={e => setFormData({...formData, name: e.target.value})}
                        />
                    </div>
                 </div>

                 <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Business Name</label>
                    <div className="relative">
                        <Building size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input 
                            required
                            type="text" 
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wyz-500 focus:outline-none"
                            placeholder="Acme Inc."
                            value={formData.businessName}
                            onChange={e => setFormData({...formData, businessName: e.target.value})}
                        />
                    </div>
                 </div>

                 <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Work Email</label>
                    <div className="relative">
                        <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input 
                            required
                            type="email" 
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wyz-500 focus:outline-none"
                            placeholder="you@company.com"
                            value={formData.email}
                            onChange={e => setFormData({...formData, email: e.target.value})}
                        />
                    </div>
                 </div>

                 <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <div className="relative">
                        <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input 
                            required
                            type="password" 
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wyz-500 focus:outline-none"
                            placeholder="••••••••"
                            value={formData.password}
                            onChange={e => setFormData({...formData, password: e.target.value})}
                        />
                    </div>
                 </div>

                 <button type="submit" className="w-full bg-wyz-500 hover:bg-red-500 text-white font-bold py-3 rounded-lg transition-colors shadow-lg mt-4">
                    Create Free Account
                 </button>
              </form>

              <div className="mt-6 text-center text-sm text-gray-500">
                  Already have an account? <NavLink to="/login" className="text-wyz-500 font-bold hover:underline">Log in</NavLink>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;