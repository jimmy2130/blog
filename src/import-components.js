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
import DescriptionList from './components/DescriptionList';

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
	DescriptionList,
};

import dynamic from 'next/dynamic';
const Demo = dynamic(() => import('./components/Demo'));
const Demo2 = dynamic(() => import('./components/Demo2'));
const FirstRestApiDemo = dynamic(() =>
	import('./components/RestApiDemo/FirstDemo'),
);
const SecondRestApiDemo = dynamic(() =>
	import('./components/RestApiDemo/SecondDemo'),
);
const ThirdRestApiDemo = dynamic(() =>
	import('./components/RestApiDemo/ThirdDemo'),
);
const FourthRestApiDemo = dynamic(() =>
	import('./components/RestApiDemo/FourthDemo'),
);
const FirstMemoryGameDemo = dynamic(() =>
	import('./components/MemoryGameDemo/FirstDemo'),
);
const SecondMemoryGameDemo = dynamic(() =>
	import('./components/MemoryGameDemo/SecondDemo'),
);
const ThirdMemoryGameDemo = dynamic(() =>
	import('./components/MemoryGameDemo/ThirdDemo'),
);
const FourthMemoryGameDemo = dynamic(() =>
	import('./components/MemoryGameDemo/FourthDemo'),
);

export function getSpecialComponents(componentNames) {
	if (!componentNames) {
		return {};
	}
	return {
		Demo: componentNames.includes('Demo') ? Demo : null,
		Demo2: componentNames.includes('Demo2') ? Demo2 : null,
		FirstRestApiDemo: componentNames.includes('FirstRestApiDemo')
			? FirstRestApiDemo
			: null,
		SecondRestApiDemo: componentNames.includes('SecondRestApiDemo')
			? SecondRestApiDemo
			: null,
		ThirdRestApiDemo: componentNames.includes('ThirdRestApiDemo')
			? ThirdRestApiDemo
			: null,
		FourthRestApiDemo: componentNames.includes('FourthRestApiDemo')
			? FourthRestApiDemo
			: null,
		FirstMemoryGameDemo: componentNames.includes('FirstMemoryGameDemo')
			? FirstMemoryGameDemo
			: null,
		SecondMemoryGameDemo: componentNames.includes('SecondMemoryGameDemo')
			? SecondMemoryGameDemo
			: null,
		ThirdMemoryGameDemo: componentNames.includes('ThirdMemoryGameDemo')
			? ThirdMemoryGameDemo
			: null,
		FourthMemoryGameDemo: componentNames.includes('FourthMemoryGameDemo')
			? FourthMemoryGameDemo
			: null,
	};
}
