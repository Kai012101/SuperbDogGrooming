import React from 'react';
import { REVIEWS } from '../constants';
import { Star, Quote, Heart, MapPin, ExternalLink } from 'lucide-react';

const Reviews: React.FC = () => {
  // Helper to get random rotation for 'messy' look
  const getRandomRotation = (index: number) => {
    return index % 2 === 0 ? 'rotate-1' : '-rotate-1';
  };

  const getRandomColor = (index: number) => {
     const colors = ['bg-brand-blue', 'bg-brand-pink', 'bg-brand-purple', 'bg-brand-teal', 'bg-brand-sage'];
     return colors[index % colors.length];
  };

  return (
    <div className="min-h-screen bg-brand-cream pb-20">
      
      {/* --- HERO SECTION --- */}
      <div className="relative bg-brand-pink/10 pt-20 pb-32 overflow-hidden rounded-b-[4rem]">
         {/* Decor */}
         <div className="absolute top-10 left-10 text-brand-pink/20 transform -rotate-12 animate-pulse">
            <Heart size={100} fill="currentColor" />
         </div>
         <div className="absolute top-20 right-20 text-brand-blue/20 transform rotate-12">
            <Heart size={80} fill="currentColor" />
         </div>
         
         <div className="container mx-auto px-6 text-center relative z-10">
            <span className="inline-block py-1 px-4 rounded-full bg-white border border-brand-pink text-brand-coral font-bold text-sm mb-4 shadow-sm animate-float">
               ❤️ Wheelers Hill's Favorite
            </span>
            <h1 className="font-bubble text-6xl md:text-7xl text-brand-darkBlue mb-6 drop-shadow-sm">
               Local Love
            </h1>
            <p className="text-xl text-slate-600 font-display max-w-2xl mx-auto leading-relaxed mb-8">
               Nothing makes our tails wag more than happy pets and happy parents. 
               We are so grateful for our amazing community!
            </p>
         </div>
      </div>

      {/* --- REVIEWS GRID (Masonry-ish) --- */}
      <div className="container mx-auto px-6 -mt-20 relative z-20">
         <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {REVIEWS.map((review, i) => (
               <div 
                  key={review.id} 
                  className={`break-inside-avoid bg-white p-8 rounded-3xl shadow-lg border-2 border-slate-50 hover:border-brand-blue/50 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] ${getRandomRotation(i)}`}
               >
                  {/* Header */}
                  <div className="flex justify-between items-start mb-6">
                     <div className="flex items-center gap-3">
                        {/* Avatar Placeholder */}
                        <div className={`w-12 h-12 rounded-full ${getRandomColor(i)} flex items-center justify-center text-brand-darkBlue font-bubble text-xl border-2 border-white shadow-sm`}>
                           {review.name.charAt(0)}
                        </div>
                        <div>
                           <h3 className="font-bold text-slate-800 text-lg leading-none">{review.name}</h3>
                           <span className="text-xs text-slate-400 flex items-center gap-1 mt-1">
                              <MapPin size={10} /> Local Resident
                           </span>
                        </div>
                     </div>
                     <Quote className="text-brand-blue/20 w-10 h-10 transform -scale-x-100" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4 bg-yellow-50 inline-flex px-3 py-1 rounded-full">
                     {[...Array(5)].map((_, stars) => (
                        <Star 
                           key={stars} 
                           size={16} 
                           fill={stars < review.rating ? "#fbbf24" : "none"} 
                           className={stars < review.rating ? "text-yellow-400" : "text-slate-200"} 
                        />
                     ))}
                  </div>

                  {/* Text */}
                  <p className="text-slate-600 leading-relaxed font-medium">
                     "{review.text}"
                  </p>

                  {/* Negative/Response Handling */}
                   {review.response && (
                     <div className="mt-6 bg-brand-sage/20 p-4 rounded-xl relative">
                        <div className="absolute -top-2 left-4 w-4 h-4 bg-brand-sage/20 transform rotate-45"></div>
                        <p className="font-bold text-green-800 text-xs uppercase tracking-wide mb-1 flex items-center gap-2">
                           <Heart size={12} fill="currentColor" /> From the team
                        </p>
                        <p className="text-slate-700 text-sm italic">{review.response}</p>
                     </div>
                   )}
               </div>
            ))}
         </div>

         {/* Google Reviews Button (Moved here) */}
         <div className="text-center mt-16 mb-8">
            <a 
               href="https://www.google.com/search?q=superb+dog+grooming+wheelers+hill+reviews" 
               target="_blank" 
               rel="noopener noreferrer"
               className="inline-flex items-center gap-3 bg-white text-slate-800 px-6 py-3 rounded-full font-bold shadow-md hover:shadow-xl hover:-translate-y-1 transition-all border-2 border-slate-100 hover:border-brand-blue group"
            >
               <span className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-bold">G</span>
               <span>Read all on Google</span>
               <ExternalLink size={16} className="text-slate-400 group-hover:text-brand-blue" />
            </a>
         </div>
      </div>

      {/* --- BOTTOM CTA --- */}
      <div className="container mx-auto px-6 mt-16 text-center">
         <div className="bg-brand-coral text-white rounded-[3rem] p-12 relative overflow-hidden shadow-2xl border-4 border-white">
            <div className="relative z-10">
               <h2 className="font-bubble text-4xl mb-6">Join our happy pack!</h2>
               <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
                  We treat every pet like our own family. Book an appointment today and see the difference.
               </p>
               <a 
                  href="tel:0406298111" 
                  className="inline-block bg-white text-brand-coral px-10 py-4 rounded-full font-bubble text-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all"
               >
                  Call 0406 298 111
               </a>
            </div>
            
            {/* Background patterns */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-10 left-10 text-white transform rotate-45"><Heart size={60} fill="currentColor"/></div>
                <div className="absolute bottom-10 right-10 text-white transform -rotate-12"><Star size={80} fill="currentColor"/></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full blur-3xl opacity-30"></div>
            </div>
         </div>
      </div>

    </div>
  );
};

export default Reviews;