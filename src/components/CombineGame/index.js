import dynamic from 'next/dynamic';

const CombineGame = dynamic(() => import('./CombineGame'));

export default CombineGame;
