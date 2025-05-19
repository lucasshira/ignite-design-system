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
  title: string
  duration: number
  description: string
}

export function Toast({ title, description, duration, ...props }: ToastProps) {
  return (
    <ToastProvider duration={duration}>
      <ToastContainer as="li" {...props} aria-hidden="false">
        <ToastTitle>{title}</ToastTitle>
        <ToastDescription>{description}</ToastDescription>
        <ToastCloseButton aria-label="Fechar notificação" asChild>
          <X size={16} />
        </ToastCloseButton>
      </ToastContainer>

      <ToastViewport />
    </ToastProvider>
  )
}

Toast.displayName = 'Toast'
