import type { Product } from "../data/products";
import { useProducts } from "../hooks/useProducts";
import ProductCard from "./ProductCard";
import { Loader2, Cloud, HardDrive } from "lucide-react";

interface CatalogProps {
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product, size: string) => void;
}

export default function Catalog({ onQuickView, onAddToCart }: CatalogProps) {
  const { products, isLoading, source } = useProducts();

  return (
    <section id="catalog" className="py-20 sm:py-28 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-brand-500 text-sm font-semibold tracking-widest uppercase">
            Коллекция
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-neutral-900 mt-3 mb-4">
            Наш каталог
          </h2>
          <p className="text-neutral-500 max-w-xl mx-auto text-lg">
            Хлопковые футболки 180 г/м² — идеальная плотность для комфорта на каждый день
          </p>
        </div>

        {/* Material badge & data source indicator */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mb-10">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white rounded-full border border-neutral-200 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-brand-500"></span>
            <span className="text-sm font-medium text-neutral-700">
              100% органический хлопок · 180 г/м² · 200 ₽
            </span>
          </div>

          {/* Data source badge */}
          <div
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium ${
              source === "google-sheets"
                ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                : "bg-neutral-100 text-neutral-500 border border-neutral-200"
            }`}
          >
            {source === "google-sheets" ? (
              <>
                <Cloud className="w-3 h-3" />
                Synced from Google Sheets
              </>
            ) : (
              <>
                <HardDrive className="w-3 h-3" />
                Local data
              </>
            )}
          </div>
        </div>

        {/* Loading state */}
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="w-8 h-8 text-brand-500 animate-spin mb-4" />
            <p className="text-neutral-500 text-sm">Загрузка товаров...</p>
          </div>
        ) : (
          /* Product grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={onQuickView}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
