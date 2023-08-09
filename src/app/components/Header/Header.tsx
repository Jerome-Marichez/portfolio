
'use client';
import styles from "./Header.module.scss"
import { CodeBlock } from "../CodeBlock/CodeBlock";
import { codeSnipetsHeader, codeSnipetsHeader2 } from "../../data/code";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { usePathname } from 'next/navigation';


export function Header(): JSX.Element {

	const pathname: string = usePathname();
	/*Using useRef and ++ to regenerate <Header/> and play the animation each time the pathname changes. **/
	const ref = useRef<number>(0);
	useEffect(() => {
		ref.current++;
	}, [pathname])


	let codeSnipetstoShow = codeSnipetsHeader2;
	if (pathname.length < 2) { codeSnipetstoShow = codeSnipetsHeader; }

	return (
		<header className={styles.header}>
			<motion.div key={ref.current} className={styles.group} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
				{codeSnipetstoShow.map((value, index): JSX.Element => (
					<motion.div key={index}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 - (index * 0.2) }}
						transition={{ duration: index + 1 }}
					>
						<CodeBlock language="typescript" text={value.text} fontSize={value.fontSize} margin={value.margin} />
					</motion.div>
				))}
			</motion.div>
		</header>
	);


}