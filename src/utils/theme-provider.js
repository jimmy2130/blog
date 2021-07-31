import React from 'react'
import { COLORS } from '../constants'

const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [colorMode, rawSetColorMode] = React.useState(undefined);

  React.useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      '--initial-color-mode'
    );
    rawSetColorMode(initialColorValue);
  }, []);

  const setColorMode = (newValue) => {
    const root = window.document.documentElement;
    // 1. Update React color-mode state
    rawSetColorMode(newValue);
    // 2. Update localStorage
    localStorage.setItem('color-mode', newValue);
    // 3. Update each color
    const colorKeys = Object.keys(COLORS[newValue]['color'])
    const syntaxKeys = Object.keys(COLORS[newValue]['syntax'])
    for(let i = 0; i < colorKeys.length; i++) {
      root.style.setProperty(
        `--color-${colorKeys[i]}`, COLORS[newValue]['color'][colorKeys[i]]
      )
    }
    for(let i = 0; i < syntaxKeys.length; i++) {
      root.style.setProperty(
        `--syntax-${syntaxKeys[i]}`, COLORS[newValue]['syntax'][syntaxKeys[i]]
      )
    }
  }
  return (
    <ThemeContext.Provider value={{ colorMode, setColorMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = React.useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}