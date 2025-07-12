import React, { useEffect, useRef } from 'react';

const MatrixRain = ({ 
  width = 300, 
  height = 200, 
  speed = 1, 
  density = 0.8,
  color = '#00ff00',
  backgroundColor = 'transparent' 
}) => {
  const canvasRef = useRef(null);
  const animationIdRef = useRef(null);
  const dropsRef = useRef([]);
  
  // Matrix characters - mix of code symbols, numbers, and cyberpunk text
  const matrixChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*(){}[]<>?/\\|~`+-=_';
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const fontSize = 14;
    const columns = Math.floor(width / fontSize);
    
    // Code snippets for matrix effect
    const codeSnippets = [
      'def encrypt():', 'import numpy', 'class AI:', 'return secure',
      'while True:', 'if secure:', 'hash(data)', 'decrypt()', 'neural_net',
      'firewall()', 'scan_threats', 'authenticate', 'blockchain', 'tensor',
      'algorithm', 'protocol', 'cipher', 'quantum', 'matrix', 'vector'
    ];
    
    // Initialize drops array
    dropsRef.current = Array(columns).fill(1);
    
    const draw = () => {
      // Semi-transparent background for trailing effect - Reduced intensity
      ctx.fillStyle = backgroundColor === 'transparent' ? 'rgba(0, 0, 0, 0.15)' : backgroundColor;
      ctx.fillRect(0, 0, width, height);
      
      ctx.fillStyle = color;
      ctx.font = `${fontSize}px 'Courier New', monospace`;
      
      for (let i = 0; i < dropsRef.current.length; i++) {
        // Randomly choose between single characters and code snippets
        let text;
        if (Math.random() > 0.7) {
          text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        } else {
          text = matrixChars[Math.floor(Math.random() * matrixChars.length)];
        }
        
        const x = i * fontSize;
        const y = dropsRef.current[i] * fontSize;
        
        // Text rendering - no glow effect
        ctx.fillText(text, x, y);
        
        // Reset drop randomly or when it goes off screen
        if (y > height && Math.random() > 0.975) {
          dropsRef.current[i] = 0;
        }
        
        dropsRef.current[i] += speed * density;
      }
      
      animationIdRef.current = requestAnimationFrame(draw);
    };
    
    draw();
    
    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [width, height, speed, density, color, backgroundColor]);
  
  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className="absolute inset-0 w-full h-full"
      style={{ 
        background: backgroundColor,
        filter: 'contrast(1.2) brightness(1.1)'
      }}
    />
  );
};

export default MatrixRain; 