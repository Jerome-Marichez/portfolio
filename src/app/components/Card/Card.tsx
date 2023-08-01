'use client';
import styles from "./Card.module.scss";
import { motion } from "framer-motion";
import { Tag } from "../Tag/Tag";
import { TagsType, TagType } from "@/app/data/projects";

interface CardProps {
	image: string;
	image2: string;
	title: string;
	tags: TagsType;
}

/**
 * @param image A url to the image of the card 
 * @param image A url to the image of the card at hover
 * @param title The title of the card
 * @param tags A list of tags to be displayed in the card
 * @returns A Card component that displays the image, title, and tags, height & width of the card defined by his parent
 */
export function Card(props: CardProps): JSX.Element {

	return (
		<motion.div className={styles.card}
			animate={{ backgroundImage: `url('${props.image}')` }}
			whileHover={{ backgroundImage: `url('${props.image2}')` }}
		>
			<div className={styles.hover}>
				<div className={styles.title}>{props.title}</div>
				<div className={styles.taglist}>
					{props.tags.map((tag: TagType, index) => (
						<Tag title={tag} type={tag} key={index} />
					))}
				</div>

			</div>
		</motion.div>
	)

}