import type { Meta } from '@storybook/react'
import { TokensGrid } from '../components/TokensGrid'
import { fontWeights } from '@shira-ui/tokens'

export default {
  title: 'Tokens/Font Weights',
  component: TokensGrid,
  tags: ['autodocs'],
} as Meta

export const Default = {
  render: () => (
    <div style={{ padding: '1.5rem' }}>
      <h1>Font Weights</h1>
      <TokensGrid tokens={fontWeights} />
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
}