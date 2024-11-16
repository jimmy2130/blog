import dynamic from 'next/dynamic';

const Spacer = dynamic(() => import('./Spacer'));

export default Spacer;
