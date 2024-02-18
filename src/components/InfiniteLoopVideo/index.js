import dynamic from 'next/dynamic';

const InfiniteLoopVideo = dynamic(() => import('./InfiniteLoopVideo'));

export default InfiniteLoopVideo;
