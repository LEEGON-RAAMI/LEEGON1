import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import ProductDrawer from './components/ProductDrawer';
import CartDrawer from './components/CartDrawer';
import Checkout from './components/Checkout';
import MurAi from './components/MUR_AI';
import Customizer from './components/Customizer';
import Lookbook from './components/Lookbook';
import Footer from './components/Footer';
import { CartItem, Product } from './types';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleAddToCart = (item: CartItem) => {
    setCart((prev) => {
      // Find if item already exists with matching selections
      const existingIdx = prev.findIndex(
        (p) =>
          p.id === item.id &&
          p.selectedColor === item.selectedColor &&
          p.selectedSize === item.selectedSize &&
          p.engraving === item.engraving
      );

      if (existingIdx > -1) {
        const nextCart = [...prev];
        nextCart[existingIdx].quantity += item.quantity;
        return nextCart;
      }
      return [...prev, item];
    });
    setIsCartOpen(true);
  };

  const handleQuickAdd = (product: Product) => {
    handleAddToCart({
      ...product,
      quantity: 1,
      selectedColor: product.colors[0]?.name,
      selectedSize: product.category !== 'Accessories' ? 'M' : undefined,
    });
  };

  const handleRemoveItem = (_id: string, index: number) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const clearCart = () => {
    setCart([]);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-stone-950 min-h-screen text-stone-100 flex flex-col antialiased selection:bg-emerald-500 selection:text-black">
      <Navbar
        cart={cart}
        toggleCart={() => setIsCartOpen(!isCartOpen)}
        toggleChat={() => setIsChatOpen(!isChatOpen)}
        toggleCustomizer={() => setIsCustomizerOpen(true)}
        scrollToSection={scrollToSection}
      />

      <Hero
        scrollToSection={scrollToSection}
        toggleCustomizer={() => setIsCustomizerOpen(true)}
      />

      <ProductGrid
        onOpenDetails={(p) => setSelectedProduct(p)}
        onAddToCart={handleQuickAdd}
      />

      <Lookbook scrollToSection={scrollToSection} />

      <Footer scrollToSection={scrollToSection} />

      {/* Dynamic Drawer Overlays */}
      <ProductDrawer
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onRemoveItem={handleRemoveItem}
        onOpenCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
      />

      <Checkout
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cart={cart}
        clearCart={clearCart}
      />

      <MurAi
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
      />

      <Customizer
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}
