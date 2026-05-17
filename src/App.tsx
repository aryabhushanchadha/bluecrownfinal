import { useState, useCallback } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Catalog from "./components/Catalog";
import About from "./components/About";
import SizeGuide from "./components/SizeGuide";
import Delivery from "./components/Delivery";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import Wholesale from "./components/Wholesale";
import SEOContent from "./components/SEOContent";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import ProductModal from "./components/ProductModal";
import Toast from "./components/Toast";
import { useCart } from "./store/useCart";
import type { Product } from "./data/products";

export default function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [toast, setToast] = useState({ visible: false, message: "" });
  const { addToCart } = useCart();

  const handleNavigate = useCallback((section: string) => {
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const handleAddToCart = useCallback(
    (product: Product, size: string) => {
      addToCart({
        productId: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        size,
        color: product.color,
      });
      setToast({
        visible: true,
        message: `${product.name} (${size}) добавлена в корзину`,
      });
    },
    [addToCart]
  );

  return (
    <div className="min-h-screen bg-white">
      <Header
        onCartOpen={() => setIsCartOpen(true)}
        onNavigate={handleNavigate}
      />

      <main>
        <Hero onNavigate={handleNavigate} />
        <Catalog
          onQuickView={(product) => setSelectedProduct(product)}
          onAddToCart={handleAddToCart}
        />
        <About />
        <Wholesale />
        <Testimonials />
        <SizeGuide />
        <Delivery />
        <Newsletter />
        <SEOContent />
      </main>

      <Footer onNavigate={handleNavigate} />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
        />
      )}

      {/* Toast notification */}
      <Toast
        message={toast.message}
        isVisible={toast.visible}
        onClose={() => setToast({ ...toast, visible: false })}
      />
    </div>
  );
}
