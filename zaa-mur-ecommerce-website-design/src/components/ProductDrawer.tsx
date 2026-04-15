import { X, Sparkles, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useState } from 'react';
import { Product, CartItem } from '../types';

interface ProductDrawerProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (item: CartItem) => void;
}

export default function ProductDrawer({ product, onClose, onAddToCart }: ProductDrawerProps) {
  if (!product) return null;

  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || '');
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const [engraving, setEngraving] = useState('');

  const sizes = ['XS', 'S', 'M', 'L', 'XL'];

  const handleAddToCart = () => {
    onAddToCart({
      ...product,
      quantity,
      selectedColor,
      selectedSize: product.category !== 'Accessories' ? selectedSize : undefined,
      engraving: product.customizable && engraving ? engraving : undefined,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end font-['Space_Grotesk']">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      {/* Content Drawer */}
      <div className="relative w-full max-w-xl bg-stone-950 border-l border-white/10 h-full flex flex-col justify-between text-stone-200 overflow-y-auto">
        {/* Top Header */}
        <div className="p-6 border-b border-white/5 flex justify-between items-center bg-stone-900/40">
          <h3 className="font-['Cinzel'] text-xl font-bold tracking-widest text-stone-100">
            Design Dossier
          </h3>
          <button onClick={onClose} className="text-stone-400 hover:text-white transition">
            <X size={24} />
          </button>
        </div>

        {/* Product Details */}
        <div className="p-6 space-y-8 flex-1">
          <div className="aspect-[4/3] w-full overflow-hidden bg-stone-900">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h2 className="font-['Cinzel'] text-2xl font-bold text-stone-100 tracking-wider">
              {product.name}
            </h2>
            <p className="text-emerald-400 text-lg font-bold mt-1">${product.price}</p>
            <p className="text-sm text-stone-400 font-light mt-4 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Specifications */}
          <div className="space-y-2">
            <h4 className="text-xs uppercase font-bold tracking-widest text-stone-400">Specifications</h4>
            <ul className="list-disc pl-5 text-sm text-stone-300 font-light space-y-1">
              {product.specs.map((spec, i) => (
                <li key={i}>{spec}</li>
              ))}
            </ul>
          </div>

          {/* Color Selection */}
          {product.colors.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-xs uppercase font-bold tracking-widest text-stone-400 flex justify-between">
                <span>Color</span>
                <span className="text-amber-200">{selectedColor}</span>
              </h4>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`h-8 w-8 rounded-full border-2 transition ${
                      selectedColor === color.name ? 'border-emerald-400 scale-110' : 'border-stone-800'
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Size Selection */}
          {product.category !== 'Accessories' && product.category !== 'Avant-Garde Jewelry' && (
            <div className="space-y-3">
              <h4 className="text-xs uppercase font-bold tracking-widest text-stone-400 flex justify-between">
                <span>Size</span>
                <span className="text-emerald-400">{selectedSize}</span>
              </h4>
              <div className="flex gap-2">
                {sizes.map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setSelectedSize(sz)}
                    className={`h-10 w-12 text-sm font-bold flex items-center justify-center transition border ${
                      selectedSize === sz
                        ? 'bg-emerald-500 border-emerald-500 text-stone-950'
                        : 'bg-transparent border-white/10 text-stone-400 hover:border-white/30'
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Bespoke Customization */}
          {product.customizable && (
            <div className="p-4 border border-amber-500/20 bg-amber-500/5 space-y-4">
              <h4 className="text-xs uppercase font-bold tracking-widest text-amber-300 flex items-center gap-1.5">
                <Sparkles size={14} /> Bespoke Tailoring Note
              </h4>
              <p className="text-xs text-stone-400">
                You have selected a Customizable Artisan product. Mention initial details for embroidery or dimensional tailoring:
              </p>
              <textarea
                rows={3}
                value={engraving}
                onChange={(e) => setEngraving(e.target.value)}
                placeholder="E.g., Custom embroidery 'S.A.' in silver thread at the inner collar..."
                className="w-full bg-stone-900 border border-white/10 p-3 text-sm text-stone-200 focus:outline-none focus:border-emerald-400 placeholder:text-stone-600 font-light resize-none rounded-none"
              />
            </div>
          )}

          {/* Quantity selector */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-widest text-stone-400">Quantity</h4>
            <div className="flex items-center border border-white/10 w-32">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-2 text-stone-400 hover:text-white transition"
              >
                <Minus size={16} />
              </button>
              <span className="flex-1 text-center font-bold text-stone-200">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-2 text-stone-400 hover:text-white transition"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Add to Cart Sticky Footer */}
        <div className="p-6 border-t border-white/5 bg-stone-900/60 sticky bottom-0">
          <button
            onClick={handleAddToCart}
            className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-bold tracking-widest uppercase flex items-center justify-center gap-2 transition duration-300"
          >
            <ShoppingBag size={18} /> Add To Bag — ${(product.price * quantity).toFixed(2)}
          </button>
        </div>
      </div>
    </div>
  );
}
