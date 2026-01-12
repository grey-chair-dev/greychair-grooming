
import React from 'react';
import { AppView } from '../types';

interface HeaderProps {
  setView: (view: AppView) => void;
  currentView: AppView;
}

const Header: React.FC<HeaderProps> = ({ setView, currentView }) => {
  const scrollTo = (id: string) => {
    if (currentView !== 'home') {
      setView('home');
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <button 
          onClick={() => setView('home')}
          className="flex items-center gap-2 group"
        >
          <div className="w-10 h-10 bg-[#5a6b7d] rounded-lg flex items-center justify-center text-white font-serif text-xl font-bold">
            GC
          </div>
          <div className="text-left hidden xs:block">
            <span className="block text-sm font-bold tracking-tight text-[#5a6b7d] leading-none uppercase">Grey Chair</span>
            <span className="block text-[10px] font-medium text-gray-400 uppercase tracking-[0.2em] mt-0.5">Milford, OH</span>
          </div>
        </button>

        <nav className="flex items-center gap-6 sm:gap-8">
          <button 
            onClick={() => scrollTo('services')} 
            className="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-gray-900"
          >
            Prices
          </button>
          
          <button 
            onClick={() => setView('booking')}
            className="bg-[#5a6b7d] text-white px-5 py-2.5 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-[#4a5a6d] transition-colors shadow-md active:scale-95"
          >
            Book
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
