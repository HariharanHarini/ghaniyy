import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Heart, Menu, X, Search, Sun, Moon } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useCart } from '../context/CartContext';
import logoImage from 'figma:asset/6327d0559e86ef707a7823d122f096e9b5afa765.png';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const { cartCount, wishlist } = useCart();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/about', label: 'About' },
    { path: '/faq', label: 'FAQ' },
    { path: '/contact', label: 'Contact' },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/services?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={logoImage} 
              alt="GHANIYY Logo" 
              className="h-10 w-10 transition-transform group-hover:scale-110"
            />
            <span className="text-2xl text-gray-900 dark:text-white tracking-wide">GHANIYY</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors relative group ${
                  isActive(link.path)
                    ? 'text-pink-600'
                    : 'text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400'
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-pink-600"></div>
                )}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Search */}
            {searchOpen ? (
              <form onSubmit={handleSearch} className="flex items-center gap-2">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search services..."
                  className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-pink-600 w-64 transition-all"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => {
                    setSearchOpen(false);
                    setSearchQuery('');
                  }}
                  className="text-gray-600 dark:text-gray-400 hover:text-pink-600 transition-colors p-2"
                >
                  <X className="w-5 h-5" />
                </button>
              </form>
            ) : (
              <button
                onClick={() => setSearchOpen(true)}
                className="text-gray-600 dark:text-gray-400 hover:text-pink-600 transition-colors p-2"
              >
                <Search className="w-5 h-5" />
              </button>
            )}

            {/* Wishlist */}
            <Link
              to="/wishlist"
              className="relative text-gray-600 dark:text-gray-400 hover:text-pink-600 transition-colors p-2"
            >
              <Heart className="w-5 h-5" />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </Link>

            {/* Cart */}
            <Link
              to="/cart"
              className="relative text-gray-600 dark:text-gray-400 hover:text-pink-600 transition-colors p-2"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="text-gray-600 dark:text-gray-400 hover:text-pink-600 transition-colors p-2"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* CTA Button */}
            <Link
              to="/custom-order"
              className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-6 py-2 rounded-lg transition-all shadow-lg hover:shadow-pink-500/50"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-gray-600 dark:text-gray-400 p-2"
            >
              <Search className="w-5 h-5" />
            </button>
            <Link to="/wishlist" className="relative text-gray-600 dark:text-gray-400 p-2">
              <Heart className="w-5 h-5" />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center text-[10px]">
                  {wishlist.length}
                </span>
              )}
            </Link>
            <Link to="/cart" className="relative text-gray-600 dark:text-gray-400 p-2">
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center text-[10px]">
                  {cartCount}
                </span>
              )}
            </Link>
            <button
              onClick={toggleTheme}
              className="text-gray-600 dark:text-gray-400 p-2"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              className="text-gray-900 dark:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        {searchOpen && (
          <form onSubmit={handleSearch} className="lg:hidden mt-3 pb-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search services..."
              className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-pink-600"
            />
          </form>
        )}

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden pt-4 pb-2 flex flex-col gap-3 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg rounded-lg mt-4 p-4 border border-gray-200 dark:border-gray-700">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 transition-colors ${
                  isActive(link.path)
                    ? 'text-pink-600'
                    : 'text-gray-700 dark:text-gray-300 hover:text-pink-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/custom-order"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity text-center mt-2"
            >
              Get Started
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
