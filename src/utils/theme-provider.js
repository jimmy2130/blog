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
    root.style.setProperty(
      '--color-gray-100',
      newValue === 'light' ? COLORS.light.gray[100] : COLORS.dark.gray[100]
    );
    root.style.setProperty(
      '--color-gray-200',
      newValue === 'light' ? COLORS.light.gray[200] : COLORS.dark.gray[200]
    );
    root.style.setProperty(
      '--color-gray-300',
      newValue === 'light' ? COLORS.light.gray[300] : COLORS.dark.gray[300]
    );
    root.style.setProperty(
      '--color-gray-400',
      newValue === 'light' ? COLORS.light.gray[400] : COLORS.dark.gray[400]
    );
    root.style.setProperty(
      '--color-gray-500',
      newValue === 'light' ? COLORS.light.gray[500] : COLORS.dark.gray[500]
    );
    root.style.setProperty(
      '--color-gray-600',
      newValue === 'light' ? COLORS.light.gray[600] : COLORS.dark.gray[600]
    );
    root.style.setProperty(
      '--color-gray-700',
      newValue === 'light' ? COLORS.light.gray[700] : COLORS.dark.gray[700]
    );
    root.style.setProperty(
      '--color-gray-800',
      newValue === 'light' ? COLORS.light.gray[800] : COLORS.dark.gray[800]
    );
    root.style.setProperty(
      '--color-gray-900',
      newValue === 'light' ? COLORS.light.gray[900] : COLORS.dark.gray[900]
    );
    root.style.setProperty(
      '--color-gray-1000',
      newValue === 'light' ? COLORS.light.gray[1000] : COLORS.dark.gray[1000]
    );
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