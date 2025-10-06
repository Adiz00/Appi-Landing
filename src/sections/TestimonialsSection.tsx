const TestimonialsSection = () => {
    return (
      <section className="relative py-20 overflow-hidden">
        {/* Background Image with Grayscale */}
        <div
          className="absolute inset-0 bg-cover bg-center grayscale"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80)",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
  
        {/* Content Container */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Title Section */}
            <div className="relative">
              {/* Quote Icon */}
              <div className="absolute -top-8 -left-4 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-10 h-10 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                </svg>
              </div>
  
              {/* Red Background Box */}
              <div className="bg-red-700 p-12 rounded-lg">
                <p className="text-white text-sm font-semibold tracking-wider mb-4">CLIENT TESTIMONIALS</p>
                <h2 className="text-white text-4xl lg:text-5xl font-bold leading-tight">
                  What our clients
                  <br />
                  are Saying.
                </h2>
              </div>
            </div>
  
            {/* Right Side - Testimonial Card */}
            <div className="bg-white rounded-lg shadow-2xl p-8 lg:p-12">
              {/* Profile Section */}
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
                  alt="Scarlett Lawrence"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Scarlett Lawrence</h3>
                  <div className="w-16 h-1 bg-red-600 mt-1"></div>
                </div>
              </div>
  
              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed mb-6">
                Thank you Team Appengine you guys have a great understanding of what's current in the market. You guys are
                very professional in your communication and qualitative suggestions on useful functionality during the
                planning stage made for a final product that surpassed initial expectations. Their Project management is
                amazing. High deadlines were reliably met without issue. Our Strong recommendations if you're looking for
                quality work.
              </p>
  
              {/* Carousel Indicators */}
              <div className="flex gap-2">
                <button className="w-8 h-1 bg-red-600 rounded-full"></button>
                <button className="w-8 h-1 bg-gray-300 rounded-full hover:bg-gray-400 transition-colors"></button>
                <button className="w-8 h-1 bg-gray-300 rounded-full hover:bg-gray-400 transition-colors"></button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default TestimonialsSection
  