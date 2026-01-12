
import React, { useState } from 'react';
import { getGroomingAdvice } from '../services/geminiService';

interface GroomingAssistantProps {
  onBook: (service: string) => void;
}

const GroomingAssistant: React.FC<GroomingAssistantProps> = ({ onBook }) => {
  const [breed, setBreed] = useState('');
  const [coat, setCoat] = useState('Normal');
  const [lastGroom, setLastGroom] = useState('1-2 months');
  const [loading, setLoading] = useState(false);
  const [advice, setAdvice] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!breed) return;
    setLoading(true);
    const result = await getGroomingAdvice(breed, coat, lastGroom);
    setAdvice(result || "Something went wrong. Please call us.");
    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-white mb-2">Not sure what your dog needs?</h2>
        <p className="text-white/70 text-sm">Tell us about them and we'll suggest a service.</p>
      </div>

      <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl">
        {!advice ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Dog Breed</label>
              <input 
                type="text" 
                placeholder="e.g. Golden, Doodle, Beagle..."
                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-[#5a6b7d] text-base"
                value={breed}
                onChange={(e) => setBreed(e.target.value)}
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Condition of hair</label>
                <div className="grid grid-cols-2 gap-2">
                  {['Normal', 'Matted', 'Shedding', 'Dirty'].map(option => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setCoat(option)}
                      className={`p-3 rounded-lg border text-[10px] font-bold uppercase transition-all ${coat === option ? 'bg-[#5a6b7d] text-white border-[#5a6b7d]' : 'bg-white text-gray-500 border-gray-200'}`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Last time groomed</label>
                <select 
                  className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-[#5a6b7d] appearance-none text-xs font-bold"
                  value={lastGroom}
                  onChange={(e) => setLastGroom(e.target.value)}
                >
                  <option>1 month ago</option>
                  <option>1-2 months ago</option>
                  <option>3+ months ago</option>
                  <option>Never</option>
                </select>
              </div>
            </div>

            <button 
              type="submit"
              disabled={loading || !breed}
              className={`w-full py-5 rounded-xl font-bold text-white transition-all shadow-md ${loading ? 'bg-gray-300' : 'bg-[#5a6b7d] hover:bg-[#4a5a6d] active:scale-[0.98]'}`}
            >
              {loading ? 'Wait a second...' : 'See what we suggest'}
            </button>
          </form>
        ) : (
          <div className="space-y-6">
            <div className="bg-amber-50 border border-amber-100 p-6 rounded-xl">
              <h3 className="font-bold text-[#5a6b7d] mb-3 text-sm uppercase tracking-wide">
                Our advice for your {breed}:
              </h3>
              <div className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                {advice}
              </div>
            </div>
            
            <div className="flex flex-col gap-3">
              <button 
                onClick={() => onBook('Based on advice')}
                className="w-full py-5 bg-[#5a6b7d] rounded-xl font-bold text-white text-lg shadow-lg active:scale-95"
              >
                Request appointment
              </button>
              <button 
                onClick={() => setAdvice(null)}
                className="w-full py-3 text-gray-400 font-bold text-xs uppercase tracking-widest"
              >
                Try again
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GroomingAssistant;
