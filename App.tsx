
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import GroomingAssistant from './components/GroomingAssistant';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import { AppView } from './types';

const App: React.FC = () => {
  const [view, setView] = useState<AppView>('home');
  const [preSelectedService, setPreSelectedService] = useState<string>('Full cut and bath');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [view]);

  const handleBookService = (serviceName: string) => {
    setPreSelectedService(serviceName);
    setView('booking');
  };

  if (view === 'booking') {
    return (
      <div className="min-h-screen bg-[#fcfcfb] antialiased text-gray-900">
        <Header setView={setView} currentView={view} />
        <main className="pt-24 pb-12">
          <BookingForm onBack={() => setView('home')} initialService={preSelectedService} />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#fcfcfb] antialiased text-gray-900">
      <Header setView={setView} currentView={view} />
      
      <main className="flex-grow">
        <Hero setView={setView} />
        
        <div id="services">
          <Services onBook={handleBookService} />
        </div>
        
        {/* Advice is now a section, not a separate page. Lower risk if it fails. */}
        <section id="advice" className="py-20 px-4 bg-[#5a6b7d]">
          <GroomingAssistant onBook={handleBookService} />
        </section>

        <Testimonials />

        <section className="py-16 px-4 border-t border-gray-100 bg-[#f9f9f8]">
          <div className="max-w-xl mx-auto">
            <div className="bg-white border-2 border-gray-100 p-8 rounded-xl shadow-sm sm:-rotate-1">
              <h2 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-6 border-b pb-2">Shop notes</h2>
              <div className="space-y-6 text-sm text-gray-600 leading-relaxed">
                 <div>
                    <p className="text-gray-900 font-bold mb-1">Changing or missing an appointment</p>
                    <p>We are a small shop. If you can't make it, please text us 24 hours before so we can call someone else.</p>
                 </div>
                 <div>
                    <p className="text-gray-900 font-bold mb-1">Matted or tangled hair</p>
                    <p>If your dog's hair is very tangled, we put their comfort first. Sometimes that means a shorter cut. We will talk about it when you drop them off.</p>
                 </div>
                 <div>
                    <p className="text-gray-900 font-bold mb-1">Rabies shots</p>
                    <p>We need to see proof of Rabies shots for all dogs. You can just text us a photo of the paperwork.</p>
                 </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
