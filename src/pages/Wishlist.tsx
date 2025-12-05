import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { toast } from 'sonner';

export function Wishlist() {
  const { wishlist, removeFromWishlist, addToCart } = useCart();

  const handleAddToCart = (product: any) => {
    addToCart(product);
    toast.success(`Added ${product.name} to cart!`);
  };

  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 pt-20 flex items-center justify-center">
        <div className="text-center py-16 px-4">
          <Heart className="w-24 h-24 text-gray-300 dark:text-gray-700 mx-auto mb-6" />
          <h2 className="text-3xl text-gray-900 dark:text-white mb-4">Your Wishlist is Empty</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Save your favorite services for later!
          </p>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-8 py-3 rounded-lg transition-all shadow-lg"
          >
            Browse Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl text-gray-900 dark:text-white mb-2">My Wishlist</h1>
          <p className="text-gray-600 dark:text-gray-400">
            {wishlist.length} {wishlist.length === 1 ? 'item' : 'items'} saved
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlist.map((product) => (
            <div
              key={product.id}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border-2 border-gray-100 dark:border-gray-700 hover:border-pink-400 dark:hover:border-pink-500"
            >
              {/* Product Image */}
              <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-pink-100 to-pink-200 dark:from-gray-700 dark:to-gray-800">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                
                {/* Remove Button */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    removeFromWishlist(product.id);
                    toast.success('Removed from wishlist');
                  }}
                  className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-red-50 transition-all group/btn"
                >
                  <Heart className="w-5 h-5 text-pink-600 fill-current group-hover/btn:text-red-600 transition-colors" />
                </button>
              </Link>

              {/* Product Info */}
              <div className="p-5">
                <div className="mb-2">
                  <span className="text-xs bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>
                <Link to={`/product/${product.id}`}>
                  <h3 className="text-lg text-gray-900 dark:text-white mb-3 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <div className="flex items-baseline justify-between mb-4">
                  <span className="text-xl text-pink-600 dark:text-pink-400">
                    {product.price}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {product.duration}
                  </span>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={() => handleAddToCart(product)}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-4 py-3 rounded-lg transition-all shadow-lg hover:shadow-pink-500/50"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
