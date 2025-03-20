import React, { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa'

const Hero = () => {
  const [displayText, setDisplayText] = useState("Web");

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayText(prev => prev === "Web" ? "Mobile" : "Web");
    }, 3000); // Changes every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 lg:pt-0 animate-fade-in" id="home">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col items-center lg:flex-row lg:justify-between lg:items-center gap-12 lg:gap-16">
          {/* Profile Image Section */}
          <div className="w-full max-w-md lg:w-1/2 flex justify-center lg:order-2">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-[400px] lg:h-[400px]">
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-secondary/20 blur-2xl transform scale-110 animate-pulse"></div>
              
              {/* Background Circle */}
              <div className="absolute inset-0 rounded-full bg-dark-200/50 transform translate-x-2 translate-y-2"></div>
              
              {/* Image Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden 
                border-4 border-secondary/20 shadow-custom-lg transition-all duration-500 
                hover:scale-105 hover:border-secondary/40 hover:shadow-glow">
                <img
                  src="/profilepic.png"
                  alt="Dilshan Manohara"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left lg:order-1 animate-slide-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-3 text-textPrimary">
              Dilshan Manohara
            </h1>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-textSecondary mb-6">
              <div className="relative inline-flex items-center">
                <span className="inline-block min-w-[4ch] text-center transition-all duration-500">
                  {displayText}
                </span>
                <span className="ml-2">Developer</span>
              </div>
            </div>
            <p className="text-textSecondary text-lg mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              I'm a second-year Computer Science undergraduate at IIT Sri Lanka, 
              affiliated with the University of Westminster, UK. I specialize in 
              building exceptional digital experiences.
            </p>
            <div className="flex justify-center lg:justify-start space-x-6 mb-8">
              <SocialLinks />
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#contact" className="btn-primary">
                Get In Touch
              </a>
              <a 
                href="/cv.pdf" 
                download="Dilshan_Manohara_CV.pdf"
                className="btn-primary bg-white hover:bg-accent/5"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Updated Social Links component
const SocialLinks = () => (
  <>
    {[
      { href: "https://github.com/dilshanmanohara", icon: <FaGithub /> },
      { href: "https://linkedin.com/in/dilshan-manohara", icon: <FaLinkedin /> },
      { href: "https://www.instagram.com/d.i.l.s.h._boii/", icon: <FaInstagram /> },
      { href: "https://www.facebook.com/dilshan.manohara.961", icon: <FaFacebook /> }
    ].map((social, index) => (
      <a
        key={index}
        href={social.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl text-textSecondary hover:text-accent transform hover:scale-110 
        transition-all duration-300 hover:-translate-y-1"
      >
        {social.icon}
      </a>
    ))}
  </>
)

export default Hero 