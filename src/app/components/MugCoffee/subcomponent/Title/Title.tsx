import { Shadows_Into_Light } from "next/font/google";
import { motion } from 'framer-motion';
import styles from "./Title.module.scss";
const shadowsIntoLight = Shadows_Into_Light({ subsets: ["latin"], weight: "400" })

interface TitleProps {
	isHovered: boolean;
	fontSize: number;
	durationAnimation: number;
	titleBeforeHover: string;
	titleAfterHover: string;
}

/**
 * @param isHovered whether the title is to a state hovered or not.
 * @param durationAnimation The animation duration of the title in seconds.
 * @param fontSize The font size of the title.
 * @param titleBeforeHover The name of our title before hovering.
 * @param titleAfterHover The name of our title after hovering.
 * @returns A title component that should be only used inside MugCoffee component. 
 */
export function Title(props: TitleProps): JSX.Element {

	const stylesTitle: string = `${shadowsIntoLight.className} ${styles.title}`;

	const titleVariants = {
		notHover: { rotate: 35, opacity: 0.5 },
		hover: { rotate: 200, opacity: 0.8 }
	};

	return (
		<motion.div
			className={styles.wraptext}
			initial={{ rotate: 35, opacity: 0 }}
			variants={titleVariants}
			animate={props.isHovered ? 'hover' : 'notHover'}
			transition={{
				type: "keyframes",
				duration: props.durationAnimation,
			}}
		>

			<p style={{ fontSize: `${props.fontSize}px` }}
				className={stylesTitle}>{props.isHovered ? props.titleAfterHover : props.titleBeforeHover}
			</p>
		</motion.div>
	);

}