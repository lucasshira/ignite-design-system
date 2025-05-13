import type { Meta } from '@storybook/react'
import { TokensGrid } from '../components/TokensGrid'
import { space } from '@ignite-ui/tokens'

export default {
  title: 'Tokens/Spaces',
  component: TokensGrid,
  tags: ['autodocs'],
} as Meta

export const Default = {
  render: () => (
    <div style={{ padding: '1.5rem' }}>
      <h1>Spaces</h1>
      <TokensGrid tokens={space} hasRemValue />
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
}