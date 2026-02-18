import React from 'react';
import { X, Phone, MessageCircle } from 'lucide-react';
import { PHONE_NUMBER, PHONE_LINK, INSTAGRAM_LINK } from '../constants';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl p-6 md:p-8 animate-in zoom-in-95 duration-200">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-display font-bold text-brand-darkBlue mb-2">Book an Appointment</h2>
          <p className="text-slate-600">We operate by appointment to ensure every pet gets our full attention.</p>
        </div>

        <div className="space-y-4">
          <a 
            href={PHONE_LINK}
            className="flex items-center justify-center gap-4 w-full p-4 bg-brand-coral text-white rounded-2xl font-bold text-lg hover:bg-rose-600 transition-transform active:scale-95 shadow-lg shadow-rose-200"
          >
            <Phone className="w-6 h-6" />
            Call {PHONE_NUMBER}
          </a>

          <div className="relative flex py-2 items-center">
            <div className="flex-grow border-t border-slate-200"></div>
            <span className="flex-shrink mx-4 text-slate-400 text-sm">Or</span>
            <div className="flex-grow border-t border-slate-200"></div>
          </div>

          <a 
            href={INSTAGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-4 w-full p-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl font-bold text-lg hover:opacity-90 transition-transform active:scale-95 shadow-lg shadow-purple-200"
          >
            <MessageCircle className="w-6 h-6" />
            Message on Instagram
          </a>
        </div>

        <div className="mt-8 text-center bg-brand-blue/30 p-4 rounded-xl">
          <h3 className="font-display font-bold text-slate-700 mb-1">Opening Hours</h3>
          <p className="text-sm text-slate-600">By appointment only.</p>
          <p className="text-sm text-slate-600">Please call or message to find a time.</p>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;