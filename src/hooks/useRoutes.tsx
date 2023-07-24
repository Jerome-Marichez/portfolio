import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { LinksData } from '@/app/sharedTypes';

/**
 * Custom hook to manage routes and determine if the current page is the home page.
 * @returns A tuple containing a boolean 'home' indicating whether it's the home page,
 * and 'links', an array of link objects.
 */
export default function useRoutes() {

	const pathname: string = usePathname();
	const linksData: LinksData = [
		{ text: 'about me', href: '/about' },
		{ text: 'projects', href: '#', style: { paddingLeft: '25px' } },
		{ text: 'skills', href: '#', style: { paddingLeft: '50px' } },
		{ text: 'contact me', href: '#', style: { paddingLeft: '25px' } },
		{ text: 'home', href: '/' },
	];
	const [links] = useState(linksData);
	const [home, setHome] = useState<boolean>(false);


	useEffect(() => {
		if (pathname === linksData[linksData.length - 1].href) {
			setHome(true);
		} else {
			setHome(false);
		}
	}, [pathname])


	return [home, links] as const;
}