import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { MenuMobile } from './index'

/**
 * `MenuMobile` n'est visible que sous 52rem : la story force une vue mobile.
 * Le logo est le bouton, le panneau s'ouvre sous le parent positionné. La
 * route active vient de `parameters.nextjs.navigation.pathname`.
 */
const meta = {
  title: 'Composants/MenuMobile',
  component: MenuMobile,
  globals: { viewport: { value: 'mobile1', isRotated: false } },
  parameters: {
    nextjs: {
      navigation: {
        pathname: '/parcours/',
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ position: 'relative', minHeight: '28rem' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof MenuMobile>

export default meta

type Story = StoryObj<typeof meta>

/** Menu fermé : le logo-bouton et son hamburger (trois traits) sont visibles. */
export const Ferme: Story = {}

/** Menu ouvert par un clic sur le logo : le hamburger devient une croix. */
export const Ouvert: Story = {
  play: async ({ canvasElement }) => {
    canvasElement.querySelector('button')?.click()
  },
}
