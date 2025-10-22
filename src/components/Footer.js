import React from 'react';

const Footer = () => {
  const footerSections = [
    {
      title: "Products",
      links: [
        "Payment Gateway",
        "Digital Wallet",
        "Analytics Dashboard",
        "API Documentation",
        "Mobile SDK"
      ]
    },
    {
      title: "Solutions",
      links: [
        "E-commerce",
        "Marketplaces",
        "SaaS Platforms",
        "Enterprise",
        "Startups"
      ]
    },
    {
      title: "Developers",
      links: [
        "API Reference",
        "SDKs",
        "Webhooks",
        "Testing Tools",
        "Code Samples"
      ]
    },
    {
      title: "Company",
      links: [
        "About Us",
        "Careers",
        "Press",
        "Partners",
        "Contact"
      ]
    }
  ];

  const socialLinks = [
    { name: "Twitter", icon: "🐦", href: "#" },
    { name: "LinkedIn", icon: "💼", href: "#" },
    { name: "GitHub", icon: "🐙", href: "#" },
    { name: "Discord", icon: "💬", href: "#" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-primary-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">U</span>
              </div>
              <span className="text-2xl font-bold">Unlimit</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering businesses worldwide with cutting-edge payment solutions and ecommerce tools. 
              Join thousands of companies that trust Unlimit for their growth.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors duration-300 text-lg"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="/"
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 mt-12 pt-12">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-6">
              Get the latest updates on new features, integrations, and industry insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-primary-500 transition-colors duration-300"
              />
              <button className="btn-primary px-6 py-3">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-300 text-sm">
              © 2024 Unlimit. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/" className="text-gray-300 hover:text-primary-400 text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="/" className="text-gray-300 hover:text-primary-400 text-sm transition-colors duration-300">
                Terms of Service
              </a>
              <a href="/" className="text-gray-300 hover:text-primary-400 text-sm transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
