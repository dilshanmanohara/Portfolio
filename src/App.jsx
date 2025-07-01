import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import Waves from './components/Waves'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="relative bg-primary min-h-screen text-textPrimary overflow-x-hidden">
      {/* Global Animated Waves Background */}
      <Waves
        lineColor="#3B82F6"
        backgroundColor="rgba(15, 23, 42, 0.85)"
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={120}
        xGap={12}
        yGap={36}
        className="z-0 fixed inset-0 w-full h-full pointer-events-none"
      />
      <CustomCursor />
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main className="w-full overflow-hidden relative z-10">
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