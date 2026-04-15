import { useState } from 'react';
import { X, ShieldCheck, Truck, CreditCard, Sparkles, CheckCircle } from 'lucide-react';
import { CartItem } from '../types';
// @ts-ignore
import confetti from 'canvas-confetti';

interface CheckoutProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  clearCart: () => void;
}

export default function Checkout({ isOpen, onClose, cart, clearCart }: CheckoutProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: 'Quetta',
    country: 'Pakistan',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  if (!isOpen) return null;

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) setStep(step + 1);
  };

  const handleCompleteOrder = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#10b981', '#34d399', '#fbbf24', '#ffffff'],
    });
    setStep(4);
    setTimeout(() => {
      clearCart();
    }, 200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center font-['Space_Grotesk'] p-4 animate-fade-in">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose} />

      <div className="relative bg-stone-950 border border-white/10 w-full max-w-2xl text-stone-200 overflow-hidden flex flex-col md:flex-row h-[90vh] md:h-auto">
        {/* Left Side order Summary */}
        <div className="w-full md:w-5/12 bg-stone-900/60 p-6 border-b md:border-b-0 md:border-r border-white/5 flex flex-col justify-between">
          <div>
            <h3 className="font-['Cinzel'] text-lg font-bold tracking-widest text-stone-100">Order Summary</h3>
            <div className="mt-6 space-y-4 max-h-[40vh] md:max-h-[50vh] overflow-y-auto pr-2">
              {cart.map((item, i) => (
                <div key={i} className="flex gap-3 text-xs border-b border-white/5 pb-3">
                  <img src={item.image} alt={item.name} className="h-12 w-12 object-cover bg-stone-800 shrink-0" />
                  <div className="flex-1">
                    <p className="font-bold tracking-wide">{item.name}</p>
                    <p className="text-stone-400 mt-1">${item.price}</p>
                    <p className="text-emerald-400 mt-1">Qty: {item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-white/10">
            <div className="flex justify-between items-baseline font-bold text-sm">
              <span className="text-stone-400">Grand Total</span>
              <span className="text-amber-200 text-lg">${total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Right Side Form Content */}
        <div className="w-full md:w-7/12 p-6 flex flex-col justify-between relative overflow-y-auto">
          {step < 4 && (
            <button onClick={onClose} className="absolute top-6 right-6 text-stone-400 hover:text-white transition">
              <X size={20} />
            </button>
          )}

          {/* Stepper Indicators */}
          {step < 4 && (
            <div className="flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase font-bold text-stone-500 mb-6 border-b border-white/5 pb-4">
              <span className={step >= 1 ? 'text-emerald-400' : ''}>01 Details</span>
              <span>/</span>
              <span className={step >= 2 ? 'text-emerald-400' : ''}>02 Payment</span>
              <span>/</span>
              <span className={step >= 3 ? 'text-emerald-400' : ''}>03 Confirmation</span>
            </div>
          )}

          {/* Step 1: Customer Details */}
          {step === 1 && (
            <form onSubmit={nextStep} className="space-y-4 flex-1 flex flex-col justify-center">
              <h4 className="font-['Cinzel'] text-lg font-bold tracking-wider text-stone-100 mb-2">Delivery Credentials</h4>
              <div className="grid grid-cols-2 gap-3">
                <input
                  required
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="First Name"
                  className="bg-stone-900 border border-white/10 p-3 text-xs focus:border-emerald-400 outline-none"
                />
                <input
                  required
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Last Name"
                  className="bg-stone-900 border border-white/10 p-3 text-xs focus:border-emerald-400 outline-none"
                />
              </div>
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Secure Email Address"
                className="bg-stone-900 border border-white/10 p-3 text-xs w-full focus:border-emerald-400 outline-none"
              />
              <input
                required
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Direct Telephone Contact"
                className="bg-stone-900 border border-white/10 p-3 text-xs w-full focus:border-emerald-400 outline-none"
              />
              <input
                required
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Shipping Street Address"
                className="bg-stone-900 border border-white/10 p-3 text-xs w-full focus:border-emerald-400 outline-none"
              />
              <div className="grid grid-cols-2 gap-3">
                <input
                  required
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="City"
                  className="bg-stone-900 border border-white/10 p-3 text-xs focus:border-emerald-400 outline-none"
                />
                <input
                  required
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  placeholder="Country"
                  className="bg-stone-900 border border-white/10 p-3 text-xs focus:border-emerald-400 outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-6 py-4 bg-emerald-500 text-stone-950 font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2"
              >
                Advance To Payment <Truck size={14} />
              </button>
            </form>
          )}

          {/* Step 2: Payment */}
          {step === 2 && (
            <form onSubmit={nextStep} className="space-y-4 flex-1 flex flex-col justify-center">
              <h4 className="font-['Cinzel'] text-lg font-bold tracking-wider text-stone-100 mb-2">Cryptographic Billing</h4>
              <div className="bg-stone-900 border border-emerald-500/10 p-4 rounded-lg flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <CreditCard className="text-emerald-400" />
                  <span className="text-xs text-stone-300 font-bold uppercase">Safe Vault Access</span>
                </div>
                <ShieldCheck size={18} className="text-emerald-500" />
              </div>

              <input
                required
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleInputChange}
                placeholder="Card Number (16 Digits)"
                maxLength={16}
                className="bg-stone-900 border border-white/10 p-3 text-xs w-full focus:border-emerald-400 outline-none"
              />
              <div className="grid grid-cols-2 gap-3">
                <input
                  required
                  type="text"
                  name="expiry"
                  value={formData.expiry}
                  onChange={handleInputChange}
                  placeholder="Expiry MM/YY"
                  maxLength={5}
                  className="bg-stone-900 border border-white/10 p-3 text-xs focus:border-emerald-400 outline-none"
                />
                <input
                  required
                  type="text"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleInputChange}
                  placeholder="CVV"
                  maxLength={3}
                  className="bg-stone-900 border border-white/10 p-3 text-xs focus:border-emerald-400 outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-6 py-4 bg-emerald-500 text-stone-950 font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2"
              >
                Review Order Placement <CreditCard size={14} />
              </button>
              <button
                type="button"
                onClick={() => setStep(1)}
                className="w-full text-center text-stone-400 text-xxs tracking-widest uppercase hover:underline"
              >
                Back To Details
              </button>
            </form>
          )}

          {/* Step 3: Review Details */}
          {step === 3 && (
            <div className="space-y-4 flex-1 flex flex-col justify-center">
              <h4 className="font-['Cinzel'] text-lg font-bold tracking-wider text-stone-100 mb-2">Finalization Review</h4>
              <div className="text-xs text-stone-400 space-y-2 border border-white/5 p-4 bg-stone-900/30">
                <p><b className="text-stone-300">Recipient:</b> {formData.firstName} {formData.lastName}</p>
                <p><b className="text-stone-300">Address:</b> {formData.address}, {formData.city}, {formData.country}</p>
                <p><b className="text-stone-300">Contact:</b> {formData.phone}</p>
              </div>

              <div className="p-4 border border-amber-500/20 bg-amber-500/5 text-[10px] text-amber-300 flex items-start gap-2 leading-relaxed">
                <Sparkles size={16} className="shrink-0" />
                <span>By finalizing your dossier, you confirm bespoke handling. Custom embroidery takes up to 4 business days before tracking initialization.</span>
              </div>

              <button
                onClick={handleCompleteOrder}
                className="w-full mt-4 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-stone-950 font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2"
              >
                Execute Order Totaling ${total.toFixed(2)}
              </button>
              <button
                onClick={() => setStep(2)}
                className="w-full text-center text-stone-400 text-xxs tracking-widest uppercase hover:underline"
              >
                Revise Method
              </button>
            </div>
          )}

          {/* Step 4: Success Confetti */}
          {step === 4 && (
            <div className="text-center flex-1 flex flex-col items-center justify-center space-y-4 font-['Space_Grotesk'] animate-fade-in">
              <CheckCircle size={48} className="text-emerald-400 animate-pulse" />
              <h3 className="font-['Cinzel'] text-2xl font-bold tracking-widest text-stone-100 uppercase">Vault Authorized</h3>
              <p className="text-xs text-stone-400 max-w-xs mx-auto leading-relaxed">
                Thank you for reserving luxury items with <b>ZAA MUR</b>. Confirmation credentials will arrive shortly via secure dispatch channels.
              </p>
              <button
                onClick={onClose}
                className="mt-6 px-6 py-3 bg-stone-100 text-black text-xs font-bold tracking-widest uppercase rounded-none transition hover:bg-stone-300"
              >
                Exit Portal
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
