import { ArrowDown, Crown, Leaf, Shield, Truck } from "lucide-react";

interface HeroProps {
  onNavigate: (section: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero.jpg"
          alt="Blue Crown — Премиальные футболки"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950/90 via-brand-950/60 to-brand-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950/70 via-transparent to-brand-950/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm mb-6 border border-white/15">
            <Crown className="w-4 h-4 text-brand-300" />
            <span>Премиальное качество хлопка</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-6">
            Королевский
            <br />
            <span className="text-brand-400">комфорт</span> в каждой
            <br />
            футболке
          </h1>

          <p className="text-lg sm:text-xl text-white/70 mb-10 max-w-lg leading-relaxed">
            Blue Crown — натуральный хлопок, безупречный крой, премиальное качество. Для тех, кто выбирает лучшее.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <button
              onClick={() => onNavigate("catalog")}
              className="px-8 py-4 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-brand-500/30 text-lg"
            >
              Перейти в каталог
            </button>
            <button
              onClick={() => onNavigate("about")}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full backdrop-blur-sm border border-white/20 transition-all duration-300 text-lg"
            >
              Узнать больше
            </button>
          </div>

          {/* Trust badges */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                <Leaf className="w-5 h-5 text-brand-300" />
              </div>
              <div>
                <p className="text-white text-sm font-semibold">Эко</p>
                <p className="text-white/50 text-xs">материалы</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                <Truck className="w-5 h-5 text-brand-300" />
              </div>
              <div>
                <p className="text-white text-sm font-semibold">Доставка</p>
                <p className="text-white/50 text-xs">по всей РФ</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-brand-300" />
              </div>
              <div>
                <p className="text-white text-sm font-semibold">Гарантия</p>
                <p className="text-white/50 text-xs">качества</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <button
          onClick={() => onNavigate("catalog")}
          className="flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors"
        >
          <span className="text-xs tracking-widest uppercase">Каталог</span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>
    </section>
  );
}
