import { ComponentProps } from 'react'
import { styled } from './styles'

export const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$ignite500',
  borderRadius: '$sm',
  height: '$10',
  border: 0,
  fontWeight: '$bold',
  color: '$white',
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: '$ignite300',
  },

  variants: {
    size: {
      small: {
        fontSize: '$sm',
        padding: '$1 $2',
      },
      big: {
        fontSize: '$lg',
        padding: '$3 $4',
      },
    },
  },

  defaultVariants: {
    size: 'small',
  },
})

export type ButtonProps = ComponentProps<typeof Button>
