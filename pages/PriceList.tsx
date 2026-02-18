import React from 'react';
import { PHONE_LINK, PHONE_NUMBER } from '../constants';
import { Scissors, Sparkles, Dog, AlertCircle } from 'lucide-react';

const PriceList: React.FC = () => {
  const dogServices = [
    {
      title: "Premium Bath",
      description: "We redefine the bath service! We believe your dog should enjoy the full package every time with reasonable price. Services include bath, condition, nail clips, ears and eyes clean, blow dry.",
      type: "dual",
      columns: [
        {
          title: "Short Coat",
          prices: [
            { label: "Under 5kg", price: "$40" },
            { label: "5-10kg", price: "$45" },
            { label: "10-15kg", price: "$55" },
            { label: "15-20kg", price: "$65" },
            { label: "20-30kg", price: "$80" },
            { label: "30-40kg", price: "$95" },
            { label: "Over 40kg", price: "$110+" },
          ]
        },
        {
          title: "Long Coat",
          prices: [
            { label: "Under 5kg", price: "$50" },
            { label: "5-10kg", price: "$55" },
            { label: "10-15kg", price: "$65" },
            { label: "15-20kg", price: "$75" },
            { label: "20-30kg", price: "$90" },
            { label: "30-40kg", price: "$105" },
            { label: "Over 40kg", price: "$120+" },
          ]
        }
      ]
    },
    {
      title: "Full Grooming",
      description: "The most popular choice. Choose a stylish look or combine style with comfort and easy maintenance. Scissor finish on face and tail. Services include bath, condition, nail clips, ears and eyes clean, blow dry, full body clip and scissoring.",
      type: "single",
      prices: [
         { label: "Under 5kg", price: "$100" },
         { label: "5-10kg", price: "$110" },
         { label: "10-15kg", price: "$120" },
         { label: "15-20kg", price: "$130" },
         { label: "20-30kg", price: "$160" },
         { label: "30-40kg", price: "$180" },
         { label: "Over 40kg", price: "$200+" },
      ]
    },
    {
      title: "Tidy Up",
      description: "Maintenance trim around the face, tail and hygiene area. Services include bath, condition, nail clips, ears and eyes clean, blow dry, face, tail and sanitary trim.",
      type: "single",
      prices: [
         { label: "Under 5kg", price: "$70" },
         { label: "5-10kg", price: "$75" },
         { label: "10-15kg", price: "$85" },
         { label: "15-20kg", price: "$105" },
         { label: "20-30kg", price: "$120" },
         { label: "30-40kg", price: "$135" },
         { label: "Over 40kg", price: "$150+" },
      ]
    },
    {
      title: "Hand Scissoring",
      description: "This is what really differentiate us from other groomers. Every pet is different. If you have a particular style that you want to achieve, this service will be the most suitable for you.",
      type: "single",
      prices: [
         { label: "Under 5kg", price: "$120+" },
         { label: "5-10kg", price: "$130+" },
         { label: "10-15kg", price: "$140+" },
         { label: "15-20kg", price: "$150+" },
         { label: "20-30kg", price: "Price on quote" },
         { label: "30-40kg", price: "Price on quote" },
         { label: "Over 40kg", price: "Price on quote" },
      ]
    }
  ];

  const extras = [
    { name: "Nail Clip", s: "$20", l: "$20" },
    { name: "Ear Plucking", s: "$20", l: "$20" },
    { name: "Tidy Up (Mini)", s: "$20", l: "$30" },
    { name: "Double Coat & De-shedding", s: "$20+", l: "$30+" },
    { name: "Specialty Shampoo", s: "$10", l: "$20" },
    { name: "Teeth Brushing", s: "$20", l: "$20" },
    { name: "Matted & Brush Out", s: "$20+", l: "$30+" },
    { name: "Anal Gland", s: "$10", l: "$10" },
    { name: "Handling / Aggressive Fee", s: "$20+", l: "$20+" },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h1 className="font-bubble text-5xl md:text-6xl text-brand-darkBlue mb-6 drop-shadow-sm">Grooming Price List</h1>
        <p className="text-xl text-slate-600 font-display">
          Transparent pricing for every furry friend.
        </p>
      </div>

      <div className="space-y-16">
        
        {/* --- DOGS SECTION --- */}
        <section>
          <div className="flex items-center justify-center gap-3 mb-8">
             <Dog className="w-10 h-10 text-brand-coral" />
             <h2 className="font-bubble text-5xl text-slate-800">Dogs</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
             {dogServices.map((service, idx) => (
                <div key={idx} className={`bg-white rounded-3xl shadow-sm border-2 border-slate-100 overflow-hidden ${service.type === 'dual' ? 'lg:col-span-2' : ''}`}>
                   <div className="bg-brand-sage/20 p-6 border-b border-slate-100">
                      <h3 className="font-bubble text-2xl text-slate-800 mb-2">{service.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed max-w-3xl">{service.description}</p>
                   </div>
                   
                   <div className="p-6">
                      {service.type === 'dual' && service.columns ? (
                        <div className="grid md:grid-cols-2 gap-8">
                           {service.columns.map((col, cIdx) => (
                             <div key={cIdx}>
                               <h4 className="font-display font-bold text-brand-coral mb-4 text-center uppercase tracking-wider text-sm">{col.title}</h4>
                               <div className="space-y-2">
                                  {col.prices.map((p, pIdx) => (
                                    <div key={pIdx} className="flex justify-between border-b border-dashed border-slate-100 pb-1">
                                       <span className="text-slate-600 font-medium">{p.label}</span>
                                       <span className="font-bold text-slate-800">{p.price}</span>
                                    </div>
                                  ))}
                               </div>
                             </div>
                           ))}
                        </div>
                      ) : (
                         <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-2">
                            {service.prices?.map((p, pIdx) => (
                               <div key={pIdx} className="flex justify-between items-center border-b border-dashed border-slate-100 pb-1">
                                  <span className="text-slate-600 font-medium">{p.label}</span>
                                  <span className="font-bold text-slate-800">{p.price}</span>
                               </div>
                            ))}
                         </div>
                      )}
                   </div>
                </div>
             ))}
          </div>
        </section>

        {/* --- EXTRAS SECTION --- */}
        <section className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8 pt-8 border-t border-slate-200">
             <Sparkles className="w-10 h-10 text-brand-teal" />
             <h2 className="font-bubble text-5xl text-slate-800">Extra Services</h2>
          </div>

          <div className="bg-white rounded-3xl shadow-lg border-2 border-slate-100 overflow-hidden">
             <div className="overflow-x-auto">
                <table className="w-full text-left">
                   <thead>
                      <tr className="bg-brand-teal/10">
                         <th className="p-6 font-bubble text-slate-800 text-lg">Service</th>
                         <th className="p-6 font-display text-slate-800 text-center whitespace-nowrap">
                            Dog (Small)<br/>
                            <span className="text-xs text-slate-500 font-normal">0-15kg</span>
                         </th>
                         <th className="p-6 font-display text-slate-800 text-center whitespace-nowrap">
                            Dog (Large)<br/>
                            <span className="text-xs text-slate-500 font-normal">Over 15kg</span>
                         </th>
                      </tr>
                   </thead>
                   <tbody className="divide-y divide-slate-100">
                      {extras.map((item, idx) => (
                        <tr key={idx} className="hover:bg-slate-50 transition-colors">
                           <td className="p-4 pl-6 font-bold text-slate-700">{item.name}</td>
                           <td className="p-4 text-center font-medium text-slate-600">{item.s}</td>
                           <td className="p-4 text-center font-medium text-slate-600">{item.l}</td>
                        </tr>
                      ))}
                   </tbody>
                </table>
             </div>
          </div>
        </section>

        {/* --- CALLOUT --- */}
        <div className="bg-brand-coral text-white rounded-[3rem] p-10 text-center shadow-xl relative overflow-hidden max-w-3xl mx-auto mt-12">
            <div className="relative z-10">
              <AlertCircle className="w-12 h-12 mb-4 mx-auto opacity-90" />
              <h3 className="font-bubble text-3xl mb-4">Need a specific quote?</h3>
              <p className="mb-8 font-medium text-lg opacity-90">
                 Every pet is unique! Prices are subject to change based on coat condition, temperament, and breed specific requirements.
              </p>
              <a href={PHONE_LINK} className="inline-block bg-white text-brand-coral font-bold px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-transform">
                Call {PHONE_NUMBER}
              </a>
            </div>
            {/* Decor */}
            <Scissors className="absolute -bottom-8 -right-8 w-48 h-48 text-black opacity-10 rotate-[-20deg]" />
         </div>

      </div>
    </div>
  );
};

export default PriceList;