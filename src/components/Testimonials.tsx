import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Анна К.",
      location: "Москва",
      rating: 5,
      text: "Лучшие футболки, которые я когда-либо покупала! Хлопок невероятно мягкий, а цвет не выцветает даже после многих стирок. Заказываю уже третий раз.",
      product: "Классическая белая",
      avatar: "А",
    },
    {
      name: "Дмитрий В.",
      location: "Санкт-Петербург",
      rating: 5,
      text: "Отличное качество за разумную цену. Посадка идеальная, швы ровные. Доставка была очень быстрой. Рекомендую всем!",
      product: "Морской бриз",
      avatar: "Д",
    },
    {
      name: "Елена М.",
      location: "Казань",
      rating: 5,
      text: "Я в восторге от коллекции премиум! Ткань плотная, но при этом дышащая. Отличная альтернатива дорогим зарубежным брендам.",
      product: "Бургунди",
      avatar: "Е",
    },
    {
      name: "Максим Р.",
      location: "Новосибирск",
      rating: 4,
      text: "Ношу каждый день на работу и на прогулки. Футболки Blue Crown выглядят очень стильно и держат форму. Единственное — хотелось бы больше расцветок!",
      product: "Классическая красная",
      avatar: "М",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-brand-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-brand-400 text-sm font-semibold tracking-widest uppercase">
            Отзывы
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mt-3 mb-4">
            Что говорят наши клиенты
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto">
            Более 10 000 довольных клиентов по всей России
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-brand-900/50 rounded-2xl p-6 hover:bg-brand-900/70 transition-colors group relative border border-brand-800/30"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-brand-800/40 group-hover:text-brand-500/20 transition-colors" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    className={`w-4 h-4 ${
                      j < review.rating
                        ? "text-brand-400 fill-brand-400"
                        : "text-neutral-600"
                    }`}
                  />
                ))}
              </div>

              <p className="text-neutral-300 text-sm leading-relaxed mb-6">
                "{review.text}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-500 flex items-center justify-center text-white font-bold text-sm">
                  {review.avatar}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">
                    {review.name}
                  </p>
                  <p className="text-neutral-500 text-xs">{review.location}</p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-brand-800/40">
                <p className="text-xs text-neutral-500">
                  Купил: <span className="text-brand-300">{review.product}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { value: "10 000+", label: "Довольных клиентов" },
            { value: "4.9", label: "Средняя оценка" },
            { value: "98%", label: "Рекомендуют друзьям" },
            { value: "< 1%", label: "Процент возврата" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl sm:text-4xl font-serif font-bold text-brand-400 mb-1">
                {stat.value}
              </div>
              <p className="text-neutral-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
