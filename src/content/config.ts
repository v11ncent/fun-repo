// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// 2. Define a `type` and `schema` for each collection
const videoCollection = defineCollection({
  type: "data", // v2.5.0 and later
  schema: z.object({
    image: z.string(),
    alt: z.string().optional(),
    title: z.string(),
    description: z.string(),
    link: z.string(),
    date: z.string().transform((string) => new Date(string)),
  }),
});

const eventCollection = defineCollection({
  type: "data",
  schema: z.object({
    image: z.string(),
    alt: z.string().optional(),
    title: z.string(),
    description: z.string(),
    link: z.string(),
    date: z.string().transform((string) => new Date(string)),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  videos: videoCollection,
  events: eventCollection,
};
