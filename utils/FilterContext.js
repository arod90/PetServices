'use client';
import React, { useState, createContext } from 'react';

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [city, setCity] = useState('');

  return (
    <FilterContext.Provider value={{ city, setCity }}>
      {children}
    </FilterContext.Provider>
  );
};
