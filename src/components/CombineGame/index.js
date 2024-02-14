import dynamic from 'next/dynamic';

const CombineGameProvider = dynamic(() => import('./CombineGameProvider'));
const IntroductionDemo = dynamic(() => import('./IntroductionDemo'));

export { CombineGameProvider, IntroductionDemo };
