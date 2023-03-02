import NextLink from 'next/link';
import styled from 'styled-components';
import MWW from '../MaxWidthWrapper';
import Spacer from '../Spacer';
import Wave from './Wave';
import { QUERIES } from '../../constants';

const Footer = () => {
	return (
		<Wrapper>
			<Background>
				<WaveWrapper>
					<Wave />
				</WaveWrapper>
				<MaxWidthWrapper>
					<Logo>
						<Link href="/">JimmyJim</Link>
					</Logo>
					<Spacer size={38} />
					<NavigationList>
						<ListItem>
							<Link href="/about">關於我</Link>
						</ListItem>
						<ListItem>
							<Link href="/article">文章</Link>
						</ListItem>
					</NavigationList>
					<Spacer size={80} />
					<Copyright>© 2021 Jimmy Chen. All Rights Reserved.</Copyright>
				</MaxWidthWrapper>
			</Background>
		</Wrapper>
	);
};

const Wrapper = styled.footer`
	isolation: isolate;
`;

const Background = styled.div`
	position: relative;
	height: 420px;
	background: var(--color-gray-900);
	padding-top: 100px;
	padding-bottom: 100px;
	color: var(--color-gray-100);
`;

const MaxWidthWrapper = styled(MWW)`
	@media ${QUERIES.phoneAndDown} {
		--padding: 32px;
	}
`;

const WaveWrapper = styled.div`
	/* to hide under footer */
	z-index: -1;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	overflow: hidden;
	transform: translateY(calc(-100% + 5px));
`;

const Logo = styled.span`
	font-weight: 700;
	font-size: calc(16 / 16 * 1rem);
`;

const Link = styled(NextLink)`
	--horizontal-padding: 12px;
	padding: 8px var(--horizontal-padding);
	text-decoration: none;
	color: var(--gray-900);
	margin-left: calc(var(--horizontal-padding) * -1);

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

const Copyright = styled.div`
	font-size: calc(14 / 16 * 1rem);
`;

export default Footer;
