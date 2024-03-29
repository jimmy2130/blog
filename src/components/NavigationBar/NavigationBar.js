import React from 'react';
import NextLink from 'next/link';
import styled from 'styled-components';
import VisuallyHidden from '@/components/VisuallyHidden';
import UnstyledButton from '@/components/UnstyledButton';
import ShiftBy from '@/components/ShiftBy';
import MobileMenu from '@/components/MobileMenu';
import { Menu } from 'react-feather';
import { QUERIES } from '@/constants';

const NavigationBar = ({ index }) => {
	const [isOpen, setIsOpen] = React.useState(false);
	function toggle() {
		setIsOpen(!isOpen);
	}
	return (
		<Wrapper>
			{index && (
				<VisuallyHidden as="div">
					<h1>JimmyJim的部落格</h1>
				</VisuallyHidden>
			)}
			<Content>
				<Logo>
					<Link
						href="/"
						style={{ display: 'inline-block', transform: 'translateX(4px)' }}
					>
						JimmyJim
					</Link>
				</Logo>
				<NavigationList>
					<ListItem>
						<Link href="/about">關於我</Link>
					</ListItem>
					<ListItem>
						<Link href="/blog">文章</Link>
					</ListItem>
				</NavigationList>
				<IconWrapper onClick={toggle}>
					<Menu />
					<VisuallyHidden>Open mobile menu</VisuallyHidden>
				</IconWrapper>
			</Content>
			<MobileMenu isOpen={isOpen} toggle={toggle} />
		</Wrapper>
	);
};

const Wrapper = styled.nav`
	height: 158px;
	background: var(--color-primary-50);
	font-size: calc(19 / 16 * 1rem);
	color: var(--gray-900);
`;

const Content = styled.div`
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Logo = styled.span`
	font-size: calc(19 / 16 * 1rem);

	@media ${QUERIES.phoneAndDown} {
		font-size: calc(16 / 16 * 1rem);
	}}
`;

const Link = styled(NextLink)`
	--horizontal-padding: 12px;
	padding: 8px var(--horizontal-padding);
	text-decoration: none;
	color: var(--gray-900);
	margin-left: calc(var(--horizontal-padding) * -1);
	margin-right: calc(var(--horizontal-padding) * -1);

	&:hover {
		text-decoration: underline;
		text-underline-offset: 4px;
	}
`;

const NavigationList = styled.ul`
	padding: 0;
	list-style: none;
	display: flex;
	gap: 40px;

	@media ${QUERIES.phoneAndDown} {
		display: none;
	}
`;

const ListItem = styled.li``;

const IconWrapper = styled(UnstyledButton)`
	display: none;

	@media ${QUERIES.phoneAndDown} {
		--padding: 16px;
		display: block;
		padding: var(--padding);
		margin-right: calc(var(--padding) * -1);
	}
`;

export default NavigationBar;
