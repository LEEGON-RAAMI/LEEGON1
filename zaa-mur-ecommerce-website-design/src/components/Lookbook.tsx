import { ArrowRight, Sparkles } from 'lucide-react';

interface LookbookProps {
  scrollToSection: (id: string) => void;
}

export default function Lookbook({ scrollToSection }: LookbookProps) {
  const scenes = [
    {
      title: 'Ancestral Shadows',
      desc: 'High-density fabrics mixed with raw wool patterns. Crafted for mountainous conditions.',
      img: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=1200',
    },
    {
      title: 'Quetta Metallic Guild',
      desc: 'Reflective structural design modules combined with modern evening jackets.',
      img: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=1200',
    },
  ];

  return (
    <div id="lookbook" className="bg-black py-24 font-['Space_Grotesk'] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <span className="text-amber-400 text-xs font-semibold tracking-[0.4em] uppercase flex items-center gap-2">
            <Sparkles size={14} /> The Archive Lookbook
          </span>
          <h2 className="font-['Cinzel'] text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-stone-100 to-amber-100 tracking-widest">
            AESTHETIC PORTFOLIO
          </h2>
          <p className="text-stone-400 text-xs font-light max-w-lg leading-relaxed">
            A cohesive collection translating cultural values into ready-to-wear visual experiences.
          </p>
        </div>

        {/* Cinematic Scroll */}
        <div className="space-y-24">
          {scenes.map((scene, index) => (
            <div
              key={scene.title}
              className={`flex flex-col md:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Image box */}
              <div className="w-full md:w-1/2 overflow-hidden bg-stone-900 border border-white/5 group">
                <img
                  src={scene.img}
                  alt={scene.title}
                  className="w-full h-[60vh] object-cover group-hover:scale-105 transition-transform duration-[2000ms]"
                />
              </div>

              {/* Text box */}
              <div className="w-full md:w-1/2 space-y-4">
                <span className="text-emerald-400 text-xxs font-bold tracking-[0.3em] uppercase">
                  DROP 01 / EDITION 00{index + 1}
                </span>
                <h3 className="font-['Cinzel'] text-2xl md:text-3xl font-bold tracking-wider text-stone-100">
                  {scene.title}
                </h3>
                <p className="text-stone-400 text-sm font-light leading-relaxed">
                  {scene.desc}
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => scrollToSection('products')}
                    className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-300 hover:text-amber-200 group border-b border-amber-300/20 pb-1"
                  >
                    Examine Apparel <ArrowRight size={14} className="group-hover:translate-x-1 transition" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
