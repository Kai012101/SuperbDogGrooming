import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../constants';
import { ArrowRight, Sparkles } from 'lucide-react';

const Gallery: React.FC = () => {
  // Set default filter to before-after as requested
  const [filter, setFilter] = useState<'all' | 'dog' | 'cat' | 'before-after' | 'puppy' | 'senior'>('before-after');

  const filteredImages = filter === 'all' 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === filter);

  // Filters ordered as requested (Before & After main thing)
  const filters = [
    { id: 'before-after', label: 'Before & After ✨' },
    { id: 'dog', label: 'Dogs' },
    { id: 'puppy', label: 'Puppies' },
    { id: 'senior', label: 'Seniors' },
    { id: 'all', label: 'All Photos' },
  ];

  return (
    <div className="container mx-auto px-6 pb-20 pt-10">
      <div className="text-center mb-12">
        <h1 className="font-bubble text-5xl md:text-6xl text-brand-darkBlue mb-6 drop-shadow-sm">Transformations Gallery</h1>
        <p className="text-xl text-slate-600 font-display">
          See the magic happen! From scruffy to fluffy.
        </p>
      </div>

      {/* Filter Chips */}
      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {filters.map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id as any)}
            className={`px-6 py-3 rounded-full font-bold text-sm transition-all transform hover:scale-105 active:scale-95 border-2 ${
              filter === f.id 
                ? 'bg-brand-coral text-white border-brand-coral shadow-lg' 
                : 'bg-white text-slate-600 border-slate-200 hover:border-brand-coral hover:text-brand-coral'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className={`grid gap-8 ${filter === 'before-after' ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
        {filteredImages.map((image) => (
          <div key={image.id} className="break-inside-avoid">
            
            {/* Conditional Rendering for Before & After Cards */}
            {image.category === 'before-after' ? (
               <div className="bg-white rounded-3xl p-4 shadow-xl border-2 border-slate-100 hover:border-brand-teal transition-all group">
                  <div className="flex items-center justify-between mb-4 px-2">
                    <h3 className="font-bubble text-xl text-slate-800">{image.caption}</h3>
                    <Sparkles className="text-yellow-400 w-5 h-5 animate-pulse" />
                  </div>
                  
                  {/* Split Grid View */}
                  <div className="grid grid-cols-2 gap-2 h-64 md:h-80 relative rounded-2xl overflow-hidden">
                     {/* Before Image */}
                     <div className="relative h-full">
                       <img 
                         src={image.beforeUrl} 
                         alt="Before grooming" 
                         className="w-full h-full object-cover rounded-l-xl grayscale-[50%] group-hover:grayscale-0 transition-all duration-500" 
                       />
                       <div className="absolute top-2 left-2 bg-slate-800/80 text-white text-xs font-bold px-2 py-1 rounded-md">
                         BEFORE
                       </div>
                     </div>

                     {/* After Image */}
                     <div className="relative h-full">
                       <img 
                         src={image.afterUrl} 
                         alt="After grooming" 
                         className="w-full h-full object-cover rounded-r-xl" 
                       />
                       <div className="absolute top-2 right-2 bg-brand-coral text-white text-xs font-bold px-2 py-1 rounded-md">
                         AFTER
                       </div>
                     </div>

                     {/* Arrow Icon in Center */}
                     <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg z-10">
                        <ArrowRight className="w-4 h-4 text-slate-800" />
                     </div>
                  </div>
               </div>
            ) : (
              /* Regular Image Card */
              <div className="relative group rounded-3xl overflow-hidden shadow-md border-2 border-transparent hover:border-brand-blue transition-all h-80">
                <img 
                  src={image.url} 
                  alt={image.caption} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-bold font-display text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{image.caption}</p>
                </div>
                
                {/* Tag Overlay */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-700 uppercase tracking-wide">
                  {image.category}
                </div>
              </div>
            )}

          </div>
        ))}
      </div>

      {filteredImages.length === 0 && (
         <div className="text-center py-20 text-slate-400 bg-brand-blue/10 rounded-3xl mt-8">
           <p className="font-display text-xl">No photos found for this category yet.</p>
           <p className="text-sm mt-2">Check back soon!</p>
         </div>
      )}
    </div>
  );
};

export default Gallery;