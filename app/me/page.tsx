'use client'

import { useState } from 'react'
import RequestQuoteModal from './components/RequestQuoteModal'

export default function ServicesPage() {
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
                <a href="/services" className="text-primary-yellow">Services</a>
                <a href="/about" className="hover:text-primary-yellow transition-colors">About Us</a>
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
          <span className="text-gray-900 font-medium">Services</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-100 mb-16">
        <img src="/images/image3.jpg" alt="Hero Background" className="w-full absolute h-full object-cover" />
        <div className="absolute inset-0 bg-linear-to-r from-black/70 to-black/30 z-10 opacity-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'linear-gradient(135deg, #2D3E8F 0%, #1E2B5F 100%)',
          }}
        >
          {/* Simulated welding sparks background */}
          <div className="absolute inset-0 opacity-40" style={{
            backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(253, 185, 19, 0.4) 0%, transparent 50%), radial-gradient(circle at 60% 60%, rgba(253, 185, 19, 0.3) 0%, transparent 40%)',
          }}></div>
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="flex justify-between items-center w-full">
            <div>
              <h1 className="text-7xl font-bold text-white mb-4 tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                OUR<br />SERVICES
              </h1>
            </div>
            
            <div className="bg-white/95 p-8 max-w-md">
              <p className="text-gray-700 text-sm leading-relaxed">
                At <strong>JAI Steel Works & Management Ltd.</strong>, we specialize in providing top-tier steel construction, metal fabrication, and project-management services to meet the diverse needs of our clients. Our commitment to quality, safety, and precision ensures exceptional results for every project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fabrication Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="lg:-mr-10 bg-gray-100 pb-10">
            <div className="bg-primary-blue text-white p-6  mb-8 flex items-center justify-between">
              <h2 className="text-3xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>STRUCTURAL STEEL & CONSTRUCTION</h2>
              <svg className="w-8 h-8 text-primary-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>

            <div className="space-y-8 px-15">
              <div>
                <h3 className="text-xl font-bold mb-2 text-primary-blue">Design, Detailing and Fabrication:</h3>
                <p className="text-gray-600 text-sm mb-3">
                  We design, detail and fabricate structural steel components to exact specifications for all types of construction projects.
                </p>
                <button 
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="border-2 border-primary-yellow text-primary-blue px-6 py-2 text-sm font-medium hover:bg-primary-yellow hover:text-white transition-colors flex items-center"
                >
                  LEARN MORE
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2 text-primary-blue">Supply and Installation:</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Supply and installation of beams, columns, girders, trusses, and steel frameworks for industrial, commercial and residential projects.
                </p>
                <button 
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="border-2 border-primary-yellow text-primary-blue px-6 py-2 text-sm font-medium hover:bg-primary-yellow hover:text-white transition-colors flex items-center"
                >
                  LEARN MORE
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2 text-primary-blue">Construction of Buildings:</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Construction of warehouses, industrial/commercial buildings, and pre-engineered steel structures with professional expertise.
                </p>
                <button 
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="border-2 border-primary-yellow text-primary-blue px-6 py-2 text-sm font-medium hover:bg-primary-yellow hover:text-white transition-colors flex items-center"
                >
                  LEARN MORE
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2 text-primary-blue">Turnkey Steel-Construction Projects:</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Complete turnkey steel-construction projects from design through to completion with on-site supervision, quality assurance/quality control.
                </p>
                <button 
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="border-2 border-primary-yellow text-primary-blue px-6 py-2 text-sm font-medium hover:bg-primary-yellow hover:text-white transition-colors flex items-center"
                >
                  LEARN MORE
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="relative h-150 -ml-10">
            <img src="/images/image1.jpg" alt="Structural Steel Construction" className="w-full h-full absolute object-cover rounded-lg" />
            <div className="absolute inset-0 rounded-lg overflow-hidden">
              {/* Steel construction image placeholder */}
              <div className="w-full h-full opacity-20 bg-linear-to-br from-gray-300 via-gray-400 to-gray-500 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🏗️</div>
                  <div className="text-gray-600 text-lg font-bold">Structural Steel Construction</div>
                  <div className="text-gray-500 text-sm mt-2">Professional Engineering Solutions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welding Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-150">
              <img src="/images/image2.png" alt="Hero Background" className="w-full absolute h-full object-cover" />
            <div className="absolute inset-0  rounded-lg overflow-hidden">
              {/* Welding operations image placeholder */}
              <div className="w-full h-full bg-linear-to-br opacity-40 from-yellow-600 via-orange-600 to-gray-900 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">⚡</div>
                  <div className="text-white text-lg font-bold">Metal Fabrication & Welding</div>
                  <div className="text-primary-yellow text-sm mt-2">Expert Craftsmanship</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-primary-blue text-white p-6 mb-8 flex items-center justify-between">
              <h2 className="text-3xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>METAL FABRICATION & WELDING</h2>
              <svg className="w-8 h-8 text-primary-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-2 text-primary-blue">Custom Fabrication of Metal Items:</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Custom fabrication of gates, fences, railings, doors, metal frames, fixtures and fittings for all applications.
                </p>
                <button 
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="border-2 border-primary-yellow text-primary-blue px-6 py-2 text-sm font-medium hover:bg-primary-yellow hover:text-white transition-colors flex items-center"
                >
                  LEARN MORE
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2 text-primary-blue">Sheet-Metal Fabrication:</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Sheet-metal fabrication, cladding, metal panels, ducts, and enclosures for industrial and commercial use.
                </p>
                <button 
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="border-2 border-primary-yellow text-primary-blue px-6 py-2 text-sm font-medium hover:bg-primary-yellow hover:text-white transition-colors flex items-center"
                >
                  LEARN MORE
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2 text-primary-blue">Welding Services:</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Professional welding services for mild steel, stainless steel, aluminum — including mobile/on-site welding.
                </p>
                <button 
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="border-2 border-primary-yellow text-primary-blue px-6 py-2 text-sm font-medium hover:bg-primary-yellow hover:text-white transition-colors flex items-center"
                >
                  LEARN MORE
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2 text-primary-blue">Bespoke Fabrication:</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Bespoke fabrication for industrial, commercial or residential clients with metal maintenance and repair services.
                </p>
                <button 
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="border-2 border-primary-yellow text-primary-blue px-6 py-2 text-sm font-medium hover:bg-primary-yellow hover:text-white transition-colors flex items-center"
                >
                  LEARN MORE
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-4xl font-bold flex items-center text-primary-blue" style={{ fontFamily: 'var(--font-heading)' }}>
            OUR PROJECTS
            <svg className="w-8 h-8 ml-4 text-primary-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </h2>
          
          <div className="flex space-x-2">
            <button className="border-2 border-primary-blue text-primary-blue p-2 hover:bg-primary-blue hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="bg-primary-yellow text-primary-blue p-2 hover:bg-yellow-500 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Project 1 */}
          <div className="group cursor-pointer">
            <div className="bg-gray-300 h-64 mb-4 overflow-hidden rounded-lg">
              <div className="w-full h-full bg-linear-to-br from-primary-blue to-secondary-blue transform group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="text-5xl mb-3 text-primary-yellow">🏢</div>
                  <span className="text-white text-lg font-bold">Industrial Warehouse</span>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2 text-primary-blue">Industrial Warehouse Project</h3>
            <p className="text-gray-600 text-sm mb-4">
              A large-scale industrial warehouse showcasing our expertise in pre-engineered steel structures with complete fabrication and installation services...
            </p>
            <button 
              onClick={() => setIsQuoteModalOpen(true)}
              className="border-2 border-primary-yellow text-primary-blue px-6 py-2 text-sm font-medium hover:bg-primary-yellow hover:text-white transition-colors flex items-center"
            >
              READ MORE
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* Project 2 */}
          <div className="group cursor-pointer">
            <div className="bg-gray-300 h-64 mb-4 overflow-hidden rounded-lg">
              <div className="w-full h-full bg-linear-to-br from-orange-600 to-red-800 transform group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="text-5xl mb-3 text-white">🌉</div>
                  <span className="text-white text-lg font-bold">Steel Bridge Construction</span>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2 text-primary-blue">Steel Bridge Infrastructure</h3>
            <p className="text-gray-600 text-sm mb-4">
              Precision-engineered steel bridge demonstrating our capabilities in complex structural projects with meticulous welding and assembly...
            </p>
            <button 
              onClick={() => setIsQuoteModalOpen(true)}
              className="border-2 border-primary-yellow text-primary-blue px-6 py-2 text-sm font-medium hover:bg-primary-yellow hover:text-white transition-colors flex items-center"
            >
              READ MORE
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* Project 3 */}
          <div className="group cursor-pointer">
            <div className="bg-gray-300 h-64 mb-4 overflow-hidden rounded-lg">
              <div className="w-full h-full bg-linear-to-br from-green-600 to-teal-700 transform group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="text-5xl mb-3 text-white">🏗️</div>
                  <span className="text-white text-lg font-bold">Commercial Building</span>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2 text-primary-blue">Commercial Steel Framework</h3>
            <p className="text-gray-600 text-sm mb-4">
              Multi-story commercial building featuring advanced steel construction techniques and turnkey project management from design to completion...
            </p>
            <button 
              onClick={() => setIsQuoteModalOpen(true)}
              className="border-2 border-primary-yellow text-primary-blue px-6 py-2 text-sm font-medium hover:bg-primary-yellow hover:text-white transition-colors flex items-center"
            >
              READ MORE
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-blue text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
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
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
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

            {/* Products */}
            <div>
              <h4 className="font-bold mb-4 text-primary-yellow">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Steel Construction</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Metal Fabrication</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Welding Services</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Project Management</a></li>
              </ul>
            </div>

            {/* Locations */}
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

          {/* Newsletter Section */}
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

          {/* Bottom Links */}
          <div className="border-t border-gray-700 mt-8 pt-8">
            <div className="text-center text-sm text-gray-400">
              <p>&copy; {new Date().getFullYear()} JAI Steel Works & Management Ltd. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Request Quote Modal */}
      <RequestQuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </div>
  )
}