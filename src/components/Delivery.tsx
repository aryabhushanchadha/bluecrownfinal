import { Truck, Clock, MapPin, RotateCcw, CreditCard, Gift } from "lucide-react";

export default function Delivery() {
  const methods = [
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Курьерская доставка",
      desc: "Доставка до двери курьером. Москва — 1-2 дня, регионы — 3-7 дней.",
      price: "от 290 ₽",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Пункт выдачи",
      desc: "Более 50 000 пунктов выдачи по всей России (СДЭК, Boxberry, ПВЗ).",
      price: "от 190 ₽",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Экспресс-доставка",
      desc: "Доставка в день заказа по Москве и Санкт-Петербургу (заказ до 14:00).",
      price: "590 ₽",
    },
  ];

  const policies = [
    {
      icon: <Gift className="w-5 h-5" />,
      title: "Бесплатная доставка",
      desc: "При заказе от 1 000 ₽",
    },
    {
      icon: <RotateCcw className="w-5 h-5" />,
      title: "Возврат 14 дней",
      desc: "Бесплатный возврат в течение 14 дней",
    },
    {
      icon: <CreditCard className="w-5 h-5" />,
      title: "Оплата при получении",
      desc: "Оплата картой или наличными при получении",
    },
  ];

  return (
    <section id="delivery" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-brand-500 text-sm font-semibold tracking-widest uppercase">
            Доставка
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-neutral-900 mt-3 mb-4">
            Доставка и оплата
          </h2>
          <p className="text-neutral-500 max-w-xl mx-auto text-lg">
            Мы доставляем по всей России. Выбирайте удобный способ получения заказа.
          </p>
        </div>

        {/* Delivery methods */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {methods.map((method, i) => (
            <div
              key={i}
              className="bg-neutral-50 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-all duration-300 border border-neutral-100 hover:border-brand-200 group"
            >
              <div className="w-14 h-14 bg-brand-500 text-white rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                {method.icon}
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2">
                {method.title}
              </h3>
              <p className="text-neutral-500 text-sm leading-relaxed mb-4">
                {method.desc}
              </p>
              <p className="text-brand-600 font-bold">{method.price}</p>
            </div>
          ))}
        </div>

        {/* Policies */}
        <div className="bg-gradient-to-r from-brand-50 to-brand-100/50 rounded-2xl p-6 sm:p-8">
          <div className="grid sm:grid-cols-3 gap-6">
            {policies.map((policy, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-500 flex-shrink-0 shadow-sm">
                  {policy.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 text-sm">
                    {policy.title}
                  </h4>
                  <p className="text-neutral-500 text-xs">{policy.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
