import rss from '@astrojs/rss'
import type { APIContext } from 'astro'
import { SITE } from '@/consts'
import { getPublishedPosts } from '@/lib/posts'

export async function GET(context: APIContext) {
  const posts = await getPublishedPosts()
  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site ?? 'https://example.com',
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.excerpt,
      pubDate: new Date(post.data.date),
      categories: post.data.tags,
      link: `/posts/${post.id}/`,
    })),
    customData: `<language>${SITE.lang}</language>`,
  })
}
