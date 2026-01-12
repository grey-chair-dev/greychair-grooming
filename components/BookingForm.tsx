
import React, { useState } from 'react';

interface BookingFormProps {
  onBack: () => void;
  initialService?: string;
}

const BookingForm: React.FC<BookingFormProps> = ({ onBack, initialService = 'Full cut and bath' }) => {
  const [submitted, setSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState(initialService);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto px-4 text-center animate-fadeIn">
        <div className="bg-white p-12 rounded-3xl border border-gray-100 shadow-xl">
          <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold mb-4">Request sent</h2>
          <p className="text-gray-500 mb-10 text-lg leading-relaxed">
            We will text you this evening to talk about a time for your dog.
          </p>
          <button 
            onClick={onBack}
            className="w-full py-5 bg-[#5a6b7d] text-white rounded-2xl font-bold text-lg shadow-lg hover:bg-[#4a5a6d]"
          >
            Go back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto px-4">
      <button 
        onClick={onBack}
        className="mb-8 flex items-center gap-2 text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em] hover:text-gray-900 transition-colors"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Cancel
      </button>

      <div className="bg-white border border-gray-200 rounded-3xl p-8 md:p-10 shadow-xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold mb-2">Request an appointment</h2>
          <p className="text-gray-500 font-medium">We will text you to confirm a time.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-6">
            <div className="relative group">
              <label className="block text-[10px] font-bold text-[#5a6b7d] uppercase tracking-widest mb-3">Your name and dog's name</label>
              <input 
                required 
                type="text" 
                placeholder="e.g. Sarah and Cooper" 
                className="w-full p-5 bg-gray-50 border-2 border-transparent rounded-2xl outline-none focus:border-[#5a6b7d] focus:bg-white transition-all text-lg font-medium" 
              />
            </div>
            
            <div className="relative group">
              <label className="block text-[10px] font-bold text-[#5a6b7d] uppercase tracking-widest mb-3">Phone number</label>
              <input 
                required 
                type="tel" 
                placeholder="(513) ___ - ____" 
                className="w-full p-5 bg-gray-50 border-2 border-transparent rounded-2xl outline-none focus:border-[#5a6b7d] focus:bg-white transition-all text-lg font-medium" 
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-bold text-[#5a6b7d] uppercase tracking-widest mb-4">Service needed</label>
            <div className="grid grid-cols-2 gap-3">
              {['Full cut and bath', 'Bath and trim', 'Nails only', 'Not sure'].map((s) => (
                <label key={s} className={`relative flex items-center justify-center p-4 border-2 rounded-2xl cursor-pointer transition-all ${selectedService === s ? 'bg-[#5a6b7d] text-white border-[#5a6b7d] shadow-md' : 'bg-white text-gray-500 border-gray-100 hover:border-gray-200'}`}>
                  <input 
                    type="radio" 
                    name="service" 
                    className="sr-only" 
                    value={s} 
                    checked={selectedService === s}
                    onChange={() => setSelectedService(s)}
                  />
                  <span className="text-xs font-bold uppercase tracking-wide">{s}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="relative">
            <label className="block text-[10px] font-bold text-[#5a6b7d] uppercase tracking-widest mb-3">Details (Breed, age, or special needs)</label>
            <textarea 
              placeholder="e.g. 12yo Goldendoodle, bad hips, hates hair dryers." 
              className="w-full p-5 bg-gray-50 border-2 border-transparent rounded-2xl outline-none focus:border-[#5a6b7d] focus:bg-white transition-all h-32 text-base font-medium resize-none"
            ></textarea>
          </div>

          <div className="pt-4">
            <button 
              type="submit"
              className="w-full py-6 bg-[#5a6b7d] hover:bg-[#4a5a6d] text-white rounded-2xl font-bold text-xl shadow-xl transition-all active:scale-95"
            >
              Send request
            </button>
            <p className="text-center text-[10px] text-gray-400 mt-6 font-bold uppercase tracking-[0.2em]">
              You pay after the grooming is done
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

// Add default export for BookingForm component
export default BookingForm;
