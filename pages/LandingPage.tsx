import React from 'react';
import { NavLink } from 'react-router-dom';
import { Star, TrendingUp, Shield, MessageCircle, Check, PlayCircle } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#FDFCFB] font-sans text-brand-dark selection:bg-brand-orange selection:text-white">
      {/* Navbar */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100 py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-2">
            <div className="bg-brand-orange text-white p-1.5 rounded-lg">
                <Star size={16} fill="currentColor" />
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-900">WYZReview</span>
        </div>
        <div className="flex items-center space-x-8">
            <div className="hidden md:flex space-x-6 text-sm font-medium text-gray-600">
                <a href="#features" className="hover:text-brand-orange transition-colors">Features</a>
                <a href="#pricing" className="hover:text-brand-orange transition-colors">Pricing</a>
                <NavLink to="/login" className="hover:text-brand-orange transition-colors">Login</NavLink>
            </div>
            <NavLink to="/signup" className="bg-brand-orange hover:bg-orange-600 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                Get Started
            </NavLink>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-20 pb-32 px-6 overflow-hidden">
        {/* Background Decor */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-orange-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-teal-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
            <div className="md:w-1/2 space-y-8">
                <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.1] tracking-tight text-gray-900">
                    Turn Customer <br/>Feedback into <span className="text-brand-orange">Business Growth</span>
                </h1>
                <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
                    Automatically capture 5-star reviews on Google & Yelp while handling negative feedback privately. Protect your reputation with WYZReview.
                </p>
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
                    <NavLink to="/signup" className="bg-brand-orange hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-center transition-all shadow-lg hover:shadow-orange-200 hover:-translate-y-1 text-lg">
                        Get Started Free
                    </NavLink>
                    <NavLink to="/demo" className="px-8 py-4 rounded-xl font-bold text-gray-700 bg-white border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all text-center text-lg flex items-center justify-center">
                        View Demo
                    </NavLink>
                </div>
                <p className="text-sm text-gray-400 italic">Free tier includes 5 reviews. No credit card required.</p>
            </div>
            
            <div className="md:w-1/2 flex justify-center relative">
                {/* Floating Card */}
                <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-6 w-full max-w-md transform rotate-2 hover:rotate-0 transition-all duration-500 border border-gray-100 relative z-20">
                    <div className="flex items-center space-x-4 mb-6">
                        <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center text-green-500 shadow-inner">
                            <Check strokeWidth={4} size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-xl text-gray-900">Review Acquired!</h3>
                            <p className="text-sm text-gray-500 font-medium">Google • Just now</p>
                        </div>
                    </div>
                    <div className="space-y-4">
                         <div className="flex text-yellow-400 gap-1">
                             <Star fill="currentColor" size={24} />
                             <Star fill="currentColor" size={24} />
                             <Star fill="currentColor" size={24} />
                             <Star fill="currentColor" size={24} />
                             <Star fill="currentColor" size={24} />
                         </div>
                         <p className="text-gray-600 text-lg italic leading-relaxed">"The automated system made it so easy to leave a review. Highly recommend this business!"</p>
                    </div>
                </div>
                
                {/* Decorative Elements behind card */}
                <div className="absolute top-10 right-10 w-24 h-24 bg-brand-orange rounded-full opacity-10 animate-pulse"></div>
            </div>
        </div>
      </header>

      {/* Features Grid */}
      <section id="features" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-6">Everything you need to manage reviews</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">Our intelligent funnel directs happy customers to public sites and unhappy ones to a private feedback form.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                    <TrendingUp size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Boost SEO</h3>
                <p className="text-gray-500 leading-relaxed">More 5-star reviews means higher ranking on Google Maps and search results, driving more organic traffic.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center text-teal-600 mb-6 group-hover:scale-110 transition-transform">
                    <Shield size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Feedback Shield</h3>
                <p className="text-gray-500 leading-relaxed">Intercept negative feedback before it goes public. Resolve issues privately and retain customers.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform">
                    <MessageCircle size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">AI Responses</h3>
                <p className="text-gray-500 leading-relaxed">Use our Gemini-powered AI to get key insights about your reviews and draft professional responses in seconds.</p>
            </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-gray-50/50 px-6 border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
                <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-4">Simple, transparent pricing</h2>
                <p className="text-brand-steel text-lg">Start for free, upgrade as you grow.</p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
                {/* Free Tier */}
                <div className="bg-white rounded-2xl p-8 border border-gray-200 flex flex-col hover:border-gray-300 transition-colors">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Free</h3>
                    <p className="text-gray-400 text-sm mb-6">For small tests</p>
                    <div className="text-5xl font-extrabold mb-6 text-gray-900">$0<span className="text-lg text-gray-400 font-medium">/mo</span></div>
                    <ul className="space-y-4 mb-8 flex-1">
                        <li className="flex items-center text-sm text-gray-600"><div className="bg-brand-orange rounded-full p-0.5 mr-3 text-white"><Check size={10} /></div> Up to 5 Reviews</li>
                        <li className="flex items-center text-sm text-gray-600"><div className="bg-brand-orange rounded-full p-0.5 mr-3 text-white"><Check size={10} /></div> Basic Dashboard</li>
                        <li className="flex items-center text-sm text-gray-600"><div className="bg-brand-orange rounded-full p-0.5 mr-3 text-white"><Check size={10} /></div> Email Support</li>
                    </ul>
                    <NavLink to="/signup" className="block w-full py-3.5 rounded-xl border-2 border-brand-orange text-brand-orange font-bold text-center hover:bg-brand-orange hover:text-white transition-all">Start Free</NavLink>
                </div>

                {/* Small Business - POPULAR */}
                <div className="bg-white rounded-2xl p-8 flex flex-col transform md:-translate-y-4 shadow-xl border-2 border-brand-orange relative z-10">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-brand-orange text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md">POPULAR</div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Small Business</h3>
                    <p className="text-gray-500 text-sm mb-6">Growing locations</p>
                    <div className="text-5xl font-extrabold mb-6 text-gray-900">$49<span className="text-lg text-gray-400 font-medium">/mo</span></div>
                    <ul className="space-y-4 mb-8 flex-1">
                        <li className="flex items-center text-sm text-gray-700 font-medium"><div className="bg-green-500 rounded-full p-0.5 mr-3 text-white"><Check size={10} /></div> 500 Requests/mo</li>
                        <li className="flex items-center text-sm text-gray-700 font-medium"><div className="bg-green-500 rounded-full p-0.5 mr-3 text-white"><Check size={10} /></div> 3 Locations</li>
                        <li className="flex items-center text-sm text-gray-700 font-medium"><div className="bg-green-500 rounded-full p-0.5 mr-3 text-white"><Check size={10} /></div> Full Analytics</li>
                        <li className="flex items-center text-sm text-gray-700 font-medium"><div className="bg-green-500 rounded-full p-0.5 mr-3 text-white"><Check size={10} /></div> QR Codes</li>
                    </ul>
                    <NavLink to="/signup" className="block w-full py-3.5 rounded-xl bg-brand-orange text-white font-bold text-center hover:bg-orange-600 hover:shadow-lg transition-all shadow-md">Get Started</NavLink>
                </div>

                {/* Business */}
                <div className="bg-white rounded-2xl p-8 border border-gray-200 flex flex-col hover:border-gray-300 transition-colors">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Business</h3>
                    <p className="text-gray-400 text-sm mb-6">Established brands</p>
                    <div className="text-5xl font-extrabold mb-6 text-gray-900">$149<span className="text-lg text-gray-400 font-medium">/mo</span></div>
                    <ul className="space-y-4 mb-8 flex-1">
                        <li className="flex items-center text-sm text-gray-600"><div className="bg-brand-orange rounded-full p-0.5 mr-3 text-white"><Check size={10} /></div> 2,000 Requests/mo</li>
                        <li className="flex items-center text-sm text-gray-600"><div className="bg-brand-orange rounded-full p-0.5 mr-3 text-white"><Check size={10} /></div> 10 Locations</li>
                        <li className="flex items-center text-sm text-gray-600"><div className="bg-brand-orange rounded-full p-0.5 mr-3 text-white"><Check size={10} /></div> API Access</li>
                        <li className="flex items-center text-sm text-gray-600"><div className="bg-brand-orange rounded-full p-0.5 mr-3 text-white"><Check size={10} /></div> Priority Support</li>
                    </ul>
                    <NavLink to="/signup" className="block w-full py-3.5 rounded-xl border border-brand-dark text-brand-dark font-bold text-center hover:bg-brand-dark hover:text-white transition-all">Contact Sales</NavLink>
                </div>

                {/* Enterprise */}
                <div className="bg-white rounded-2xl p-8 border border-gray-200 flex flex-col hover:border-gray-300 transition-colors">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise</h3>
                    <p className="text-gray-400 text-sm mb-6">Large scale ops</p>
                    <div className="text-5xl font-extrabold mb-6 text-gray-900">Custom</div>
                    <ul className="space-y-4 mb-8 flex-1">
                        <li className="flex items-center text-sm text-gray-600"><div className="bg-brand-orange rounded-full p-0.5 mr-3 text-white"><Check size={10} /></div> Unlimited Requests</li>
                        <li className="flex items-center text-sm text-gray-600"><div className="bg-brand-orange rounded-full p-0.5 mr-3 text-white"><Check size={10} /></div> Unlimited Locations</li>
                        <li className="flex items-center text-sm text-gray-600"><div className="bg-brand-orange rounded-full p-0.5 mr-3 text-white"><Check size={10} /></div> White Labeling</li>
                        <li className="flex items-center text-sm text-gray-600"><div className="bg-brand-orange rounded-full p-0.5 mr-3 text-white"><Check size={10} /></div> Dedicated Manager</li>
                    </ul>
                    <NavLink to="/signup" className="block w-full py-3.5 rounded-xl border border-brand-dark text-brand-dark font-bold text-center hover:bg-brand-dark hover:text-white transition-all">Contact Sales</NavLink>
                </div>
            </div>
          </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-dark text-gray-400 py-16 px-6">
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                <div className="flex items-center gap-2 mb-4 md:mb-0">
                    <div className="bg-brand-orange text-white p-1 rounded">
                        <Star size={14} fill="currentColor" />
                    </div>
                    <span className="text-white font-bold text-lg">WYZReview</span>
                </div>
                <div className="flex space-x-8 text-sm font-medium">
                    <a href="#" className="hover:text-white transition-colors">Features</a>
                    <a href="#" className="hover:text-white transition-colors">Pricing</a>
                    <NavLink to="/terms-privacy" className="hover:text-white transition-colors">Privacy</NavLink>
                    <NavLink to="/terms-privacy" className="hover:text-white transition-colors">Terms</NavLink>
                    <NavLink to="/contact" className="hover:text-white transition-colors">Support</NavLink>
                </div>
                <div className="mt-4 md:mt-0">
                    <NavLink to="/login" className="text-sm text-white hover:text-brand-orange transition-colors">Login</NavLink>
                </div>
            </div>
            <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
                <p>© 2026 WYZ Digital LLC. All rights reserved.</p>
                <p>Made with ❤️ in Pennsylvania</p>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;