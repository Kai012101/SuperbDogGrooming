import React from 'react';
import { SERVICES } from '../constants';
import { PawPrint, Sparkles } from 'lucide-react';

interface ServicesProps {
  onBook: () => void;
}

const Services: React.FC<ServicesProps> = ({ onBook }) => {
  const handleBookClick = () => {
    if (window.innerWidth < 768) {
      window.location.href = "tel:0406298111";
    } else {
      onBook();
    }
  };

  return (
    <div className="bg-brand-cream min-h-screen">
      
      {/* Header */}
      <div className="container mx-auto px-6 py-12 text-center">
         <h1 className="font-bubble text-5xl md:text-7xl text-brand-darkBlue mb-6 drop-shadow-sm">Our Grooming Menu</h1>
         <p className="text-xl text-slate-600 font-display max-w-2xl mx-auto">
            From a quick wash to a full breed-specific makeover, we have the perfect package for your furry friend.
         </p>
      </div>

      {/* Services List */}
      <div className="flex flex-col gap-0">
        {SERVICES.map((service, index) => (
          <section 
            key={service.id} 
            className={`py-20 px-6 ${index % 2 === 0 ? 'bg-white' : 'bg-brand-cream'}`}
          >
            <div className="container mx-auto">
              <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Image Side */}
                <div className="w-full lg:w-1/2">
                   <div className="relative group">
                      {/* Blob Background */}
                      <div className={`absolute inset-0 transform scale-105 rounded-blob blur-xl opacity-60 transition-all duration-500 group-hover:scale-110 ${index % 2 === 0 ? 'bg-brand-blue/40' : 'bg-brand-coral/30'}`}></div>
                      
                      <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] lg:aspect-square">
                        <img 
                          src={service.image} 
                          alt={service.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                         {/* Badge */}
                         <div className="absolute top-6 right-6 bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-lg font-bold font-display text-slate-800 flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                            {service.duration}
                         </div>
                      </div>
                   </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2">
                   <h2 className="font-bubble text-4xl lg:text-5xl text-brand-darkBlue mb-2">{service.title}</h2>
                   <h3 className="font-display font-bold text-xl text-brand-coral mb-8">{service.bestFor}</h3>
                   
                   {/* Includes List */}
                   <ul className="space-y-3 mb-10">
                      {service.includes.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-600 font-medium">
                           <span className="mt-1 bg-brand-sage/50 p-1 rounded-full text-green-700">
                             <PawPrint size={12} fill="currentColor" />
                           </span>
                           {item}
                        </li>
                      ))}
                   </ul>

                   {/* Pricing Table */}
                   {service.pricingTiers ? (
                     <div className="mb-8 bg-slate-50 rounded-2xl p-6 border border-slate-100">
                        <h4 className="font-display font-bold text-slate-800 mb-4 text-center border-b border-slate-200 pb-2">Starting from</h4>
                        <div className="space-y-2">
                           {service.pricingTiers.map((tier, idx) => (
                             <div key={idx} className="flex justify-between items-center text-sm md:text-base">
                                <span className="text-slate-500 font-medium">{tier.label}</span>
                                <span className="font-bold text-brand-darkBlue font-display">{tier.price}</span>
                             </div>
                           ))}
                        </div>
                     </div>
                   ) : (
                     <div className="mb-8">
                        <span className="text-3xl font-bubble text-brand-darkBlue">{service.priceStr}</span>
                     </div>
                   )}

                   {/* Action */}
                   <div className="flex flex-col sm:flex-row gap-4 items-center">
                      <button 
                        onClick={handleBookClick}
                        className="w-full sm:w-auto px-8 py-3 bg-slate-800 text-white rounded-full font-bubble shadow-lg hover:scale-105 transition-transform"
                      >
                        Book This
                      </button>
                      <p className="text-xs text-slate-400 italic max-w-xs text-center sm:text-left">
                        * Prices are a guide only and may vary based on coat condition and temperament.
                      </p>
                   </div>

                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
      
      {/* Footer CTA */}
      <div className="bg-brand-sage/30 py-16 text-center">
         <h2 className="font-bubble text-3xl text-slate-800 mb-6">Ready to book?</h2>
         <button onClick={handleBookClick} className="bg-brand-coral text-white px-12 py-4 rounded-full font-bubble text-xl shadow-[4px_4px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#000] transition-all border-2 border-black">
           Book Now
         </button>
      </div>

    </div>
  );
};

export default Services;