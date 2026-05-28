import { getCollection, type CollectionEntry } from 'astro:content'

export type Post = CollectionEntry<'posts'>

export async function getPublishedPosts(): Promise<Post[]> {
  const entries = await getCollection('posts', ({ data }) => !data.draft)
  return entries.sort((a, b) => b.data.date.localeCompare(a.data.date))
}

export function getAllTags(posts: Post[]): string[] {
  return Array.from(new Set(posts.flatMap((p) => p.data.tags))).sort()
}

export function getAllCategories(posts: Post[]): string[] {
  return Array.from(new Set(posts.map((p) => p.data.category))).sort()
}

export function groupByMonth(posts: Post[]): [string, Post[]][] {
  const groups = posts.reduce<Record<string, Post[]>>((acc, post) => {
    const key = post.data.date.slice(0, 7)
    acc[key] = acc[key] ?? []
    acc[key].push(post)
    return acc
  }, {})
  return Object.entries(groups).sort(([a], [b]) => b.localeCompare(a))
}
