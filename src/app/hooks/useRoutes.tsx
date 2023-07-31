import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { linksData } from '@/app/data/routes';

/**
 * Custom hook to manage routes and determine if the current page is the home page.
 * @returns A tuple containing a boolean 'home' indicating whether it's the home page,
 * and 'links', an array of link objects.
 */
export default function useRoutes() {

	const pathname: string = usePathname();
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