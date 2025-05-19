import * as Toast from '@radix-ui/react-toast'
import { styled } from '../../styles'

export const ToastContainer = styled(Toast.Root, {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '$80',
  height: '$12',
  backgroundColor: '$gray800',
  padding: '$3 $5',
  border: '1px solid $gray600',
  borderRadius: '$sm',
  fontFamily: '$default',
})

export const ToastTitle = styled(Toast.Title, {
  color: '$gray100',
  fontSize: '$lg',
  fontWeight: '$bold',
  marginBottom: '$1',
})

export const ToastDescription = styled(Toast.Description, {
  color: '$gray400',
  fontSize: '$sm',
})

export const ToastCloseButton = styled(Toast.Close, {
  all: 'unset',
  cursor: 'pointer',
  position: 'absolute',
  top: 8,
  right: 8,
  color: '$gray400',
  lineHeight: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '&:hover': {
    color: '$white',
  },
})
