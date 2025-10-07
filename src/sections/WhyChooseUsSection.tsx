const WhyChooseUsSection = () => {
    const features = [
     
      {
        icon: (
          <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
       </svg>
        ),
        title: "Focused Business Approach",
        description:
          "Our mobile app development company has extremely professional & expert mobilapp developers who specialize in 2D, 3D, & isometric apps for Android, iOS, & webapp platforms.",
        // isCenter: true,
      },
      {
        icon: (
          <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
          </svg>
        ),
        title: "Professional Team",
        description:
          "Our mobile app development company has extremely professional & expert mobilapp developers who specialize in 2D, 3D, & isometric apps for Android, iOS, & webapp platforms.",
        isCenter: true,
      },
      {
        icon: (
          <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
             <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
           </svg>
        ),
        title: "Flexible Payment Terms",
        description:
          "Our mobile app development company has extremely professional & expert mobilapp developers who specialize in 2D, 3D, & isometric apps for Android, iOS, & webapp platforms.",
        // isCenter: true,
      },
     
    ]
  
    return (
      <section className="py-20 bg-[#eaedef] relative overflow-hidden">
        {/* Decorative background elements */}
        {/* <div className="absolute top-0 left-0 w-64 h-64 bg-gray-200 rounded-full opacity-30 -translate-x-1/2 -translate-y-1/2"></div> */}
        {/* <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-200 rounded-full opacity-20 translate-x-1/3 translate-y-1/3"></div> */}
  
        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              With our unique approach and cost-effective solutions, your business will prosper because quality is the top
              priority for us.
            </p>
          </div>
  
          {/* Feature Cards with half-visible circles */}
          <div className="relative">
            {/* Left half-visible circle */}
            {/* <div className="hidden md:block absolute -right-64 top-1/2 transform -translate-y-1/2 ms-12">
              <div className="w-80 h-80 bg-[#f5f6f7] rounded-full" style={{clipPath: 'inset(0 50% 0 0)'}}></div>
            </div> */}
            {/* Right half-visible circle */}
            {/* <div className="hidden md:block absolute -left-64 top-1/2 transform -translate-y-1/2">
              <div className="w-80 h-80 bg-[#f5f6f7] rounded-full" style={{clipPath: 'inset(0 0 0 50%)'}}></div>
            </div> */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`
                    ${feature.isCenter ? "bg-white shadow-2xl scale-105 md:scale-110 z-10" : "bg-[#f5f6f7] "}
                    rounded-full p-12 text-center transition-transform duration-300 hover:scale-105
                  `}
                >
                  {/* Icon */}
                  <div
                    className={`
                    w-20 h-20 mx-auto mb-6 rounded-lg flex items-center justify-center
                    ${feature.isCenter ? "bg-red-600" : "bg-gray-300"}
                  `}
                  >
                    {feature.icon}
                  </div>
    
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
    
                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default WhyChooseUsSection
  