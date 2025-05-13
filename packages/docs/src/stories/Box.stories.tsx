import { Box, Text } from "@ignite-ui/react";
import type { BoxProps } from "@ignite-ui/react";

import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: 'Surfaces/Box',
  component: Box,
  tags: ['autodocs'],
  args: {
    children: <Text>Box</Text>
  },
  argTypes: {
    children: {
      control: false,
    },
  },
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {}