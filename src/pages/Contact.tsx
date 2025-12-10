import { useState } from 'react';
import { Mail, Phone, Clock, MessageSquare, Send } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for contacting us! We\'ll respond within 24 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Support',
      detail: 'support@premiumatcheap.com',
      description: 'Send us an email anytime'
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'Live Chat',
      detail: 'Available 24/7',
      description: 'Chat with our support team'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone Support',
      detail: '24/7 Helpline',
      description: 'Call for urgent assistance'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Response Time',
      detail: 'Within 24 hours',
      description: 'We respond quickly'
    }
  ];

  return (
    <div className="py-12 bg-background">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-500/20 dark:via-purple-500/20 dark:to-pink-500/20 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-foreground mb-4">Need help? We&apos;re here.</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            For pre-sales questions, custom orders, or support — contact us. 
            Response time: typically within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-secondary/50 rounded-xl p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white mb-4">
                  {method.icon}
                </div>
                <h3 className="text-foreground mb-1">{method.title}</h3>
                <p className="text-card-foreground mb-1">{method.detail}</p>
                <p className="text-muted-foreground text-sm">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-xl border border-border p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-foreground mb-2">Send us a message</h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we&apos;ll get back to you as soon as possible
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-foreground mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-foreground mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-foreground mb-2">
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="+91 1234567890"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-foreground mb-2">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-blue-600"
                  >
                    <option value="">Select a service</option>
                    <option value="streaming">Streaming Subscriptions</option>
                    <option value="productivity">Productivity & Business Tools</option>
                    <option value="design">Design & Creative Tools</option>
                    <option value="vpn">VPNs & Security</option>
                    <option value="gaming">Gaming & Entertainment</option>
                    <option value="education">Education & Research</option>
                    <option value="ai">AI & Productivity Tools</option>
                    <option value="custom">Custom Order</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-foreground mb-2">
                    Details/Notes *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                    placeholder="Tell us about your requirements or questions..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>

                <p className="text-center text-muted-foreground text-sm">
                  We typically respond within 24 hours during business days
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Support */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-foreground mb-4">Looking for something specific?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <a
                href="/custom-order"
                className="bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 p-6 rounded-xl hover:bg-blue-500/20 transition-colors"
              >
                <h3 className="text-foreground mb-2">Custom Orders</h3>
                <p className="text-sm">Request a custom subscription package</p>
              </a>
              <a
                href="/faq"
                className="bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 p-6 rounded-xl hover:bg-purple-500/20 transition-colors"
              >
                <h3 className="text-foreground mb-2">FAQ</h3>
                <p className="text-sm">Find answers to common questions</p>
              </a>
              <a
                href="/services"
                className="bg-pink-500/10 border border-pink-500/20 text-pink-600 dark:text-pink-400 p-6 rounded-xl hover:bg-pink-500/20 transition-colors"
              >
                <h3 className="text-foreground mb-2">Browse Services</h3>
                <p className="text-sm">Explore our full catalog</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
