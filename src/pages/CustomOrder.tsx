import { useState } from 'react';
import { Settings, CheckCircle } from 'lucide-react';

export function CustomOrder() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    duration: '',
    region: '',
    seats: '1',
    deliveryPreference: 'email',
    additionalNotes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        duration: '',
        region: '',
        seats: '1',
        deliveryPreference: 'email',
        additionalNotes: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="text-center bg-white rounded-2xl p-12 shadow-lg max-w-md mx-4">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-gray-900 mb-2">Request Submitted!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for your custom order request. Our team will review your requirements 
            and get back to you with availability and final pricing within 24 hours.
          </p>
          <a
            href="/"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white mb-6">
            <Settings className="w-8 h-8" />
          </div>
          <h1 className="text-gray-900 mb-4">Custom Order Request</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't see the service you need? Request a custom account or bundle tailored to your requirements. 
            We'll confirm availability and pricing before processing your order.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl border border-gray-200 p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h3 className="text-gray-900 mb-4">Contact Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-900 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-gray-900 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="phone" className="block text-gray-900 mb-2">
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        placeholder="+91 1234567890"
                      />
                    </div>
                  </div>
                </div>

                {/* Service Details */}
                <div className="pt-6 border-t border-gray-200">
                  <h3 className="text-gray-900 mb-4">Service Requirements</h3>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="service" className="block text-gray-900 mb-2">
                        Desired Service *
                      </label>
                      <input
                        type="text"
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        placeholder="e.g., Netflix Premium, Adobe Suite, Custom Bundle"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="duration" className="block text-gray-900 mb-2">
                          Preferred Duration *
                        </label>
                        <select
                          id="duration"
                          name="duration"
                          required
                          value={formData.duration}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        >
                          <option value="">Select duration</option>
                          <option value="1-month">1 Month</option>
                          <option value="3-months">3 Months</option>
                          <option value="6-months">6 Months</option>
                          <option value="12-months">12 Months</option>
                          <option value="lifetime">Lifetime</option>
                          <option value="custom">Custom Duration</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="region" className="block text-gray-900 mb-2">
                          Region *
                        </label>
                        <select
                          id="region"
                          name="region"
                          required
                          value={formData.region}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        >
                          <option value="">Select region</option>
                          <option value="india">India</option>
                          <option value="us">United States</option>
                          <option value="uk">United Kingdom</option>
                          <option value="global">Global</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="seats" className="block text-gray-900 mb-2">
                          Number of Seats/Users *
                        </label>
                        <input
                          type="number"
                          id="seats"
                          name="seats"
                          required
                          min="1"
                          value={formData.seats}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
                          placeholder="1"
                        />
                      </div>

                      <div>
                        <label htmlFor="deliveryPreference" className="block text-gray-900 mb-2">
                          Delivery Preference *
                        </label>
                        <select
                          id="deliveryPreference"
                          name="deliveryPreference"
                          required
                          value={formData.deliveryPreference}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        >
                          <option value="email">Email</option>
                          <option value="dashboard">Dashboard Access</option>
                          <option value="whatsapp">WhatsApp</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="additionalNotes" className="block text-gray-900 mb-2">
                        Additional Notes or Special Requirements
                      </label>
                      <textarea
                        id="additionalNotes"
                        name="additionalNotes"
                        value={formData.additionalNotes}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                        placeholder="Any specific features, account types, or other requirements..."
                      />
                    </div>
                  </div>
                </div>

                {/* Info Box */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="text-gray-900 mb-2">What happens next?</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-0.5">•</span>
                      <span>Our team will review your request within 24 hours</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-0.5">•</span>
                      <span>We'll confirm availability and provide final pricing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-0.5">•</span>
                      <span>Once approved, we'll process your order and deliver as per your preference</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-0.5">•</span>
                      <span>Estimated fulfillment time: 1-2 business days after confirmation</span>
                    </li>
                  </ul>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  <Settings className="w-5 h-5" />
                  Submit Custom Order Request
                </button>

                <p className="text-center text-gray-600 text-sm">
                  No payment required now. We'll contact you with a quote first.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Custom Requests */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-gray-900 text-center mb-8">Popular Custom Requests</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-gray-900 mb-2">Multi-Service Bundles</h3>
                <p className="text-gray-600 text-sm">
                  Combine streaming, productivity, and creative tools in one package with discounted pricing.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-gray-900 mb-2">Team Licenses</h3>
                <p className="text-gray-600 text-sm">
                  Get bulk licenses for your team or organization with centralized billing and management.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-gray-900 mb-2">Extended Duration</h3>
                <p className="text-gray-600 text-sm">
                  Request lifetime or multi-year subscriptions for services you use regularly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
