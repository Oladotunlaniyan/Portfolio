'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day money-back guarantee on all products. If you're not satisfied with your purchase, you can return it within 30 days for a full refund. Items must be in original condition with all packaging intact."
  },
  {
    question: "How long does shipping take?",
    answer: "Standard shipping typically takes 5-7 business days. Express shipping options are available at checkout and deliver within 2-3 business days. International orders may take 10-14 business days depending on the destination."
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship to over 100 countries worldwide. Shipping costs and delivery times vary by location. You can see the exact cost and estimated delivery time at checkout before completing your purchase."
  },
  {
    question: "How can I track my order?",
    answer: "Once your order ships, you'll receive a confirmation email with a tracking number. You can use this number to track your package on our website or directly on the carrier's website. You can also check your order status anytime by logging into your account."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, Apple Pay, Google Pay, and Shop Pay. All transactions are secure and encrypted for your protection."
  },
  {
    question: "Can I modify or cancel my order?",
    answer: "You can modify or cancel your order within 1 hour of placing it by contacting our customer service team. After this window, orders enter our fulfillment process and cannot be changed. However, you can always return items after receiving them."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600">
            Find answers to common questions about our products and services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-200 hover:shadow-lg"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-inset"
              >
                <span className="text-lg font-semibold text-gray-900 pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-indigo-600 transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 pt-2">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors duration-200 shadow-md hover:shadow-lg">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
}