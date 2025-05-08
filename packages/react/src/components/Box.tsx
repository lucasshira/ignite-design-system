import { styled } from '../styles'
import type { ComponentProps } from 'react'

export const Box = styled('div', {
  padding: '$4',
  borderRadius: '$md',
  backgroundColor: '$gray900',
  border: '1px solid $gray600',
  color: '$white',
})

export type BoxProps = ComponentProps<typeof Box>
