'use client';
import styles from "./MugCoffee.module.scss";
import mugPic from "./mug.png";
import Image from "next/image";
import { motion } from 'framer-motion';
import { useState } from "react";
import { Title, Coffee } from "./subcomponent";

interface MugCoffeeProps {
	scale: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
	mugAnimationDuration: number;
	rotationCupDegree: number;
	rotateCoffeeDuration: number;
	titleBeforeHover?: string;
	titleAfterHover?: string;
}

/**
 * Represent a Mug with coffee inside
 * @param scale The scale of the MugCoffee as an integer.
 * @param mugAnimationDuration A float or an integer duration for all animations except coffee.
 * @param rotateCoffeeDuration A float or integer duration of the coffee rotation animation.
 * @param rotationCupDegree Set the degree rotation of our mug coffee.
 * @param titleBeforeHover A title in the center of our mug before hovering.
 * @param titleAfterHover A title in the center of our mug after hovering.
 * @returns {JSX.Element} - A JSX Element representing the MugCoffee component.
 */

export function MugCoffee(props: MugCoffeeProps): JSX.Element {

	const heightMug: number = Math.floor(32.5 * props.scale);
	const widthMug: number = Math.floor(36.25 * props.scale);
	const [isHovered, setIsHovered] = useState(false);

	const handleHover = () => {
		setIsHovered(true);
	};

	const handleHoverEnd = () => {
		setIsHovered(false);
	};


	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
			animate={{ opacity: 1, scale: 1, rotate: `${Math.floor(props.rotationCupDegree).toString()}deg` }}
			whileHover={{ opacity: 1, scale: 1.1, rotate: '150deg' }}
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
				alt="Picture of the mug"
				priority={true}
			/>


			{props.titleBeforeHover && props.titleAfterHover &&
				<Title
					isHovered={isHovered}
					durationAnimation={props.mugAnimationDuration * 3}
					fontSize={3.5 * props.scale}
					titleBeforeHover={props.titleBeforeHover}
					titleAfterHover={props.titleAfterHover}
				/>
			}

			<Coffee durationAnimation={props.rotateCoffeeDuration}
				width={Math.floor(widthMug * 1.14)}
				height={Math.floor(heightMug * 1.14)}
			/>
		</motion.div>
	);

}

