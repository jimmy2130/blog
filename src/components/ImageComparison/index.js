import dynamic from 'next/dynamic';

const ImageComparison = dynamic(() => import('./ImageComparison'));

export default ImageComparison;
