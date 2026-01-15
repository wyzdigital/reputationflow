import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Shield, LayoutDashboard, ArrowLeft } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-wyz-50 flex flex-col">
        <div className="p-6">
             <NavLink to="/" className="flex items-center text-gray-600 hover:text-wyz-500 transition-colors font-medium">
                <ArrowLeft size={20} className="mr-2" />
                Back to Home
            </NavLink>
        </div>

        <div className="flex-1 flex items-center justify-center px-6">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="text-center mb-10">
                    <div className="bg-wyz-900 rounded-xl p-4 inline-block mb-4 shadow-lg">
                        <img 
                            src="https://github.com/user-attachments/assets/c505307b-8919-482f-87d2-777b752496d0" 
                            alt="WYZReview" 
                            className="h-8 w-auto" 
                        />
                    </div>
                    <h2 className="text-2xl font-bold text-wyz-900">Welcome Back</h2>
                    <p className="text-gray-500 mt-2">Sign in to your account</p>
                </div>

                <div className="space-y-4">
                    <button 
                        onClick={() => navigate('/dashboard')}
                        className="w-full flex items-center justify-between p-4 rounded-xl border border-gray-200 hover:border-wyz-500 hover:bg-wyz-50 transition-all group"
                    >
                        <div className="flex items-center">
                            <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mr-4 group-hover:bg-blue-100">
                                <LayoutDashboard size={20} />
                            </div>
                            <div className="text-left">
                                <h3 className="font-bold text-gray-900">Client Login</h3>
                                <p className="text-xs text-gray-500">Manage reviews & campaigns</p>
                            </div>
                        </div>
                        <span className="text-blue-600 text-sm font-semibold">Demo &rarr;</span>
                    </button>

                    <button 
                        onClick={() => navigate('/admin')}
                        className="w-full flex items-center justify-between p-4 rounded-xl border border-gray-200 hover:border-wyz-900 hover:bg-gray-50 transition-all group"
                    >
                        <div className="flex items-center">
                            <div className="w-10 h-10 bg-wyz-900 text-white rounded-full flex items-center justify-center mr-4">
                                <Shield size={20} />
                            </div>
                            <div className="text-left">
                                <h3 className="font-bold text-gray-900">Master Admin</h3>
                                <p className="text-xs text-gray-500">Manage tiers & accounts</p>
                            </div>
                        </div>
                        <span className="text-wyz-900 text-sm font-semibold">Login &rarr;</span>
                    </button>
                </div>
                
                <div className="mt-8 text-center text-sm text-gray-400">
                    Don't have an account? <NavLink to="/signup" className="text-wyz-500 font-bold hover:underline">Sign up for Free</NavLink>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Login;