import { createTRPCReact } from '@trpc/react-query'
import type { inferRouterInputs, inferRouterOutputs } from '@trpc/server'
import { type AppRouter } from '~/app/server'

export type AppRouterOutput = inferRouterOutputs<AppRouter>
export type AppRouterInput = inferRouterInputs<AppRouter>

export const trpc = createTRPCReact<AppRouter>()
