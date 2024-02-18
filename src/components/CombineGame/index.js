import dynamic from 'next/dynamic';

const Shape = dynamic(() => import('./Shape'));
const CombineGameProvider = dynamic(() => import('./CombineGameProvider'));
const IntroductionDemo = dynamic(() => import('./IntroductionDemo'));
const AdvancedDemo = dynamic(() => import('./AdvancedDemo'));

export { Shape, CombineGameProvider, IntroductionDemo, AdvancedDemo };
