import { Link } from 'react-router-dom';
import { Mail, Phone, Shield, Lock, FileText } from 'lucide-react';
import logoImage from 'figma:asset/6327d0559e86ef707a7823d122f096e9b5afa765.png';

export function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src={logoImage} 
                alt="GHANIYY Logo" 
                className="h-8 w-8"
              />
              <span className="text-xl text-gray-900 dark:text-white">GHANIYY</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Making premium access accessible for everyone at affordable prices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 text-sm transition-colors">
                  Browse Services
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 text-sm transition-colors">
                  Pricing Plans
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 text-sm transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-gray-900 dark:text-white mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 text-sm transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/custom-order" className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 text-sm transition-colors">
                  Custom Orders
                </Link>
              </li>
              <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-pink-600" />
                support@ghaniyy.com
              </li>
              <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
                <Phone className="w-4 h-4 text-pink-600" />
                24/7 Support
              </li>
            </ul>
          </div>

          {/* Trust & Legal */}
          <div>
            <h3 className="text-gray-900 dark:text-white mb-4">Trust & Security</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-3 text-gray-600 dark:text-gray-400 text-sm">
                <Shield className="w-4 h-4 text-pink-600 mt-0.5 flex-shrink-0" />
                <span>Secure payments & encrypted delivery</span>
              </li>
              <li className="flex items-start gap-3 text-gray-600 dark:text-gray-400 text-sm">
                <Lock className="w-4 h-4 text-pink-600 mt-0.5 flex-shrink-0" />
                <span>Privacy-first approach</span>
              </li>
              <li className="flex items-start gap-3 text-gray-600 dark:text-gray-400 text-sm">
                <FileText className="w-4 h-4 text-pink-600 mt-0.5 flex-shrink-0" />
                <span>7-day replacement policy</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center text-sm text-gray-600 dark:text-gray-400">
          <p className="mb-2">
            © 2024 GHANIYY. All rights reserved.
          </p>
          <p className="text-xs">
            Customers must comply with third-party service terms. We provide access and setup support only.
          </p>
        </div>
      </div>
    </footer>
  );
}