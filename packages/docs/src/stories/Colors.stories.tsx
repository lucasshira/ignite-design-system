import type { Meta } from '@storybook/react'
import { ColorsGrid } from '../components/ColorsGrid'

export default {
  title: "Tokens/Colors",
  component: ColorsGrid,
  tags: ['autodocs'],
} as Meta

export const Default = {
  render: () => (
    <div style={{ padding: "1.5rem" }}>
      <h1>Colors</h1>
      <ColorsGrid />
    </div>
  ),
  parameters: {
    layout: "fullscreen",
  },
}