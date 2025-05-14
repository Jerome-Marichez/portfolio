
'use client';
import styles from "./TypingTitle.module.scss";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface TypingTtileProps {
	title: string;
	speed: number;
}

/**
 * @param title The title to be displayed 
 * @param speed The speed writing animation in seconds
 * @returns A component which display a title 
 */
export function TypingTitle(props: TypingTtileProps): JSX.Element {

	const [content, setContent] = useState<string>("");

	useEffect(() => {
		const delayEachLetter = props.speed * 1000 / props.title.length;
		const titleSplited = props.title.split("");

		const timeouts: NodeJS.Timeout[] = [];

		titleSplited.forEach((value, index) => {
			const timeout = setTimeout(() => {
				setContent((prevContent) => prevContent + value);
			}, index * delayEachLetter);
			timeouts.push(timeout);
		});

		return () => {
			timeouts.forEach((timeout) => clearTimeout(timeout));
		};

	}, [props.speed, props.title]);

	return (
		<h1 className={styles.typing}>
			{content.split('').map((value, index) => (
				<motion.div
					key={index}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					whileHover={{ scale: 1.2, transition: { duration: 0.10 } }}
					transition={{ duration: 0.5 }}
				>
					{value === ' ' ? '\u00A0' : value}
				</motion.div>
			))}
		</h1>
	);

}
