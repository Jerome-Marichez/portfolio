'use client';
import { Navbar, ProfilPic, Header, Footer } from './components';
import { linksData } from './data/routes';
import { usePathname } from 'next/navigation';

export const LayoutNavProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {

	const pathname: string = usePathname();
	const home = pathname === linksData[linksData.length - 1].href ? true : false;

	return (
		<>
			<Header />
			<div className={home ? "layout--home" : "layout--other"}>
				<div className={"flex"} >
					<Navbar links={linksData} home={home} pathname={pathname} />
					{home && <ProfilPic />}
				</div>
				{!home && <div className="flex">{children}</div>}
			</div>
			{home && <div className="flex">{children}</div>}
			<Footer />
		</>
	)

};