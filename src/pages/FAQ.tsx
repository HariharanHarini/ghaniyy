import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'How will I receive my subscription?',
      answer: 'Typically by email — either as account credentials, a redemption code, or a direct link. Each product page shows the exact delivery method. Most orders are delivered instantly or within a few hours.'
    },
    {
      question: 'Can I change or cancel my order?',
      answer: 'Custom and manual orders can be changed prior to delivery. Digital orders that are delivered instantly cannot be canceled, but we offer a replacement policy for invalid credentials (see product page for details).'
    },
    {
      question: 'Are there region restrictions?',
      answer: 'Some products are region-locked. Product pages show region compatibility and any extra steps needed for activation. Most streaming services work globally, but some may have specific region requirements.'
    },
    {
      question: 'Is payment secure?',
      answer: 'Yes — we use secure payment gateways and do not store raw payment card details on our servers. All transactions are encrypted and processed through trusted payment providers including credit cards and UPI.'
    },
    {
      question: 'Do you offer bulk or team discounts?',
      answer: 'Yes — contact sales for multi-seat pricing and business licensing. We offer special rates for teams, businesses, and bulk orders. Custom bundles can also be created to meet your specific needs.'
    },
    {
      question: 'What if my account stops working?',
      answer: 'We offer a 7-day replacement guarantee for all subscriptions. If your account becomes invalid or stops working within the replacement window, contact our support team immediately and we\'ll provide a replacement or refund.'
    },
    {
      question: 'How long does delivery take?',
      answer: 'Most services are delivered instantly. Some premium services may take up to 1-2 hours. Enterprise and custom orders may take 1-2 business days. The exact delivery time is shown on each product page.'
    },
    {
      question: 'Can I upgrade or downgrade my plan?',
      answer: 'Yes, you can upgrade to a higher tier at any time by contacting support. For downgrades, you may need to wait until your current subscription period ends. Contact our support team to discuss your options.'
    },
    {
      question: 'Do subscriptions auto-renew?',
      answer: 'No, our subscriptions do not auto-renew. You will need to manually renew your subscription before it expires. We\'ll send you reminder emails before your subscription ends.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept credit cards, debit cards, UPI, net banking, and other popular payment methods. All payments are processed securely through encrypted gateways.'
    },
    {
      question: 'Can I share my account with others?',
      answer: 'This depends on the service provider\'s terms. Family and team plans are designed for sharing. However, you must comply with the third-party service\'s terms of use. We recommend checking the service\'s sharing policy.'
    },
    {
      question: 'What if I need help setting up my account?',
      answer: 'Every order includes step-by-step setup instructions. If you need additional help, our 24/7 support team is available via email and chat. We also offer premium setup assistance as an add-on for select services.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-12">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our services, delivery, payments, and support.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-gray-900 pr-4">{faq.question}</span>
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-600 flex-shrink-0" />
                    )}
                  </button>
                  {openIndex === index && (
                    <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-gray-900 mb-4">Still have questions?</h2>
            <p className="text-gray-600 mb-8">
              Our support team is here to help. Reach out and we'll get back to you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:opacity-90 transition-opacity"
              >
                Contact Support
              </a>
              <a
                href="mailto:support@premiumatcheap.com"
                className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg border-2 border-gray-200 hover:border-blue-600 transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
