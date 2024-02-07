import dynamic from 'next/dynamic';

const DemoGroup = dynamic(() => import('./DemoGroup'));
const FirstMemoryGameDemo = dynamic(() => import('./FirstDemo'));
const SecondMemoryGameDemo = dynamic(() => import('./SecondDemo'));
const ThirdMemoryGameDemo = dynamic(() => import('./ThirdDemo'));
const FourthMemoryGameDemo = dynamic(() => import('./FourthDemo'));

export {
	DemoGroup,
	FirstMemoryGameDemo,
	SecondMemoryGameDemo,
	ThirdMemoryGameDemo,
	FourthMemoryGameDemo,
};
