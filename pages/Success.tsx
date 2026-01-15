import React, { useEffect, useState } from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';

const Success = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Verify the session and update user subscription status
    const verifySession = async () => {
      if (sessionId) {
        try {
          // TODO: Call your backend to verify the session and activate subscription
          // const response = await fetch(`/api/verify-session?session_id=${sessionId}`);
          // const data = await response.json();
          
          // Simulate API call
          setTimeout(() => {
            setLoading(false);
          }, 1500);
        } catch (error) {
          console.error('Error verifying session:', error);
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    verifySession();
  }, [sessionId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-wyz-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-brand-orange mx-auto mb-4"></div>
          <p className="text-gray-600">Confirming your subscription...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-wyz-50 flex items-center justify-center p-6">
      <div className="bg-white max-w-2xl w-full rounded-2xl shadow-xl p-12 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
          <CheckCircle size={48} strokeWidth={2} />
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Welcome to WYZReview! 🎉
        </h1>
        
        <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
          Your subscription has been activated successfully. You now have access to all the features of your plan.
        </p>

        <div className="bg-gray-50 rounded-xl p-6 mb-8">
          <h3 className="font-bold text-gray-900 mb-3">What's Next?</h3>
          <ul className="text-left space-y-3 max-w-md mx-auto">
            <li className="flex items-start text-gray-700">
              <div className="bg-brand-orange rounded-full p-1 mr-3 mt-0.5 text-white flex-shrink-0">
                <CheckCircle size={14} />
              </div>
              <span>Set up your business profile and locations</span>
            </li>
            <li className="flex items-start text-gray-700">
              <div className="bg-brand-orange rounded-full p-1 mr-3 mt-0.5 text-white flex-shrink-0">
                <CheckCircle size={14} />
              </div>
              <span>Configure your review funnel settings</span>
            </li>
            <li className="flex items-start text-gray-700">
              <div className="bg-brand-orange rounded-full p-1 mr-3 mt-0.5 text-white flex-shrink-0">
                <CheckCircle size={14} />
              </div>
              <span>Start collecting 5-star reviews</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <NavLink
            to="/dashboard"
            className="inline-flex items-center justify-center px-8 py-4 bg-brand-orange text-white rounded-xl font-bold hover:bg-orange-600 transition-all shadow-lg hover:shadow-xl"
          >
            Go to Dashboard
            <ArrowRight size={20} className="ml-2" />
          </NavLink>
          
          <NavLink
            to="/funnel"
            className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-bold hover:border-gray-300 hover:bg-gray-50 transition-all"
          >
            Configure Funnel
          </NavLink>
        </div>

        <p className="text-sm text-gray-500 mt-8">
          Need help getting started?{' '}
          <NavLink to="/contact" className="text-brand-orange font-semibold hover:underline">
            Contact our support team
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Success;
