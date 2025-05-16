import Link from "next/link";
import styles from "./Navlink.module.scss";


interface NavLinkProps {
	href: string;
	style?: React.CSSProperties;
	children: React.ReactNode;
}

export default function NavLink({ href, style, children }: NavLinkProps) {
	return (
		<div className={styles.container} style={style}>
			<Link href={href} className={styles.link} >{children}</Link>
			<div className={styles.effect}></div>
		</div>
);
}