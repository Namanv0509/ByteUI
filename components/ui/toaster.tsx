'use client'

import { useToast } from '@/hooks/use-toast'
import { ToastProvider, ToastViewport } from '@/components/ui/toast'
import NeoToast from '@/components/neo-brutalism/_toast_c'

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map((toast) => {
        const { id, title, description, variant, ...props } = toast
        return (
          <NeoToast
            key={id}
            id={id}
            title={title as string}
            description={description as string}
            variant={variant ?? undefined}
            {...props}
          />
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
