import dynamic from 'next/dynamic';

const FirstRestApiDemo = dynamic(() => import('./FirstDemo'));
const SecondRestApiDemo = dynamic(() => import('./SecondDemo'));
const ThirdRestApiDemo = dynamic(() => import('./ThirdDemo'));
const FourthRestApiDemo = dynamic(() => import('./FourthDemo'));

export {
	FirstRestApiDemo,
	SecondRestApiDemo,
	ThirdRestApiDemo,
	FourthRestApiDemo,
};
