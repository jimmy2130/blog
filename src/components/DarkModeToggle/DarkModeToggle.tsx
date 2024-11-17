import React from 'react';
import styled from 'styled-components';
import { ThemeContext } from '@/components/ThemeProvider';
import UnstyledButton from '@/components/UnstyledButton';
import Icon from '@/components/Icon';
import VisuallyHidden from '@/components/VisuallyHidden';

const DarkModeToggle = () => {
	const { colorMode, setColorMode } = React.useContext(ThemeContext);
	if (!colorMode) {
		return null;
	}
	return (
		<Button
			onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}
		>
			<Icon
				id={colorMode === 'light' ? 'sun' : 'moon'}
				color="var(--color-gray-1000)"
			/>
			<VisuallyHidden>Dark mode toggle</VisuallyHidden>
		</Button>
	);
};

const Button = styled(UnstyledButton)`
	padding: 8px;
`;

export default DarkModeToggle;
