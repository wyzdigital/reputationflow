import React, { useState } from 'react';
import { Star, MessageCircle, MoreHorizontal, Sparkles, Send } from 'lucide-react';
import Header from '../components/Header';
import { MOCK_REVIEWS } from '../services/mockData';
import { Review } from '../types';
import { analyzeReviewSentiment, generateReviewReply } from '../services/geminiService';

const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>(MOCK_REVIEWS);
  const [analyzingId, setAnalyzingId] = useState<string | null>(null);
  const [replyingId, setReplyingId] = useState<string | null>(null);
  const [draftReply, setDraftReply] = useState<string>("");

  const handleAnalyze = async (review: Review) => {
    if (!process.env.API_KEY) {
      alert("Please add your Gemini API Key to use AI features.");
      return;
    }
    setAnalyzingId(review.id);
    const result = await analyzeReviewSentiment(review.content);
    
    setReviews(prev => prev.map(r => 
      r.id === review.id 
        ? { ...r, sentiment: result.sentiment as any, aiAnalysis: result.analysis }
        : r
    ));
    setAnalyzingId(null);
  };

  const handleGenerateReply = async (review: Review) => {
    if (!process.env.API_KEY) {
      alert("Please add your Gemini API Key to use AI features.");
      return;
    }
    setReplyingId(review.id);
    setDraftReply("Drafting...");
    const text = await generateReviewReply(review.content, review.rating, review.customerName);
    setDraftReply(text);
  };

  const handleCloseReply = () => {
      setReplyingId(null);
      setDraftReply("");
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star 
        key={i} 
        size={14} 
        className={`${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      <Header title="Reviews Management" />
      <main className="px-8 py-8 md:ml-64">
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
            <h2 className="font-semibold text-gray-800">Recent Reviews</h2>
            <div className="flex space-x-2">
                <button className="px-3 py-1.5 text-xs font-medium bg-white border border-gray-200 rounded-md text-gray-600 hover:bg-gray-50">Filter</button>
                <button className="px-3 py-1.5 text-xs font-medium bg-white border border-gray-200 rounded-md text-gray-600 hover:bg-gray-50">Export</button>
            </div>
          </div>

          <div className="divide-y divide-gray-100">
            {reviews.map((review) => (
              <div key={review.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 font-bold text-sm">
                      {review.customerName.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm">{review.customerName}</h4>
                      <p className="text-xs text-gray-500">{review.source} • {review.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    {renderStars(review.rating)}
                  </div>
                </div>

                <div className="pl-13 mt-2">
                  <p className="text-gray-700 text-sm leading-relaxed">{review.content}</p>
                  
                  {/* AI Analysis Result */}
                  {review.aiAnalysis && (
                    <div className="mt-3 bg-indigo-50 border border-indigo-100 rounded-lg p-3">
                      <div className="flex items-center text-indigo-700 text-xs font-bold mb-1">
                        <Sparkles size={12} className="mr-1" />
                        AI Analysis
                        <span className={`ml-2 px-1.5 py-0.5 rounded-full text-[10px] uppercase ${
                          review.sentiment === 'Positive' ? 'bg-green-100 text-green-700' :
                          review.sentiment === 'Negative' ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-700'
                        }`}>
                          {review.sentiment}
                        </span>
                      </div>
                      <p className="text-indigo-800 text-xs">{review.aiAnalysis}</p>
                    </div>
                  )}

                  {/* Action Bar */}
                  <div className="flex items-center space-x-4 mt-4">
                    <button 
                      onClick={() => handleAnalyze(review)}
                      disabled={analyzingId === review.id}
                      className="flex items-center text-xs font-medium text-gray-500 hover:text-indigo-600 transition-colors disabled:opacity-50"
                    >
                      <Sparkles size={14} className={`mr-1.5 ${analyzingId === review.id ? 'animate-spin' : ''}`} />
                      {review.aiAnalysis ? 'Re-Analyze' : 'Analyze Sentiment'}
                    </button>
                    
                    <button 
                      onClick={() => handleGenerateReply(review)}
                      className="flex items-center text-xs font-medium text-gray-500 hover:text-brand-600 transition-colors"
                    >
                      <MessageCircle size={14} className="mr-1.5" />
                      Reply
                    </button>
                    
                    <button className="text-gray-400 hover:text-gray-600">
                      <MoreHorizontal size={14} />
                    </button>
                  </div>

                  {/* Reply Draft Box */}
                  {replyingId === review.id && (
                    <div className="mt-4 p-4 bg-white border border-gray-200 rounded-lg shadow-sm animate-in fade-in slide-in-from-top-2">
                      <div className="flex justify-between items-center mb-2">
                         <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">Draft Reply</span>
                         <button onClick={handleCloseReply} className="text-xs text-gray-400 hover:text-gray-600">Cancel</button>
                      </div>
                      <textarea 
                        value={draftReply}
                        onChange={(e) => setDraftReply(e.target.value)}
                        className="w-full text-sm border-gray-300 rounded-md focus:ring-brand-500 focus:border-brand-500 min-h-[100px] p-2 border"
                        placeholder="Drafting your response..."
                      />
                      <div className="mt-2 flex justify-end">
                        <button className="bg-brand-600 hover:bg-brand-700 text-white text-xs font-medium px-4 py-2 rounded-md flex items-center">
                            <Send size={12} className="mr-2" />
                            Send Reply
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Reviews;