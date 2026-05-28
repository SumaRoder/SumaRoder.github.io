import { defineConfig } from 'astro/config'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import remarkDirective from 'remark-directive'
import { remarkAlert } from 'remark-github-blockquote-alert'
import rehypeKatex from 'rehype-katex'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

import { remarkAdmonitions } from './src/lib/remark/admonitions'
import { remarkGithubCard } from './src/lib/remark/github-card'
import { remarkSpoiler } from './src/lib/remark/spoiler'

export default defineConfig({
  site: process.env.ASTRO_SITE ?? 'https://example.com',
  base: process.env.ASTRO_BASE ?? '/',
  server: {
    host: '127.0.0.1',
    port: 5173,
  },
  markdown: {
    remarkPlugins: [
      remarkGfm,
      remarkMath,
      remarkDirective,
      remarkAdmonitions,
      remarkGithubCard,
      remarkSpoiler,
      remarkAlert,
    ],
    rehypePlugins: [
      rehypeKatex,
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'append',
          properties: { className: ['heading-anchor'], 'aria-label': 'Permalink' },
          content: { type: 'text', value: '#' },
        },
      ],
    ],
    shikiConfig: {
      theme: 'github-dark-dimmed',
      wrap: true,
    },
  },
})
