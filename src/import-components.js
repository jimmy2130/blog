import Em from './components/Em';
import Sidenote from './components/Sidenote';
import { MajorHeading, NormalHeading } from './components/Heading';

export const defaultComponents = {
	Sidenote,
	h2: props => <MajorHeading {...props} />,
	h3: props => <NormalHeading {...props} />,
	em: props => <Em {...props} />,
};

import dynamic from 'next/dynamic';
const Demo = dynamic(() => import('./components/Demo'));
const Demo2 = dynamic(() => import('./components/Demo2'));

export function getSpecialComponents(componentNames) {
	if (!componentNames) {
		return {};
	}
	return {
		Demo: componentNames.includes('Demo') ? Demo : null,
		Demo2: componentNames.includes('Demo2') ? Demo2 : null,
	};
}
