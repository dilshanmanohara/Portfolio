import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="bg-primary min-h-screen text-textPrimary">
      <CustomCursor />
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main className="w-full overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App 