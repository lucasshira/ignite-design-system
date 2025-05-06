import type { Meta } from "@storybook/react";
import { ColorsGrid } from "../components/ColorsGrid";

export default {
  title: "Colors",
  component: ColorsGrid,
} as Meta

export const Default = {
  render: () => <ColorsGrid />,
  parameters: {
    layout: "fullscreen",
  },
}