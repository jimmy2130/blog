import React from 'react';
import { COLORS } from '@/constants';

type ColorMode = 'light' | 'dark';

type ContextProps = {
	colorMode: string;
	setColorMode: (colorMode: ColorMode) => void;
};

export const ThemeContext = React.createContext<ContextProps>({
	colorMode: '',
	setColorMode: () => {},
});

function ThemeProvider({ children }: { children: React.ReactNode }) {
	const [colorMode, rawSetColorMode] = React.useState('');

	React.useEffect(() => {
		const root = window.document.documentElement;
		const initialColorValue = root.style.getPropertyValue(
			'--initial-color-mode',
		);
		rawSetColorMode(initialColorValue);
	}, []);

	function setColorMode(newValue: ColorMode) {
		const root = window.document.documentElement;
		// 1. Update React color-mode state
		rawSetColorMode(newValue);
		// 2. Update localStorage
		localStorage.setItem('color-mode', newValue);
		// 3. Update each color
		const colorEntries = Object.entries(COLORS[newValue]['color']);
		const syntaxEntries = Object.entries(COLORS[newValue]['syntax']);

		for (let i = 0; i < colorEntries.length; i++) {
			const [key, value] = colorEntries[i];
			root.style.setProperty(`--color-${key}`, value);
		}

		for (let i = 0; i < syntaxEntries.length; i++) {
			const [key, value] = syntaxEntries[i];
			root.style.setProperty(`--syntax-${key}`, value);
		}
	}

	return (
		<ThemeContext.Provider value={{ colorMode, setColorMode }}>
			{children}
		</ThemeContext.Provider>
	);
}

export default ThemeProvider;
