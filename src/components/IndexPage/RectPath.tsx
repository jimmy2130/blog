import React from 'react';

function RectPath(
	{ ...delegated }: React.SVGProps<SVGPathElement | SVGRectElement>,
	ref?: React.ForwardedRef<SVGRectElement>,
) {
	const Tag = delegated.d ? 'path' : 'rect';
	return <Tag {...delegated} ref={ref} />;
}

export default React.forwardRef(RectPath);
