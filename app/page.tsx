"use client";
import { link } from 'fs';
import React, { useEffect, useRef, useState } from 'react';
import SkillsCarousel from './components/carousel';

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    document.querySelectorAll('[data-reveal]').forEach((el) => {
      if (observerRef.current) {
        observerRef.current.observe(el);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const projects = [
    {
      id: 1,
      image: "/images/bog.png",
      link: "https://buildonthego.com",
      title: 'BOG (Build on the Go): Creative Agency Website',
      description: 'A platform where people can monitor and manage their projects without being encumbered by time and distance.',
      tags: ['Monitoring', 'E-commerce', 'Artisans'],
    },
    {
      id: 2,
      title: 'BinaryLabs',
      link: "https://binarylabshq.com",
      image: "/images/binarylabs.png",
      description: 'Driven by a passion for revolutionizing the digital landscape and creating solutions that empower businesses and individuals alike. ',
      tags: ['Web Development', 'Visitors Tracking', 'Logistics'],
    },
    {
      id: 3,
      image: "/images/corisio.png",
      link: "https://corisio.com",
      title: 'Corisio: E-Commerce Platform',
      description: 'A modern, responsive online store with seamless checkout experience and dynamic product filtering.',
      tags: ['Location Tracking', 'Order Management', 'Typescript'],
    },
    {
      id: 4,
      image: "/images/greenland.png",
      link: "https://urbangreenlandfarms.com",
      title: 'Urban Greenland Farm',
      description: 'Specialize in producing high-quality, sustainable, and locally grown food, primarily focusing on microgreens like radish mix, sunflower, and broccoli, alongside vegetables and herbs. They often use soil-free vertical farming techniques to supply restaurants, households, and markets. ',
      tags: ['Order', 'Admin Dashboard', 'Typescript'],
    },
    {
      id: 5,
      title: 'Shipper Now',
      link: "https://shipper.now",
      image: "/images/shipper.png",
      description: 'AI app builder: chat it into existence. Shipper.now turns your ideas into software, products and companies: just by describing them.',
      tags: ['AI', 'Automation', 'SaaS'],
    },
    {
      id: 6,
      title: 'SIFOX Technologies',
      link: "https://sifoxtech.com/",
      image: "/images/sifox.svg",
      description: 'SIFOX Technologies empowers telecommunications and utility companies in Sub-Saharan Africa to achieve revenue growth through innovative software solutions',
      tags: ['AI', 'Automation', 'SaaS'],
    },
    {
      id: 7,
      title: 'KHNL',
      link: "https://www.khnltravels.com/",
      image: "/images/khnl.png",
      description: 'Corporate Travel Management, Immigration Consulting Service, Protocol Services, Visa Assistance, Travel Insurance, Get Flight Insurance, Hotel Reservations',
      tags: ['AI', 'Automation', 'SaaS'],
    },
    {
      id: 8,
      title: 'Pubshine',
      link: "https://pubshine.com/",
      image: "/images/pubshine.png",
      description: 'Empower publishers to unlock higher earnings through premium monetization for web, app, and CTV. Our seamless AdX access and advanced optimization strategies help you turn traffic into sustainable revenue. Let\'s elevate your ad performance starting today.',
      tags: ['Ad Management', 'GAM Automation', 'Blog', "Javascript"],
    },
    {
      id: 9,
      title: 'IDANIMO',
      link: "https://idanimo.ng/",
      image: "/images/idanimo.png",
      description: 'Helping fintechs and financial services providers make smarter decisions faster with our AI-Powered Risk Decisioning Platform.',
      tags: ['Verification', 'Enrollment', 'Typescript'],
    },
    {
      id: 10,
      title: 'Go-Kart',
      link: "https://go-kart.com/",
      image: "/images/gokart.png",
      description: 'Lagos Based grocery e-commerce platform where users can order groceries and have them delivered by verified riders.',
      tags: ['Stores', 'Locations', 'Typescript'],
    },
    {
      id: 11,
      title: 'Progress Intellectual School',
      image: "/images/progress.png",
      link: "https://piso-demo.vercel.app/",
      description: 'Progress Intellectual School is committed to providing a nurturing environment that fosters academic excellence and personal growth. Our curriculum focuses on developing well-rounded individuals who are equipped to make a positive impact on the world.',
      tags: ['School', 'Portals', 'Javascript'],
    },
    {
      id: 12,
      title: 'Great Nigeria Student (GNS)',
      image: "/images/gns.png",
      link: "https://gns-recruits.vercel.app/",
      description: 'GNS (Great Nigerian Students) is the premier mobile application designed to revolutionize how tertiary students in Nigeria connect, collaborate, and excel',
      tags: ['Mobile App', 'Study', 'Javascripr'],
    },
    
  ];

  const contactMethods = [
    {
      icon: '📧',
      label: 'oluwasusistephen@gmail.com',
      href: 'mailto:oluwasusistephen@gmail.com',
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/stephanyemmitty',
    },
    {
      icon: '🐙',
      label: 'GitHub',
      href: 'https://github.com/Hollayemi',
    },
    // {
    //   icon: '🎨',
    //   label: 'Dribbble',
    //   href: 'https://dribbble.com/yourusername',
    // },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 overflow-x-hidden font-sans">
      {/* Background Grid Effect */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      {/* Hero Section */}
      <header className="relative md:min-h-screen flex flex-col md:flex-row items-center z-10">
        <div className="max-w-7xl mx-auto px-8 w-full py-10">
          <div className="max-w-4xl">
            <span className="inline-block font-mono text-sm text-[#00ff88] uppercase tracking-[2px] mb-6 px-4 py-2 border border-[#00ff88] rounded-sm animate-[fadeIn_1s_ease-out_0.3s_backwards]">
              Web Designer
            </span>
            
            <h1 className="text-5xl md:text-7xl lg:text-4xl font-bold leading-tight mb-6 tracking-tight animate-[fadeInUp_1s_ease-out_0.4s_backwards]">
              Crafting Digital Experiences That{' '}
              <span className="bg-gradient-to-r from-[#00ff88] to-[#00ddff] bg-clip-text text-transparent">
                Stand Out
              </span>
            </h1>
            
            <p className="text-lg md:text-2xl text-gray-400 max-w-3xl mb-12 leading-relaxed animate-[fadeInUp_1s_ease-out_0.6s_backwards]">
              I design and build beautiful, functional websites that merge creativity with purpose.
              Every project is an opportunity to push boundaries and create something memorable.
            </p>
            
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, '#contact')}
              className="inline-block font-mono text-sm bg-[#00ff88] text-[#0a0a0a] px-10 py-4 uppercase tracking-wider font-bold rounded-sm transition-all duration-300 hover:bg-[#00cc6a] hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,255,136,0.3)] animate-[fadeInUp_1s_ease-out_0.8s_backwards] relative overflow-hidden group"
            >
              <span className="relative z-10">Let's Work Together</span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            </a>
          </div>
        </div>

        <div className="md:absolute top-0 flex flex-col items-center justify-center right-0 w-full md:w-1/2 h-full bg-linear-to-l md:from-[#646464] md:to-transparent opacity-50 pointer-events-none">
            <img src="/images/me.png" className="w-80 h-80 rounded-full object-cover" />
             <span className="inline-block font-bold mt-10 text-sm text-[#00ff88] uppercase tracking-[2px] mb-6 px-4 py-2 border border-[#00ff88] rounded-sm animate-[fadeIn_1s_ease-out_0.3s_backwards]">
              Oluwasusi Stephen Olayemi
            </span>
        </div>
        
      </header>

      <SkillsCarousel />

      {/* Projects Section */}
      <section className="relative py-32 z-10" id="projects">
        <div className="max-w-7xl mx-auto px-8">
          <div
            id="section-header"
            data-reveal
            className={`text-center mb-20 transition-all duration-700 ${
              isVisible['section-header']
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
              Featured Work
            </h2>
            <p className="text-lg text-gray-400">
              A selection of projects that showcase my approach to web design
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
            {projects.map((project, index) => (
              <a
               key={project.id}
                target='_blank'
                href={project.link}
              >
              <div
               
                id={`project-${project.id}`}
                data-reveal
                className={`bg-[#141414] border border-[#2a2a2a] rounded-lg overflow-hidden cursor-pointer transition-all duration-700 hover:-translate-y-2.5 hover:border-[#00ff88] hover:shadow-[0_20px_60px_rgba(0,255,136,0.15)] group ${
                  isVisible[`project-${project.id}`]
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Project Image */}
                <div className="relative h-64 bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] flex items-center justify-center border-b border-[#2a2a2a] overflow-hidden">
                  <div className="absolute opacity-45 inset-0 bg-[radial-gradient(circle,rgba(0,255,136,0.1)_0%,transparent_70%)] animate-[rotate_20s_linear_infinite]" />
                  <div className="flex justify-center items-center w-full h-full absolute">
                    <img src={project.image} className="w-1/2 h-1/2 object-contain inset-0" />
                    </div>
                  <span className=" z-10 font-mono absolute top-2 right-2 text-6xl text-[#00ff88]">
                    {String(project.id).padStart(2, '0')}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00ff88]/10 to-[#00ddff]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description.substring(0, 150)}...
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="font-mono text-xs text-[#00ff88] bg-[#00ff88]/10 px-3 py-2 rounded-sm border border-[#00ff88]/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        className="relative py-32 bg-[#141414] border-t border-[#2a2a2a] z-10"
        id="contact"
      >
        {/* Top Gradient Border */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00ff88] to-transparent" />

        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Let's Create Something Great
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Have a project in mind? I'm always open to discussing new opportunities and creative collaborations.
          </p>

          <div className="flex flex-wrap gap-6 justify-center mb-16">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-3 px-6 py-4 bg-[#0a0a0a] border border-[#2a2a2a] rounded transition-all duration-300 hover:border-[#00ff88] hover:-translate-y-1 group"
              >
                <span className="text-2xl">{method.icon}</span>
                <span className="font-mono text-sm text-gray-100 group-hover:text-[#00ff88] transition-colors">
                  {method.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 text-center bg-[#0a0a0a] border-t border-[#2a2a2a] z-10">
        <p className="font-mono text-sm text-gray-400">
          © 2026 · Designed & Built with Passion
        </p>
      </footer>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Familjen+Grotesk:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap');

        * {
          font-family: 'Familjen Grotesk', sans-serif;
        }

        .font-mono {
          font-family: 'Space Mono', monospace;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}