import dynamic from 'next/dynamic';

const FullBleed = dynamic(() => import('./FullBleed'));

export default FullBleed;
