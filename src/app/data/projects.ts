export type TagType = "React" | "NextJS" | "ViteJS" | "Typescript" | "Javascript" | "MongoDB" | "Html" | "Scss" | "Css" | "Php" | "MySQL" | "jQuery";
export type TagsType = Array<TagType>;

export interface ProjectData {
	id: number;
	picture: string;
	picture2: string;
	title: string;
	tags: TagsType;
	url: string,
}
export type ProjectsData = Array<ProjectData>;


export const projectsData: ProjectsData = [{
	id: 1,
	picture: './boule_infernal.jpg',
	picture2: './boule_infernal2.jpg',
	title: 'Boule Infernal',
	tags: ['React', 'Typescript', 'Scss', 'Html'],
	url: 'https://github.com/Jerome-Marichez/boule-infernal'
},
{
	id: 2,
	picture: './fisheye.jpg',
	picture2: './fisheye2.jpg',
	title: 'FishEye',
	tags: ['Javascript', 'Scss', 'Html'],
	url: 'https://github.com/Jerome-Marichez/Front-End-Fisheye'
},
{
	id: 3,
	picture: './verhoevenjoaillier.jpg',
	picture2: './verhoevenjoaillier2.jpg',
	title: 'Verhoeven Joaillier',
	tags: ['Javascript', 'Php', 'MySQL', 'Scss', 'Html', 'jQuery'],
	url: 'https://www.verhoeven-joaillier.com/'
},
{
	id: 4,
	picture: './trufflecapital.jpg',
	picture2: './trufflecapital2.jpg',
	title: 'Truffle Capital',
	tags: ['Javascript', 'Php', 'MySQL', 'Css', 'Html'],
	url: 'https://www.truffle.com/'
},
]