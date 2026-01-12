
import React from 'react';
import { AppView } from '../types';

interface HeroProps {
  setView: (view: AppView) => void;
}

const Hero: React.FC<HeroProps> = ({ setView }) => {
  return (
    <section className="relative pt-24 pb-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-gray-100 rounded text-gray-500 text-[10px] font-bold uppercase tracking-widest">
            Milford, OH • Family Owned
          </div>
          
          <h1 className="text-5xl font-bold text-gray-900 mb-4 leading-[1.1] tracking-tight">
            We take our time <br/>with your dog.
          </h1>
          
          <p className="text-lg text-gray-500 mb-8 max-w-sm font-medium leading-relaxed">
            Good for <strong>older dogs and dogs that get scared</strong>. We don't rush or use assembly lines.
          </p>

          <div className="flex flex-col gap-3 max-w-sm">
            <button 
              onClick={() => setView('booking')}
              className="w-full bg-[#5a6b7d] text-white py-5 rounded-2xl font-bold text-xl shadow-xl active:scale-95 transition-all"
            >
              Request an appointment
            </button>
            
            <div className="grid grid-cols-2 gap-3">
              <a 
                href="tel:5135550123"
                className="bg-white border-2 border-gray-100 text-gray-700 py-4 rounded-xl font-bold text-sm text-center active:bg-gray-50 transition-all"
              >
                Call us
              </a>
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white border-2 border-gray-100 text-gray-700 py-4 rounded-xl font-bold text-sm text-center active:bg-gray-50 transition-all"
              >
                Prices
              </button>
            </div>
          </div>

          <div className="mt-8 py-3 px-5 bg-amber-50 rounded-xl border border-amber-100 inline-flex items-center gap-3">
             <span className="text-lg">📅</span>
             <p className="text-xs text-amber-900 font-bold uppercase tracking-wide">
                Usually booked out 1 or 2 weeks
             </p>
          </div>
        </div>

        <div className="flex-1 w-full">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=1000&auto=format&fit=crop" 
              alt="A happy, clean dog after grooming" 
              className="w-full h-[350px] md:h-[500px] object-cover rounded-3xl shadow-lg grayscale-[20%] hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-xl hidden sm:block border border-gray-100">
               <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">In the shop today</p>
               <p className="font-serif italic text-gray-800">Cooper, after his bath.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Add default export for Hero component
export default Hero;
