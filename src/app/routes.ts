export interface LinkData {
	text: string;
	href: string;
	style?: React.CSSProperties;
}

export type LinksData = Array<LinkData>


export const linksData: LinksData = [
	{ text: 'about me', href: '/about' },
	{ text: 'projects', href: '/projects', style: { paddingLeft: '25px' } },
	{ text: 'skills', href: '/skills', style: { paddingLeft: '50px' } },
	{ text: 'contact me', href: '/contact', style: { paddingLeft: '25px' } },
	{ text: 'home', href: '/' },
];

