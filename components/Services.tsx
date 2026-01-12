
import React from 'react';

interface ServiceTier {
  id: string;
  name: string;
  price: string;
  who: string;
  bestFor: string;
}

const TIERS: ServiceTier[] = [
  {
    id: 'full',
    name: 'Full cut and bath',
    price: '$70+',
    who: 'The whole job',
    bestFor: 'Doodles, Yorkies, Shih Tzus',
  },
  {
    id: 'tidy',
    name: 'Bath and trim',
    price: '$50+',
    who: 'Just a cleanup',
    bestFor: 'Short hair or in-between cuts',
  },
  {
    id: 'bath',
    name: 'Just a bath',
    price: '$35+',
    who: 'Quick wash',
    bestFor: 'Labs, Pugs, Boxers',
  }
];

interface ServicesProps {
  onBook: (serviceName: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onBook }) => {
  return (
    <section className="py-20 px-4 bg-white border-y border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center sm:text-left">
          <h2 className="text-4xl font-bold mb-3">Our Services</h2>
          <p className="text-gray-400 font-medium">Starting rates for small dogs. Final price depends on coat and time.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {TIERS.map((tier) => (
            <div key={tier.id} className="bg-white border-2 border-gray-100 rounded-3xl p-8 flex flex-col hover:border-[#5a6b7d]/20 transition-colors">
              <div className="mb-6">
                <span className="text-[10px] font-bold text-[#5a6b7d] uppercase tracking-[0.2em] mb-2 block">{tier.who}</span>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{tier.name}</h3>
                <p className="text-xs text-gray-400 font-medium">{tier.bestFor}</p>
              </div>

              <div className="mt-auto pt-6 border-t border-gray-50">
                <div className="flex justify-between items-end mb-6">
                  <div>
                    <span className="block text-[10px] font-bold text-gray-300 uppercase">Starts at</span>
                    <span className="text-3xl font-bold text-gray-900">{tier.price}</span>
                  </div>
                </div>
                
                <button 
                  onClick={() => onBook(tier.name)}
                  className="w-full py-4 bg-gray-900 text-white rounded-xl font-bold text-sm uppercase tracking-widest active:scale-[0.98] transition-all shadow-md"
                >
                  Book this
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto bg-gray-50 rounded-2xl p-6 border border-gray-100">
          <p className="text-xs text-gray-500 leading-relaxed text-center">
            <strong>Note:</strong> We charge based on the time required to groom your dog safely. Heavily matted coats or larger breeds take more time. We'll always confirm a firm price with you at drop-off.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
