import { Avatar, type AvatarProps } from "@shira-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Data Display/Avatar",
  component: Avatar,
  tags: ['autodocs'],
  args: {
    src: 'https://github.com/lucasshira.png',
    alt: 'Lucas Shira',
  },
  argTypes: {
    src: {
      control: {
        type: 'text'
      },
    },
  },
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}