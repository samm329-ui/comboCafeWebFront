
"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type AccentColorContextType = {
  accentColor: string;
  setAccentColor: (color: string) => void;
  displayColor: string;
};

const AccentColorContext = createContext<AccentColorContextType | undefined>(undefined);

export const AccentColorProvider = ({ 
    children, 
    initialColor, 
    onSetColor 
}: { 
    children: ReactNode, 
    initialColor: string, 
    onSetColor: (color: string) => void 
}) => {
  const [activeSection, setActiveSection] = useState('home');
  const [displayColor, setDisplayColor] = useState(initialColor);
  
  const setAccentColor = (color: string) => {
    onSetColor(color);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -70% 0px' }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  useEffect(() => {
    if (activeSection === 'home') {
      setDisplayColor(initialColor);
    }
  }, [initialColor, activeSection]);

  const value = { 
    accentColor: initialColor, 
    setAccentColor,
    displayColor
  };

  return (
    <AccentColorContext.Provider value={value}>
      {children}
    </AccentColorContext.Provider>
  );
};

export const useAccentColor = () => {
  const context = useContext(AccentColorContext);
  if (context === undefined) {
    throw new Error('useAccentColor must be used within an AccentColorProvider');
  }
  return context;
};
