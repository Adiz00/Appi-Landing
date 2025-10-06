// import React from 'react'
import { Users, Award, Clock, Target } from 'lucide-react'

const About = () => {
  const stats = [
    { icon: Users, number: '50+', label: 'Expert Developers' },
    { icon: Award, number: '500+', label: 'Projects Delivered' },
    { icon: Clock, number: '5+', label: 'Years Experience' },
    { icon: Target, number: '99%', label: 'Client Satisfaction' }
  ]

  return (
    <section id="about" className="bg-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                About <span className="gradient-text">Appicoders</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                We are a team of passionate developers and designers dedicated to creating 
                exceptional digital experiences that drive business growth.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Mission</h3>
                  <p className="text-gray-600">
                    To empower businesses with innovative software solutions that solve real-world 
                    problems and create lasting value.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Vision</h3>
                  <p className="text-gray-600">
                    To be the leading software development company that transforms ideas into 
                    digital realities, one project at a time.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button className="btn-primary">
                Learn More About Us
              </button>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div
                  key={index}
                  className="text-center p-6 bg-gradient-to-br from-primary-50 to-white rounded-xl border border-primary-100 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-primary-600 rounded-full mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and shape our approach to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Collaboration</h4>
              <p className="text-gray-600">
                We work closely with our clients as partners, ensuring transparent communication 
                and shared success.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Excellence</h4>
              <p className="text-gray-600">
                We strive for the highest quality in everything we deliver, from code to customer service.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Innovation</h4>
              <p className="text-gray-600">
                We embrace new technologies and methodologies to deliver cutting-edge solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
