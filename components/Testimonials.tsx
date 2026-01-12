
import React from 'react';
import { Testimonial } from '../types';

const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    author: 'Sarah M.',
    text: "They actually listened to how I wanted my dog to look. Very patient with my older dog who has bad hips.",
    dogName: 'Cooper'
  },
  {
    id: '2',
    author: 'Mark T.',
    text: "Good local shop. They remember my dog's name when we walk in and the prices are fair.",
    dogName: 'Daisy'
  },
  {
    id: '3',
    author: 'Elena R.',
    text: "My dog is usually nervous around people she doesn't know, but she was calm and happy when I picked her up.",
    dogName: 'Luna'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-[#fcfcfb]">
      <div className="max-w-xl mx-auto">
        <h2 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-10">What neighbors say</h2>
        <div className="space-y-12">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="relative pl-6 border-l-2 border-gray-100">
              <p className="text-gray-700 text-lg italic mb-3 leading-relaxed font-serif">"{t.text}"</p>
              <div className="flex items-center gap-2">
                <span className="font-bold text-xs text-gray-900">{t.author}</span>
                <span className="text-gray-300">•</span>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{t.dogName}'s family</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-6 bg-gray-50 rounded-2xl border border-gray-100 text-center">
          <p className="text-sm text-gray-500 font-medium">Want to show off a fresh cut? <br/> <span className="text-[#5a6b7d] font-bold underline">Text us a photo!</span></p>
        </div>
      </div>
    </section>
  );
};

// Add default export for Testimonials component
export default Testimonials;
