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

  const allProducts = products.slice(0, 24);

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
    const amount = 220;
    el.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  };

  return (
    <div className="bg-white dark:bg-gray-900">

      {/* HERO SECTION */}
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-6 md:grid-cols-8 gap-2 p-4 opacity-60">
          {allProducts.map((product, index) => (
            <div
              key={index}
              className="relative aspect-[3/4] rounded-lg overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-b from-pink-900/30 via-black/50 to-black/70" />
        <div className="absolute inset-0 bg-radial-gradient from-pink-500/20 via-transparent to-transparent" />

        <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
          <div className="max-w-5xl mx-auto text-center space-y-8 py-20">
            <h1 className="text-5xl md:text-7xl lg:text-8xl text-white">
              Premium Tools & Services
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600">
                At Affordable Prices
              </span>
            </h1>

            <p className="text-2xl md:text-3xl text-white/90">
              Access 100+ premium subscriptions starting at{' '}
              <span className="text-pink-400">₹29/month</span>
            </p>

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
                  className="flex-1 px-6 py-4 rounded-xl bg-white/10 border-2 border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-pink-400"
                />
                <Link
                  to="/services"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white px-8 py-4 rounded-xl text-xl shadow-2xl hover:shadow-pink-500/50"
                >
                  Get Started
                  <ChevronRight className="w-6 h-6" />
                </Link>
              </div>
            </div>

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

      {/* TOP 10 TRENDING */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">

          <div className="mb-6">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-pink-500" />
              <h2 className="text-2xl text-gray-900 dark:text-white">Trending Now</h2>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm ml-8">
              Top 10 most popular services this week
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => scrollCarousel('left')}
              className="shrink-0 bg-pink-600 text-white p-3 rounded-full shadow-lg"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div id="trending-carousel" className="flex-1 flex gap-6 overflow-x-auto scrollbar-hide">
              {trendingProducts.map((product, index) => (
                <div key={product.id} className="flex-shrink-0 flex flex-col items-center w-[220px]">

                  {/* ★ UPDATED — SOLID PINK NUMBER */}
                  <span className="top10-rank text-4xl mb-1">{index + 1}</span>

                  <div className="rounded-2xl overflow-hidden shadow-md border border-gray-200 dark:border-gray-700">
                    <img src={product.image} alt={product.name} className="object-cover" style={{ width: 300, height: 300 }} />
                  </div>

                  <Link to={`/product/${product.id}`} className="text-center mt-2">
                    <p className="text-sm text-gray-900 dark:text-white">{product.name}</p>
                    <p className="text-sm text-pink-600 dark:text-pink-400">{product.price}</p>
                  </Link>
                </div>
              ))}
            </div>

            <button
              onClick={() => scrollCarousel('right')}
              className="shrink-0 bg-pink-600 text-white p-3 rounded-full shadow-lg"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* EXTRA STYLES */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }

        /* CLEAN SOLID-PINK RANK NUMBERS */
        .top10-rank {
          color: #ec4899;
          font-weight: 900;
          line-height: 1;
        }
      `}</style>
    </div>
  );
}
