import { useRouter } from 'next/router'
import styled from 'styled-components'
import UnstyledButton from '../UnstyledButton'
import { COLORS, QUERIES } from '../../constants';

const NavLink = ({children, path}) => {
  const router = useRouter()
  return (
    <NavLinkWrapper
      onClick={() => router.push(path)}
      style={{
        '--color': router.asPath === path ? COLORS.primary : COLORS.gray[1000],
        '--textDecoration': router.asPath === path ? 'underline' : 'none',
        '--textUnderlineOffset': router.asPath === path ? '6px' : '0',
      }}
    >
      {children}
    </NavLinkWrapper>
  )
}

const NavLinkWrapper = styled(UnstyledButton)`
  color: var(--color);
  text-decoration: var(--textDecoration);
  text-underline-offset: var(--textUnderlineOffset);
  cursor: pointer;
  padding: 8px;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 6px;
    color: ${COLORS.primary};
  }
`;

export default NavLink