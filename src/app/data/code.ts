import type { CodeSnipetHeader, CodeSnipetsHeader } from "../interfaces";

export const codeSnipetsHeader: CodeSnipetsHeader = [
	{
		text: `
	class CurriculumVitae {
		public main: string;

		constructor() {
			this.main =
				"Hi, I'm Jérôme Marichez.
				A web developer specialized in React.
				Creating dynamic and high-performance interfaces. 
				Passionate about innovation and enhancing the user experience.
			";
		}
	}

	class experience extends CurriculumVitae {

	  	 public displayExperience(): void {
			console.log("Experience 2023");
		}

	}
	`,
		margin: `100px 0px 0px 30px`,
		fontSize: `big`
	},
	{
		text: `
		const isItHome = (): true | false => {
	if (pathname.length < 2) return true;
	return false;
	
	`,
		margin: `0px 150px 0px 0px`,
		fontSize: `medium`,

	},
	{
		text: `
	export const metadata: Metadata = {
	title: 'Jérôme Marichez - Web Developer React - Home',
	description: 'Web Developer',
	}

	export default function RootLayout({
	children,
	}: {
	children: React.ReactNode
	}) {
	return (
	<html lang="en">
	<body className={FiraCode.className}>
		<Header />
		<LayoutNavProvider>
		{children}
		</LayoutNavProvider>
	</body>
	</html>
	)
	}
	`,
		margin: `43px 30px 0px 0px`,
		fontSize: `small`,

	}
]


export const codeSnipetsHeader2 = codeSnipetsHeader.map((value, index): CodeSnipetHeader => {
	const valueCopy = { ...value };
	switch (index) {
		case 0:
			valueCopy.margin = '100px 30px 0px 100px';
			break;
		case 1:
			valueCopy.margin = '60px 80px 0px 30px';
			break;
		case 2:
			valueCopy.margin = '0px 30px 0px 30px';
			break;
	}
	return valueCopy;
}).reverse();