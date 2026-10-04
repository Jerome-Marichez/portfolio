import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { BarreActions } from './index'

const meta = {
  title: 'Composants/BarreActions',
  component: BarreActions,
} satisfies Meta<typeof BarreActions>

export default meta

type Story = StoryObj<typeof meta>

/** Sous le titre de page : trois actions, sans titre. */
export const Tete: Story = {
  args: { variante: 'tete' },
}

/** En fin de page : une section « Me joindre » précède les actions. */
export const Fin: Story = {
  args: { variante: 'fin' },
}
