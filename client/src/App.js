import React, { Suspense, useRef, useState, lazy } from 'react';
import { Canvas } from '@react-three/fiber';
// Sphere, Torus, Box imports removed - only used in removed functions
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './contexts/ThemeContext';
import SEOHead from './components/SEOHead';
import ThemeSwitcher from './components/ThemeSwitcher';
import AIChatbot from './components/AIChatbot';
import LazyLoader, { PerformanceMonitor } from './components/LazyLoader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LoadingScreen from './components/LoadingScreen';
// import InteractiveParticles from './components/InteractiveParticles';
import DataCitadelScene from './components/DataCitadelScene';
import ServerStatus from './components/ServerStatus';
import './styles/DataCitadelTheme.css';

// Lazy load components for better performance
const About = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));
const Blog = lazy(() => import('./components/Blog'));


// FloatingShape function removed - not used in current implementation

// Unused functions removed - DistantGeometry and DistantParticles were only used in Background3DScene

// Background3DScene removed - using DataCitadelScene instead

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <HelmetProvider>
      <ThemeProvider>
        <PerformanceMonitor>
          <Router>
            <SEOHead />
            <div className="relative z-0 bg-primary">
              {/* Theme Switcher */}
              <ThemeSwitcher />
              
              {/* AI Chatbot */}
              <AIChatbot />

              {/* Server Status */}
              <ServerStatus />

              {/* Background Stars */}
              <div className="star-field">
                <div className="star star-small"></div>
                <div className="star star-medium"></div>
                <div className="star star-small"></div>
                <div className="star star-large"></div>
                <div className="star star-small"></div>
                <div className="star star-medium"></div>
                <div className="star star-small"></div>
                <div className="star star-small"></div>
                <div className="star star-medium"></div>
                <div className="star star-small"></div>
                <div className="star star-small"></div>
                <div className="star star-large"></div>
                <div className="star star-small"></div>
                <div className="star star-medium"></div>
                <div className="star star-small"></div>
                <div className="star star-small"></div>
                <div className="star star-medium"></div>
                <div className="star star-small"></div>
                <div className="star star-small"></div>
                <div className="star star-large"></div>
                <div className="star star-small"></div>
                <div className="star star-medium"></div>
                <div className="star star-small"></div>
                <div className="star star-small"></div>
                <div className="star star-medium"></div>
                <div className="star star-small"></div>
                <div className="star star-small"></div>
                <div className="star star-large"></div>
                <div className="star star-small"></div>
                <div className="star star-medium"></div>
              </div>

              {/* Interactive Particles - Disabled */}
              {/* <InteractiveParticles /> */}
              
              {/* Data Citadel 3D Scene */}
              <div className="fixed inset-0 w-full h-full" style={{ zIndex: -1 }}>
                <Canvas 
                  className="w-full h-full" 
                  camera={{ position: [0, 5, 15], fov: 60 }}
                  gl={{ antialias: true, alpha: true }}
                >
                  <Suspense fallback={null}>
                    <DataCitadelScene />
                  </Suspense>
                </Canvas>
              </div>
              
              <div>
                <Navbar />
                <div id="home">
                  <Hero />
                </div>
              </div>

              <div className="relative z-10">
                <div id="about">
                  <LazyLoader animationType="slideUp" delay={200}>
                    <Suspense fallback={<div className="flex items-center justify-center h-96"><div className="text-secondary-enhanced">Loading About...</div></div>}>
                      <About />
                    </Suspense>
                  </LazyLoader>
                </div>
                
                <div id="projects">
                  <LazyLoader animationType="slideRight" delay={300}>
                    <Suspense fallback={<div className="flex items-center justify-center h-96"><div className="text-secondary-enhanced">Loading Projects...</div></div>}>
                      <Projects />
                    </Suspense>
                  </LazyLoader>
                </div>
                
                <div id="blog">
                  <LazyLoader animationType="slideLeft" delay={400}>
                    <Suspense fallback={<div className="flex items-center justify-center h-96"><div className="text-secondary-enhanced">Loading Blog...</div></div>}>
                      <Blog />
                    </Suspense>
                  </LazyLoader>
                </div>
                
                <div id="contact">
                  <LazyLoader animationType="scale" delay={500}>
                    <Suspense fallback={<div className="flex items-center justify-center h-96"><div className="text-secondary-enhanced">Loading Contact...</div></div>}>
                      <Contact />
                    </Suspense>
                  </LazyLoader>
                </div>
              </div>
            </div>
          </Router>
        </PerformanceMonitor>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App; 