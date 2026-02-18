import React from 'react';
import { Star, CheckCircle2, ArrowRight } from 'lucide-react';
import { Page } from '../types';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="overflow-hidden">
      {/* HERO SECTION - Inspired by Alph^Pet */}
      <section className="relative min-h-[90vh] flex flex-col justify-center pt-10 md:pt-0">
        
        {/* Background Blob Decoration */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-blue/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 z-0 pointer-events-none opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-pink/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 z-0 pointer-events-none opacity-50"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left: Content (Mobile Order 2) */}
            <div className="order-2 lg:order-1 text-center lg:text-left space-y-8">
              <div className="inline-block bg-white border-2 border-black px-4 py-1 rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-[-2deg] mb-4">
                <span className="font-bold font-display text-slate-800">👋 Welcome to Superb Pet</span>
              </div>
              
              <h1 className="font-bubble text-6xl md:text-8xl text-brand-coral leading-[0.9] drop-shadow-sm">
                GROOMING <br/>
                <span className="text-brand-teal">FOR DOGS</span>
              </h1>
              
              <p className="text-xl text-slate-600 font-display md:max-w-md mx-auto lg:mx-0 leading-relaxed">
                We are dedicated to providing the most caring, stylish, and fun grooming services for your furry friends in Wheelers Hill!
              </p>

              {/* Google Reviews Badge */}
              <div className="flex flex-col items-center lg:items-start">
                <div className="bg-white/80 backdrop-blur-sm border-2 border-slate-100 rounded-2xl p-3 inline-flex items-center gap-3 shadow-sm hover:scale-105 transition-transform cursor-default">
                   <div className="bg-white p-1.5 rounded-full border border-slate-100 shadow-sm">
                     <svg viewBox="0 0 24 24" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
                       <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                       <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                       <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.24-1.19-.6z" fill="#FBBC05"/>
                       <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                     </svg>
                   </div>
                   <div className="text-left">
                      <div className="flex items-center gap-1">
                         <span className="font-bubble text-lg text-slate-800">4.9</span>
                         <div className="flex text-yellow-400">
                            {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" className={i===5 ? "fill-yellow-400 text-yellow-400" : ""} />)} 
                         </div>
                      </div>
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">250+ Google Reviews</p>
                   </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                <button 
                   onClick={() => onNavigate('contact')}
                   className="bg-slate-800 text-white px-8 py-4 rounded-full font-bubble text-xl border-2 border-transparent hover:border-black hover:bg-white hover:text-black transition-all shadow-xl hover:shadow-none transform hover:scale-95"
                >
                  Book Appointment
                </button>
                <button 
                   onClick={() => onNavigate('services')}
                   className="bg-white text-slate-800 border-2 border-slate-200 px-8 py-4 rounded-full font-bubble text-xl hover:border-black transition-all"
                >
                  View Services
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-4 flex flex-col md:flex-row gap-6 justify-center lg:justify-start items-center text-sm font-bold text-slate-600">
                <div className="flex items-center gap-2">
                   <CheckCircle2 className="w-6 h-6 text-green-500 fill-green-100" />
                   <span>Number ONE priority: Welfare</span>
                </div>
                <div className="flex items-center gap-2">
                   <CheckCircle2 className="w-6 h-6 text-green-500 fill-green-100" />
                   <span>Appointments Recommended</span>
                </div>
              </div>
            </div>

            {/* Right: Image (Mobile Order 1) */}
            <div className="order-1 lg:order-2 flex justify-center relative">
               {/* Organic Blob Mask for Image */}
               <div className="relative w-72 h-72 md:w-[500px] md:h-[500px]">
                 <div className="absolute inset-0 bg-brand-peach/50 rounded-blob animate-float"></div>
                 <div className="absolute inset-4 bg-brand-blue/30 rounded-blob animation-delay-2000 animate-float" style={{animationDelay: '-2s'}}></div>
                 
                 {/* Main Image Container with Mask */}
                 <div className="absolute inset-8 rounded-blob overflow-hidden border-4 border-white shadow-2xl bg-white rotate-2 hover:rotate-0 transition-transform duration-500">
                    <img 
                      src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=2071&auto=format&fit=crop" 
                      alt="Cute dog getting groomed" 
                      className="w-full h-full object-cover scale-110"
                    />
                 </div>

                 {/* Floating Stickers */}
                 <div className="absolute -top-4 -right-4 bg-yellow-300 text-black font-bubble p-4 rounded-full rotate-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black animate-wiggle">
                    We Love Dogs!
                 </div>
                 <div className="absolute -bottom-8 -left-4 bg-white p-3 rounded-xl rotate-[-6deg] shadow-lg border border-slate-100 max-w-[150px]">
                    <div className="flex text-yellow-400 mb-1">
                      <Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" />
                    </div>
                    <p className="text-xs font-bold text-slate-800">"Best groomer in Wheelers Hill!"</p>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* FEATURED SERVICES STRIP */}
      <section className="bg-brand-sage/30 py-20 mt-12 border-y-4 border-dashed border-brand-sage/50">
         <div className="container mx-auto px-6">
            <div className="text-center mb-12">
               <h2 className="font-bubble text-4xl text-slate-800">What We Do Best</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
               {[
                 { title: "Full Groom", img: "https://images.unsplash.com/photo-1596272875729-ed2ff7d6d9c5?q=80&w=2070&auto=format&fit=crop", desc: "The works! Bath, dry, clip, style, nails & ears." },
                 { title: "Bath & Blow Dry", img: "https://images.unsplash.com/photo-1535930749574-1399327ce78f?q=80&w=2072&auto=format&fit=crop", desc: "Perfect for in-between grooms to keep them smelling fresh." },
                 { title: "Puppy Intro", img: "https://images.unsplash.com/photo-1591854219801-58d0d47f4f17?q=80&w=1887&auto=format&fit=crop", desc: "A gentle first experience with lots of cuddles and treats." }
               ].map((s, i) => (
                 <div key={i} className="bg-white p-4 rounded-3xl shadow-lg border-2 border-slate-100 hover:border-brand-teal transition-all group">
                    <div className="h-48 rounded-2xl overflow-hidden mb-4 relative">
                       <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                       <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                    </div>
                    <h3 className="font-bubble text-2xl text-slate-800 mb-2">{s.title}</h3>
                    <p className="text-slate-600 font-medium">{s.desc}</p>
                 </div>
               ))}
            </div>
            
            <div className="text-center mt-12">
               <button onClick={() => onNavigate('services')} className="inline-flex items-center gap-2 font-bubble text-xl text-brand-coral hover:underline">
                 View All Services <ArrowRight />
               </button>
            </div>
         </div>
      </section>

      {/* FUN BANNER */}
      <section className="py-20 container mx-auto px-6">
         <div className="bg-brand-coral rounded-[3rem] p-12 text-center relative overflow-hidden shadow-[8px_8px_0px_0px_#000000] border-2 border-black">
            <div className="relative z-10">
               <h2 className="font-bubble text-white text-4xl md:text-5xl mb-6">Ready to make your pet fabulous?</h2>
               <p className="text-white font-display text-xl mb-8 opacity-90">Spots fill up fast! Don't let your dog have a bad hair day.</p>
               <button onClick={() => onNavigate('contact')} className="bg-white text-black px-10 py-4 rounded-full font-bubble text-xl hover:scale-105 transition-transform shadow-lg">
                 Book Now
               </button>
            </div>
            {/* Decor */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-white/20 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-400/30 rounded-full blur-2xl translate-x-1/3 translate-y-1/3"></div>
         </div>
      </section>

    </div>
  );
};

export default Home;