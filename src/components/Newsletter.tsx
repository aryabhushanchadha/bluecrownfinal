import { useState } from "react";
import { Mail, CheckCircle, Sparkles } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white/90 text-sm mb-6 backdrop-blur-sm">
          <Sparkles className="w-4 h-4" />
          <span>Скидка 10% на первый заказ</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4">
          Будьте в курсе новинок
        </h2>
        <p className="text-white/70 text-lg mb-10 max-w-lg mx-auto">
          Подпишитесь на рассылку и получите скидку 10% на первый заказ, а также узнавайте первыми о новых коллекциях.
        </p>

        {submitted ? (
          <div className="flex items-center justify-center gap-3 bg-white/20 backdrop-blur-sm rounded-2xl p-6">
            <CheckCircle className="w-6 h-6 text-white" />
            <p className="text-white font-semibold">
              Спасибо! Промокод отправлен на вашу почту.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
          >
            <div className="relative flex-1">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ваш email"
                required
                className="w-full pl-12 pr-4 py-4 bg-white rounded-xl text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-white/50 text-base"
              />
            </div>
            <button
              type="submit"
              className="px-8 py-4 bg-neutral-900 hover:bg-neutral-800 text-white font-semibold rounded-xl transition-colors whitespace-nowrap"
            >
              Подписаться
            </button>
          </form>
        )}

        <p className="text-white/40 text-xs mt-4">
          Нажимая «Подписаться», вы соглашаетесь с политикой конфиденциальности
        </p>
      </div>
    </section>
  );
}
