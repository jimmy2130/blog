import Head from 'next/head';
import styled from 'styled-components';
import Layout from '../src/components/Layout';
import Paragraph from '../src/components/Paragraph';
import { MajorHeading } from '../src/components/Heading';
import Link from '../src/components/Link';
import { QUERIES } from '../src/constants';

function About() {
	return (
		<Layout>
			<Head>
				<title>About</title>
			</Head>
			<Wrapper>
				<MajorHeading>關於我跟這個部落格</MajorHeading>
				<Paragraph>
					嗨！我的名字是陳鎮宇，台北人，目前就讀台大機械所。我對網頁前端開發擁有濃厚的興趣，希望能用這個部落格，記錄我學會的一切。除此之外，我也在
					<Link href="https://www.tintinpiano.com/score/149172">
						廷廷的鋼琴窩
					</Link>
					上編製琴譜，你可以在上面找到我的作品。
				</Paragraph>
				<Paragraph>
					這個部落格會記錄著我學習的各種事物，我預期會跟寫程式、編琴譜有關，希望你也能從中有所收穫。
				</Paragraph>
			</Wrapper>
		</Layout>
	);
}

const Wrapper = styled.div`
	max-width: 600px;
	margin-left: auto;
	margin-right: auto;
	padding-bottom: 32px;
	/*border: 1px solid;*/
`;

const Title = styled.h1`
	text-align: center;
	font-size: calc(36 / 16 * 1rem);
	font-weight: 700;
	color: var(--color-gray-1000);
	margin-bottom: 32px;
`;

const Text = styled.p`
	font-size: calc(19 / 16 * 1rem);
	color: var(--color-gray-1000);
	margin-bottom: 20px;
`;

export default About;
