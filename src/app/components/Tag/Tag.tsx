import "./Tag.scss";
import { TagType } from "@/app/interfaces";

export interface TagProps {
	title: string;
	type: TagType;
}

/**
 * @param title The title of the tag.
 * @param type The type of the tag
 * @returns A tag component with the given title and type.
 */
export function Tag(props: TagProps): JSX.Element {
	return <div className={`tag--${props.type.toLowerCase()}`}>{props.title}</div>
}