import { X, Minus, Plus, Trash2, ShoppingBag, Send } from "lucide-react";
import { useCart } from "../store/useCart";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { items, removeFromCart, updateQuantity, totalPrice } = useCart();

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("ru-RU").format(price) + " ₽";

  const handleOrderViaTelegram = () => {
    // Build a pre-filled message with order details
    const orderLines = items.map(
      (item) =>
        `• ${item.name} (${item.color}) — размер ${item.size} × ${item.quantity} шт. = ${formatPrice(item.price * item.quantity)}`
    );

    const message = [
      "👋 Здравствуйте! Хочу заказать:",
      "",
      ...orderLines,
      "",
      `💰 Итого: ${formatPrice(totalPrice)}`,
    ].join("\n");

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://t.me/bluecrownllc?text=${encodedMessage}`, "_blank");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-2xl flex flex-col animate-slide-in">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-neutral-100">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-brand-500" />
            <h2 className="text-lg font-bold text-neutral-900">
              Корзина
              <span className="text-neutral-400 font-normal text-sm ml-2">
                ({items.length})
              </span>
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full hover:bg-neutral-100 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {items.length === 0 ? (
          /* Empty cart */
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-20 h-20 bg-neutral-100 rounded-full flex items-center justify-center mb-4">
              <ShoppingBag className="w-8 h-8 text-neutral-300" />
            </div>
            <h3 className="text-lg font-semibold text-neutral-900 mb-2">
              Корзина пуста
            </h3>
            <p className="text-neutral-400 mb-6">
              Добавьте товары из каталога
            </p>
            <button
              onClick={onClose}
              className="px-6 py-3 bg-brand-500 text-white rounded-full font-medium hover:bg-brand-600 transition-colors"
            >
              К покупкам
            </button>
          </div>
        ) : (
          <>
            {/* Cart items */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {items.map((item) => (
                <div
                  key={`${item.productId}-${item.size}`}
                  className="flex gap-4 bg-neutral-50 rounded-xl p-3"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-neutral-900 text-sm truncate">
                      {item.name}
                    </h4>
                    <p className="text-xs text-neutral-400 mt-0.5">
                      Размер: {item.size} · {item.color}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-neutral-200 rounded-lg bg-white">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.productId,
                              item.size,
                              item.quantity - 1
                            )
                          }
                          className="w-8 h-8 flex items-center justify-center hover:bg-neutral-50"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 text-center text-sm font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.productId,
                              item.size,
                              item.quantity + 1
                            )
                          }
                          className="w-8 h-8 flex items-center justify-center hover:bg-neutral-50"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="font-bold text-sm">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.productId, item.size)}
                    className="text-neutral-300 hover:text-red-500 transition-colors self-start"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-neutral-100 p-5 space-y-4">
              {totalPrice < 1000 && (
                <div className="bg-brand-50 rounded-xl p-3 text-center">
                  <p className="text-sm text-brand-700">
                    До бесплатной доставки осталось{" "}
                    <span className="font-bold">
                      {formatPrice(1000 - totalPrice)}
                    </span>
                  </p>
                  <div className="mt-2 h-2 bg-brand-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-brand-500 rounded-full transition-all duration-500"
                      style={{ width: `${Math.min((totalPrice / 1000) * 100, 100)}%` }}
                    />
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between">
                <span className="text-neutral-500">Итого:</span>
                <span className="text-2xl font-bold text-neutral-900">
                  {formatPrice(totalPrice)}
                </span>
              </div>

              {/* Telegram order button */}
              <button
                onClick={handleOrderViaTelegram}
                className="w-full py-4 bg-[#2AABEE] hover:bg-[#229ED9] text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2.5 shadow-lg shadow-[#2AABEE]/25"
              >
                <Send className="w-5 h-5" />
                Заказать в Telegram
              </button>

              <p className="text-center text-xs text-neutral-400">
                Вы будете перенаправлены в Telegram для оформления заказа через{" "}
                <span className="font-medium text-neutral-600">@bluecrownllc</span>
              </p>
            </div>
          </>
        )}
      </div>

      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
