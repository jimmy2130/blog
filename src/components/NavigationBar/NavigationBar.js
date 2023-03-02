import NextLink from 'next/link';
import styled from 'styled-components';
import MaxWidthWrapper from '../MaxWidthWrapper';
import VisuallyHidden from '../VisuallyHidden';

const NavigationBar = () => {
	return (
		<Wrapper>
			<VisuallyHidden as={'div'}>
				<h1>JimmyJim's Blog</h1>
			</VisuallyHidden>
			<NavMaxWidthWrapper>
				<Logo>
					<Link href="/">JimmyJim</Link>
				</Logo>
				<NavigationList>
					<ListItem>
						<Link href="/about">關於我</Link>
					</ListItem>
					<ListItem>
						<Link href="/article">文章</Link>
					</ListItem>
				</NavigationList>
			</NavMaxWidthWrapper>
		</Wrapper>
	);
};

const Wrapper = styled.nav`
	height: 158px;
	background: var(--color-primary-50);
	font-size: calc(18 / 16 * 1rem);
	color: var(--gray-900);
`;

const NavMaxWidthWrapper = styled(MaxWidthWrapper)`
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Logo = styled.span``;

const Link = styled(NextLink)`
	padding: 8px 12px;
	text-decoration: none;
	color: var(--gray-900);

	&:hover {
		text-decoration: revert;
		text-underline-offset: 4px;
	}
`;

const NavigationList = styled.ul`
	padding: 0;
	list-style: none;
	display: flex;
	gap: 40px;
`;

const ListItem = styled.li``;

export default NavigationBar;
