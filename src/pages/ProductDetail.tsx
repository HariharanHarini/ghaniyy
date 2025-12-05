import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Heart, ShoppingCart, Star, Check, Shield, Zap, 
  ChevronRight, Package, Clock, TrendingUp 
} from 'lucide-react';
import { products, additionalServices } from '../data/products';
import { useCart } from '../context/CartContext';
import { toast } from 'sonner';

export function ProductDetail() {
  const { productId } = useParams();
  const product = products.find(p => p.id === productId);
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 pt-20">
        <div className="text-center">
          <h2 className="text-3xl text-gray-900 dark:text-white mb-4">Product Not Found</h2>
          <Link to="/services" className="text-pink-600 hover:text-pink-700">
            Browse Services
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    toast.success(`Added ${product.name} to cart!`);
  };

  const handleWishlistToggle = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
      toast.success('Removed from wishlist');
    } else {
      addToWishlist(product);
      toast.success('Added to wishlist!');
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      {/* Breadcrumb */}
      <div className="bg-gray-50 dark:bg-gray-800 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <Link to="/" className="hover:text-pink-600">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/services" className="hover:text-pink-600">Services</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 dark:text-white">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="space-y-4">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-pink-100 to-pink-200 dark:from-gray-700 dark:to-gray-800 shadow-2xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                {product.featured && (
                  <div className="absolute top-4 right-4 bg-pink-500 text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                    <Star className="w-4 h-4 fill-current" />
                    Featured
                  </div>
                )}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 px-4 py-1.5 rounded-full text-sm">
                    {product.category}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 text-sm flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {product.duration}
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl text-gray-900 dark:text-white mb-4">
                  {product.name}
                </h1>
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl text-pink-600 dark:text-pink-400">
                    {product.price}
                  </span>
                </div>
              </div>

              {/* Description */}
              {product.description && (
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  {product.description}
                </p>
              )}

              {/* Features */}
              {product.features && product.features.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-xl text-gray-900 dark:text-white flex items-center gap-2">
                    <Package className="w-5 h-5 text-pink-600" />
                    What's Included
                  </h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                        <Check className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Quantity Selector */}
              <div className="flex items-center gap-4">
                <span className="text-gray-700 dark:text-gray-300">Quantity:</span>
                <div className="flex items-center gap-3 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    -
                  </button>
                  <span className="px-4 text-lg text-gray-900 dark:text-white">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 flex items-center justify-center gap-3 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-pink-500/50 text-lg"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
                <button
                  onClick={handleWishlistToggle}
                  className={`flex items-center justify-center gap-3 px-8 py-4 rounded-xl transition-all text-lg border-2 ${
                    isInWishlist(product.id)
                      ? 'bg-pink-500 text-white border-pink-500 hover:bg-pink-600'
                      : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-700 hover:border-pink-500'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isInWishlist(product.id) ? 'fill-current' : ''}`} />
                  {isInWishlist(product.id) ? 'Saved' : 'Save'}
                </button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                  <div className="bg-pink-100 dark:bg-pink-900/30 p-2 rounded-lg">
                    <Zap className="w-5 h-5 text-pink-600" />
                  </div>
                  <span className="text-sm">Instant Delivery</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                  <div className="bg-pink-100 dark:bg-pink-900/30 p-2 rounded-lg">
                    <Shield className="w-5 h-5 text-pink-600" />
                  </div>
                  <span className="text-sm">7-Day Guarantee</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                  <div className="bg-pink-100 dark:bg-pink-900/30 p-2 rounded-lg">
                    <Check className="w-5 h-5 text-pink-600" />
                  </div>
                  <span className="text-sm">Verified Account</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-gray-900 dark:text-white mb-8">Additional Services Available</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {additionalServices.slice(0, 12).map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-pink-400 transition-all"
              >
                <h3 className="text-sm text-gray-900 dark:text-white mb-2">{service.name}</h3>
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                  <span>{service.duration}</span>
                  <span className="bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 px-2 py-1 rounded">
                    {service.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-pink-600 hover:text-pink-700 text-lg"
            >
              View All {additionalServices.length}+ Services
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-8">
              <TrendingUp className="w-8 h-8 text-pink-600" />
              <h2 className="text-3xl text-gray-900 dark:text-white">Similar Services</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  to={`/product/${relatedProduct.id}`}
                  className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border-2 border-gray-100 dark:border-gray-700 hover:border-pink-400"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-pink-100 to-pink-200 dark:from-gray-700 dark:to-gray-800">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg text-gray-900 dark:text-white mb-2 group-hover:text-pink-600 transition-colors">
                      {relatedProduct.name}
                    </h3>
                    <div className="flex items-baseline justify-between">
                      <span className="text-xl text-pink-600">{relatedProduct.price}</span>
                      <span className="text-sm text-gray-500">{relatedProduct.duration}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
