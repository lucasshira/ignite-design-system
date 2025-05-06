import type { Meta } from '@storybook/react'
import { TokensGrid } from '../components/TokensGrid'
import { radii } from '@ignite-ui/tokens'

export default {
  title: 'Tokens/Radii',
  component: TokensGrid
} as Meta

export const Default = {
  render: () => (
    <div style={{ padding: '1.5rem' }}>
      <h1>Radii</h1>
      <TokensGrid tokens={radii} />
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
}