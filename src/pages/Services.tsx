import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Search, Filter, Grid, List, Star, Heart, ShoppingCart } from 'lucide-react';
import { products, categories, additionalServices } from '../data/products';
import { useCart } from '../context/CartContext';
import { toast } from 'sonner';

export function Services() {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'name' | 'featured'>('featured');
  const { addToCart, addToWishlist, isInWishlist } = useCart();

  useEffect(() => {
    const search = searchParams.get('search');
    if (search) {
      setSearchQuery(search);
    }
  }, [searchParams]);

  const filteredProducts = products
    .filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === 'featured') {
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      }
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });

  const handleAddToCart = (product: any, e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
    toast.success(`Added ${product.name} to cart!`);
  };

  const handleWishlistToggle = (product: any, e: React.MouseEvent) => {
    e.preventDefault();
    addToWishlist(product);
    toast.success('Added to wishlist!');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-500 to-pink-600 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl text-white mb-6 drop-shadow-lg">
              Premium Services Catalog
            </h1>
            <p className="text-white/90 text-2xl mb-10 drop-shadow">
              Browse 100+ premium tools and services at unbeatable prices
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for services, tools, or categories..."
                className="w-full pl-16 pr-6 py-5 rounded-2xl bg-white dark:bg-gray-800 border-2 border-white/20 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-white shadow-2xl text-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filters & Controls */}
      <section className="sticky top-16 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 py-4 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Category Filter */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
              <Filter className="w-5 h-5 text-gray-600 dark:text-gray-400 flex-shrink-0" />
              <div className="flex gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-all ${
                      selectedCategory === category
                        ? 'bg-pink-600 text-white shadow-lg'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* View Controls */}
            <div className="flex items-center gap-3">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white text-sm focus:outline-none focus:border-pink-600"
              >
                <option value="featured">Featured First</option>
                <option value="name">Name (A-Z)</option>
              </select>

              <div className="flex gap-1 border border-gray-300 dark:border-gray-700 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-pink-600 text-white' : 'text-gray-600 dark:text-gray-400'}`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-pink-600 text-white' : 'text-gray-600 dark:text-gray-400'}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            Showing {filteredProducts.length} of {products.length} services
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                No services found matching your criteria.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map(product => (
                <div
                  key={product.id}
                  className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border-2 border-gray-100 dark:border-gray-700 hover:border-pink-400 dark:hover:border-pink-500"
                >
                  <Link to={`/product/${product.id}`} className="block relative">
                    {/* Product Image */}
                    <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-pink-100 to-pink-200 dark:from-gray-700 dark:to-gray-800">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                      
                      {/* Category Badge */}
                      <div className="absolute top-3 left-3">
                        <span className="text-xs bg-white/90 backdrop-blur-sm text-pink-600 px-3 py-1 rounded-full shadow-lg">
                          {product.category}
                        </span>
                      </div>

                      {/* Featured Badge */}
                      {product.featured && (
                        <div className="absolute top-3 right-3">
                          <div className="bg-pink-500 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                            <Star className="w-3 h-3 fill-current" />
                            Featured
                          </div>
                        </div>
                      )}

                      {/* Quick Actions */}
                      <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={(e) => handleWishlistToggle(product, e)}
                          className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-pink-50 transition-all"
                        >
                          <Heart className={`w-4 h-4 ${isInWishlist(product.id) ? 'text-pink-600 fill-current' : 'text-gray-600'}`} />
                        </button>
                        <button
                          onClick={(e) => handleAddToCart(product, e)}
                          className="p-2 bg-pink-600 text-white rounded-full shadow-lg hover:bg-pink-700 transition-all"
                        >
                          <ShoppingCart className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="p-5">
                      <h3 className="text-lg text-gray-900 dark:text-white mb-3 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors line-clamp-2">
                        {product.name}
                      </h3>
                      <div className="flex items-baseline justify-between">
                        <span className="text-xl text-pink-600 dark:text-pink-400">
                          {product.price}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {product.duration}
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-gray-900 dark:text-white mb-8">Additional Services We Provide</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-pink-400 dark:hover:border-pink-500 transition-all"
              >
                <h3 className="text-sm text-gray-900 dark:text-white mb-2 line-clamp-2">{service.name}</h3>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-500 dark:text-gray-400">{service.duration}</span>
                  <span className="bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 px-2 py-1 rounded">
                    {service.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-pink-500 to-pink-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl text-white mb-4 drop-shadow-lg">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto drop-shadow">
            We offer custom packages and can source any premium service you need
          </p>
          <Link
            to="/custom-order"
            className="inline-flex items-center gap-2 bg-white text-pink-600 px-8 py-4 rounded-xl hover:bg-pink-50 transition-all shadow-2xl text-lg"
          >
            Request Custom Service
          </Link>
        </div>
      </section>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
