// import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Hero = () => {
  return (

    <>
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
     
      {/* Layered Background Images - Covering 100vh */}
      <div className="absolute top-0 left-0 w-full h-screen z-5">
        {/* Image 1 - Bottom Layer (Lowest) */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/src/assets/images/Rectangle 38.png" 
            alt="Background Layer 1" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Image 2 - Middle Layer */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/src/assets/images/Rectangle 39.png" 
            alt="Middle Layer 2" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Image 3 - Top Layer (Highest) */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/src/assets/images/Rectangle 41.png" 
            alt="Top Layer 3" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 bg-transparent">
        {/* Header/Navigation */}
        <header className="flex items-center justify-between px-8 py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center">
              <img src="/src/assets/images/Logo.png" alt="Appicoders" className="w-56" />
            </div>
          </div>

        <div className="flex flex-col items-end justify-center px-8 py-4">
          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 text-white text-sm">
            <a href="#" className="hover:text-gray-200 transition">HOME</a>
            <a href="#" className="hover:text-gray-200 transition">About</a>
            <a href="#" className="hover:text-gray-200 transition">Services</a>
            <a href="#" className="hover:text-gray-200 transition">Why Choose Us</a>
            <a href="#" className="hover:text-gray-200 transition">Portfolio</a>
            <a href="#" className="hover:text-gray-200 transition">Products</a>
            <a href="#" className="hover:text-gray-200 transition">Testimonial</a>
            <a href="#" className="hover:text-gray-200 transition">Technologies</a>
            <a href="#" className="hover:text-gray-200 transition">Contact</a>
          </nav>

          {/* Phone Button */}
          <a 
            href="tel:+18008268018" 
            className="w-fit mt-4 hidden lg:flex items-center space-x-2 border-2 border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-red-600 transition"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span className="font-medium">+1 (800) 826-8018</span>
          </a>
          </div>
        </header>

        {/* Hero Content */}
         <div className="container mx-auto px-8 py-4 lg:py-4">
           <div className="flex gap-5 items-center">
            {/* Left side - Phone mockup */}
            <div className="flex justify-center justify-center w-[40%]">
              {/* <div className="relative w-fit"> */}
                <img 
                  src="/src/assets/images/Mobile-Mockup 1.png" 
                  alt="Mobile App Mockup" 
                  className="w-[80%]  drop-shadow-2xl"
                />
              {/* </div> */}
            </div>

            {/* Right side - Text content */}
            <div className="text-white space-y-8 w-[60%]">
              <h1 className="text-2xl lg:text-4xl xl:text-5xl font-bold leading-tight ">
                Leading the Way in App Development Innovation
              </h1>
              
              <p className="text-lg lg:text-xl text-gray-100 leading-relaxed lg:max-w-lg">
                We build Android & iOS Mobile Apps that cater all your business needs and take it on the next level.
              </p>

              <div className="pt-4">
                <button className="bg-gradient-to-r from-red-900 to-red-800 text-white px-8 py-3 rounded hover:from-red-900 hover:to-red-700 transition font-medium uppercase text-sm">
                  GET A FREE QUOTE
                </button>
              </div>

              <div className="flex justify-center space-x-4  bg-transparent pt-10">
            <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition shadow-lg">
              <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition shadow-lg">
              <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

            </div>
          </div>

         
        </div>
      </div>
    </div>

    <div className="bg-white py-16 px-6">
     <div className="container mx-auto max-w-6xl">
       <div className="grid lg:grid-cols-2 gap-8 items-start">
         {/* Left side - Heading */}
         <div className="space-y-6">
           <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
             <span className="text-red-600">Appicoders</span> – <span className="text-red-600">#1</span>. Mobile App &
             Web Development Company in USA
           </h2>
         </div>

         {/* Right side - Text and Button */}
         <div className="space-y-6">
           <p className="text-gray-700 text-lg leading-relaxed">
             Welcome to Appicoders, your trusted partner for expert mobile app and web development. With over 10+ years
             of experience, we specialize in designing, developing, and marketing cutting-edge solutions for all major
             mobile platforms, including Android, iOS, and Windows.
           </p>

           <button className="bg-gradient-to-r from-red-800 to-red-600 text-white px-8 py-3 rounded hover:from-red-900 hover:to-red-700 transition font-medium uppercase text-sm">
             READ MORE
           </button>
         </div>
       </div>
     </div>
    </div>

    
</>
  );

  
}

export default Hero
