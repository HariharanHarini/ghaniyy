import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronRight,
  Star,
  Zap,
  Shield,
  TrendingUp,
  Play,
  ChevronLeft,
} from 'lucide-react';
import { products } from '../data/products';

export function Home() {
  const [email, setEmail] = useState('');
  const featuredProducts = products.filter((p) => p.featured);
  const allProducts = products.slice(0, 24); // For background grid
  const trendingProducts = products.slice(0, 10); // Top 10 trending

  const scrollCarousel = (direction: 'left' | 'right') => {
    const carousel = document.getElementById('trending-carousel');
    if (carousel) {
      const scrollAmount = 150; // one small card
      carousel.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section with Background Images */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Product Poster Background Grid */}
        <div className="absolute inset-0 grid grid-cols-6 md:grid-cols-8 gap-2 p-4 opacity-60">
          {allProducts.map((product, index) => (
            <div
              key={index}
              className="relative aspect-[3/4] rounded-lg overflow-hidden animate-fade-in"
              style={{
                animationDelay: `${index * 0.05}s`,
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Dark Overlay with Gradient */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-b from-pink-900/30 via-black/50 to-black/70" />

        {/* Center Bright Gradient */}
        <div className="absolute inset-0 bg-radial-gradient from-pink-500/20 via-transparent to-transparent" />

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
          <div className="max-w-5xl mx-auto text-center space-y-8 py-20">
            {/* Main Heading - Large, Bold, White */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl text-white mb-6 tracking-tight drop-shadow-2xl">
              Premium Tools & Services
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600">
                At Affordable Prices
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-2xl md:text-3xl text-white/90 drop-shadow-lg">
              Access 100+ premium subscriptions starting at just{' '}
              <span className="text-pink-400">₹29/month</span>
            </p>

            {/* Email Input */}
            <div className="pt-8 max-w-3xl mx-auto">
              <p className="text-xl text-white/90 mb-6 drop-shadow">
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

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-8 pt-8">
              <div className="flex items-center gap-3 text-white/90 drop-shadow">
                <div className="bg-pink-500/20 backdrop-blur-sm p-3 rounded-full">
                  <Star className="w-6 h-6 text-pink-400 fill-current" />
                </div>
                <span className="text-lg">100+ Services</span>
              </div>
              <div className="flex items-center gap-3 text-white/90 drop-shadow">
                <div className="bg-pink-500/20 backdrop-blur-sm p-3 rounded-full">
                  <Zap className="w-6 h-6 text-pink-400 fill-current" />
                </div>
                <span className="text-lg">Instant Delivery</span>
              </div>
              <div className="flex items-center gap-3 text-white/90 drop-shadow">
                <div className="bg-pink-500/20 backdrop-blur-sm p-3 rounded-full">
                  <Shield className="w-6 h-6 text-pink-400 fill-current" />
                </div>
                <span className="text-lg">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top 10 Trending Section – super small icons + ranking + both buttons */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          {/* Section Header */}
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

          {/* Row with buttons + carousel */}
          <div className="flex items-center gap-4">
            {/* LEFT BUTTON (always visible) */}
            <button
              onClick={() => scrollCarousel('left')}
              className="shrink-0 bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* CAROUSEL */}
            <div
              id="trending-carousel"
              className="flex-1 flex gap-4 overflow-hidden"
            >
              {trendingProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="flex-shrink-0 w-[140px] flex items-center gap-2"
                >
                  {/* Bright pink ranking number */}
                  <span className="top10-rank text-4xl">{index + 1}</span>

                  {/* Icon + text stacked */}
                  <div className="flex flex-col items-start gap-1">
                    {/* 48x48 icon – forced with inline style */}
                    <div className="rounded-lg overflow-hidden shadow-md border border-gray-300 dark:border-gray-700">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="object-cover"
                        style={{ width: 300, height: 300 }}
                      />
                    </div>

                    <Link to={`/product/${product.id}`} className="text-left">
                      <p className="text-xs text-gray-900 dark:text-white line-clamp-2 leading-tight">
                        {product.name}
                      </p>
                      <p className="text-xs text-pink-600 dark:text-pink-400">
                        {product.price}
                      </p>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT BUTTON (always visible) */}
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

      {/* Why Choose Us */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-gray-900 dark:text-white mb-6">
              Why Choose GHANIYY?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-xl max-w-3xl mx-auto">
              We make premium subscriptions accessible and affordable for everyone
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-8 bg-gradient-to-br from-pink-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-2xl border-2 border-pink-100 dark:border-pink-900/30 hover:border-pink-400 dark:hover:border-pink-500 transition-all hover:shadow-xl">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl text-gray-900 dark:text-white mb-4">
                Instant Delivery
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Receive your premium accounts instantly in your email. Start using immediately!
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-pink-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-2xl border-2 border-pink-100 dark:border-pink-900/30 hover:border-pink-400 dark:hover:border-pink-500 transition-all hover:shadow-xl">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                <Star className="w-10 h-10 text-white fill-current" />
              </div>
              <h3 className="text-2xl text-gray-900 dark:text-white mb-4">
                Premium Quality
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                All accounts verified and tested. 7-day replacement guarantee included.
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-pink-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-2xl border-2 border-pink-100 dark:border-pink-900/30 hover:border-pink-400 dark:hover:border-pink-500 transition-all hover:shadow-xl">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl text-gray-900 dark:text-white mb-4">
                24/7 Support
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Round-the-clock customer support for all your queries and issues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
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

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* bright pink outlined ranking numbers */
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
