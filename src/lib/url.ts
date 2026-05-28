const base = import.meta.env.BASE_URL.replace(/\/$/, '')

export function url(path: string): string {
  if (/^https?:/.test(path)) return path
  if (!path.startsWith('/')) path = '/' + path
  return base + path
}
