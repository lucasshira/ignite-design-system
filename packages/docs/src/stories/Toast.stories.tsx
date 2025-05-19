import { type ToastProps, Toast } from "@shira-ui/react"
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: 'Form/Toast',
  component: Toast,
  tags: ['autodocs'],
  args: {
    description: 'Quarta-feira, 23 de Outubro às 16h',
  },
  decorators: [
    (Story) => {
      return (
        <div>
          {Story()}
        </div>
      )
    }
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}