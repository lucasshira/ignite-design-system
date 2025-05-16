import type { TooltipProps } from "@shira-ui/react";
import { Tooltip } from "@shira-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: 'Form/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  args: {
    children: '21 de Outubro - Disponível'
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}