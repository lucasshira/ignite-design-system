import type { Meta } from '@storybook/react'
import { TokensGrid } from '../components/TokensGrid'
import { space } from '@shira-ui/tokens'

export default {
  title: 'Tokens/Font Sizes',
  component: TokensGrid,
  tags: ['autodocs'],
} as Meta

export const Default = {
  render: () => (
    <div style={{ padding: '1.5rem' }}>
      <h1>Font Sizes</h1>
      <TokensGrid tokens={space} hasRemValue />
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
}