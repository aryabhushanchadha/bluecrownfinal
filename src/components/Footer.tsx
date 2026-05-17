import { Phone, Mail, MapPin, Clock, Crown } from "lucide-react";

interface FooterProps {
  onNavigate: (section: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer id="contacts" className="bg-neutral-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-lg bg-brand-600 flex items-center justify-center text-white shadow-lg shadow-brand-600/30">
                <Crown className="w-6 h-6" />
              </div>
              <div>
                <span className="font-serif text-xl font-bold">Blue Crown</span>
                <span className="block text-[10px] tracking-[0.2em] uppercase text-neutral-500 -mt-1">
                  cottonrus.ru
                </span>
              </div>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              Премиальные хлопковые футболки из натуральных материалов. Создано с заботой о вас и планете.
            </p>
            <div className="flex gap-3">
              {/* Social icons */}
              {["VK", "TG", "IG"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-brand-500 flex items-center justify-center text-neutral-400 hover:text-white transition-all text-xs font-bold"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Навигация
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Каталог", section: "catalog" },
                { label: "Опт и печать", section: "wholesale" },
                { label: "О нас", section: "about" },
                { label: "Доставка", section: "delivery" },
              ].map((link) => (
                <li key={link.section}>
                  <button
                    onClick={() => onNavigate(link.section)}
                    className="text-neutral-400 hover:text-brand-400 transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Информация
            </h3>
            <ul className="space-y-3">
              {[
                "Политика конфиденциальности",
                "Условия использования",
                "Возврат и обмен",
                "Оферта",
                "FAQ",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-neutral-400 hover:text-brand-400 transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Контакты
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-brand-400 mt-0.5 flex-shrink-0" />
                <div>
                  <a
                    href="tel:+79996585867"
                    className="text-neutral-300 hover:text-white transition-colors text-sm font-medium"
                  >
                    +7 (999) 658-58-67
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-brand-400 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:Blue.crown@mail.ru"
                  className="text-neutral-300 hover:text-white transition-colors text-sm"
                >
                  Blue.crown@mail.ru
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-400 mt-0.5 flex-shrink-0" />
                <span className="text-neutral-400 text-sm">
                  Москва Сити
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-brand-400 mt-0.5 flex-shrink-0" />
                <div className="text-neutral-400 text-sm">
                  <p>Пн-Пт: 9:00 — 21:00</p>
                  <p>Сб-Вс: 10:00 — 18:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-neutral-800 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-neutral-500 text-sm">
            © {new Date().getFullYear()} Blue Crown (cottonrus.ru). Все права защищены.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-neutral-600 text-xs">Способы оплаты:</span>
            <div className="flex gap-2">
              {["Visa", "MC", "Мир", "СБП"].map((method) => (
                <span
                  key={method}
                  className="px-2.5 py-1 bg-neutral-800 rounded text-neutral-400 text-xs font-medium"
                >
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
