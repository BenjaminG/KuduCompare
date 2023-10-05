import { z } from 'zod'

import { publicProcedure, router } from './trpc'

export const ContinentSchema = z.enum(['Africa', 'Asia'])
export type Continent = z.infer<typeof ContinentSchema>

export const AntelopeSchema = z.object({
  name: z.string(),
  continent: ContinentSchema,
  weight: z.number(),
  height: z.number(),
  horns: z.string(),
  picture: z.string(),
})
export type Antelope = z.infer<typeof AntelopeSchema>

export const appRouter = router({
  getKudus: publicProcedure.output(z.array(AntelopeSchema)).query(async () => {
    const res = await fetch(process.env.JSON_DATA!)
    const data = await res.json()
    return data
  }),
})

export type AppRouter = typeof appRouter
