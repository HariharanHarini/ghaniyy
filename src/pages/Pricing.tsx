import { Check, Users, Briefcase, Settings } from 'lucide-react';

export function Pricing() {
  const pricingTiers = [
    {
      icon: <Users className="w-8 h-8" />,
      name: 'Single User',
      description: 'Ideal for individuals',
      features: [
        'Access to all single-user plans',
        'Monthly or yearly subscriptions',
        'Instant delivery',
        'Email support',
        '7-day replacement guarantee'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      name: 'Family/Team',
      description: 'Multiple seats and device support',
      features: [
        'Multi-seat subscriptions',
        'Device support for teams',
        'Discounted bundle pricing',
        'Priority support',
        'Flexible billing options',
        'Account management tools'
      ],
      color: 'from-purple-500 to-pink-500',
      popular: true
    },
    {
      icon: <Settings className="w-8 h-8" />,
      name: 'Custom Bundles',
      description: 'Tailor a multi-service package',
      features: [
        'Build your own package',
        'Multi-service bundles',
        'Pay only for what you need',
        'Dedicated account manager',
        'Custom billing cycles',
        'Volume discounts'
      ],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const comparisonData = [
    {
      service: 'Netflix Premium',
      monthly: '₹399',
      quarterly: '₹999',
      yearly: '₹3,499',
      delivery: 'Instant'
    },
    {
      service: 'Spotify Premium',
      monthly: '₹119',
      quarterly: '—',
      yearly: '₹1,199',
      delivery: 'Instant'
    },
    {
      service: 'Adobe Creative Cloud',
      monthly: '₹1,999',
      quarterly: '—',
      yearly: '₹19,999',
      delivery: '2 hours'
    },
    {
      service: 'ChatGPT Plus',
      monthly: '₹1,499',
      quarterly: '₹3,999',
      yearly: '—',
      delivery: '1 hour'
    },
    {
      service: 'Canva Pro',
      monthly: '₹499',
      quarterly: '—',
      yearly: '₹4,999',
      delivery: 'Instant'
    },
    {
      service: 'LinkedIn Premium',
      monthly: '₹1,999',
      quarterly: '—',
      yearly: '₹19,999',
      delivery: '2 hours'
    }
  ];

  return (
    <div className="py-12 bg-background">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-500/20 dark:via-purple-500/20 dark:to-pink-500/20 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-foreground mb-4">Flexible Pricing for Everyone</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose from individual plans, family bundles, or custom packages. 
            All with instant delivery and 7-day replacement guarantee.
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-foreground mb-4">Pricing Models</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`bg-card rounded-xl border-2 p-8 relative transition-all ${
                  tier.popular ? 'border-purple-600 shadow-lg scale-105' : 'border-border'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${tier.color} text-white mb-4`}>
                  {tier.icon}
                </div>

                <h3 className="text-card-foreground mb-2">{tier.name}</h3>
                <p className="text-muted-foreground mb-6">{tier.description}</p>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-card-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`block w-full text-center py-3 rounded-lg transition-all ${
                    tier.popular
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:opacity-90'
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                  }`}
                >
                  Browse Services
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-foreground mb-4">Sample Pricing</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here&apos;s a quick overview of popular services and their pricing tiers
            </p>
          </div>

          <div className="max-w-5xl mx-auto bg-card rounded-xl border border-border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted border-b border-border">
                  <tr>
                    <th className="text-left px-6 py-4 text-foreground">Service</th>
                    <th className="text-left px-6 py-4 text-foreground">Monthly</th>
                    <th className="text-left px-6 py-4 text-foreground">Quarterly</th>
                    <th className="text-left px-6 py-4 text-foreground">Yearly</th>
                    <th className="text-left px-6 py-4 text-foreground">Delivery ETA</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {comparisonData.map((row, index) => (
                    <tr key={index} className="hover:bg-muted/50 transition-colors">
                      <td className="px-6 py-4 text-card-foreground">{row.service}</td>
                      <td className="px-6 py-4 text-muted-foreground">{row.monthly}</td>
                      <td className="px-6 py-4 text-muted-foreground">{row.quarterly}</td>
                      <td className="px-6 py-4 text-muted-foreground">{row.yearly}</td>
                      <td className="px-6 py-4">
                        <span className="bg-green-500/10 text-green-600 dark:text-green-400 px-2 py-1 rounded text-sm border border-green-500/20">
                          {row.delivery}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-center text-muted-foreground text-sm mt-6">
            * Prices are indicative and may vary. Visit individual product pages for detailed pricing.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-white mb-4">Need a custom quote?</h2>
            <p className="text-blue-100 mb-6">
              For bulk orders, team licenses, or multi-service bundles, contact our sales team 
              for customized pricing and dedicated support.
            </p>
            <button
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
