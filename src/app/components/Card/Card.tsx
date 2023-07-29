import styles from "./Card.module.scss";
import { Tag, TagType } from "../Tag/Tag";

interface CardProps {
	image: string;
	title: string;
	tag: Array<TagType>
}

/**
 * @param image A url to the image of the card 
 * @param title The title of the card
 * @param tag  A list of tags to be displayed in the card
 * @returns A Card component that displays the image, title, and tags
 */
export function Card(props: CardProps): JSX.Element {

	return (
		<div className={styles.card} style={{ backgroundImage: `url(${props.image})` }}>
			<div className={styles.hover}>
				<div className={styles.title}>{props.title}</div>
				<div className={styles.taglist}>
					<Tag title="React" type={props.tag[0]} />
				</div>

			</div>
		</div>
	)

}