import React from 'react';
import NextLink from 'next/link';
import styled, { keyframes } from 'styled-components';
import Spacer from '../Spacer';
import UnstyledButton from '../UnstyledButton';
import VisuallyHidden from '../VisuallyHidden';
import { Dialog } from '@headlessui/react';
import { X } from 'react-feather';
import { motion, AnimatePresence } from 'framer-motion';

function MobileMenu({ isOpen, toggle }) {
	return (
		<AnimatePresence>
			{isOpen && (
				<Menu open={isOpen} onClose={toggle}>
					<Backdrop
						initial={{ opacity: 0 }}
						animate={{ opacity: 0.4 }}
						exit={{ opacity: 0 }}
						transition={{ type: 'tween', duration: '0.3' }}
					/>
					<PanelWrapper
						initial={{ y: '-100%' }}
						animate={{ y: '0%' }}
						exit={{ y: '-100%' }}
						transition={{ type: 'tween', duration: '0.3' }}
					>
						<Panel>
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
					</PanelWrapper>
				</Menu>
			)}
		</AnimatePresence>
	);
}

const Menu = styled(Dialog)``;

const Backdrop = styled(motion.div)`
	position: absolute;
	inset: 0;
	background: hsl(0deg 0% 0%);
`;

const PanelWrapper = styled(motion.div)`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	padding: 68px 24px 52px 24px;
	background: var(--color-gray-900);
	color: var(--color-gray-100);
`;

const Panel = styled(Dialog.Panel)`
	border: 1px solid var(--color-gray-900);
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

const Test = styled(motion.div)`
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	height: 200px;
	background: red;
`;

export default MobileMenu;
