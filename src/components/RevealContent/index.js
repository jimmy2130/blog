import dynamic from 'next/dynamic';

const RevealContent = dynamic(() => import('./RevealContent'));

export default RevealContent;
