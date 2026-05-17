import { Leaf, Droplets, Heart, Award } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "100% органический хлопок",
      desc: "Мы используем только сертифицированный органический хлопок, выращенный без пестицидов и химикатов.",
    },
    {
      icon: <Droplets className="w-6 h-6" />,
      title: "Экологичное производство",
      desc: "Наше производство использует на 50% меньше воды по сравнению с традиционными методами.",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Забота о людях",
      desc: "Справедливые условия труда и достойная оплата для каждого работника нашей фабрики.",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Гарантия качества",
      desc: "Каждая футболка проходит строгий контроль качества. Гарантия от производителя — 6 месяцев.",
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/about.jpg"
                alt="Натуральный хлопок Blue Crown"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 max-w-[200px] border border-neutral-100 hidden sm:block">
              <div className="text-4xl font-serif font-bold text-brand-500 mb-1">
                7+
              </div>
              <p className="text-sm text-neutral-500">
                лет на рынке качественной одежды
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-brand-500 text-sm font-semibold tracking-widest uppercase">
              О нас
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-neutral-900 mt-3 mb-6">
              Философия Blue Crown
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-4 text-lg">
              Blue Crown — это больше, чем просто футболки. Это философия осознанного потребления, где каждая деталь имеет значение: от выбора хлопка до финальной строчки.
            </p>
            <p className="text-neutral-500 leading-relaxed mb-10">
              Мы верим, что базовая футболка может быть идеальной. Наша миссия — создавать одежду, которая приносит радость каждый день, не причиняя вреда планете.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-500 flex items-center justify-center flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1 text-sm">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-neutral-500 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
