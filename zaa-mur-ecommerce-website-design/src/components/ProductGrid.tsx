import { useState } from 'react';
import { products, categories } from '../data/products';
import ProductCard from './ProductCard';
import { Product } from '../types';

interface ProductGridProps {
  onOpenDetails: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export default function ProductGrid({ onOpenDetails, onAddToCart }: ProductGridProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = products.filter((p) =>
    selectedCategory === 'All' ? true : p.category === selectedCategory
  );

  return (
    <div id="products" className="py-24 bg-stone-950 font-['Space_Grotesk'] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header section */}
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-12 border-b border-white/5 pb-6">
          <div>
            <h2 className="font-['Cinzel'] text-3xl md:text-4xl font-bold tracking-wider text-stone-100">
              The Collection
            </h2>
            <p className="text-stone-400 text-sm font-light mt-2 tracking-wide">
              Meticulously curated items matching ancestral designs with technological perfection.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-xs font-semibold tracking-wider uppercase rounded-none transition duration-200 border ${
                  selectedCategory === category
                    ? 'bg-white text-black border-white'
                    : 'bg-transparent text-stone-400 border-white/10 hover:border-emerald-500/40 hover:text-emerald-400'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Product listing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onOpenDetails={onOpenDetails}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
