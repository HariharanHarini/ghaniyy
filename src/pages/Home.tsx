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

  // Background grid images
  const allProducts = products.slice(0, 24);

  // Custom ranking
  const priority: Record<string, number> = {
    'LinkedIn Premium': 1,
    'Canva Pro': 2,
    'Netflix Premium': 3,
  };

  const trendingProducts = products
    .filter((p) => p.featured)
    .sort((a, b) => {
      const rankA = priority[a.name] ?? 999;
      const rankB = priority[b.name] ?? 999;
      return rankA - rankB;
    })
    .slice(0, 10);

  const scrollCarousel = (direction: 'left' | 'right') => {
    const carousel = document.getElementById('trending-carousel');
    if (carousel) {
      const scrollAmount = 200;
      carousel.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900">

      {/* ----------------------------------------------------------
          HERO SECTION
      ----------------------------------------------------------- */}
      <section className="relative min-h-screen overflow-hidden">

        {/* Background grid of posters */}
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

        {/* Dark overlays */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-b from-pink-900/30 via-black/50 to-black/70" />
        <div className="absolute inset-0 bg-radial-gradient from-pink-500/20 via-transparent to-transparent" />

        {/* Text content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
          <div className="max-w-5xl mx-auto text-center space-y-8 py-20">
            <h1 className="text-5xl md:text-7xl lg:text-8xl text-white tracking-tight drop-shadow-2xl">
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

            {/* Email box + button */}
            <div className="pt-6 max-w-3xl mx-auto">
              <p className="text-xl text-white/90 mb-4">Enter your email to get started</p>

              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:border-pink-400"
                />
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white px-8 py-4 rounded-xl text-xl shadow-xl"
                >
                  Get Started <ChevronRight className="w-6 h-6" />
                </Link>
              </div>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-8 pt-6 text-white/90">
              <div className="flex items-center gap-3">
                <Star className="w-6 h-6 text-pink-400" />
                <span className="text-lg">100+ Services</span>
              </div>
              <div className="flex items-center gap-3">
                <Zap className="w-6 h-6 text-pink-400" />
                <span className="text-lg">Instant Delivery</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-pink-400" />
                <span className="text-lg">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------
          TRENDING NOW — RESPONSIVE ICONS
      ----------------------------------------------------------- */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">

          {/* Section header */}
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

            {/* Left arrow */}
            <button
              onClick={() => scrollCarousel('left')}
              className="shrink-0 bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-full shadow-lg"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Carousel */}
            <div
              id="trending-carousel"
              className="flex-1 flex gap-6 overflow-x-auto scrollbar-hide"
            >
              {trendingProducts.map((product, index) => (
                <div key={product.id} className="flex-shrink-0 flex flex-col items-center w-[150px]">

                  <span className="top10-rank text-4xl mb-1">{index + 1}</span>

                  {/* Responsive icon */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="
                      rounded-xl object-cover
                      w-16 h-16 
                      sm:w-24 sm:h-24 
                      md:w-32 md:h-32 
                      lg:w-40 lg:h-40 
                      xl:w-48 xl:h-48
                    "
                  />

                  <Link to={`/product/${product.id}`} className="text-center mt-2">
                    <p className="text-sm text-gray-900 dark:text-white line-clamp-2">{product.name}</p>
                    <p className="text-sm text-pink-600 dark:text-pink-400">{product.price}</p>
                  </Link>
                </div>
              ))}
            </div>

            {/* Right arrow */}
            <button
              onClick={() => scrollCarousel('right')}
              className="shrink-0 bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-full shadow-lg"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------
          WHY CHOOSE US
      ----------------------------------------------------------- */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Why Choose GHANIYY?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg mt-4">
            Premium subscriptions made affordable for everyone
          </p>
        </div>
      </section>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in { animation: fade-in .6s ease-out forwards; opacity: 0; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .top10-rank {
          color: #ec4899;
          -webkit-text-stroke: 2px white;
          text-shadow: 0 0 6px rgba(0,0,0,.7);
          font-weight: 900;
        }
      `}</style>
    </div>
  );
}
