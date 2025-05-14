import type { CodeSnipetHeader, CodeSnipetsHeader } from "../interfaces";

export const codeSnipetsHeader: CodeSnipetsHeader = [
	{
		text: `
	class CurriculumVitae {
		public main: string;

		constructor() {
			this.main =
				"Bonjour, je suis Jérôme Marichez.
				Ingénieur logiciels web, spécialiste en interfaces dynamiques et performantes.
				Passionné par l'innovation et l'amélioration de l'expérience utilisateur.
				Compréhension des besoins métier et mise en œuvre de solutions techniques.
			";
		}
	}

	class experience extends CurriculumVitae {

		 public displayExperience(): void {
			console.log("Expérience 2023");
		}

	}
	`,
		margin: `100px 0px 0px 30px`,
		fontSize: `big`
	},
	{
		text: `
		const estCeLaMaison = (): true | false => {
	if (pathname.length < 2) return true;
	return false;
	
	`,
		margin: `0px 150px 0px 0px`,
		fontSize: `medium`,

	},
	{
		text: `
	export const metadata: Metadata = {
	title: 'Jérôme Marichez - Ingénieur Logiciels Web - Accueil',
	description: 'Ingénieur Logiciels Web',
	}

	export default function RootLayout({
	children,
	}: {
	children: React.ReactNode
	}) {
	return (
	<html lang="fr">
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