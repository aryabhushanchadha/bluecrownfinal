import { useState } from "react";
import { ShoppingBag, Eye, Star } from "lucide-react";
import type { Product } from "../data/products";

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product, size: string) => void;
}

export default function ProductCard({
  product,
  onQuickView,
  onAddToCart,
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedSize, setSelectedSize] = useState("");

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("ru-RU").format(price) + " ₽";

  return (
    <div
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-neutral-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-neutral-50">
        <img
          src={product.image}
          alt={`${product.name} — ${product.material} — Blue Crown cottonrus.ru`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isBestseller && (
            <span className="px-3 py-1 bg-brand-500 text-white text-xs font-bold rounded-full uppercase tracking-wide flex items-center gap-1">
              <Star className="w-3 h-3 fill-current" /> Хит
            </span>
          )}
        </div>

        {/* Hover overlay */}
        <div
          className={`absolute inset-0 bg-black/20 flex items-center justify-center gap-3 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <button
            onClick={() => onQuickView(product)}
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-brand-500 hover:text-white transition-colors shadow-lg"
          >
            <Eye className="w-5 h-5" />
          </button>
        </div>

        {/* Color swatch */}
        <div className="absolute bottom-3 right-3">
          <div
            className="w-6 h-6 rounded-full border-2 border-white shadow-md"
            style={{ backgroundColor: product.colorHex }}
            title={product.color}
          />
        </div>
      </div>

      {/* Info */}
      <div className="p-4 sm:p-5">
        <div className="flex items-start justify-between mb-1">
          <h3 className="font-semibold text-neutral-900 text-base">
            {product.name}
          </h3>
        </div>
        <p className="text-xs text-neutral-400 mb-3">{product.material}</p>

        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-xl font-bold text-neutral-900">
            {formatPrice(product.price)}
          </span>
        </div>

        {/* Sizes */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {product.sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size === selectedSize ? "" : size)}
              className={`px-2.5 py-1 text-xs font-medium rounded-md transition-all ${
                selectedSize === size
                  ? "bg-neutral-900 text-white"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
              }`}
            >
              {size}
            </button>
          ))}
        </div>

        {/* Add to cart */}
        <button
          onClick={() => {
            const size = selectedSize || product.sizes[2] || product.sizes[0];
            onAddToCart(product, size);
          }}
          className="w-full py-3 bg-neutral-900 hover:bg-brand-600 text-white font-medium rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm"
        >
          <ShoppingBag className="w-4 h-4" />
          В корзину
        </button>
      </div>
    </div>
  );
}
