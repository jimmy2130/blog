import React from 'react';
import NextLink from 'next/link';
import styled, { keyframes } from 'styled-components';
import Spacer from '../Spacer';
import UnstyledButton from '@/components/UnstyledButton';
import VisuallyHidden from '@/components/VisuallyHidden';
import { Dialog } from '@headlessui/react';
import { X } from 'react-feather';

function MobileMenu({ isOpen, toggle }) {
	const [shouldRender, setShouldRender] = React.useState(isOpen);

	React.useEffect(() => {
		if (isOpen) {
			setShouldRender(true);
		}
	}, [isOpen]);

	function handleAnimationEnd() {
		setShouldRender(isOpen);
	}

	return (
		<Menu open={shouldRender} onClose={toggle}>
			<Backdrop />
			<Panel isOpen={isOpen} onAnimationEnd={handleAnimationEnd}>
				<Logo>
					<Link href="/">JimmyJim</Link>
				</Logo>
				<Spacer size={38} />
				<NavigationList>
					<ListItem>
						<Link href="/about">關於我</Link>
					</ListItem>
					<ListItem>
						<Link href="/blog">文章</Link>
					</ListItem>
				</NavigationList>
				<IconWrapper onClick={toggle}>
					<X />
					<VisuallyHidden>Close mobile menu</VisuallyHidden>
				</IconWrapper>
			</Panel>
		</Menu>
	);
}

const Menu = styled(Dialog)``;

const Backdrop = styled.div`
	position: absolute;
	inset: 0;
	background: hsl(0deg 0% 0% / 0.4);
`;

const slideIn = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
`;

const slideOut = keyframes`
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(-100%);
  }
`;

const Panel = styled(Dialog.Panel)`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	padding: 68px 24px 52px 24px;
	background: var(--color-gray-900);
	color: var(--color-gray-100);
	animation: ${props => (props.isOpen ? slideIn : slideOut)} 200ms ease-out both;
`;

const Logo = styled.span`
	font-weight: 700;
	font-size: calc(16 / 16 * 1rem);
`;

const Link = styled(NextLink)`
	--horizontal-padding: 12px;
	padding: 8px var(--horizontal-padding);
	margin-left: calc(var(--horizontal-padding) * -1);
	margin-right: calc(var(--horizontal-padding) * -1);
	text-decoration: none;
	color: var(--gray-900);

	&:hover {
		text-decoration: revert;
		text-underline-offset: 4px;
	}
`;

const NavigationList = styled.ul`
	padding-left: 12px;
	list-style: none;
	display: flex;
	flex-direction: column;
	gap: 20px;
	font-size: calc(16 / 16 * 1rem);
`;

const ListItem = styled.li``;

const IconWrapper = styled(UnstyledButton)`
	position: absolute;
	top: 52px;
	right: 24px;
	--padding: 16px;
	padding: var(--padding);
	margin-left: calc(var(--padding) * -1);
	margin-right: calc(var(--padding) * -1);
`;

export default MobileMenu;
