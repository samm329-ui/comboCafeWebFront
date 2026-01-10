
"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { config } from '@/app/config.tsx';

type AccentColorContextType = {
  accentColor: string;
  setAccentColor: (color: string) => void;
};

const AccentColorContext = createContext<AccentColorContextType | undefined>(undefined);

export const AccentColorProvider = ({ children }: { children: ReactNode }) => {
  const [accentColor, setAccentColor] = useState(config.hero.categories[0].accentColor);
  
  useEffect(() => {
    document.body.style.setProperty('--hero-accent-color', accentColor);
  }, [accentColor]);


  const value = { 
    accentColor, 
    setAccentColor,
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
