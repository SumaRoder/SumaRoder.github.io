import { getCollection, type CollectionEntry } from 'astro:content'

export type Post = CollectionEntry<'posts'>

export async function getPublishedPosts(): Promise<Post[]> {
  const entries = await getCollection('posts', ({ data }) => !data.draft)
  return entries.sort((a, b) => b.data.date.localeCompare(a.data.date))
}

export function computeReadingTime(body: string | undefined): string {
  const text = (body ?? '').replace(/```[\s\S]*?```/g, ' ').replace(/`[^`]*`/g, ' ')
  const cjk = (text.match(/[㐀-鿿豈-﫿]/g) || []).length
  const latinWords = (text.replace(/[㐀-鿿豈-﫿]/g, ' ').match(/\b[\w'-]+\b/g) || []).length
  const minutes = Math.max(1, Math.round((latinWords / 220) + (cjk / 400)))
  return `${minutes} MIN`
}

export function postReadingTime(post: Post): string {
  return post.data.readingTime?.trim() || computeReadingTime(post.body)
}

export function findRelatedPosts(target: Post, all: Post[], limit = 3): Post[] {
  const tags = new Set(target.data.tags)
  return all
    .filter((p) => p.id !== target.id)
    .map((p) => ({
      post: p,
      score: p.data.tags.reduce((s, t) => (tags.has(t) ? s + 1 : s), 0)
        + (p.data.category === target.data.category ? 0.5 : 0),
    }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score || b.post.data.date.localeCompare(a.post.data.date))
    .slice(0, limit)
    .map((x) => x.post)
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
