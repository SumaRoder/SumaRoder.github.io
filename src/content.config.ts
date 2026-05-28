import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const posts = defineCollection({
  loader: glob({ base: './src/content/posts', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().default(''),
    date: z.string(),
    category: z.string().default('未分类'),
    excerpt: z.string().default(''),
    cover: z.string().optional(),
    accent: z.string().optional(),
    tags: z.array(z.string()).default([]),
    readingTime: z.string().default(''),
    draft: z.boolean().default(false),
  }),
})

export const collections = { posts }
