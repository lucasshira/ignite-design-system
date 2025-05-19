import type { ComponentProps } from 'react'
import {
  ToastCloseButton,
  ToastContainer,
  ToastDescription,
  ToastTitle,
} from './styles'
import { ToastProvider, ToastViewport } from '@radix-ui/react-toast'

import { X } from 'phosphor-react'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  description: string
}

export function Toast({ description, ...props }: ToastProps) {
  return (
    <ToastProvider duration={100000}>
      <ToastContainer {...props}>
        <ToastTitle>Agendamento realizado</ToastTitle>
        <ToastDescription>{description}</ToastDescription>
        <ToastCloseButton>
          <X size={16} />
        </ToastCloseButton>
      </ToastContainer>

      <ToastViewport />
    </ToastProvider>
  )
}

Toast.displayName = 'Toast'
