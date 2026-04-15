import { MapPin, Globe, Shield } from 'lucide-react';

interface FooterProps {
  scrollToSection: (id: string) => void;
}

export default function Footer({ scrollToSection }: FooterProps) {
  return (
    <footer className="bg-stone-950 border-t border-white/5 pt-16 pb-8 font-['Space_Grotesk'] text-stone-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand column */}
        <div className="space-y-4">
          <h3 className="font-['Cinzel'] text-xl font-bold tracking-[0.2em] text-white">ZAA MUR</h3>
          <p className="text-xxs tracking-wider uppercase text-emerald-400 font-bold">Nomadic Haute Couture</p>
          <div className="pt-2 text-xs font-light leading-relaxed space-y-1.5 flex flex-col">
            <span className="flex items-start gap-1.5 text-stone-300">
              <MapPin size={16} className="text-emerald-400 mt-0.5 shrink-0" />
              <span>A1 City, Brewery Road, Quetta, Balochistan.</span>
            </span>
            <span className="flex items-center gap-1.5 pl-5">
              <Globe size={14} className="text-stone-500" />
              <span>Global Dispatch Available.</span>
            </span>
          </div>
        </div>

        {/* Categories */}
        <div className="space-y-4 text-xs font-light tracking-wide">
          <h4 className="font-['Cinzel'] text-sm font-semibold tracking-wider text-stone-200">Collections</h4>
          <button onClick={() => scrollToSection('products')} className="block hover:text-emerald-400 transition">Outerwear</button>
          <button onClick={() => scrollToSection('products')} className="block hover:text-emerald-400 transition">Heritage Footwear</button>
          <button onClick={() => scrollToSection('products')} className="block hover:text-emerald-400 transition">Accessories</button>
        </div>

        {/* Brand Pillars */}
        <div className="space-y-4 text-xs font-light tracking-wide">
          <h4 className="font-['Cinzel'] text-sm font-semibold tracking-wider text-stone-200">The Studio</h4>
          <button onClick={() => scrollToSection('lookbook')} className="block hover:text-emerald-400 transition">The Archive Lookbook</button>
          <span className="block text-stone-600">Sustainability Framework</span>
          <span className="block text-stone-600">Material Integrity</span>
        </div>

        {/* Security & Support */}
        <div className="space-y-4 text-xs font-light tracking-wide border border-white/5 p-4 bg-stone-900/10">
          <h4 className="font-['Cinzel'] text-sm font-semibold tracking-wider text-emerald-400 flex items-center gap-1.5">
            <Shield size={16} /> Certified Authenticity
          </h4>
          <p className="text-xxs text-stone-400 leading-relaxed">
            Every ZAA MUR apparel design comes equipped with serialized authenticity tags guaranteeing production source legitimacy.
          </p>
          <p className="text-xxs text-stone-500 mt-2">
            © {new Date().getFullYear()} ZAA MUR Atelier. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
