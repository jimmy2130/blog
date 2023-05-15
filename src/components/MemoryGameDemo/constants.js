import React from 'react';
import { keyframes } from 'styled-components';

export const BACKGROUND_STYLE = {
	cover: 'hsl(205deg 30% 27%)',
	active: 'hsl(37deg 98% 54%)',
	inactive: 'hsl(203deg 28% 79%)',
};

export const ACTIVE = keyframes`
	0% {fill: ${BACKGROUND_STYLE['cover']};}
	10% {fill: ${BACKGROUND_STYLE['active']};}
	100% {fill: ${BACKGROUND_STYLE['active']};}
`;

export const COVER_INACTIVE = keyframes`
	0% {fill: ${BACKGROUND_STYLE['covor']};}
	10% {fill: ${BACKGROUND_STYLE['active']};}
	90% {fill: ${BACKGROUND_STYLE['active']};}
	100% {fill: ${BACKGROUND_STYLE['inactive']};}
`;

export const ACTIVE_INACTIVE = keyframes`
	0% {fill: ${BACKGROUND_STYLE['active']};}
	10% {fill: ${BACKGROUND_STYLE['active']};}
	90% {fill: ${BACKGROUND_STYLE['active']};}
	100% {fill: ${BACKGROUND_STYLE['inactive']};}
`;

export const COVER_COVER = keyframes`
	0% {fill: ${BACKGROUND_STYLE['covor']};}
	10% {fill: ${BACKGROUND_STYLE['active']};}
	90% {fill: ${BACKGROUND_STYLE['active']};}
	100% {fill: ${BACKGROUND_STYLE['cover']};}
`;

export const ACTIVE_COVER = keyframes`
	0% {fill: ${BACKGROUND_STYLE['active']};}
	10% {fill: ${BACKGROUND_STYLE['active']};}
	90% {fill: ${BACKGROUND_STYLE['active']};}
	100% {fill: ${BACKGROUND_STYLE['cover']};}
`;
