import React, { useState } from 'react';

const InfoSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Global Payment Solutions",
      description: "Process payments in 150+ currencies with industry-leading security and compliance standards.",
      icon: "🌍",
      stats: "150+ Countries",
      color: "from-blue-500 to-cyan-600"
    },
    {
      id: 2,
      title: "Advanced Analytics",
      description: "Real-time insights and detailed reporting to optimize your business performance and growth.",
      icon: "📊",
      stats: "99.9% Uptime",
      color: "from-purple-500 to-pink-600"
    },
    {
      id: 3,
      title: "Seamless Integration",
      description: "Easy-to-implement APIs and SDKs that integrate with your existing systems in minutes.",
      icon: "⚡",
      stats: "5 Min Setup",
      color: "from-green-500 to-teal-600"
    },
    {
      id: 4,
      title: "Enterprise Security",
      description: "Bank-level security with PCI DSS compliance, fraud detection, and advanced encryption.",
      icon: "🔒",
      stats: "100% Secure",
      color: "from-orange-500 to-red-600"
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Our Platform?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the features that make us the preferred choice for businesses worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`group relative overflow-hidden rounded-2xl transition-all duration-1000 ease-in-out cursor-pointer ${
                activeSlide === index ? 'transform scale-105' : 'transform scale-100'
              }`}
              onMouseEnter={() => setActiveSlide(index)}
              onMouseLeave={() => setActiveSlide(0)}
            >
              {/* Background Card */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-1000 p-8 h-full">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${slide.color} flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-1000`}>
                  {slide.icon}
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-1000">
                    {slide.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {slide.description}
                  </p>

                  {/* Stats */}
                  <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${slide.color} text-white font-semibold text-sm transform transition-all duration-1000 ${
                    activeSlide === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}>
                    {slide.stats}
                  </div>
                </div>

                {/* Sliding overlay effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${slide.color} opacity-0 group-hover:opacity-5 transition-all duration-1000 rounded-2xl`}></div>
                
                {/* Sliding border effect */}
                <div className={`absolute inset-0 border-2 border-transparent group-hover:border-primary-300 rounded-2xl transition-all duration-1000`}></div>
              </div>

              {/* Hover slide effect */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${slide.color} transform transition-all duration-1000 ${
                activeSlide === index ? 'translate-x-0' : '-translate-x-full'
              }`}></div>
            </div>
          ))}
        </div>

        {/* Bottom sliding indicators */}
        <div className="flex justify-center mt-12 space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-1000 ${
                activeSlide === index 
                  ? 'bg-primary-600 w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              onClick={() => setActiveSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoSlider;