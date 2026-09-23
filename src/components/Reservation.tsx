import { useState } from 'react';

export default function Reservation() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <section id="reservations" className="py-24 md:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-black mb-4">Reservations</h2>
          <div className="w-12 h-1 bg-black mx-auto mb-6"></div>
          <p className="text-gray-500 font-light">Join us for an unforgettable dining experience.</p>
        </div>

        {isSuccess ? (
          <div className="border border-black p-12 text-center">
            <h3 className="text-2xl font-semibold mb-2">Request Received</h3>
            <p className="text-gray-600">We will contact you shortly to confirm your table.</p>
            <button 
              onClick={() => setIsSuccess(false)}
              className="mt-8 text-sm uppercase tracking-widest border-b border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-colors"
            >
              Make another booking
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium uppercase tracking-wider text-black">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  className="w-full border-b border-gray-300 py-3 bg-transparent focus:outline-none focus:border-black transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium uppercase tracking-wider text-black">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  className="w-full border-b border-gray-300 py-3 bg-transparent focus:outline-none focus:border-black transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="date" className="text-sm font-medium uppercase tracking-wider text-black">Date</label>
                <input 
                  type="date" 
                  id="date" 
                  required
                  className="w-full border-b border-gray-300 py-3 bg-transparent focus:outline-none focus:border-black transition-colors text-black"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="guests" className="text-sm font-medium uppercase tracking-wider text-black">Guests</label>
                <select 
                  id="guests" 
                  required
                  className="w-full border-b border-gray-300 py-3 bg-transparent focus:outline-none focus:border-black transition-colors text-black"
                >
                  <option value="1">1 Person</option>
                  <option value="2">2 People</option>
                  <option value="3">3 People</option>
                  <option value="4">4 People</option>
                  <option value="5+">5+ People (Contact us)</option>
                </select>
              </div>
            </div>
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-black text-white py-4 text-sm uppercase tracking-widest font-semibold hover:bg-gray-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Processing...' : 'Request Table'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
