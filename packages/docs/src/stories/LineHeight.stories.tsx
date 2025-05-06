import type { Meta } from '@storybook/react'
import { TokensGrid } from '../components/TokensGrid'
import { lineHeights } from '@ignite-ui/tokens'

export default {
  title: 'Tokens/Line Heights',
  component: TokensGrid,
} as Meta

export const Default = {
  render: () => (
    <div style={{ padding: '1.5rem' }}>
      <h1>Line Heights</h1>
      <TokensGrid tokens={lineHeights} />
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
}