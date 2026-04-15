import { useState } from 'react';
import { X, Sparkles, Check, Scissors, Palette } from 'lucide-react';
// @ts-ignore
import confetti from 'canvas-confetti';

interface CustomizerProps {
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (item: any) => void;
}

export default function Customizer({ isOpen, onClose, onAddToCart }: CustomizerProps) {
  const [baseGarment, setBaseGarment] = useState('Nomadic Trench');
  const [threadColor, setThreadColor] = useState('Golden Amber');
  const [liningOption, setLiningOption] = useState('Quetta Mirror Accents');
  const [initials, setInitials] = useState('');

  if (!isOpen) return null;

  const handleBespokeSubmission = () => {
    const bespokeItem = {
      id: `bespoke-${Date.now()}`,
      name: `Bespoke ${baseGarment}`,
      price: 1350,
      category: 'Outerwear',
      description: `Bespoke curated edition with ${liningOption} and initials "${initials || 'None'}".`,
      image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&q=80&w=800',
      quantity: 1,
      selectedColor: threadColor,
      engraving: `Custom Bespoke configuration. Thread: ${threadColor}, Lining: ${liningOption}, Initials: ${initials}`,
    };

    onAddToCart(bespokeItem);
    // @ts-ignore
    confetti({
      particleCount: 50,
      spread: 40,
      origin: { y: 0.8 },
      colors: ['#fbbf24', '#ffffff'],
    });
    onClose();
  };

  const garmentTemplates = [
    { name: 'Nomadic Trench', basePrice: 1100 },
    { name: 'Quetta Guild Velvet Bomber', basePrice: 950 },
    { name: 'Obsidian Expedition Duffel', basePrice: 550 },
  ];

  const threadColors = [
    { name: 'Golden Amber', hex: '#D97706' },
    { name: 'Quetta Silver', hex: '#9CA3AF' },
    { name: 'Midnight Emerald', hex: '#065F46' },
  ];

  const linings = ['Minimalist Silk', 'Quetta Mirror Accents', 'Garnet Quilted Cotton'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center font-['Space_Grotesk'] p-4 animate-fade-in">
      <div className="absolute inset-0 bg-black/85 backdrop-blur-md" onClick={onClose} />

      <div className="relative bg-stone-950 border border-amber-500/20 w-full max-w-4xl text-stone-200 overflow-hidden flex flex-col md:flex-row h-[85vh]">
        <button onClick={onClose} className="absolute top-6 right-6 text-stone-400 hover:text-white transition z-20">
          <X size={20} />
        </button>

        {/* Studio Visualizer */}
        <div className="w-full md:w-1/2 bg-stone-900/40 relative p-8 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-white/5">
          <div className="absolute top-6 left-6 flex items-center gap-2 text-amber-400 font-bold tracking-widest text-xs uppercase">
            <Sparkles size={16} /> Bespoke Studio Active
          </div>

          {/* Graphical Concept */}
          <div className="text-center space-y-4">
            <div className="w-56 h-56 mx-auto relative border border-emerald-500/10 flex items-center justify-center bg-stone-900 shadow-2xl">
              <Scissors size={64} className="text-stone-800 animate-pulse" />
              <div className="absolute inset-2 border border-dashed border-white/5"></div>
            </div>
            <h3 className="font-['Cinzel'] text-lg font-bold text-stone-100 uppercase tracking-widest">
              Live Customizer Active
            </h3>
            <p className="text-xxs text-stone-400 max-w-xs mx-auto leading-relaxed">
              Adjust configurations securely. Traditional master artisans process requests locally at Brewery Road.
            </p>
          </div>
        </div>

        {/* Configuration Panel */}
        <div className="w-full md:w-1/2 p-8 overflow-y-auto flex flex-col justify-between">
          <div className="space-y-6">
            <div>
              <h2 className="font-['Cinzel'] text-xl font-bold tracking-widest text-stone-100">
                Tailor Your Configuration
              </h2>
              <p className="text-xs text-emerald-400 font-medium mt-1">Base Selection & Hardware Setup</p>
            </div>

            {/* Template Selection */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-widest text-stone-400 flex items-center gap-2">
                <Scissors size={12} /> Select Base Garment
              </label>
              <div className="grid grid-cols-1 gap-2">
                {garmentTemplates.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => setBaseGarment(item.name)}
                    className={`p-4 border text-left flex justify-between items-center transition duration-200 ${
                      baseGarment === item.name
                        ? 'border-emerald-400 bg-emerald-500/5 text-emerald-300 font-bold'
                        : 'border-white/5 bg-stone-900/40 text-stone-300 hover:border-white/20'
                    }`}
                  >
                    <span className="text-xs uppercase tracking-wider">{item.name}</span>
                    {baseGarment === item.name && <Check size={16} />}
                  </button>
                ))}
              </div>
            </div>

            {/* Thread Colors */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-widest text-stone-400 flex items-center gap-2">
                <Palette size={12} /> Thread & Embroidery Tone
              </label>
              <div className="flex gap-4">
                {threadColors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setThreadColor(color.name)}
                    className={`flex items-center gap-2 text-xs border p-2 flex-1 justify-center transition uppercase tracking-wider ${
                      threadColor === color.name ? 'border-emerald-400 text-stone-100 font-bold' : 'border-white/5 text-stone-400'
                    }`}
                  >
                    <span className="h-3 w-3 rounded-full" style={{ backgroundColor: color.hex }} />
                    {color.name.split(' ')[1] || color.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Lining Options */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-widest text-stone-400">Interior Lining Design</label>
              <div className="grid grid-cols-3 gap-2">
                {linings.map((lining) => (
                  <button
                    key={lining}
                    onClick={() => setLiningOption(lining)}
                    className={`p-3 text-[10px] border tracking-wider transition text-center uppercase ${
                      liningOption === lining
                        ? 'border-emerald-400 bg-emerald-500/5 text-emerald-300 font-bold'
                        : 'border-white/5 text-stone-400 hover:border-white/10'
                    }`}
                  >
                    {lining}
                  </button>
                ))}
              </div>
            </div>

            {/* Monogram Initials */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-stone-400">Custom Monogram Initials</label>
              <input
                type="text"
                maxLength={4}
                value={initials}
                onChange={(e) => setInitials(e.target.value.toUpperCase())}
                placeholder="E.g., ZM"
                className="w-full bg-stone-900 border border-white/10 p-3 text-sm text-amber-200 uppercase tracking-widest focus:border-emerald-400 outline-none"
              />
            </div>
          </div>

          {/* Action trigger */}
          <div className="pt-6 border-t border-white/5 mt-6 flex justify-between items-center">
            <div>
              <p className="text-xxs uppercase tracking-wider text-stone-400">Bespoke Estimate</p>
              <p className="text-xl font-bold text-amber-300">$1,350.00</p>
            </div>
            <button
              onClick={handleBespokeSubmission}
              className="px-6 py-4 bg-emerald-500 text-stone-950 font-bold uppercase tracking-widest text-xs hover:bg-emerald-400 transition"
            >
              Add Tailored Creation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
