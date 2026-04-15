import React from 'react';
import { ShoppingBag, Sparkles, MessageSquare, Menu, X, MapPin } from 'lucide-react';
import { CartItem } from '../types';

interface NavbarProps {
  cart: CartItem[];
  toggleCart: () => void;
  toggleChat: () => void;
  toggleCustomizer: () => void;
  scrollToSection: (id: string) => void;
}

export default function Navbar({
  cart,
  toggleCart,
  toggleChat,
  toggleCustomizer,
  scrollToSection,
}: NavbarProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      {/* Top Address Banner */}
      <div className="bg-gradient-to-r from-stone-900 via-emerald-950 to-stone-900 text-stone-300 text-xs py-2 px-4 flex justify-between items-center border-b border-emerald-900/40 font-['Space_Grotesk'] tracking-wider">
        <div className="flex items-center gap-1.5 mx-auto md:mx-0">
          <MapPin size={14} className="text-emerald-400 animate-pulse" />
          <span>FLAGSHIP: A1 CITY, BREWERY ROAD, QUETTA, BALOCHISTAN</span>
        </div>
        <div className="hidden md:block">WORLDWIDE EXPEDITED COURIER</div>
      </div>

      <nav className="sticky top-0 z-40 bg-black/70 backdrop-blur-xl border-b border-white/5 font-['Space_Grotesk']">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <button
              onClick={() => scrollToSection('hero')}
              className="font-['Cinzel'] text-2xl font-black tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-stone-100 via-emerald-200 to-amber-100 hover:opacity-80 transition"
            >
              ZAA MUR
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-widest text-stone-300">
              <button
                onClick={() => scrollToSection('products')}
                className="hover:text-emerald-400 transition"
              >
                COLLECTIONS
              </button>
              <button
                onClick={toggleCustomizer}
                className="hover:text-emerald-400 flex items-center gap-1 transition text-amber-200"
              >
                <Sparkles size={16} />
                BESPOKE STUDIO
              </button>
              <button
                onClick={() => scrollToSection('lookbook')}
                className="hover:text-emerald-400 transition"
              >
                THE ARCHIVE
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-5 text-stone-200">
              <button
                onClick={toggleChat}
                className="p-2 hover:bg-white/10 rounded-full transition relative group"
                title="Style Assistant"
              >
                <MessageSquare size={22} className="group-hover:text-emerald-400" />
              </button>

              <button
                onClick={toggleCart}
                className="p-2 hover:bg-white/10 rounded-full transition relative group"
                title="Shopping Bag"
              >
                <ShoppingBag size={22} className="group-hover:text-emerald-400" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xxs font-bold h-5 w-5 rounded-full flex items-center justify-center border-2 border-black animate-bounce">
                    {cartCount}
                  </span>
                )}
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 hover:bg-white/10 rounded-full transition"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-stone-950 border-b border-white/5 px-4 pt-2 pb-6 space-y-4 text-center text-stone-300 tracking-wider font-semibold">
            <button
              onClick={() => {
                scrollToSection('products');
                setIsOpen(false);
              }}
              className="block w-full py-2 hover:text-emerald-400 border-b border-white/5"
            >
              COLLECTIONS
            </button>
            <button
              onClick={() => {
                toggleCustomizer();
                setIsOpen(false);
              }}
              className="block w-full py-2 text-amber-200 hover:text-amber-300 flex items-center justify-center gap-2 border-b border-white/5"
            >
              <Sparkles size={16} /> BESPOKE STUDIO
            </button>
            <button
              onClick={() => {
                scrollToSection('lookbook');
                setIsOpen(false);
              }}
              className="block w-full py-2 hover:text-emerald-400"
            >
              THE ARCHIVE
            </button>
          </div>
        )}
      </nav>
    </>
  );
}
