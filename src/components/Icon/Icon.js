import React from 'react';
import styled from 'styled-components'
import { Sun, Moon, PlayCircle, PauseCircle } from 'react-feather';

const icons = {
  sun: Sun,
  moon: Moon,
  play: PlayCircle,
  pause: PauseCircle,
};

const Icon = ({ id, color, size, strokeWidth, ...delegated }) => {
  const Component = icons[id];

  if (!Component) {
    throw new Error(`No icon found for ID: ${id}`);
  }

  return (
    <Wrapper strokeWidth={strokeWidth} {...delegated}>
      <Component color={color} size={size} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  & > svg {
    display: block;
    stroke-width: ${(p) => p.strokeWidth}px;
  }
`;

export default Icon;
