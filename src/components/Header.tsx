import { useState, useEffect } from "react";
import { ShoppingBag, Menu, X, Crown } from "lucide-react";
import { useCart } from "../store/useCart";

interface HeaderProps {
  onCartOpen: () => void;
  onNavigate: (section: string) => void;
}

export default function Header({ onCartOpen, onNavigate }: HeaderProps) {
  const { totalItems } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Каталог", section: "catalog" },
    { label: "Опт и печать", section: "wholesale" },
    { label: "О нас", section: "about" },
    { label: "Доставка", section: "delivery" },
    { label: "Контакты", section: "contacts" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <button
            onClick={() => onNavigate("hero")}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-brand-600 flex items-center justify-center text-white group-hover:bg-brand-700 transition-colors shadow-lg shadow-brand-600/30">
              <Crown className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="flex flex-col">
              <span
                className={`font-serif text-lg sm:text-xl font-bold tracking-wide transition-colors ${
                  isScrolled ? "text-neutral-900" : "text-white"
                }`}
              >
                Blue Crown
              </span>
              <span
                className={`text-[9px] sm:text-[10px] tracking-[0.2em] uppercase -mt-1 transition-colors ${
                  isScrolled ? "text-neutral-400" : "text-white/70"
                }`}
              >
                cottonrus.ru
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.section}
                onClick={() => onNavigate(item.section)}
                className={`text-sm font-medium tracking-wide hover:text-brand-400 transition-colors ${
                  isScrolled ? "text-neutral-700" : "text-white/90"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={onCartOpen}
              className={`relative p-2 rounded-full transition-colors ${
                isScrolled
                  ? "text-neutral-700 hover:bg-neutral-100"
                  : "text-white hover:bg-white/10"
              }`}
            >
              <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-brand-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-bounce">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-full transition-colors ${
                isScrolled
                  ? "text-neutral-700 hover:bg-neutral-100"
                  : "text-white hover:bg-white/10"
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-neutral-100 shadow-lg">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.section}
                onClick={() => {
                  onNavigate(item.section);
                  setIsMobileMenuOpen(false);
                }}
                className="text-left px-4 py-3 text-neutral-700 font-medium hover:bg-brand-50 hover:text-brand-600 rounded-lg transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
