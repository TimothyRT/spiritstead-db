// 1. Import utilities from `astro:content`
import { defineCollection } from 'astro:content';

// 2. Import loader(s)
import { glob, file } from 'astro/loaders';

// 3. Import Zod
import { z } from 'astro/zod';

// 4. Define your collection(s)
const buildings = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/pages/buildings" }),
  schema: z.object({
    title: z.string(),
    category: z.enum(['Building']),
    subcategory: z.enum(['Population', 'Production', 'Happiness', 'Others', 'Spirits']),
    desc: z.object({
      creative: z.string(),
      survival: z.string()
    }),
    icon: z.string(),
    icon_width: z.number().optional(),
    unlocked_at: z.string().optional(),
    price: z.union([z.number(), z.array(z.number()), z.object({
      wood: z.union([z.number(), z.array(z.number())]).optional(),
      food: z.union([z.number(), z.array(z.number())]).optional(),
      gold: z.union([z.number(), z.array(z.number())]).optional(),
      crystal: z.union([z.number(), z.array(z.number())]).optional(),
    })]).optional(),
    currency: z.union([z.enum(['Wood', 'Food', 'Gold', 'Crystal']), z.array(z.enum(['Wood', 'Food', 'Gold', 'Crystal']))]).optional()
  })
});

// 5. Export a single `collections` object to register your collection(s)
export const collections = { buildings };
