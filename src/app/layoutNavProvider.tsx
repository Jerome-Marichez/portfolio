'use client'
import "./_globals.scss";
import { Navbar } from './components'
import useRoutes from "../hooks/useRoutes";

export const LayoutNavProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
	const [home, links] = useRoutes();

	return (
		<div className={home ? "layout--home" : "layout--other"}>
			<div className="flex">
				<Navbar links={links} home={home} />
			</div>
			<div className="flex">
				{children}
			</div>
		</div>
	)

};