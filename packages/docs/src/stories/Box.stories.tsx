import { Box, Text } from "@ignite-ui/react";
import type { BoxProps } from "@ignite-ui/react";

import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>Box</Text>
  }
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {}