'use client'

import { useState } from 'react'
import RequestQuoteModal from '../components/RequestQuoteModal'

export default function AboutPage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-primary-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 border-b border-blue-800">
            <div className="flex items-center space-x-6 text-sm">
              <a href="mailto:info@jaisteelworks.com" className="flex items-center hover:text-primary-yellow transition-colors">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                info@jaisteelworks.com
              </a>
              <a href="tel:+2348012345678" className="flex items-center hover:text-primary-yellow transition-colors">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                +234 801 234 5678
              </a>
            </div>
            <div className="flex items-center">
              <div className="bg-black text-primary-yellow px-3 py-1 rounded-full text-xs font-bold flex items-center">
                <span className="text-yellow-400 mr-1">⭐⭐⭐</span>
                OVER 7 YEARS DELIVERING EXCELLENCE
              </div>
            </div>
          </div>
          
          <nav className="py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-14 h-14 bg-primary-yellow flex items-center justify-center rounded">
                  <span className="text-primary-blue font-bold text-3xl font-heading">JAI</span>
                </div>
                <div>
                  <div className="text-lg font-bold font-heading leading-tight">JAI STEEL WORKS</div>
                  <div className="text-xs text-primary-yellow">& MANAGEMENT LTD</div>
                </div>
              </div>
              
              <div className="flex space-x-8 text-sm font-medium">
                <a href="/" className="hover:text-primary-yellow transition-colors">Home</a>
                <a href="/products" className="hover:text-primary-yellow transition-colors">Products</a>
                <a href="/services" className="hover:text-primary-yellow transition-colors">Services</a>
                <a href="/about" className="text-primary-yellow">About Us</a>
                <a href="/news" className="hover:text-primary-yellow transition-colors">News</a>
                <a href="/contact" className="hover:text-primary-yellow transition-colors">Contact Us</a>
              </div>

              <button 
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-primary-yellow text-primary-blue px-6 py-2 text-sm font-bold hover:bg-yellow-500 transition-colors rounded"
              >
                REQUEST QUOTE
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="text-sm text-gray-600">
          <a href="/" className="hover:text-gray-900">Home</a>
          <span className="mx-2">&gt;</span>
          <span className="text-gray-900 font-medium">About Us</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[400px] mb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'linear-gradient(135deg, #2D3E8F 0%, #1E2B5F 100%)',
          }}
        >
          <div className="absolute inset-0 opacity-40" style={{
            backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(253, 185, 19, 0.4) 0%, transparent 50%), radial-gradient(circle at 60% 60%, rgba(253, 185, 19, 0.3) 0%, transparent 40%)',
          }}></div>
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div>
            <h1 className="text-7xl font-bold text-white mb-4 tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
              ABOUT US
            </h1>
            <p className="text-xl text-primary-yellow font-semibold">
              Building Nigeria's Infrastructure with Steel Excellence
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-primary-yellow text-primary-blue px-4 py-2 rounded-full text-sm font-bold mb-6">
              WHO WE ARE
            </div>
            <h2 className="text-4xl font-bold text-primary-blue mb-6 font-heading">
              JAI STEEL WORKS & MANAGEMENT LTD
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              JAI Steel Works & Management Ltd. is a forward-thinking engineering, steel-construction, and project-management company based in Abuja, Nigeria. We specialize in structural steel works, metal fabrication, welding services, consultancy, and turnkey project execution for private, commercial and industrial clients.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              With over 7 years of delivering excellence, we have established ourselves as a trusted partner in Nigeria's construction and industrial development sectors. Our team combines industry-standard technology, skilled manpower, and best-practice processes to deliver innovative and cost-effective solutions.
            </p>
            <button 
              onClick={() => setIsQuoteModalOpen(true)}
              className="bg-primary-yellow text-primary-blue px-8 py-3 font-bold hover:bg-yellow-500 transition-colors rounded-lg inline-flex items-center"
            >
              GET IN TOUCH
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          <div className="bg-gradient-to-br from-primary-blue to-secondary-blue rounded-lg p-12 text-white">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-primary-yellow text-primary-blue rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4 flex-shrink-0">
                  7+
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Years of Excellence</h3>
                  <p className="text-sm text-gray-200">Delivering quality steel construction and fabrication services across Nigeria</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary-yellow text-primary-blue rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4 flex-shrink-0">
                  ✓
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Industry Standard</h3>
                  <p className="text-sm text-gray-200">Using cutting-edge technology and best-practice processes</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary-yellow text-primary-blue rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4 flex-shrink-0">
                  ★
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Quality Assurance</h3>
                  <p className="text-sm text-gray-200">Comprehensive quality control and safety compliance on all projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-gray-50 py-20 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-primary-yellow">
              <div className="w-16 h-16 bg-primary-blue text-white rounded-full flex items-center justify-center mb-6 text-3xl">
                👁️
              </div>
              <h2 className="text-3xl font-bold text-primary-blue mb-4 font-heading">OUR VISION</h2>
              <div className="h-1 w-20 bg-primary-yellow mb-6"></div>
              <p className="text-gray-600 leading-relaxed text-lg">
                To become a leading steel construction and project-management company in Nigeria, delivering high-quality engineering solutions that shape modern infrastructure and industrial development.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-primary-yellow">
              <div className="w-16 h-16 bg-primary-blue text-white rounded-full flex items-center justify-center mb-6 text-3xl">
                🎯
              </div>
              <h2 className="text-3xl font-bold text-primary-blue mb-4 font-heading">OUR MISSION</h2>
              <div className="h-1 w-20 bg-primary-yellow mb-6"></div>
              <p className="text-gray-600 leading-relaxed text-lg">
                To provide clients with reliable, innovative, and cost-effective steel construction, metal fabrication, and project-management solutions using industry-standard technology, skilled manpower, and best-practice processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary-blue mb-4 font-heading">OUR CORE VALUES</h2>
          <div className="w-24 h-1 bg-primary-yellow mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            The principles that guide our work and relationships with clients, partners, and team members.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-20 h-20 bg-primary-yellow rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
              ⚡
            </div>
            <h3 className="text-xl font-bold text-primary-blue mb-3">Excellence</h3>
            <p className="text-gray-600">
              We strive for excellence in every project, ensuring the highest quality standards in all our deliverables.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-20 h-20 bg-primary-yellow rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
              🤝
            </div>
            <h3 className="text-xl font-bold text-primary-blue mb-3">Integrity</h3>
            <p className="text-gray-600">
              We conduct our business with honesty, transparency, and ethical practices in all our dealings.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-20 h-20 bg-primary-yellow rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
              💡
            </div>
            <h3 className="text-xl font-bold text-primary-blue mb-3">Innovation</h3>
            <p className="text-gray-600">
              We embrace new technologies and methodologies to provide cutting-edge solutions for our clients.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-20 h-20 bg-primary-yellow rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
              🛡️
            </div>
            <h3 className="text-xl font-bold text-primary-blue mb-3">Safety</h3>
            <p className="text-gray-600">
              We prioritize safety in all our operations, ensuring a secure working environment for our team.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-20 h-20 bg-primary-yellow rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
              👥
            </div>
            <h3 className="text-xl font-bold text-primary-blue mb-3">Teamwork</h3>
            <p className="text-gray-600">
              We believe in collaboration and working together to achieve exceptional results for our clients.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-20 h-20 bg-primary-yellow rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
              🎖️
            </div>
            <h3 className="text-xl font-bold text-primary-blue mb-3">Quality</h3>
            <p className="text-gray-600">
              We are committed to delivering superior quality in workmanship and project execution.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-primary-blue text-white py-20 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 font-heading">WHY CHOOSE JAI STEEL WORKS?</h2>
            <div className="w-24 h-1 bg-primary-yellow mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary-yellow text-primary-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 font-bold text-2xl">
                1
              </div>
              <h3 className="font-bold text-lg mb-2">Experienced Team</h3>
              <p className="text-sm text-gray-200">
                Skilled professionals with extensive experience in steel construction and fabrication.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-yellow text-primary-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 font-bold text-2xl">
                2
              </div>
              <h3 className="font-bold text-lg mb-2">Modern Equipment</h3>
              <p className="text-sm text-gray-200">
                State-of-the-art machinery and technology for precision work.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-yellow text-primary-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 font-bold text-2xl">
                3
              </div>
              <h3 className="font-bold text-lg mb-2">Timely Delivery</h3>
              <p className="text-sm text-gray-200">
                We complete projects on time without compromising on quality.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-yellow text-primary-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 font-bold text-2xl">
                4
              </div>
              <h3 className="font-bold text-lg mb-2">Competitive Pricing</h3>
              <p className="text-sm text-gray-200">
                Cost-effective solutions without compromising quality standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-gray-50 rounded-lg p-12 text-center">
          <h2 className="text-4xl font-bold text-primary-blue mb-4 font-heading">READY TO WORK WITH US?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Partner with JAI Steel Works for your next steel construction or fabrication project. We're ready to bring your vision to life.
          </p>
          <div className="flex justify-center gap-4">
            <button 
              onClick={() => setIsQuoteModalOpen(true)}
              className="bg-primary-yellow text-primary-blue px-12 py-4 text-lg font-bold hover:bg-yellow-500 transition-colors rounded-lg inline-flex items-center"
            >
              REQUEST A QUOTE
              <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <a 
              href="/contact"
              className="bg-primary-blue text-white px-12 py-4 text-lg font-bold hover:bg-secondary-blue transition-colors rounded-lg inline-flex items-center"
            >
              CONTACT US
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-bg text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-14 h-14 bg-primary-yellow flex items-center justify-center rounded">
                  <span className="text-primary-blue font-bold text-2xl font-heading">JAI</span>
                </div>
                <div>
                  <div className="text-lg font-bold font-heading">JAI STEEL WORKS</div>
                  <div className="text-xs text-primary-yellow">& MANAGEMENT LTD</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                A forward-thinking engineering, steel-construction, and project-management company based in Abuja, Nigeria. We specialize in structural steel works, metal fabrication, welding services, consultancy, and turnkey project execution for private, commercial and industrial clients.
              </p>
              
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-primary-yellow" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>+234 801 234 5678</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-primary-yellow" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span>info@jaisteelworks.com</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 mr-3 text-primary-yellow mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>Abuja, Nigeria</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-primary-yellow">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Steel Construction</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Metal Fabrication</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Welding Services</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Project Management</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-primary-yellow">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="/services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div className="mb-6 md:mb-0">
                <h3 className="text-xl font-bold mb-2">Subscribe to our newsletter</h3>
                <p className="text-gray-400 text-sm">
                  Get the latest news from JAI Steel Works, project updates and industry insights.
                </p>
              </div>
              
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="bg-white text-black px-4 py-2 text-sm focus:outline-none w-64"
                />
                <button className="bg-primary-yellow text-primary-blue px-6 py-2 text-sm font-bold hover:bg-yellow-500 transition-colors">
                  SEND
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 JAI Steel Works & Management Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Request Quote Modal */}
      <RequestQuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </div>
  )
}