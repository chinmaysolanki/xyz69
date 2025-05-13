import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Loading from './components/Loading';
import Blog from './components/Blog';
import Testimonials from './components/Testimonials';

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <OrbitControls enableZoom={false} />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        
        <div className="relative z-0">
          <Canvas className="w-full h-screen">
            <Suspense fallback={<Loading />}>
              <Scene />
            </Suspense>
          </Canvas>
        </div>

        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/testimonials" element={<Testimonials />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App; 