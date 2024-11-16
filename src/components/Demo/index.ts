import dynamic from 'next/dynamic';

const Demo = dynamic(() => import('./Demo'));

export default Demo;
