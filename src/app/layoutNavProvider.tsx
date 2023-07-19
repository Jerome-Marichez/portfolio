'use client'
import "./globals.scss";
import { usePathname } from 'next/navigation';
import { Navbar } from './components'
import { useState } from "react";

const linksData = [
	{ text: 'about me', href: '/about' },
	{ text: 'projects', href: '#', style: { paddingLeft: '25px' } },
	{ text: 'skills', href: '#', style: { paddingLeft: '50px' } },
	{ text: 'contact me', href: '#', style: { paddingLeft: '25px' } },
	{ text: 'home', href: '#' },
];

export const LayoutNavProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {

	const pathname = usePathname();

	const isItHome = (): true | false => {
		if (pathname.length < 2) return true;
		return false;
	}

	return (
		<div className={isItHome() ? "layout--home" : "layout--other"}>
			<div className="flex">
				<Navbar links={linksData} />
			</div>
			<div className="flex">
				{children}
			</div>
		</div>
	)

};