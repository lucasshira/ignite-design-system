import { Text, type TextProps } from "@shira-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: 'Typography/Text',
  component: Text,
  tags: ['autodocs'],
  args: {
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, molestias!',
    size: 'md',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl'
      ],
      control: {
        type: 'inline-radio' 
      }
    }
  }
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  }
}