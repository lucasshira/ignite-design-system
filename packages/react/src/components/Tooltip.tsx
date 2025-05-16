import type { ComponentProps } from 'react'
import { styled } from '../styles'

export const Tooltip = styled('div', {
  position: 'relative',
  backgroundColor: '$gray800',
  color: '$gray100',
  padding: '$3 $4',
  borderRadius: '$xs',
  maxWidth: '219px',
  minHeight: '$4',
  fontFamily: '$default',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  '&::after': {
    content: '',
    position: 'absolute',
    bottom: '-16px',
    left: '50%',
    transform: 'translateX(-50%)',
    borderWidth: '8px',
    borderStyle: 'solid',
    borderColor: '$gray800 transparent transparent transparent',
  },
})

export interface TooltipProps extends ComponentProps<typeof Tooltip> {}

Tooltip.displayName = 'Tooltip'
