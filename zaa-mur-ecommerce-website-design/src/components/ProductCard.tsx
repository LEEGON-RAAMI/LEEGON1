import { Sparkles, ShoppingBag } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onOpenDetails: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onOpenDetails, onAddToCart }: ProductCardProps) {
  return (
    <div className="group relative bg-stone-900/40 border border-white/5 overflow-hidden font-['Space_Grotesk']">
      {/* Product Image */}
      <div
        className="relative h-96 overflow-hidden bg-stone-800 cursor-pointer"
        onClick={() => onOpenDetails(product)}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        {/* Hover overlay with button */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product);
            }}
            className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-black text-sm font-bold tracking-widest uppercase rounded-none transition duration-200 flex items-center justify-center gap-2"
          >
            <ShoppingBag size={16} /> Add To Bag — ${product.price}
          </button>
        </div>

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.customizable && (
            <span className="flex items-center gap-1 bg-amber-500/80 text-black text-[10px] font-bold tracking-widest px-2.5 py-1 uppercase rounded-none">
              <Sparkles size={10} /> Bespoke
            </span>
          )}
          <span className="bg-stone-950/80 text-white/80 text-[10px] tracking-widest px-2.5 py-1 uppercase border border-white/10">
            {product.category}
          </span>
        </div>
      </div>

      {/* Details */}
      <div className="p-5 border-t border-white/5 flex justify-between items-start">
        <div className="cursor-pointer" onClick={() => onOpenDetails(product)}>
          <h3 className="font-['Cinzel'] text-base font-semibold text-stone-100 tracking-wider group-hover:text-emerald-300 transition">
            {product.name}
          </h3>
          <p className="text-xs text-stone-400 font-light mt-1 line-clamp-1">
            {product.description}
          </p>
        </div>
        <span className="font-['Space_Grotesk'] text-sm text-amber-200 font-bold ml-4">
          ${product.price}
        </span>
      </div>
    </div>
  );
}
