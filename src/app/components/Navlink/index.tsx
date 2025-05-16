import Link from "next/link";
import styles from "./Navlink.module.scss";


interface NavLinkProps {
	href: string;
	marginLeft: number;
	marginRight: string;
	children: React.ReactNode;
}

export default function NavLink({ href, marginLeft, marginRight, children }: NavLinkProps) {
	return (
		<div className={styles.container}>
			<Link href={href} className={styles.link} style={{ marginLeft: `${marginLeft}px` }}>{children}</Link>
			<div className={styles.effect} style={{ right: `${marginRight}px` }}></div>
		</div>
	);
}