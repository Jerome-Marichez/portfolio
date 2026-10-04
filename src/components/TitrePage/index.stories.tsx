import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { TitrePage } from './index'

const meta = {
  title: 'Composants/TitrePage',
  component: TitrePage,
} satisfies Meta<typeof TitrePage>

export default meta

type Story = StoryObj<typeof meta>

/** Le `h1` des six pages intérieures : même taille, même écart dessous. */
export const Defaut: Story = {
  args: {
    children: 'Les projets en détail',
  },
}
