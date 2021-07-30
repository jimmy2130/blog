import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../../utils/theme-provider'
import UnstyledButton from '../UnstyledButton'
import Icon from '../Icon'
import VisuallyHidden from '../VisuallyHidden'

const DarkModeToggle = () => {
  const { colorMode, setColorMode } = useTheme()
  if (!colorMode) {
    return null;
  }
  return (
    <Button onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}>
      <Icon id={colorMode === 'light' ? 'sun' : 'moon'} color="var(--color-gray-1000)"/>
      <VisuallyHidden>
        Dark mode toggle
      </VisuallyHidden>
    </Button>
  );
};

const Button = styled(UnstyledButton)`
  padding: 8px;
`

export default DarkModeToggle;
