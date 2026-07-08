import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState(() => {
//     const saved = localStorage.getItem('theme');
//     if (saved) return saved;
//     return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
//   });

export const ThemeProvider = ({ children }) => {
  const [theme] = useState('light');

  // useEffect(() => {
  //   const root = window.document.documentElement;
  //   root.setAttribute('data-theme', theme);
  //   localStorage.setItem('theme', theme);
  // }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'light');
  }, []);

  // const toggleTheme = () => {
  //   setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  // };
  const toggleTheme = () => {};

  // return (
  //   <ThemeContext.Provider value={{ theme, toggleTheme }}>
  //     {children}
  //   </ThemeContext.Provider>
  // );

    return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
