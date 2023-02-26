import NextLink from 'next/link';
import styled from 'styled-components';

const NavigationBar = () => {
	return (
		<Wrapper>
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
		</Wrapper>
	);
};

const Wrapper = styled.nav`
	--max-width: 1152px;
	--padding: 60px;
	position: absolute;
	left: 0;
	right: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 158px;
	background-color: inherit;

	font-size: calc(18 / 16 * 1rem);
	color: var(--gray-900);
	/* border: solid; */

	max-width: calc(var(--max-width) + 2 * var(--padding));
	margin-left: auto;
	margin-right: auto;
	padding-left: var(--padding);
	padding-right: var(--padding);
`;

const Logo = styled.span``;

const Link = styled(NextLink)`
	text-decoration: none;
	color: var(--gray-900);
	padding: 16px;

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
