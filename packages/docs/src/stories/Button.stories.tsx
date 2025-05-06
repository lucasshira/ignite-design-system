import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@ignite-ui/react'
import type { ButtonProps } from '@ignite-ui/react'

export default {
  title: 'Form/Button',
  component: Button,
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
  args: {
    children: 'Enviar',
  },
}

export const Big: StoryObj<ButtonProps> = {
  args: {
    children: 'Enviar',
    size: 'big',
  },
}