import "./Tag.scss";

export type TagType = "React" | "NextJS" | "ViteJS" | "Typescript" | "Javascript" | "MongoDB" | "Html" | "Scss" | "Css" | "Php" | "MySQL" | "jQuery";

export interface TagProps {
	title: string;
	type: TagType;
}

export function Tag(props: TagProps): JSX.Element {

	return (
		<div className={`tag--${props.type.toLowerCase()}`}>{props.title}</div>
	)

}