import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate sending email
    console.log('Sending email to dsmith@wyzdigital.com', formData);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-wyz-50 font-sans text-wyz-900 flex flex-col">
       {/* Navbar */}
      <nav className="bg-wyz-900 text-white py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 z-50 shadow-md">
        <NavLink to="/" className="flex items-center">
            <img 
              src="https://github.com/user-attachments/assets/c505307b-8919-482f-87d2-777b752496d0" 
              alt="WYZReview" 
              className="h-8 w-auto" 
            />
        </NavLink>
        <div className="flex items-center space-x-4">
            <NavLink to="/" className="text-sm font-medium text-gray-300 hover:text-white transition-colors flex items-center">
                <ArrowLeft size={16} className="mr-1" /> Back
            </NavLink>
        </div>
      </nav>

      <div className="flex-1 max-w-7xl mx-auto w-full px-6 py-12 md:py-20 flex flex-col md:flex-row gap-12">
        
        {/* Contact Info */}
        <div className="md:w-1/3 space-y-8">
            <div>
                <h1 className="text-4xl font-bold text-wyz-900 mb-4">Get in touch</h1>
                <p className="text-gray-600 leading-relaxed">
                    Have questions about our pricing, features, or need support? We're here to help you grow your business reputation.
                </p>
            </div>

            <div className="space-y-6">
                <div className="flex items-start">
                    <div className="w-10 h-10 bg-wyz-100 rounded-lg flex items-center justify-center text-wyz-500 mt-1 flex-shrink-0">
                        <Mail size={20} />
                    </div>
                    <div className="ml-4">
                        <h3 className="font-bold text-gray-900">Email Us</h3>
                        <p className="text-gray-600 text-sm mt-1">dsmith@wyzdigital.com</p>
                        <p className="text-gray-500 text-xs mt-1">Expected response: 24 hours</p>
                    </div>
                </div>

                <div className="flex items-start">
                    <div className="w-10 h-10 bg-wyz-100 rounded-lg flex items-center justify-center text-wyz-500 mt-1 flex-shrink-0">
                        <MapPin size={20} />
                    </div>
                    <div className="ml-4">
                        <h3 className="font-bold text-gray-900">Office</h3>
                        <p className="text-gray-600 text-sm mt-1">
                            WYZ Digital LLC<br/>
                            601 Easton Road<br/>
                            Willow Grove, PA 19090
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* Form */}
        <div className="md:w-2/3 bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100">
            {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-in fade-in">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                        <CheckCircle size={40} />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h2>
                    <p className="text-gray-600 max-w-md mx-auto">
                        Thank you for reaching out. We have sent your inquiry to <span className="font-semibold text-wyz-900">dsmith@wyzdigital.com</span> and will get back to you shortly.
                    </p>
                    <button 
                        onClick={() => setSubmitted(false)}
                        className="mt-8 text-wyz-500 font-semibold hover:text-red-600 transition-colors"
                    >
                        Send another message
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                            <input 
                                type="text" 
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-wyz-500 focus:border-wyz-500 outline-none transition-all"
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                            <input 
                                type="email" 
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-wyz-500 focus:border-wyz-500 outline-none transition-all"
                                placeholder="john@example.com"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                        <select 
                            value={formData.subject}
                            onChange={(e) => setFormData({...formData, subject: e.target.value})}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-wyz-500 focus:border-wyz-500 outline-none transition-all bg-white"
                        >
                            <option value="">Select a topic...</option>
                            <option value="Support">Technical Support</option>
                            <option value="Sales">Sales Inquiry</option>
                            <option value="Billing">Billing Question</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                        <textarea 
                            required
                            rows={5}
                            value={formData.message}
                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-wyz-500 focus:border-wyz-500 outline-none transition-all"
                            placeholder="How can we help you?"
                        ></textarea>
                    </div>

                    <button 
                        type="submit"
                        className="w-full bg-wyz-500 hover:bg-red-500 text-white font-bold py-4 rounded-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center"
                    >
                        <Send size={18} className="mr-2" />
                        Send Message
                    </button>
                    
                    <p className="text-center text-xs text-gray-400 mt-4">
                        By sending this message, you agree to our <NavLink to="/terms-privacy" className="underline hover:text-wyz-500">Terms & Privacy Policy</NavLink>.
                    </p>
                </form>
            )}
        </div>
      </div>
      
       {/* Footer */}
      <footer className="bg-wyz-900 border-t border-gray-800 text-gray-400 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
                <span className="text-white font-bold text-lg">WYZReview</span>
                <p className="text-sm mt-1">© 2026 WYZ Digital LLC. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
                <NavLink to="/terms-privacy" className="hover:text-white transition-colors">Privacy & Terms</NavLink>
                <NavLink to="/contact" className="hover:text-white transition-colors">Support</NavLink>
                <NavLink to="/login" className="hover:text-white transition-colors">Login</NavLink>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;