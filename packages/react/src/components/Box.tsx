import { styled } from '../styles'
import type { ComponentProps } from 'react'

export const Box = styled('div', {
  padding: '$6',
  borderRadius: '$md',
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
  color: '$white',
})

export type BoxProps = ComponentProps<typeof Box>

Box.displayName = 'Box'
