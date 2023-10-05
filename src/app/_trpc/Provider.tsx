'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { httpBatchLink } from '@trpc/client'
import { useState } from 'react'

import { trpc } from './client'

const queryClient = new QueryClient({})
const trpcClient = trpc.createClient({
  links: [httpBatchLink({ url: process.env.NEXT_PUBLIC_API_URL! })],
})

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  )
}
