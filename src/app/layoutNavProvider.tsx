'use client';
import "./_globals.scss";
import { Navbar, ProfilPic, Header, Footer } from './components';
import useRoutes from "./hooks/useRoutes";

export const LayoutNavProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {

	const [home, links] = useRoutes();

	return (
		<>
			<Header />

			<div className={home ? "layout--home" : "layout--other"}>
				<div className={"flex"} >
					<Navbar links={links} home={home} />
					{home && <ProfilPic />}
				</div>
				{!home &&
					<div className="flex">
						{children}
					</div>
				}
			</div>
			{home &&
				<div className="flex">
					{children}
				</div>
			}
			<Footer />
		</>
	)

};