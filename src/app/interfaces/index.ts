export type TagType = "React" | "NextJS" | "ViteJS" | "Typescript" | "Javascript" | "MongoDB" | "Html" | "Scss" | "Css" | "Php" | "MySQL" | "jQuery" | "Angular" | "Ionic";
export type TagsType = Array<TagType>;
export type TypeItem = 'codeigniter' | 'css' | 'github' | 'html5' | 'javascript' | 'jest' | 'mongodb' | 'mysql' | 'nextjs' | 'php' | 'postgresql' | 'react' | 'sass' | 'typescript' | 'wordpress';

export interface ProjectData {
	id: number;
	picture: string;
	picture2: string;
	title: string;
	tags: TagsType;
	url: string;
}
export type ProjectsData = Array<ProjectData>;

export interface LinkData {
	text: string;
	href: string;
	marginLeft: number;
	marginRight: string;
}
export type LinksData = Array<LinkData>;

export interface CodeSnipetHeader {
	text: string;
	margin: string;
	fontSize: "small" | "medium" | "big";
}
export type CodeSnipetsHeader = Array<CodeSnipetHeader>;

