import H2 from './components/H2';
import H3 from './components/H3';
import Em from './components/Em';
import Link from './components/Link';
import Paragraph from './components/Paragraph';
import OrderedList from './components/OrderedList';
import UnorderedList from './components/UnorderedList';
import ListItem from './components/ListItem';
import Code from './components/Code';
import CodeBlock from './components/CodeBlock';
import BasicImage from './components/Image';
import Sidenote from './components/Sidenote';

export const defaultComponents = {
	h2: props => <H2 {...props} />,
	h3: props => <H3 {...props} />,
	em: props => <Em {...props} />,
	a: props => <Link {...props} />,
	p: props => <Paragraph {...props} />,
	ol: props => <OrderedList {...props} />,
	ul: props => <UnorderedList {...props} />,
	li: props => <ListItem {...props} />,
	code: props => <Code {...props} />,
	pre: props => <CodeBlock {...props} />,
	img: props => <BasicImage {...props} />,
	Sidenote,
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
