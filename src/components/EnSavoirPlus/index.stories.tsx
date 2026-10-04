import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { EnSavoirPlus } from './index'

const meta = {
  title: 'Composants/EnSavoirPlus',
  component: EnSavoirPlus,
  args: {
    libelle: 'En savoir plus',
    children: <p>Le contenu replie reste dans le DOM : indexe, trouvable, imprime.</p>,
  },
} satisfies Meta<typeof EnSavoirPlus>

export default meta

type Story = StoryObj<typeof meta>

/** Etat par defaut : replie. */
export const Ferme: Story = {}

/** Ouvert : le chevron a tourne. Le clic est simule, le composant n'a pas de prop `open`. */
export const Ouvert: Story = {
  play: ({ canvasElement }) => {
    canvasElement.querySelector('summary')?.click()
  },
}
