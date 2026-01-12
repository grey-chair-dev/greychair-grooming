
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-16 px-4 mb-20 md:mb-0 border-t border-gray-100">
      <div className="max-w-xl mx-auto text-center md:text-left">
        <div className="space-y-8">
          <div>
            <h3 className="font-serif font-bold text-2xl text-gray-900 mb-1">Grey Chair Grooming</h3>
            <p className="text-sm text-gray-400 font-medium">A small shop in Milford.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
             <div className="space-y-1">
                <p className="text-[10px] font-bold text-[#5a6b7d] uppercase tracking-widest">Address</p>
                <address className="not-italic text-sm text-gray-600 font-medium">
                  123 Main Street, Milford, OH 45150
                </address>
             </div>
             <div className="space-y-1">
                <p className="text-[10px] font-bold text-[#5a6b7d] uppercase tracking-widest">Phone</p>
                <p className="text-sm font-bold text-gray-900">(513) 555-0123</p>
             </div>
          </div>

          <div className="pt-8 border-t border-gray-50 flex justify-between items-center opacity-40">
            <p className="text-[9px] font-bold uppercase tracking-widest">Est. 2024</p>
            <p className="text-[9px] font-bold uppercase tracking-widest text-right leading-tight">
              Milford, Ohio
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Add default export for Footer component
export default Footer;
