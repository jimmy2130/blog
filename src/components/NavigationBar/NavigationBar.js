import React from 'react';
import NextLink from 'next/link';
import styled from 'styled-components';
import MWW from '../MaxWidthWrapper';
import VisuallyHidden from '../VisuallyHidden';
import UnstyledButton from '../UnstyledButton';
import MobileMenu from '../MobileMenu';
import { Menu } from 'react-feather';
import { QUERIES } from '../../constants';

const NavigationBar = () => {
	const [isOpen, setIsOpen] = React.useState(false);
	function toggle() {
		setIsOpen(!isOpen);
	}
	return (
		<Wrapper>
			<VisuallyHidden as="div">
				<h1>JimmyJim's Blog</h1>
			</VisuallyHidden>
			<MaxWidthWrapper>
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
				<IconWrapper onClick={toggle}>
					<Menu />
					<VisuallyHidden>Open mobile menu</VisuallyHidden>
				</IconWrapper>
			</MaxWidthWrapper>
			<MobileMenu isOpen={isOpen} toggle={toggle} />
		</Wrapper>
	);
};

const Wrapper = styled.nav`
	height: 158px;
	background: var(--color-primary-50);
	font-size: calc(18 / 16 * 1rem);
	color: var(--gray-900);
`;

const MaxWidthWrapper = styled(MWW)`
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Logo = styled.span`
	font-size: calc(18 / 16 * 1rem);

	@media ${QUERIES.phoneAndDown} {
		font-size: calc(16 / 16 * 1rem);
	}}
`;

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
	gap: clamp(8px, 100vw - 592px, 40px);

	@media ${QUERIES.phoneAndDown} {
		display: none;
	}
`;

const ListItem = styled.li``;

const IconWrapper = styled(UnstyledButton)`
	display: none;

	@media ${QUERIES.phoneAndDown} {
		display: block;
		padding: 16px;
	}
`;

export default NavigationBar;
