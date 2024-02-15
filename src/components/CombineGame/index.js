import dynamic from 'next/dynamic';

const CombineGameProvider = dynamic(() => import('./CombineGameProvider'));
const IntroductionDemo = dynamic(() => import('./IntroductionDemo'));
const AdvancedDemo = dynamic(() => import('./AdvancedDemo'));

export { CombineGameProvider, IntroductionDemo, AdvancedDemo };
