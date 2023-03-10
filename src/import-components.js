import H2 from './components/H2';
import H3 from './components/H3';
import Em from './components/Em';
import Link from './components/Link';
import Paragraph from './components/Paragraph';
import Sidenote from './components/Sidenote';

export const defaultComponents = {
	Sidenote,
	h2: props => <H2 {...props} />,
	h3: props => <H3 {...props} />,
	em: props => <Em {...props} />,
	a: props => <Link {...props} />,
	p: props => <Paragraph {...props} />,
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
