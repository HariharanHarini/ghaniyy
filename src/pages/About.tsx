import { Shield, Clock, Users, Headphones } from 'lucide-react';

export function About() {
  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Secure & Reliable',
      description: 'We use encrypted delivery processes and work with trusted suppliers to ensure every account is valid and secure.'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Quick Delivery',
      description: 'Most orders are delivered instantly or within hours. Get started with your premium service right away.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Customer Focused',
      description: 'Transparent pricing, clear service descriptions, and friendly support every step of the way.'
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: '24/7 Support',
      description: 'Our support team is always available to help with setup, troubleshooting, and account issues.'
    }
  ];

  const steps = [
    {
      number: '1',
      title: 'Select a service',
      description: 'Choose from our curated listings or request a custom plan tailored to your needs.'
    },
    {
      number: '2',
      title: 'Checkout',
      description: 'Secure payments via credit card, UPI, or other integrated gateways. Your payment information is always protected.'
    },
    {
      number: '3',
      title: 'Receive & use',
      description: 'Credentials or codes arrive by email with step-by-step setup instructions. Start using your premium service immediately.'
    }
  ];

  return (
    <div className="py-12 bg-background">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-500/20 dark:via-purple-500/20 dark:to-pink-500/20 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-foreground mb-6">Making premium access accessible.</h1>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We&apos;re a small team focused on giving people and businesses affordable access to the 
            digital services they need — from streaming entertainment to business productivity tools. 
            We partner with suppliers and maintain secure delivery processes so you can get set up quickly.
          </p>
          <p className="text-muted-foreground max-w-3xl mx-auto mt-4">
            Our goal is simple: transparent service descriptions, reliable delivery, and friendly support.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-foreground mb-4">Why Choose Ghaniyy?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We&apos;re committed to providing the best digital subscription experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white mb-4">
                  {value.icon}
                </div>
                <h3 className="text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-foreground mb-4">How It Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get started with premium subscriptions in three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="bg-card rounded-xl p-8 border border-border">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white mb-4">
                  <span className="text-xl">{step.number}</span>
                </div>
                <h3 className="text-card-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-white mb-4">Delivery & Authenticity</h2>
            <p className="text-blue-100 mb-6">
              All account deliveries include clear activation instructions. If an account is invalid 
              on delivery, we will work to replace or refund per our replacement policy.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
              <div>
                <p className="text-sm opacity-90">Encrypted credentials in transit</p>
              </div>
              <div>
                <p className="text-sm opacity-90">7-day replacement guarantee</p>
              </div>
              <div>
                <p className="text-sm opacity-90">24/7 customer support</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
