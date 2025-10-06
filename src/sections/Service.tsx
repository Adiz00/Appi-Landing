import { Smartphone, Globe, Box, Brain, Link, Rocket } from "lucide-react"

const ServicesSection = () => {
  const services = [
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Custom Mobile Applications",
      description: "iOS, Android and Wearable Apps",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Custom Web Development",
      description: "Robust Webs, Progressive Web Apps",
    },
    {
      icon: <Box className="w-6 h-6" />,
      title: "Augmented Reality",
      description: "Futuristic AR Apps",
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Artificial Intelligence",
      description: "Innovative AI & ML Solutions",
    },
    {
      icon: <Link className="w-6 h-6" />,
      title: "Blockchain Development",
      description: "Custom Blockchain Solutions",
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "MVP Development",
      description: "For Startups & Entrepreneurs",
    },
  ]

  return (
    <section className="relative overflow-hidden py-16 md:py-24 z-10" style={{
      backgroundImage: 'url(/src/assets/images/Group170@2x.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      {/* Red diagonal background shapes */}
      {/* <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-red-600 transform -skew-y-3 origin-top-left"></div>
        <div className="absolute top-20 right-0 w-3/4 h-full bg-red-700 transform skew-y-2 origin-top-right"></div>
      </div> */}

      <div className="relative z-10  mx-auto px-4 sm:px-6 lg:ps-16 lg:pe-0 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">Our Services</h2>
            <p className="text-white text-lg mb-8">Get to know about what we're good at.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center text-red-600">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-base mb-1">{service.title}</h3>
                    <p className="text-white text-sm opacity-90">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Right side - Services list */}
         
          <div className="flex justify-center lg:justify-end">
            <img 
              src="/src/assets/images/Group.png" 
              alt="Services Image" 
              className="w-full max-w-md drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
