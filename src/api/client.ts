// import { Zodios } from "@zodios/core";
// import { ZodiosHooks } from '@zodios/react'
// import { z } from "zod";

// export const ContinentSchema = z.enum([
//   "Africa",
//   "Asia",
// ]);
// export type Continent = z.infer<typeof ContinentSchema>;

// export const AntelopeSchema = z.object({
//   "name": z.string(),
//   "continent": ContinentSchema,
//   "weight": z.number(),
//   "height": z.number(),
//   "horns": z.string(),
//   "picture": z.string(),
// });
// export type Antelope = z.infer<typeof AntelopeSchema>;

// const antelopeClient = new Zodios(process.env.NEXT_PUBLIC_API_URL!, [{
//   method: "get",
//   path: "/antelopes",
//   alias: 'getAllAntelopes',
//   description: "Get all antelopes",
//   response: z.array(AntelopeSchema),
// }])

// export const antelopeHooks = new ZodiosHooks('antelopeApi', antelopeClient)
