import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Check localStorage first
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme) {
      return savedTheme;
    }
    
    // Check system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    localStorage.setItem('portfolio-theme', theme);
    
    // Apply theme class to body
    document.body.className = theme === 'dark' ? 'dark-theme' : 'light-theme';
    
    // Update CSS custom properties for Data Citadel theme
    if (theme === 'dark') {
      // Cyberpunk Dark Theme
      document.documentElement.style.setProperty('--bg-primary', '#000815');
      document.documentElement.style.setProperty('--bg-secondary', '#001122');
      document.documentElement.style.setProperty('--text-primary', '#00ffcc');
      document.documentElement.style.setProperty('--text-secondary', '#66ccff');
      document.documentElement.style.setProperty('--border-color', '#0088ff');
      document.documentElement.style.setProperty('--accent-cyan', '#00ffcc');
      document.documentElement.style.setProperty('--accent-blue', '#0088ff');
      document.documentElement.style.setProperty('--accent-purple', '#aa44ff');
      document.documentElement.style.setProperty('--accent-red', '#ff0066');
      document.documentElement.style.setProperty('--glow-cyan', '#00ffcc44');
      document.documentElement.style.setProperty('--glow-blue', '#0088ff44');
      document.documentElement.style.setProperty('--glow-purple', '#aa44ff44');
    } else {
      // Cyberpunk Light Theme (Secure Mode)
      document.documentElement.style.setProperty('--bg-primary', '#f0f8ff');
      document.documentElement.style.setProperty('--bg-secondary', '#e6f3ff');
      document.documentElement.style.setProperty('--text-primary', '#002244');
      document.documentElement.style.setProperty('--text-secondary', '#004488');
      document.documentElement.style.setProperty('--border-color', '#0088ff');
      document.documentElement.style.setProperty('--accent-cyan', '#006688');
      document.documentElement.style.setProperty('--accent-blue', '#0044aa');
      document.documentElement.style.setProperty('--accent-purple', '#6622aa');
      document.documentElement.style.setProperty('--accent-red', '#aa0044');
      document.documentElement.style.setProperty('--glow-cyan', '#00668822');
      document.documentElement.style.setProperty('--glow-blue', '#0044aa22');
      document.documentElement.style.setProperty('--glow-purple', '#6622aa22');
    }
  }, [theme]);

  const toggleTheme = async () => {
    setIsTransitioning(true);
    
    // Add transition effect
    document.documentElement.style.transition = 'all 0.3s ease-in-out';
    
    setTimeout(() => {
      setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
      setIsTransitioning(false);
      
      // Remove transition after change
      setTimeout(() => {
        document.documentElement.style.transition = '';
      }, 300);
    }, 50);
  };

  const value = {
    theme,
    toggleTheme,
    isTransitioning,
    isDark: theme === 'dark',
    isLight: theme === 'light'
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}; 