import { ExternalLink, Github, ArrowRight } from 'lucide-react'

const Portfolio = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A modern, scalable e-commerce solution with advanced analytics and inventory management.',
      image: '/api/placeholder/400/300',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'Web Development',
      link: '#',
      github: '#'
    },
    {
      title: 'Mobile Banking App',
      description: 'Secure mobile banking application with biometric authentication and real-time transactions.',
      image: '/api/placeholder/400/300',
      tech: ['React Native', 'Firebase', 'AWS', 'JWT'],
      category: 'Mobile Development',
      link: '#',
      github: '#'
    },
    {
      title: 'Healthcare Management System',
      description: 'Comprehensive healthcare platform for patient management and medical records.',
      image: '/api/placeholder/400/300',
      tech: ['Vue.js', 'Python', 'PostgreSQL', 'Docker'],
      category: 'Enterprise Software',
      link: '#',
      github: '#'
    },
    {
      title: 'AI-Powered Analytics Dashboard',
      description: 'Real-time analytics dashboard with machine learning insights and predictive modeling.',
      image: '/api/placeholder/400/300',
      tech: ['Next.js', 'TensorFlow', 'Redis', 'Kubernetes'],
      category: 'AI/ML',
      link: '#',
      github: '#'
    },
    {
      title: 'SaaS Project Management Tool',
      description: 'Collaborative project management platform with team collaboration and task tracking.',
      image: '/api/placeholder/400/300',
      tech: ['Angular', 'NestJS', 'MySQL', 'WebSocket'],
      category: 'SaaS',
      link: '#',
      github: '#'
    },
    {
      title: 'IoT Fleet Management',
      description: 'Real-time fleet tracking and management system with IoT sensors and GPS integration.',
      image: '/api/placeholder/400/300',
      tech: ['React', 'Express.js', 'InfluxDB', 'MQTT'],
      category: 'IoT',
      link: '#',
      github: '#'
    }
  ]

  const categories = ['All', 'Web Development', 'Mobile Development', 'Enterprise Software', 'AI/ML', 'SaaS', 'IoT']

  return (
    <section id="portfolio" className="bg-gray-50">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our successful projects and see how we've helped businesses transform 
            their digital presence.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                index === 0
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary-100 to-primary-200 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl text-primary-400 opacity-50">💻</div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 flex space-x-2">
                  <a
                    href={project.github}
                    className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    <Github className="w-4 h-4 text-white" />
                  </a>
                  <a
                    href={project.link}
                    className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 text-white" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Project Button */}
                <button className="w-full flex items-center justify-center space-x-2 text-primary-600 hover:text-primary-700 font-medium transition-colors group">
                  <span>View Project</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's discuss your ideas and create something amazing together. 
              Our team is ready to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Start Your Project
              </button>
              <button className="btn-secondary">
                View All Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
