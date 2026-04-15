import { ArrowDown, Sparkles } from 'lucide-react';

interface HeroProps {
  scrollToSection: (id: string) => void;
  toggleCustomizer: () => void;
}

export default function Hero({ scrollToSection, toggleCustomizer }: HeroProps) {
  return (
    <div id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden font-['Space_Grotesk']">
      {/* Background Image with Dark Gradient Overlay */}
      <div className="absolute id-0 w-full h-full">
        <img
          src="/images/hero_cover.jpg"
          alt="Luxury fashion background"
          className="w-full h-full object-cover scale-105 animate-pulse-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-stone-950"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/20 via-transparent to-amber-950/20"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-8">
        <div className="space-y-4">
          <span className="text-emerald-400 text-xs font-semibold tracking-[0.4em] uppercase block animate-fade-in">
            Premium Nomadic Haute Couture
          </span>
          <h1 className="font-['Cinzel'] text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-stone-100 via-stone-200 to-amber-100 tracking-[0.15em] py-2 leading-tight select-none">
            ZAA MUR
          </h1>
          <p className="text-stone-300 text-sm md:text-lg max-w-2xl mx-auto font-light tracking-wide leading-relaxed">
            Where ancestral tradition collides with hyper-contemporary utility. Forged for the modern voyager. Available at the signature Flagship: <span className="text-amber-200">A1 City, Quetta</span>.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-6">
          <button
            onClick={() => scrollToSection('products')}
            className="w-full sm:w-auto px-8 py-4 bg-white text-stone-950 text-sm font-semibold tracking-widest rounded-none hover:bg-stone-200 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2 uppercase"
          >
            Explore Collections
          </button>
          <button
            onClick={toggleCustomizer}
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-amber-500/50 text-amber-300 text-sm font-semibold tracking-widest rounded-none hover:bg-amber-500/10 transition-all duration-300 flex items-center justify-center gap-2 uppercase"
          >
            <Sparkles size={16} />
            Bespoke Studio
          </button>
        </div>
      </div>

      {/* Down Arrow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-stone-400 flex flex-col items-center gap-2 cursor-pointer animate-bounce" onClick={() => scrollToSection('products')}>
        <span className="text-[10px] tracking-[0.3em] font-light uppercase">Scroll Down</span>
        <ArrowDown size={16} />
      </div>
    </div>
  );
}
