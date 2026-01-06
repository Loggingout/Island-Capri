import React, { useState } from 'react';

// WaitlistForm Component
const WaitlistForm = ({ isOpen, onClose, onSubmit }: { 
  isOpen: boolean; 
  onClose: () => void; 
  onSubmit: (data: any) => void 
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.interest) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    onSubmit(formData);
    setFormData({ name: '', email: '', interest: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative transform transition-all animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors text-2xl"
        >
          ×
        </button>
        
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Join the Waitlist</h2>
        <p className="text-gray-600 mb-6">Be the first to know when we launch!</p>
        
        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none transition-all"
              placeholder="John Doe"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none transition-all"
              placeholder="john@example.com"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              What interests you most?
            </label>
            <select
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none transition-all bg-white"
            >
              <option value="">Select an option</option>
              <option value="local">Local News</option>
              <option value="national">National News</option>
              <option value="international">International News</option>
              <option value="all">All News</option>
            </select>
          </div>
          
          <button
            onClick={handleSubmit}
            disabled={isSubmitting || !formData.name || !formData.email || !formData.interest}
            className="w-full bg-gradient-to-r from-orange-400 to-orange-500 text-white font-semibold py-3 rounded-lg hover:from-orange-500 hover:to-orange-600 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg"
          >
            {isSubmitting ? 'Joining...' : 'Join Waitlist'}
          </button>
        </div>
      </div>
    </div>
  );
};

// Landing Page Component
export default function LandingPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [waitlistCount, setWaitlistCount] = useState(1247);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleWaitlistSubmit = (formData: any) => {
    console.log('Waitlist submission:', formData);
    // Here you'll later integrate with your backend
    setWaitlistCount(prev => prev + 1);
    setIsFormOpen(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-orange-100 to-orange-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Success notification */}
      {showSuccess && (
        <div className="fixed top-8 right-8 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg z-50 animate-slideIn">
          <p className="font-semibold">🎉 You're on the list!</p>
          <p className="text-sm">We'll notify you at launch.</p>
        </div>
      )}

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        <div className="max-w-4xl w-full text-center space-y-8">
          {/* Logo/Brand */}
          <div className="space-y-4 animate-fadeIn">
            <div className="inline-block bg-gradient-to-r from-orange-400 to-orange-500 p-4 rounded-2xl shadow-xl transform hover:scale-105 transition-transform">
              <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-gray-800 tracking-tight">
              Is It True
            </h1>
          </div>

          {/* Slogan */}
          <div className="space-y-2 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            <p className="text-xl md:text-2xl text-gray-700 font-medium max-w-2xl mx-auto leading-relaxed">
              News brought to you by your local news broadcasters
            </p>
            <p className="text-lg md:text-xl text-orange-600 font-semibold italic">
              All news matters
            </p>
          </div>

          {/* CTA Button */}
          <div className="animate-fadeIn" style={{ animationDelay: '0.4s' }}>
            <button
              onClick={() => setIsFormOpen(true)}
              className="bg-gradient-to-r from-orange-400 to-orange-500 text-white text-xl font-bold px-12 py-5 rounded-full hover:from-orange-500 hover:to-orange-600 transition-all transform hover:scale-110 shadow-2xl hover:shadow-orange-300"
            >
              Join the Wait
            </button>
          </div>

          {/* Waitlist counter */}
          <div className="animate-fadeIn pt-8" style={{ animationDelay: '0.6s' }}>
            <div className="inline-block bg-white bg-opacity-70 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-lg">
              <p className="text-gray-600 text-sm font-medium mb-1">People on the waitlist</p>
              <p className="text-4xl font-bold text-orange-500">{waitlistCount.toLocaleString()}</p>
            </div>
          </div>

          {/* Feature highlights */}
          <div className="grid md:grid-cols-3 gap-6 pt-12 animate-fadeIn" style={{ animationDelay: '0.8s' }}>
            <div className="bg-white bg-opacity-60 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="text-orange-500 mb-3">
                <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Local Focus</h3>
              <p className="text-gray-600 text-sm">Stay connected to what matters in your community</p>
            </div>
            
            <div className="bg-white bg-opacity-60 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="text-orange-500 mb-3">
                <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Verified Sources</h3>
              <p className="text-gray-600 text-sm">Only from trusted local broadcasters</p>
            </div>
            
            <div className="bg-white bg-opacity-60 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="text-orange-500 mb-3">
                <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Real-Time Updates</h3>
              <p className="text-gray-600 text-sm">Breaking news as it happens</p>
            </div>
          </div>
        </div>
      </div>

      {/* Waitlist Form Modal */}
      <WaitlistForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSubmit={handleWaitlistSubmit}
      />

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideIn {
          from {
            transform: translateX(400px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .animate-slideIn {
          animation: slideIn 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
}