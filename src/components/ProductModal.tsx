import { useState } from "react";
import { X, ShoppingBag, Minus, Plus, Star, Ruler, Shirt } from "lucide-react";
import type { Product } from "../data/products";

interface ProductModalProps {
  product: Product;
  onClose: () => void;
  onAddToCart: (product: Product, size: string) => void;
}

export default function ProductModal({
  product,
  onClose,
  onAddToCart,
}: ProductModalProps) {
  const [selectedSize, setSelectedSize] = useState(
    product.sizes[2] || product.sizes[0]
  );
  const [quantity, setQuantity] = useState(1);

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("ru-RU").format(price) + " ₽";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-3xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-neutral-100 transition-colors shadow-md"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid md:grid-cols-2">
          {/* Image */}
          <div className="aspect-square bg-neutral-50">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details */}
          <div className="p-6 sm:p-8 flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              {product.isBestseller && (
                <span className="px-2.5 py-1 bg-brand-100 text-brand-700 text-xs font-bold rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3" /> Бестселлер
                </span>
              )}
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-900 mb-1">
              {product.name}
            </h2>
            <p className="text-sm text-neutral-400 mb-4">{product.nameEn}</p>

            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-3xl font-bold text-neutral-900">
                {formatPrice(product.price)}
              </span>
            </div>

            <p className="text-neutral-600 leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Material & Color */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-3 p-3 bg-neutral-50 rounded-xl">
                <Shirt className="w-5 h-5 text-brand-500" />
                <div>
                  <p className="text-xs text-neutral-400">Материал</p>
                  <p className="text-sm font-medium text-neutral-700">
                    {product.material}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-neutral-50 rounded-xl">
                <div
                  className="w-5 h-5 rounded-full border-2 border-neutral-200"
                  style={{ backgroundColor: product.colorHex }}
                />
                <div>
                  <p className="text-xs text-neutral-400">Цвет</p>
                  <p className="text-sm font-medium text-neutral-700">
                    {product.color}
                  </p>
                </div>
              </div>
            </div>

            {/* Size selector */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-semibold text-neutral-900">
                  Размер
                </label>
                <button className="text-xs text-brand-500 hover:text-brand-600 flex items-center gap-1">
                  <Ruler className="w-3 h-3" />
                  Таблица размеров
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 rounded-xl text-sm font-semibold transition-all ${
                      selectedSize === size
                        ? "bg-neutral-900 text-white shadow-lg"
                        : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & Add to cart */}
            <div className="flex items-center gap-4 mt-auto">
              <div className="flex items-center border border-neutral-200 rounded-xl">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-11 h-11 flex items-center justify-center hover:bg-neutral-50 transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-10 text-center font-semibold">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-11 h-11 flex items-center justify-center hover:bg-neutral-50 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <button
                onClick={() => {
                  for (let i = 0; i < quantity; i++) {
                    onAddToCart(product, selectedSize);
                  }
                  onClose();
                }}
                className="flex-1 py-3.5 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-brand-500/25"
              >
                <ShoppingBag className="w-5 h-5" />
                В корзину — {formatPrice(product.price * quantity)}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
