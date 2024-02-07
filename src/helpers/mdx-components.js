import H2 from '@/components/H2';
import H3 from '@/components/H3';
import Em from '@/components/Em';
import Link from '@/components/Link';
import Paragraph from '@/components/Paragraph';
import OrderedList from '@/components/OrderedList';
import UnorderedList from '@/components/UnorderedList';
import ListItem from '@/components/ListItem';
import Code from '@/components/Code';
import CodeBlock from '@/components/CodeBlock';
import BasicImage from '@/components/Image';
import Sidenote from '@/components/Sidenote';
import DescriptionList from '@/components/DescriptionList';

import Demo from '@/components/Demo';
import Demo2 from '@/components/Demo2';
import {
	FirstRestApiDemo,
	SecondRestApiDemo,
	ThirdRestApiDemo,
	FourthRestApiDemo,
} from '@/components/RestApiDemo';

import {
	DemoGroup,
	FirstMemoryGameDemo,
	SecondMemoryGameDemo,
	ThirdMemoryGameDemo,
	FourthMemoryGameDemo,
} from '@/components/MemoryGameDemo';

import CodeComparison from '@/components/CodeComparison';
import ImageComparison from '@/components/ImageComparison';
import InfiniteLoopVideo from '@/components/InfiniteLoopVideo';
import RevealContent from '@/components/RevealContent';
import FullBleed from '@/components/FullBleed';

const COMPONENT_MAP = {
	h2: H2,
	h3: H3,
	em: Em,
	a: Link,
	p: Paragraph,
	ol: OrderedList,
	ul: UnorderedList,
	li: ListItem,
	code: Code,
	pre: CodeBlock,
	img: BasicImage,
	Sidenote,
	DescriptionList,

	Demo,
	Demo2,
	FirstRestApiDemo,
	SecondRestApiDemo,
	ThirdRestApiDemo,
	FourthRestApiDemo,
	DemoGroup,
	FirstMemoryGameDemo,
	SecondMemoryGameDemo,
	ThirdMemoryGameDemo,
	FourthMemoryGameDemo,
	CodeComparison,
	ImageComparison,
	InfiniteLoopVideo,
	RevealContent,
	FullBleed,
};

export default COMPONENT_MAP;
