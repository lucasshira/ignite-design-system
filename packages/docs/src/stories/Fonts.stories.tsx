import type { Meta } from '@storybook/react'
import { TokensGrid } from '../components/TokensGrid'
import { fonts } from '@ignite-ui/tokens'

export default {
  title: 'Tokens/Fonts',
  component: TokensGrid
} as Meta

export const Default = {
  render: () => (
    <div style={{ padding: '1.5rem' }}>
      <h1>Fonts Families</h1>
      <TokensGrid tokens={fonts} />
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
}