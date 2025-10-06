const IndustriesSection = () => {
    const industries = [
      {
        title: "Medical & Pharma Services",
        icon: (
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 2H11V9H4V11H11V22H13V11H20V9H13V2Z" fill="currentColor" />
          </svg>
        ),
        description:
          "We research, plan, and execute - and these qualities make Appicoders stand out from the crowd. We put the needs of our clients ahead of us.",
        active: false,
      },
      {
        title: "Training & Fitness",
        icon: (
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13.49 5.48C13.64 5.17 13.97 5 14.34 5H17C17.55 5 18 5.45 18 6V18C18 18.55 17.55 19 17 19H14.34C13.97 19 13.64 18.83 13.49 18.52L10 12L13.49 5.48ZM10.51 5.48C10.36 5.17 10.03 5 9.66 5H7C6.45 5 6 5.45 6 6V18C6 18.55 6.45 19 7 19H9.66C10.03 19 10.36 18.83 10.51 18.52L14 12L10.51 5.48Z"
              fill="currentColor"
            />
          </svg>
        ),
        description:
          "We research, plan, and execute - and these qualities make Appicoders stand out from the crowd. We put the needs of our clients ahead of us.",
        active: true,
      },
      {
        title: "Fintech",
        icon: (
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M17 1.01L7 1C5.9 1 5 1.9 5 3V21C5 22.1 5.9 23 7 23H17C18.1 23 19 22.1 19 21V3C19 1.9 18.1 1.01 17 1.01ZM17 19H7V5H17V19ZM16 13H13V16H11V13H8V11H11V8H13V11H16V13Z"
              fill="currentColor"
            />
          </svg>
        ),
        description:
          "We research, plan, and execute - and these qualities make Appicoders stand out from the crowd. We put the needs of our clients ahead of us.",
        active: false,
      },
      {
        title: "Health & Fitness",
        icon: (
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z"
              fill="currentColor"
            />
            <path d="M8 10H10V12H12V10H14V8H12V6H10V8H8V10Z" fill="currentColor" />
          </svg>
        ),
        description:
          "We research, plan, and execute - and these qualities make Appicoders stand out from the crowd. We put the needs of our clients ahead of us.",
        active: false,
      },
      {
        title: "Business & Services",
        icon: (
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 6H16V4C16 2.89 15.11 2 14 2H10C8.89 2 8 2.89 8 4V6H4C2.89 6 2.01 6.89 2.01 8L2 19C2 20.11 2.89 21 4 21H20C21.11 21 22 20.11 22 19V8C22 6.89 21.11 6 20 6ZM14 6H10V4H14V6Z"
              fill="currentColor"
            />
          </svg>
        ),
        description:
          "We research, plan, and execute - and these qualities make Appicoders stand out from the crowd. We put the needs of our clients ahead of us.",
        active: false,
      },
      {
        title: "Cleaning Services",
        icon: (
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M18 2H16V1C16 0.45 15.55 0 15 0C14.45 0 14 0.45 14 1V2H10V1C10 0.45 9.55 0 9 0C8.45 0 8 0.45 8 1V2H6C4.9 2 4 2.9 4 4V6H20V4C20 2.9 19.1 2 18 2ZM19 8H5C4.45 8 4 8.45 4 9V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V9C20 8.45 19.55 8 19 8Z"
              fill="currentColor"
            />
          </svg>
        ),
        description:
          "We research, plan, and execute - and these qualities make Appicoders stand out from the crowd. We put the needs of our clients ahead of us.",
        active: false,
      },
    ]
  
    return (
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Industries</h2>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className={`bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow ${
                  industry.active ? "border-b-4 border-red-600" : ""
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="text-red-600 flex-shrink-0">{industry.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{industry.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{industry.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default IndustriesSection
  