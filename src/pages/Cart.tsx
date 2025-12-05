import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

export function Cart() {
  const { cart, removeFromCart, updateQuantity, cartCount } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 pt-20 flex items-center justify-center">
        <div className="text-center py-16 px-4">
          <ShoppingBag className="w-24 h-24 text-gray-300 dark:text-gray-700 mx-auto mb-6" />
          <h2 className="text-3xl text-gray-900 dark:text-white mb-4">Your Cart is Empty</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Add some premium services to get started!
          </p>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-8 py-3 rounded-lg transition-all shadow-lg"
          >
            Browse Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl text-gray-900 dark:text-white mb-2">Shopping Cart</h1>
          <p className="text-gray-600 dark:text-gray-400">
            {cartCount} {cartCount === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white dark:bg-gray-800 rounded-xl border-2 border-gray-200 dark:border-gray-700 p-6 hover:border-pink-400 transition-all"
              >
                <div className="flex gap-6">
                  {/* Product Image */}
                  <Link
                    to={`/product/${item.id}`}
                    className="flex-shrink-0 w-32 h-32 rounded-lg overflow-hidden bg-gradient-to-br from-pink-100 to-pink-200 dark:from-gray-700 dark:to-gray-800"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </Link>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/product/${item.id}`}
                      className="block mb-2 hover:text-pink-600 transition-colors"
                    >
                      <h3 className="text-xl text-gray-900 dark:text-white truncate">
                        {item.name}
                      </h3>
                    </Link>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 px-3 py-1 rounded-full">
                        {item.category}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {item.duration}
                      </span>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                        >
                          <Minus className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                        </button>
                        <span className="w-12 text-center text-lg text-gray-900 dark:text-white">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                        >
                          <Plus className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                        </button>
                      </div>

                      <div className="flex items-center gap-4">
                        <span className="text-2xl text-pink-600 dark:text-pink-400">
                          {item.price}
                        </span>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-2 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors group"
                        >
                          <Trash2 className="w-5 h-5 text-gray-400 group-hover:text-red-600 transition-colors" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-pink-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-2xl border-2 border-pink-200 dark:border-pink-900/30 p-6 sticky top-24">
              <h2 className="text-2xl text-gray-900 dark:text-white mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Subtotal ({cartCount} items)</span>
                  <span>Contact for pricing</span>
                </div>
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Discount</span>
                  <span className="text-pink-600">Variable</span>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  🎉 Get instant delivery on all purchases
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  💳 Secure payment & 7-day guarantee
                </p>
              </div>

              <Link
                to="/custom-order"
                className="block w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white text-center px-6 py-4 rounded-xl transition-all shadow-lg hover:shadow-pink-500/50 text-lg mb-4"
              >
                Proceed to Checkout
              </Link>

              <Link
                to="/services"
                className="block w-full text-center text-pink-600 hover:text-pink-700 py-3"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
