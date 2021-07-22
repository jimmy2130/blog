import styled from 'styled-components'
import { useTheme } from '../../utils/theme-provider'

const DarkModeToggle = () => {
  const { colorMode, setColorMode } = useTheme()
  if (!colorMode) {
    return null;
  }
  return (
    <Wrapper>
      <input
        type="checkbox"
        checked={colorMode === 'dark'}
        onChange={(ev) => {
          setColorMode(ev.target.checked ? 'dark' : 'light');
        }}
      />{' '}
      Dark
    </Wrapper>
  );
};

const Wrapper = styled.label`
  color: var(--color-gray-1000);
`

export default DarkModeToggle;
