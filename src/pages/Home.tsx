import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronRight,
  Star,
  Zap,
  Shield,
  TrendingUp,
  ChevronLeft,
} from 'lucide-react';
import { products } from '../data/products';

export function Home() {
  const [email, setEmail] = useState('');

  // Background posters
  const allProducts = products.slice(0, 24);

  // Custom ranking for Top 10
  const priority: Record<string, number> = {
    'LinkedIn Premium': 1,
    'Canva Pro': 2,
    'Netflix Premium': 3,
  };

  const trendingProducts = products
    .filter((p) => p.featured)
    .sort((a, b) => {
      const aRank = priority[a.name] ?? 999;
      const bRank = priority[b.name] ?? 999;
      return aRank - bRank;
    })
    .slice(0, 10);

  const scrollCarousel = (direction: 'left' | 'right') => {
    const el = document.getElementById('trending-carousel');
    if (!el) return;
    const amount = 220; // one card width
    el.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  };

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* ================= HERO ================= */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 grid grid-cols-6 md:grid-cols-8 gap-2 p-4 opacity-60">
          {allProducts.map((product, index) => (
            <div
              key={index}
              className="relative aspect-[3/4] rounded-lg overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Overlays */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-b from-pink-900/30 via-black/50 to-black/70" />
        <div className="absolute inset-0 bg-radial-gradient from-pink-500/20 via-transparent to-transparent" />

        {/* Hero content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
          <div className="max-w-5xl mx-auto text-center space-y-8 py-20">
            <h1 className="text-5xl md:text-7xl lg:text-8xl text-white mb-6 tracking-tight drop-shadow-2xl">
              Premium Tools & Services
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600">
                At Affordable Prices
              </span>
            </h1>

            <p className="text-2xl md:text-3xl text-white/90 drop-shadow-lg">
              Access 100+ premium subscriptions starting at{' '}
              <span className="text-pink-400">₹29/month</span>
            </p>

            {/* Email input */}
            <div className="pt-8 max-w-3xl mx-auto">
              <p className="text-xl text-white/90 mb-6">
                Ready to save? Enter your email to get started
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-xl bg-white/10 backdrop-blur-md border-2 border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-pink-400 text-lg"
                />
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-8 py-4 rounded-xl transition-all text-xl shadow-2xl hover:shadow-pink-500/50 whitespace-nowrap"
                >
                  Get Started
                  <ChevronRight className="w-6 h-6" />
                </Link>
              </div>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-8 pt-8">
              <div className="flex items-center gap-3 text-white/90">
                <div className="bg-pink-500/20 p-3 rounded-full">
                  <Star className="w-6 h-6 text-pink-400" />
                </div>
                <span className="text-lg">100+ Services</span>
              </div>
              <div className="flex items-center gap-3 text-white/90">
                <div className="bg-pink-500/20 p-3 rounded-full">
                  <Zap className="w-6 h-6 text-pink-400" />
                </div>
                <span className="text-lg">Instant Delivery</span>
              </div>
              <div className="flex items-center gap-3 text-white/90">
                <div className="bg-pink-500/20 p-3 rounded-full">
                  <Shield className="w-6 h-6 text-pink-400" />
                </div>
                <span className="text-lg">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TOP 10 TRENDING (BIG, RESPONSIVE ICONS) ============ */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-1">
              <TrendingUp className="w-6 h-6 text-pink-500" />
              <h2 className="text-2xl text-gray-900 dark:text-white">
                Trending Now
              </h2>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm ml-8">
              Top 10 most popular services this week
            </p>
          </div>

          <div className="flex items-center gap-4">
            {/* Left button */}
            <button
              onClick={() => scrollCarousel('left')}
              className="shrink-0 bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Carousel */}
            <div
              id="trending-carousel"
              className="flex-1 flex gap-6 overflow-x-auto overflow-y-hidden scrollbar-hide"
            >
              {trendingProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="flex-shrink-0 flex flex-col items-center w-[220px]"
                >
                  {/* Rank number */}
                  <span className="top10-rank text-4xl mb-1">
                    {index + 1}
                  </span>

                  {/* ICON — BIG + RESPONSIVE */}
                  <div className="rounded-2xl overflow-hidden shadow-md border border-gray-200 dark:border-gray-700">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="object-cover"
                      style={{ width: 300, height: 300 }}
                    />



                  </div>

                  {/* Name + price */}
                  <Link to={`/product/${product.id}`} className="text-center mt-2">
                    <p className="text-sm text-gray-900 dark:text-white line-clamp-2">
                      {product.name}
                    </p>
                    <p className="text-sm text-pink-600 dark:text-pink-400">
                      {product.price}
                    </p>
                  </Link>
                </div>
              ))}
            </div>

            {/* Right button */}
            <button
              onClick={() => scrollCarousel('right')}
              className="shrink-0 bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* ============ WHY CHOOSE US (kept shorter here) ============ */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl text-gray-900 dark:text-white mb-4">
              Why Choose GHANIYY?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto">
              We make premium subscriptions accessible and affordable for everyone.
            </p>
          </div>
          {/* ...keep your feature cards here if you want... */}
        </div>
      </section>

      {/* ============ CTA SECTION ============ */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-pink-600 to-pink-500" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl text-white mb-8 drop-shadow-lg">
            Ready to Get Started?
          </h2>
          <p className="text-white/95 text-2xl mb-12 max-w-3xl mx-auto drop-shadow">
            Join thousands of satisfied customers enjoying premium services
          </p>
          <Link
            to="/services"
            className="inline-flex items-center gap-3 bg-white text-pink-600 px-10 py-5 rounded-xl hover:bg-pink-50 transition-all shadow-2xl text-xl"
          >
            Browse Services
            <ChevronRight className="w-6 h-6" />
          </Link>
        </div>
      </section>

      {/* ============ EXTRA STYLES ============ */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }
        .bg-radial-gradient {
          background: radial-gradient(circle at center, var(--tw-gradient-stops));
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .top10-rank {
          color: #ec4899;
          -webkit-text-stroke-width: 2px;
          -webkit-text-stroke-color: #ffffff;
          text-shadow: 0 0 6px rgba(0,0,0,0.7);
          font-weight: 900;
          line-height: 1;
        }
      `}</style>
    </div>
  );
}
