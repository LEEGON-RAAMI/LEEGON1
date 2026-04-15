import { X, Trash2, ShieldCheck, ArrowRight } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onRemoveItem: (id: string, index: number) => void;
  onOpenCheckout: () => void;
}

export default function CartDrawer({ isOpen, onClose, cart, onRemoveItem, onOpenCheckout }: CartDrawerProps) {
  if (!isOpen) return null;

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="fixed inset-0 z-50 flex justify-end font-['Space_Grotesk'] animate-fade-in">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-stone-950 border-l border-white/10 h-full flex flex-col justify-between text-stone-200">
        {/* Header */}
        <div className="p-6 border-b border-white/5 flex justify-between items-center bg-stone-900/40">
          <h3 className="font-['Cinzel'] text-xl font-bold tracking-widest text-stone-100 flex items-center gap-2">
            Shopping Bag <span className="text-sm font-light text-stone-400">({cart.length})</span>
          </h3>
          <button onClick={onClose} className="text-stone-400 hover:text-white transition">
            <X size={24} />
          </button>
        </div>

        {/* Cart items */}
        <div className="flex-1 p-6 overflow-y-auto space-y-6">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center text-stone-500">
              <span className="font-['Cinzel'] text-2xl tracking-widest uppercase opacity-40 mb-2">Empty Bag</span>
              <p className="text-sm font-light">Secure items from the collection to showcase refinement.</p>
            </div>
          ) : (
            cart.map((item, index) => (
              <div key={`${item.id}-${index}`} className="flex gap-4 border-b border-white/5 pb-6">
                {/* Image */}
                <div className="h-20 w-20 bg-stone-900 overflow-hidden shrink-0">
                  <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                </div>
                {/* Information */}
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h4 className="font-['Cinzel'] text-sm font-semibold text-stone-100 tracking-wider">
                      {item.name}
                    </h4>
                    <button
                      onClick={() => onRemoveItem(item.id, index)}
                      className="text-stone-600 hover:text-red-400 transition ml-2"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                  <p className="text-emerald-400 text-xs font-bold mt-1">${item.price}</p>

                  <div className="mt-2 text-[11px] text-stone-400 flex flex-wrap gap-x-4 gap-y-1">
                    {item.selectedColor && (
                      <span>Color: <b className="text-stone-200 font-normal">{item.selectedColor}</b></span>
                    )}
                    {item.selectedSize && (
                      <span>Size: <b className="text-stone-200 font-normal">{item.selectedSize}</b></span>
                    )}
                    {item.quantity && (
                      <span>Quantity: <b className="text-stone-200 font-normal">{item.quantity}</b></span>
                    )}
                  </div>
                  {item.engraving && (
                    <div className="mt-2 p-2 bg-stone-900 border border-amber-500/10 text-[10px] text-amber-300 font-light line-clamp-1">
                      Note: {item.engraving}
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Pricing Summary */}
        {cart.length > 0 && (
          <div className="p-6 border-t border-white/5 bg-stone-900/30 space-y-4">
            <div className="space-y-2 text-sm text-stone-400">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="text-stone-100 font-semibold">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping (Quetta Flagship Express)</span>
                <span className="text-emerald-400 font-semibold">Complimentary</span>
              </div>
            </div>

            <div className="border-t border-white/5 pt-4 flex justify-between items-baseline font-bold">
              <span className="text-stone-200 font-['Cinzel'] text-lg tracking-wider">Total Due</span>
              <span className="text-amber-200 font-['Space_Grotesk'] text-xl">${subtotal.toFixed(2)}</span>
            </div>

            <button
              onClick={onOpenCheckout}
              className="w-full mt-4 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-stone-950 font-bold tracking-widest uppercase flex items-center justify-center gap-2 group transition duration-300"
            >
              Secure Order <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
            </button>

            <div className="flex justify-center items-center gap-1 text-[10px] text-stone-500 mt-2">
              <ShieldCheck size={14} className="text-emerald-500" />
              <span>Full cryptographic payment security active.</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
