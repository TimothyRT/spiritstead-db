// 1. Import utilities from `astro:content`
import { defineCollection } from 'astro:content';

// 2. Import loader(s)
import { glob, file } from 'astro/loaders';

// 3. Import Zod
import { z } from 'astro/zod';

import buildingsRaw from '../src/raw/Buildings_en.json';

// 4. Define your collection(s)
const buildings = defineCollection({
  loader: async () => {
    const allData = [
        {
            id: "basic-house",
            "title": "TITLE BE LIKE",
            desc: "DESC BE LIKE"
        }
    ]
    return allData;
  },
  schema: z.object({
    title: z.string(),
    desc: z.string()
  })
});

// 5. Export a single `collections` object to register your collection(s)
export const collections = { buildings };
