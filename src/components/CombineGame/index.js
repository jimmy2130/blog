import dynamic from 'next/dynamic';

const CombineGameProvider = dynamic(() => import('./CombineGameProvider'));

export { CombineGameProvider };
