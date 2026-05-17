import { Printer, PenTool, Layers, Send, CheckCircle, Package } from "lucide-react";

export default function Wholesale() {
  const services = [
    {
      icon: <Printer className="w-7 h-7" />,
      title: "DTF печать",
      titleEn: "DTF Printing",
      desc: "Современная технология прямой печати на ткань. Яркие цвета, высокая детализация, устойчивость к стиркам.",
      features: ["Фотореалистичное качество", "Любое количество цветов", "Быстрое выполнение"],
    },
    {
      icon: <Layers className="w-7 h-7" />,
      title: "Шелкография",
      titleEn: "Screen Printing",
      desc: "Классическая трафаретная печать для больших тиражей. Идеально для корпоративных заказов и мерча.",
      features: ["Выгодно от 50 шт.", "Долговечность принта", "Специальные эффекты"],
    },
    {
      icon: <PenTool className="w-7 h-7" />,
      title: "Вышивка",
      titleEn: "Embroidery",
      desc: "Премиальная машинная вышивка для логотипов и брендинга. Элегантный и долговечный результат.",
      features: ["Премиум-вид", "Объёмная текстура", "Корпоративный стиль"],
    },
  ];

  const handleTelegramContact = () => {
    const message = encodeURIComponent(
      "👋 Здравствуйте! Интересует оптовый заказ футболок с нанесением. Хотел бы узнать подробности."
    );
    window.open(`https://t.me/bluecrownllc?text=${message}`, "_blank");
  };

  return (
    <section id="wholesale" className="py-20 sm:py-28 bg-gradient-to-b from-white to-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-brand-500 text-sm font-semibold tracking-widest uppercase">
            Для бизнеса
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-neutral-900 mt-3 mb-4">
            Оптовые заказы с нанесением
          </h2>
          <p className="text-neutral-500 max-w-2xl mx-auto text-lg">
            Создайте уникальный мерч, корпоративную одежду или брендированные футболки. 
            Предлагаем полный цикл — от печати до вышивки.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-neutral-100 hover:border-brand-200 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-brand-500 text-white rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-1">
                {service.title}
              </h3>
              <p className="text-sm text-brand-500 font-medium mb-3">
                {service.titleEn}
              </p>
              <p className="text-neutral-500 text-sm leading-relaxed mb-5">
                {service.desc}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-neutral-700">
                    <CheckCircle className="w-4 h-4 text-brand-500 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Card */}
        <div className="bg-brand-600 rounded-3xl p-8 sm:p-10 text-center relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white/90 text-sm mb-6">
              <Package className="w-4 h-4" />
              <span>От 50 штук</span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-4">
              Готовы обсудить ваш проект?
            </h3>
            <p className="text-white/70 max-w-lg mx-auto mb-8">
              Свяжитесь с нами в Telegram для расчёта стоимости и сроков. 
              Индивидуальный подход к каждому заказу.
            </p>
            
            <button
              onClick={handleTelegramContact}
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-white text-brand-600 font-semibold rounded-full hover:bg-neutral-100 transition-colors shadow-lg"
            >
              <Send className="w-5 h-5" />
              Написать в Telegram
            </button>
            
            <p className="text-white/50 text-sm mt-4">
              @bluecrownllc — ответим в течение часа
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
