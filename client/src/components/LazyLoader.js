import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const LazyLoader = ({ 
  children, 
  fallback = null, 
  threshold = 0.1, 
  rootMargin = '50px',
  className = '',
  animationType = 'fade',
  delay = 0 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(element);
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin]);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setIsLoaded(true);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isInView, delay]);

  const getAnimationVariants = () => {
    switch (animationType) {
      case 'slideUp':
        return {
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 }
        };
      case 'slideDown':
        return {
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 }
        };
      case 'slideLeft':
        return {
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 }
        };
      case 'slideRight':
        return {
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 }
        };
      case 'scale':
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1 }
        };
      case 'rotate':
        return {
          hidden: { opacity: 0, rotate: -180 },
          visible: { opacity: 1, rotate: 0 }
        };
      default: // fade
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        };
    }
  };

  const DefaultFallback = () => (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="flex flex-col items-center space-y-4">
        {/* Skeleton loader */}
        <div className="animate-pulse">
          <div className="bg-gray-300 bg-opacity-20 rounded-lg h-32 w-64"></div>
        </div>
        
        {/* Loading spinner */}
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-[#a855f7] rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-[#00d4ff] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-[#ff4757] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
        
        <p className="text-secondary-enhanced text-sm">Loading...</p>
      </div>
    </div>
  );

  const variants = getAnimationVariants();

  return (
    <div ref={elementRef} className={className}>
      {isLoaded ? (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{
            duration: 0.6,
            ease: "easeOut"
          }}
        >
          {children}
        </motion.div>
      ) : (
        isInView && (fallback || <DefaultFallback />)
      )}
    </div>
  );
};

// Image lazy loading component
export const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  fallbackSrc = null,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const element = imgRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setError(true);
    if (fallbackSrc) {
      setIsLoaded(true);
    }
  };

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      {!isLoaded && isInView && (
        <div className="absolute inset-0 bg-gray-300 bg-opacity-20 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-[#a855f7] border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      {isInView && (
        <motion.img
          src={error && fallbackSrc ? fallbackSrc : src}
          alt={alt}
          className={`${className} transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={handleLoad}
          onError={handleError}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ 
            opacity: isLoaded ? 1 : 0, 
            scale: isLoaded ? 1 : 1.1 
          }}
          transition={{ duration: 0.6 }}
          {...props}
        />
      )}
      
      {error && !fallbackSrc && (
        <div className="absolute inset-0 bg-gray-300 bg-opacity-20 flex items-center justify-center">
          <div className="text-center">
            <div className="text-2xl mb-2">🖼️</div>
            <p className="text-sm text-gray-500">Image not available</p>
          </div>
        </div>
      )}
    </div>
  );
};

// Performance monitor component
export const PerformanceMonitor = ({ children }) => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      // Web Vitals monitoring
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'measure') {
            console.log(`Performance: ${entry.name} took ${entry.duration}ms`);
          }
          
          if (entry.entryType === 'largest-contentful-paint') {
            console.log(`LCP: ${entry.startTime}ms`);
          }
          
          if (entry.entryType === 'first-input') {
            console.log(`FID: ${entry.processingStart - entry.startTime}ms`);
          }
        }
      });

      observer.observe({ entryTypes: ['measure', 'largest-contentful-paint', 'first-input'] });

      return () => observer.disconnect();
    }
  }, []);

  return children;
};

export default LazyLoader; 