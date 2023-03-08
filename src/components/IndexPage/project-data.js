import Project1Visual from './Project1Visual';
import Project2Visual from './Project2Visual';
import Project3Visual from './Project3Visual';

export const DATA = [
	{
		id: 0,
		title: '國家查詢器',
		subtitle: 'React Router / React Query',
		summary:
			'這是一個用 REST Countries API打造的國家查詢器，可以瀏覽世界上的國家，也能進一步檢視國家資訊。',
		illustration: Project1Visual,
		workLink: 'https://rest-countries-api-pi-ten.vercel.app',
		readMoreLink: '/',
	},
	{
		id: 1,
		title: '記憶遊戲',
		subtitle: 'React State Management',
		summary:
			'這是一個可以單人或多人遊玩的記憶翻牌遊戲，不但有兩種遊戲難度，還支援記憶數字與記憶圖案兩種模式。',
		illustration: Project2Visual,
		workLink: 'https://memory-game-one-tau.vercel.app',
		readMoreLink: '/',
	},
	{
		id: 2,
		title: '自動化製作簡譜',
		subtitle: 'JavaScript / AppleScript',
		summary:
			'融合樂理知識與程式設計，自動將五線譜轉換成譜面正確、排版整齊的數字簡譜。',
		illustration: Project3Visual,
		workLink: 'https://www.youtube.com/watch?v=s3_nK9yZ3AY',
		readMoreLink: '/',
	},
];
