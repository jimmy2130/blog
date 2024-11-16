import React from 'react';

interface Props extends React.SVGProps<SVGPathElement | SVGRectElement> {}

function RectPath(
	{ ...delegated }: Props,
	ref?: React.ForwardedRef<SVGRectElement>,
) {
	const Tag = delegated.d ? 'path' : 'rect';
	return <Tag {...delegated} ref={ref} />;
}

export default React.forwardRef(RectPath);
