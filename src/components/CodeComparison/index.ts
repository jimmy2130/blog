import dynamic from 'next/dynamic';

const CodeComparison = dynamic(() => import('./CodeComparison'));

export default CodeComparison;
