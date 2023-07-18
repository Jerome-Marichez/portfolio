'use client'
import styles from "./MugCoffee.module.scss";
import mugPic from "./mug.png";
import Image from "next/image";
import { motion } from 'framer-motion';
import { useState } from "react";

interface MugCoffeeProps {
	scale: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
	mugAnimationDuration: number;
	rotateCoffeeDuration: number;
	titleBeforeHover?: string;
	titleAfterHover?: string;
}

/**
 * @param scale The scale of the MugCoffee as an integer.
 * @param mugAnimationDuration A float or an integer duration for all animations except coffee.
 * @param rotateCoffeeDuration A float or integer duration of the coffee rotation animation.
 * @param titleBeforeHover A title in the center of our mug before hovering.
 * @param titleAfterHover A title in the center of our mug after hovering.
 * @returns A beautiful mug of coffee with an optional title before & after.
 */

export function MugCoffee(props: MugCoffeeProps): JSX.Element {
	const heightMug: number = 32.5 * props.scale;
	const widthMug: number = 36.25 * props.scale;


	const [isHovered, setIsHovered] = useState(false);

	const handleHover = () => {
		setIsHovered(true);
	};

	const handleHoverEnd = () => {
		setIsHovered(false);
	};

	const mugVariants = {
		initial: { opacity: 0, scale: 0.5, rotate: 0 },
		animate: { opacity: 1, scale: 1, rotate: -35 },
		hover: { opacity: 1, scale: 1.1, rotate: 150 },
	};

	const textVariants = {
		initial: { rotate: 35, opacity: 0 },
		animate: { rotate: isHovered ? 200 : 35, opacity: isHovered ? 0.8 : 0.5 },
	};

	return (
		<motion.div
			initial={mugVariants.initial}
			animate={mugVariants.animate}
			whileHover={mugVariants.hover}
			variants={mugVariants}
			transition={{ duration: props.mugAnimationDuration }}
			className={styles.mugcoffee}
			aria-label="mug coffee"
			style={{ width: widthMug, height: heightMug }}
			onMouseEnter={handleHover}
			onMouseLeave={handleHoverEnd}
		>
			<Image
				src={mugPic}
				className={styles.mug}
				alt="mug"
				height={heightMug}
				width={widthMug}
				priority={true}
			/>

			<motion.div
				className={styles.wraptext}
				initial={textVariants.initial}
				animate={textVariants.animate}
				variants={textVariants}
				transition={{
					type: "keyframes",
					duration: props.mugAnimationDuration * 3,
				}}
			>
				{props.titleBeforeHover && props.titleAfterHover ?
					<p className={styles.title}>{isHovered ? "Home" : "Hello World"}</p> : ""}
			</motion.div>

			<motion.div
				animate={{ rotate: [0, 360] }}
				className={styles.coffee}

				transition={{
					type: "keyframes",
					duration: props.rotateCoffeeDuration,
					repeat: Infinity,
				}}

			>
				<video
					autoPlay
					muted
					loop
					width={widthMug * 1.14}
					height={heightMug * 1.12}
					aria-label="coffee"
				>
					<source src={'./coffee.mp4'} type="video/mp4" />
				</video>
			</motion.div>

		</motion.div>


	);
}
