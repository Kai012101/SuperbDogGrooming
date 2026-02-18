import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { ADDRESS, EMAIL, PHONE_LINK, PHONE_NUMBER } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-6 pb-20">
      <div className="text-center mb-16">
        <h1 className="font-display font-bold text-4xl md:text-5xl text-brand-darkBlue mb-6">Get in Touch</h1>
        <p className="text-lg text-slate-600">We'd love to meet you and your pet.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        
        {/* Contact Info & Map */}
        <div className="space-y-8">
          <div className="grid sm:grid-cols-2 gap-4">
            <a href={PHONE_LINK} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center gap-3 hover:border-brand-coral transition-colors group">
              <div className="bg-brand-peach p-3 rounded-full text-brand-coral group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-800">Phone</h3>
                <p className="text-slate-600 text-sm">{PHONE_NUMBER}</p>
              </div>
            </a>

            <a href={`mailto:${EMAIL}`} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center gap-3 hover:border-brand-coral transition-colors group">
              <div className="bg-brand-blue p-3 rounded-full text-brand-darkBlue group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-800">Email</h3>
                <p className="text-slate-600 text-sm break-all">info@superbdoggrooming.com.au</p>
              </div>
            </a>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="font-display font-bold text-xl text-slate-800 mb-6 flex items-center gap-2">
              <Clock className="w-5 h-5 text-brand-coral" /> Opening Hours
            </h3>
            <div className="space-y-2 text-slate-600">
              <p className="flex justify-between border-b border-slate-50 pb-2">
                <span>Weekdays</span>
                <span className="font-bold">By Appointment</span>
              </p>
              <p className="flex justify-between border-b border-slate-50 pb-2">
                <span>Saturday</span>
                <span className="font-bold">By Appointment</span>
              </p>
              <p className="flex justify-between text-slate-400">
                <span>Sunday</span>
                <span>Closed</span>
              </p>
            </div>
          </div>

          <div className="h-64 rounded-3xl overflow-hidden shadow-lg border border-slate-200 relative bg-slate-100">
             {/* Map Placeholder */}
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3148.5663673523455!2d145.18664877668794!3d-37.91901617194883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad63e2e0b570073%3A0xe54e601569482992!2s455%20Wellington%20Rd%2C%20Wheelers%20Hill%20VIC%203150!5e0!3m2!1sen!2sau!4v1709600000000!5m2!1sen!2sau" 
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               title="Map location"
             ></iframe>
             <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-xl text-xs font-bold shadow-sm flex items-center gap-2">
               <MapPin className="w-4 h-4 text-red-500" /> {ADDRESS}
             </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white p-8 md:p-10 rounded-[3rem] shadow-xl border border-slate-100">
          <h2 className="font-display font-bold text-2xl text-slate-800 mb-2">Send a Message</h2>
          <p className="text-slate-500 mb-8 text-sm">We'll get back to you as soon as possible to confirm details.</p>
          
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">Your Name</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue" placeholder="Jane Doe" />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
               <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">Phone</label>
                <input type="tel" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue" placeholder="0400..." />
               </div>
               <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">Pet Breed</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue" placeholder="e.g. Poodle" />
               </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">Message / Notes</label>
              <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue" placeholder="Tell us about your pet's needs..."></textarea>
            </div>

            <button type="submit" className="w-full bg-brand-darkBlue text-white font-bold py-4 rounded-xl shadow-lg shadow-sky-200 hover:bg-sky-700 transition-colors mt-4">
              Send Enquiry
            </button>
            <p className="text-xs text-center text-slate-400 mt-4">This is a demo form. For immediate bookings, please call.</p>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;