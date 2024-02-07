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
import InfiniteLoopVideo from './components/InfiniteLoopVideo';

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
	InfiniteLoopVideo,
};

import dynamic from 'next/dynamic';

const DEMO = {
	Demo: dynamic(() => import('./components/Demo')),
	Demo2: dynamic(() => import('./components/Demo2')),
	FirstRestApiDemo: dynamic(() => import('./components/RestApiDemo/FirstDemo')),
	SecondRestApiDemo: dynamic(() =>
		import('./components/RestApiDemo/SecondDemo'),
	),
	ThirdRestApiDemo: dynamic(() => import('./components/RestApiDemo/ThirdDemo')),
	FourthRestApiDemo: dynamic(() =>
		import('./components/RestApiDemo/FourthDemo'),
	),
	DemoGroup: dynamic(() => import('./components/MemoryGameDemo/DemoGroup')),
	FirstMemoryGameDemo: dynamic(() =>
		import('./components/MemoryGameDemo/FirstDemo'),
	),
	SecondMemoryGameDemo: dynamic(() =>
		import('./components/MemoryGameDemo/SecondDemo'),
	),
	ThirdMemoryGameDemo: dynamic(() =>
		import('./components/MemoryGameDemo/ThirdDemo'),
	),
	FourthMemoryGameDemo: dynamic(() =>
		import('./components/MemoryGameDemo/FourthDemo'),
	),
	CodeComparison: dynamic(() => import('./components/CodeComparison')),
	ImageComparison: dynamic(() => import('./components/ImageComparison')),
	RevealContent: dynamic(() => import('./components/RevealContent')),
};

export function getSpecialComponents(componentNames) {
	if (!componentNames) {
		return {};
	}
	const components = {};
	componentNames.forEach(c => {
		components[c] = DEMO[c];
	});
	return components;
}
