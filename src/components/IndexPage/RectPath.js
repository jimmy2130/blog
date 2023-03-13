import React from 'react';

function RectPath({ ...delegated }, ref) {
	const Tag = delegated.d ? 'path' : 'rect';
	return <Tag {...delegated} ref={ref} />;
}

export default React.forwardRef(RectPath);
