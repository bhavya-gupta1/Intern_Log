import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const learning = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/learning",
  }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    topics: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
    summary: z.string().optional(),
    image: z.string().optional(),
  }),
});

export const collections = {
  learning,
};
